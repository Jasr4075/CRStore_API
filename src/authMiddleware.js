// import jwt from 'jsonwebtoken';

// export const authMiddleware = (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     if (!token) {
//       return res.status(401).json({ message: 'Acceso no autorizado' });
//     }
//     const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
//     if (decodedToken.role !== 'admin') {
//       return res.status(403).json({ message: 'Acceso prohibido' });
//     }
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Token inválido' });
//   }
// };

// export default authMiddleware;
