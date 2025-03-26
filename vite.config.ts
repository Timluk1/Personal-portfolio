import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/Personal-portfolio/",
    css: {
        postcss: {
            plugins: [autoprefixer()],
        },
    },
    resolve: {},
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                    if (id.includes("src/components/")) {
                        return "components";
                    }
                },
            },
        },
    },
});
