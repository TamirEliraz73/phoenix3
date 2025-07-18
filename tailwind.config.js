/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
    safelist: [
        // {
        //     pattern: /^[a-z0-9:_/-]+$/i
        // }
        // 'bg-yellow-900/30', 'text-yellow-200', 'border-b-yellow-400',
        // 'bg-green-900/30', 'text-green-200', 'text-green-300', 'border-b-green-300',
        // 'bg-blue-900/30', 'text-blue-200', 'text-blue-300', 'border-b-blue-300', "border-b",
        // {
        //     pattern: /(bg|text|border)-(yellow|green|blue)-\d{3}/,
        //     variants: ['hover', 'focus', 'active'],
        // },
        {
            pattern: /!border-([bt])/
        },
        {
            pattern: /!border-([bt])-2/
        },
        {
            pattern: /!border-([bt])-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/
        },
        {
            pattern: /border-([bt])/
        },
        {
            pattern: /border-([bt])-2/
        },
        {
            pattern: /border-([bt])-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/
        },
        {
            pattern: /bg-gradient-to-br/
        },
        {
            pattern: /from-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /via-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /to-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /bg-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/,
        },
        {
            pattern: /text-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/
        },
        // {
        //     pattern: /hover:text-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/
        // }
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

