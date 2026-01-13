// ==> middleware para verificar se o usuário autenticado é administrador;

const isAdminMiddleware = (req, res, next) => {
    if(!req.authenticatedUser) {
        return res.status(401).json({ message: 'The user is not authenticated.' });
    }

    const userRole = req.authenticatedUser.role;

    if(userRole !== 'admin') {
        return res.status(403).json({ message: "Access denied, not admin." });
    }

    // ==> se for.. next
    next();
}

module.exports = isAdminMiddleware; 