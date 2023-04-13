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
    if (!token) throw new Error('Token not found');
    try {
        const isValid = jwt.verify(token, secret);
        return isValid;
    } catch (error) {
        throw new Error('Expired or invalid token');
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