import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            cp: {
                bt: "clip-path: polygon(0 0, 100% 0%, 100% 78%, 0% 100%)",
            },
        },
    },
    plugins: [],
} satisfies Config;
