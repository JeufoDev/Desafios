const autenticar = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({mensagem: 'Token não informado'});
    };

    const token = authHeader.split(" ")[1];

    if (token !== "abc123") {
        return res.status(401).json({mensagem: "Token inválido"})
    };

    next();
};

module.exports = { autenticar } 