// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import { remarkAlert } from 'remark-github-blockquote-alert';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
    markdown: {
        gfm: false,
        remarkPlugins: [
            [remarkGfm, { singleTilde: false }],
            remarkMath,
            remarkAlert,
        ],
        rehypePlugins: [
            [rehypeMathjax, {
                tex: {
                    packages: ['base', 'ams', 'physics', 'cancel', 'noerrors', 'noundefined']
                },
                chtml: {
                    fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
                }
            }]
        ]
    }
});
