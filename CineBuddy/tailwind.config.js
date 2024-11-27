/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export const content = [
  "./index.html",
  "./src/**/*.{ts,tsx,js,jsx}",
  flowbite.content(),
];
export const theme = {
  extend: {},
};
export const plugins = [flowbite.plugin()];
