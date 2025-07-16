/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
    safelist: [
        // {
        //     pattern: /^[a-z0-9:_/-]+$/i
        // }
        {
            pattern: /bg-gradient-to-br/
        },
        {
            pattern: /from-(gray|yellow|black|white|red|blue|green)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /via-(gray|yellow|black|white|red|blue|green)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /to-(gray|yellow|black|white|red|blue|green)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /bg-(gray|yellow|black|white|red|blue|green)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /text-(gray|yellow|black|white|red|blue|green)-(100|200|300|400|500|600|700|800|900)/
        },
        // {
        //     pattern: /hover:text-(gray|yellow|black|white|red|blue|green)-(100|200|300|400|500|600|700|800|900)/
        // }
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

