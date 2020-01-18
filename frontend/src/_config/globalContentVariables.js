export const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{7,}$/g;
// eslint-disable-next-line
export const textBetweenTags = /[^<\}]+(?=>)/g;

// user roles on the site
export const siteRoles = ["USER", "ADMIN", "WRITER"];

// type of fields needed to generate proper form element
export const inputFieldTypes = {
    date: "date",
    email: "email",
    input: "input",
    password: "password",
    select: "select",
    textarea: "text-area"
};
