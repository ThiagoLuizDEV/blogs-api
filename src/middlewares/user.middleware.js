const validationName = (req, res, next) => {
    const { displayName } = req.body;  
    if (displayName.length < 8) {
 return res.status(400)
 .json({ message: '"displayName" length must be at least 8 characters long' }); 
}
next();
};

const validationEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/; 
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
};

const validationPassword = (req, res, next) => {
    const { password } = req.body; 
    if (password.length < 6) {
 return res.status(400)
 .json({ message: '"password" length must be at least 6 characters long' }); 
}
next();
};

module.exports = {
    validationName,
    validationEmail,
    validationPassword,
};