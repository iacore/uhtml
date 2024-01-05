import { effect } from '@preact/signals-core';
export * from '@preact/signals-core';

import { reactive } from '../reactive.js';
export { Hole, html, svg, htmlFor, svgFor, attr } from '../reactive.js';
export const render = reactive(effect);
