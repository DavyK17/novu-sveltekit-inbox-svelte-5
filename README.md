# Novu Inbox with SvelteKit

I'm running a SvelteKit (Svelte 5) project and trying to mount the Novu Inbox component to my header.

## Versions

-   @sveltejs/kit: 2.5.27
-   svelte: 5.0.0
-   vite: 5.4.4
-   @novu/api: 0.6.2
-   @novu/framework: 2.6.6
-   @novu/js: 3.0.3

## Reproduction

<!--
Link to a minimal test case based on one of:
- A GitHub repository that can reproduce the bug
Without a reproduction, it is so hard to address problem :(
-->

https://github.com/DavyK17/novu-sveltekit-inbox-svelte-5

### Steps to reproduce

1. Install dependencies with `npm install`
2. Use `npm run dev` to start the development server
3. Visit the app at http://localhost:5173

### What is Expected?

The app to display a header with the text "This is my header" and a Novu Inbox component below the text.

### What is actually happening?

The app crashes with the following error:

```node
file:///home/davyk17/web-development/novu-sveltekit-inbox-svelte-5/node_modules/@novu/js/dist/esm/ui/index.mjs:4
import { delegateEvents, createComponent, mergeProps, render, Portal, spread, template, insert, memo, effect, className, use, setAttribute, Dynamic } from 'solid-js/web';
                                                                                                                         ^^^
SyntaxError: The requested module 'solid-js/web' does not provide an export named 'use'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:180:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:263:5)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at async nodeImport (file:///home/davyk17/web-development/novu-sveltekit-inbox-svelte-5/node_modules/vite/dist/node/chunks/dep-Dyl6b77n.js:53065:15)
    at async ssrImport (file:///home/davyk17/web-development/novu-sveltekit-inbox-svelte-5/node_modules/vite/dist/node/chunks/dep-Dyl6b77n.js:52923:16)
    at async eval (/home/davyk17/web-development/novu-sveltekit-inbox-svelte-5/src/routes/+layout.ts:3:44)
    at async instantiateModule (file:///home/davyk17/web-development/novu-sveltekit-inbox-svelte-5/node_modules/vite/dist/node/chunks/dep-Dyl6b77n.js:52981:5)
```
