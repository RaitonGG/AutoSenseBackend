import jwt from "jsonwebtoken";
import config from "config";

export function verifyJwt(token: string, keyName: "accessTokenPublicKey") {
  const publicKey = config.get<string>(keyName);
  console.log("publicKey", publicKey);
  console.log("token", token);
  try {
    const decoded = jwt.verify(token, publicKey);  
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.log("ello",e)
    return {
      valid: false,
      expired: e.message === "Invalid API Key",
      decoded: null,
    };
  }
}
