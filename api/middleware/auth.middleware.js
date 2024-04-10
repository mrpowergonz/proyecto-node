const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;//voy a recopilar un toke
  const secret = process.env.JWT_SECRET;//Voy a coger mi clave secreta
  
  //Si no estas autorizado
  if (!authorization) {
    return res.json({
      status: 401,
      message: "Unauthorized",
      data: null,
    });
  }
  //para coger la frase y guardarla sin espacios
  const splits = authorization.split(" ");
  if (splits.length != 2 || splits[0] != "Bearer") {//Si me estas enviando dos cosas te lo tiro porque me estas colando algo
    return res.json({
      status: 400,
      message: "Bad Request",
      data: null,
    });
  }
  const jwtString = splits[1];
  try {
    var token = jwt.verify(jwtString, secret);//Compruebo el token con mi clave secreta(Si son compatibles)
  } catch (error) {
    return next(error);
  }
  //Si estas autorizado
  const authority = {
    id: token.id,
    name: token.name,
  };
  req.authority = authority;
  next();
};
module.exports = {
  isAuth,
};