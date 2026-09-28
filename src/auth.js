const TOKEN_KEY = "token";
const DEMO_HEADER = btoa(JSON.stringify({ alg: "none", typ: "JWT" }));
const DEMO_SIGNATURE = "simulated-signature";

function encodePayload(payload) {
  return btoa(JSON.stringify(payload))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");
}

function decodePayload(encodedPayload) {
  const base64 = encodedPayload.replaceAll("-", "+").replaceAll("_", "/");
  return JSON.parse(atob(base64));
}

export function createToken(user) {
  return `${DEMO_HEADER}.${encodePayload(user)}.${DEMO_SIGNATURE}`;
}

export function readTokenUser(token) {
  if (!token) {
    return null;
  }

  const [header, encodedPayload, signature, ...extraParts] = token.split(".");
  if (
    header !== DEMO_HEADER ||
    !encodedPayload ||
    signature !== DEMO_SIGNATURE ||
    extraParts.length > 0
  ) {
    return null;
  }

  try {
    const user = decodePayload(encodedPayload);
    if (
      typeof user.userId !== "number" ||
      typeof user.role !== "string" ||
      user.role.length === 0
    ) {
      return null;
    }
    return user;
  } catch {
    return null;
  }
}

export function saveUserToken(user) {
  localStorage.setItem(TOKEN_KEY, createToken(user));
}

export function getStoredUser() {
  const token = localStorage.getItem(TOKEN_KEY);
  const user = readTokenUser(token);

  if (token && !user) {
    localStorage.removeItem(TOKEN_KEY);
  }

  return user;
}

export function clearUserToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function authenticate(username, password) {
  if (username !== "admin" || password !== "admin123") {
    return null;
  }

  return { userId: 101, role: "admin" };
}
