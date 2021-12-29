const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

function signup(password) {
  const salt = randomBytes(16).toString("hex");
  const hashPassword = scryptSync(password, salt, 64).toString("hex");

  console.log("Salt", salt);

  const dbPassword = `${salt}:${hashPassword}`;
  return dbPassword;
}

function login(password, dbPassword) {
  const [salt, key] = dbPassword.split(":");

  const hashedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(key, "hex");
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (match) {
    return "Login success";
  } else {
    return "Login failed";
  }
}

const signHash = signup("password");
const loginStatus = login("password", signHash);

console.log("Sign Hash", signHash);
console.log("Login Status", loginStatus);
