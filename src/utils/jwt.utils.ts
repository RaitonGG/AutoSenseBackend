import jwt from "jsonwebtoken";
import config from "config";

export function verifyJwt(token: string, keyName: "accessTokenPublicKey") {
  const publicKey = "MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJmXGrQqYyKSZnCxbdjKxfVaW2K7stTgD09dEN37RMd4/O0R5co6u18Y+D/Xt9cujjPu3HINTFHnIYEehADVTCPRzypYXp8Npnfa8ulJT0oNJvhTRtQNiScXyhnc78CFUIRkgvsjZKUx4sYgRUN65fJaKA5tnZzT/jvcb95w1AVvAgMBAAECgYA8SS9WIH0hCM3k1gAD5DOnhnvwWTRskjXwNNt2BjaNBVRhyXCk3EDHpwlqJcYnVELE57Dno4idbVedUtkFarOjjVifl+YboNleR2aDkV9Cr07+Z5pQXniT7NymJfYvg06thkGigtOLwU8bySpQUqNF0PWt5Q1Wl2kKTnYMVE6HIQJBAO53vmfUN6PwywiBwKrQlv9A/Hjp06nM1FPM/FI6WrIGyfwBweGBzV/B/93X4BTyZHtrXSFPWhrKJqud1exuocsCQQCk4dyWt/zmN3SG638U2nRVGMK+XybBgw6FkLr0CPppI+cul/xZCI34UH4L6Q3sOZw89zh0wedwKTLFvE+CfyZtAkB8Lj8pMooHBU21kFwUl6sKIX1YOevPcKrhOM3sxBaWvpJQeVnNZRrd0ti7Xb+DKPbKjo5g2kHB0aNxmy/bf4EhAkBDYotkjY0uCTv2aAhn3V/t51CvvPN54rXsoFnHomO01JeG01aujHB5K2xYMcce4+yWffL0xMpxbGTzqyJTkuOBAkAlisjlu4Wv9dzhO+yFgOZozO04p4PiI62WoQEtPXLIXT1qhVZzn2bt9rF97mBC9/l3cLvSi8BZM2M9ALhGLpv0";
  
  //config.get<string>(keyName);
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
