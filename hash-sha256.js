const { createHash } = require("crypto");

// SHA256 hash

const input = "Jawad";

function sha256Hash(input) {
  return createHash("sha256").update(input).digest("hex");
}

const sha256Encryption = sha256Hash(input);
console.log("Sha 256 Encryption: ", sha256Encryption);

const password = "Jawad";
const sha256Decryption = sha256Hash(password);

const matchPass = sha256Encryption === sha256Decryption;
console.log("Valid", matchPass);
