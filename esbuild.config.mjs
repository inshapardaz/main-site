import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import htmlPlugin from '@chialab/esbuild-plugin-html';
import envFilePlugin from 'esbuild-envfile-plugin';

const args = process.argv;

const isServe = args.includes("--start");

const config = {
    logLevel: "info",
    entryPoints: ["src/index.html"],
    outdir: "dist",
    bundle: true,
    treeShaking: true,
    plugins: [
        sassPlugin(),
        htmlPlugin(),
        envFilePlugin
    ],
    loader: {
        ".png": "file",
        ".jpg": "file",
        ".jpeg": "file",
        ".svg": "file",
        ".gif": "file",
        ".js": "jsx",
    },
    assetNames: 'assets/[name]-[hash]',
    chunkNames: '[ext]/[name]-[hash]',
};

if (args.includes("--build")) {
    esbuild
        .build({
            ...config,
            minify: true,
            sourcemap: false,
        })
        .catch((e) => {
            console.error(e);
            process.exit(1);
        });
}

if (isServe) {
    esbuild
        .context({
            ...config,
            minify: false,
            sourcemap: true,
            banner: {
                js: `new EventSource('/esbuild').addEventListener('change', () => location.reload());`,
            }
        })
        .then(async (ctx) => {
            await ctx.watch(); // this is needed only if live reloading will be used
            await ctx.serve({
                port: 4300,
                servedir: "dist",
                fallback: `dist/index.html`,
                onRequest: ({ remoteAddress, method, path, status, timeInMS }) => {
                    console.info(
                        remoteAddress,
                        status,
                        `"${method} ${path}" [${timeInMS}ms]`
                    );
                },
            });
        })
        .catch((e) => {
            console.error(e);
            process.exit(1);
        });
}
