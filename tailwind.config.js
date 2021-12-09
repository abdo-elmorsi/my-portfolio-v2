const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                main: ["Open Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#485460",
                secondary: "rgba(0, 0, 0, 0.2)",
                third: "rgba(250, 250, 250, 0.1)",
            },
        },
    },
    variants: {
        extend: {
            padding: ["hover"],
        },
    },
    plugins: [],
};
