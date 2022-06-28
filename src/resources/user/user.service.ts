import UserModel from "./user.model";

import token from '../../utils/token';
import { omit } from 'lodash';
class UserService {
    private user = UserModel;
    /**
     * Register a new user
     */
    public async register(name: string, email: string, password: string, role: string): Promise<any | Error> {
        try {
            const user = await this.user.create({ name, email, password, role });
            const accessToken = token.createToken(user);
            return { user, accessToken, };
        } catch (error: any) {
            throw new Error('Unable to create user' + error.message);
        }

    }
    /**
     * Attempt to login a user
     */
    public async login(
        email: string,
        password: string
    ): Promise<any | Error> {
        try {
            const user = await this.user.findOne({ email });
            // console.log(await user.isValidPassword(password))
            if (!user) {
                throw new Error("Unable to find user with that Email Address");
            }
            const accessUser = omit(user.toJSON(), "password", "role");
            // console.log(accessUser)
            const accessToken = token.createToken(user);
            if (await user.isValidPassword(password)) {
                return { accessUser, accessToken, };
            } else {
                throw new Error('Wrong Credentials given');
            }
        } catch (error: any) {
            throw new Error('Unable to login user' + error.message);
        }
    }

}

export default UserService;