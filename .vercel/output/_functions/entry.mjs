import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DsC1PVrV.mjs';
import { manifest } from './manifest_Ba-oRiyy.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/api/admin/login.astro.mjs');
const _page5 = () => import('./pages/api/contact.astro.mjs');
const _page6 = () => import('./pages/api/messages/_id_.astro.mjs');
const _page7 = () => import('./pages/api/messages.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/projects.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin/index.astro", _page3],
    ["src/pages/api/admin/login.ts", _page4],
    ["src/pages/api/contact.ts", _page5],
    ["src/pages/api/messages/[id].ts", _page6],
    ["src/pages/api/messages.ts", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/projects.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
