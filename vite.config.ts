import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        ViteImageOptimizer({
            png: {
                quality: 80,
                compressionLevel: 8,
            },
            jpeg: {
                quality: 85,
                progressive: true,
            },
            webp: {
                quality: 85,
            },
            svg: {
                multipass: true,
                js2svg: {
                    pretty: true,
                    indent: 2,
                },
            },
        }),
    ],
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
