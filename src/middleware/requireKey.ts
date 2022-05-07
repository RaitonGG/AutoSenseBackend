import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { verifyJwt } from "../utils/jwt.utils";

const requireKey = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");
  // const validKey = verifyJwt(accessToken, "accessTokenPublicKey").valid; 
  const validKey = accessToken === 'autoSenseAuthenticationKey';
  if (!validKey) {
    return res.status(403).json({
      message: "Unauthorized",
      solution: "Make sure you have a valid token"
    })
  }
  next();
}

export default requireKey;