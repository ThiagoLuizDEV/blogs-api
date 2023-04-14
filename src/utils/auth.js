const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const configJWT = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    const token = jwt.sign(payload, secret, configJWT);
    return token;
};

const validateToken = (token) => {
    const error = new Error('Token not found');
    error.status = 401;
    if (!token) throw error;
    try {
        const isValid = jwt.verify(token, secret);
        return isValid;
    } catch (erro) {
        const errorExpired = new Error('Expired or invalid token');
            errorExpired.status = 401;
        throw errorExpired;
    }
};

// const decodeToken = (token) => {
//     if (!token) throw new Error('token is missing');
//     const decoded = jwt.decode(token, secret);
//     return decoded;
// };

module.exports = {
    generateToken,
    validateToken,
    // decodeToken,
};