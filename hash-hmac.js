const { createHmac } = require("crypto");

const key = "abcd efgh ijkl mnop qrst uvwx yzyz";

function encryptionHmac(password) {
  const hmac = createHmac("sha256", key).update(password).digest("hex");
}

const encryptedPassword = encryptionHmac("Password");

const match = encryptedPassword === encryptionHmac("Password");

console.log("status: ", match);
