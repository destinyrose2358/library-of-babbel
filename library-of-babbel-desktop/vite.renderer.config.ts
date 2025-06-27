import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
    resolve: {
        alias: {
            core: path.resolve(__dirname, "../library-of-babbel-core")
        }
    }
});
