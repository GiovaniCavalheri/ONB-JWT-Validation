const validaPasswordMiddleware = (req, res, next) => {
    const { password } = req.body; 

    if(!password) {
        return res.status(400).json({ message: 'Password is Required!' });
    }

    if(password.length < 12) {
        return res.status(400).json({ message: 'The password length is incorrect!' })
    }

    next();
};

module.exports = validaPasswordMiddleware;