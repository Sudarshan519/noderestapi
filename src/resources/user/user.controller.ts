import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import validationMiddleware from '../../middleware/validation.middleware'
import validate from './user.validation'
import UserService from './user.service'
import HttpException from '../../utils/exceptions/http.exception';
import authenticated from '../../middleware/authenticated.middleware';
import bcrypt from 'bcrypt'
import { omit } from 'lodash'
class UserController implements Controller {
    public path = '/users';
    public router = Router();
    private UserService = new UserService();

    constructor() {
        this.initialiseRouter();

    }

    private initialiseRouter(): void {
        this.router.post(`${this.path}/register`, validationMiddleware(validate.register), this.register);
        this.router.post(`${this.path}/login`, validationMiddleware(validate.login), this.login);
        this.router.get(`${this.path}`, authenticated, this.getUser);
    }

    private register = async (req: Request<any>, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const { name, email, password } = req.body;
            const { user, token } = await this.UserService.register(name, email, password, 'user');
            res.status(201).json({ token: token, user: omit(user.toJSON(), 'password', 'role') });

        } catch (error: any) {
            next(new HttpException(400, error.message));
        }
    }

    private login = async (req: Request<any>, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const { email, password } = req.body;
            const { accessUser, accessToken } = await this.UserService.login(email, password);
            // console.log(accessToken);
            res.status(201).json({ token: accessToken, user: accessUser });
        } catch (error: any) {
            next(new HttpException(400, error.message));

        }
    }

    private getUser = async (req: any, res: Response, next: NextFunction): Promise<Response | void> => {

        // console.log(req);
        if (!req.user) {
            return next(new HttpException(404, 'No logged in user'));
        }
        res.status(200).json({ user: req.user });

    };
}

export default UserController;