export const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{7,}$/g;
// eslint-disable-next-line
export const textBetweenTags = /[^<\}]+(?=>)/g;

// user roles on the site
export const siteRoles = ["USER", "ADMIN", "WRITER"];
