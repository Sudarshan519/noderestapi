export default {
    port:2222,
    dbUrl:"mongodb://127.0.0.1:27017/rest-api-tutiorial",
    saltWorkFactor:10,
    accessTokenTtl:'15m',
    refreshTokenTtl:"1y",
    privateKey:`-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQC+Npvm5UVfux/6VQHm+Iw6jAv58yzaZSZlSowoDyPAnIUNK+Wp
nKCLTHXwbED+PPcKu+PwgNjZxncjHqveLo0nQBzGfxe7hgW7r0mwWOepsvvDhIRi
UhKqgAt808Q3VQoT0cORcfnu6CpekucbcAYyBOPPlIaTJVA0Ty00bUr1yQIDAQAB
AoGAIA0Nmgt59BaQ3dqjFms9HcRpZDWgkjBHFvxHv5xFdvgoxz5lVX4p4y8AFIH5
NZ3KNsnQL79WSuPRQV6ysR6A9BgqIMBXqgQetd4ZkeuTsNCjg0FF/5lMASLvmERG
Q2CkkvOFjWC5ajjl9o/fP8w075RCVeqPAc9aXmCw/geqJoECQQD72dsbPyGfdcjL
VxsJFaqJBuYWxMK2FZCQwNWDaSdYdoG6fSa6kN+3dQ3cne0L13S2eT4RfY7FT3kB
n40bDw6RAkEAwVjOK280/nI6yFPa2s5ZGlL8nRScrnlY7AGIUou04hSWp9O20R/I
LRxZXOB5rR6iBDZbtWlmVZEXxmSgsvf/uQJAS3R668/fT/om/Z0MUY13OXSirQGo
YItXc7cCgUuY6S0gMvJaDx1mmX1teMKsCZc0tZLfoLfgdYcY9v6JdSjusQJAB+pV
zmtoFP6iL29XZ1vJRA2fr+KXI4FuRYMujIqRpivHmylMs7UEYexmMCo0cQTvBxMe
oAenm9sryQB3n7wNaQJAFruRWZai+NNEXxH3FyxnKfaxga/9M31SBbGEmePXZ8Qs
JYSvZ9j7QP6v+AVzD4iZ1N3G6khzi3LAUggBEKrPmQ==
-----END RSA PRIVATE KEY-----`,
    publicKey:`-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+Npvm5UVfux/6VQHm+Iw6jAv58yzaZSZlSowoDyPAnIUNK+WpnKCLTHXwbED+PPcKu+PwgNjZxncjHqveLo0nQBzGfxe7hgW7r0mwWOepsvvDhIRiUhKqgAt808Q3VQoT0cORcfnu6CpekucbcAYyBOPPlIaTJVA0Ty00bUr1yQIDAQAB-----END PUBLIC KEY-----`
}