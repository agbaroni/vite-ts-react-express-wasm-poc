import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.tsx';

import '../../styles/main.css';

import createEngine from '../../codes/main.js';
import wasmUrl from '../../codes/main.wasm?url';

async function loadMain() {
	const Module = await createEngine({
		locateFile: (path: string) => (path.endsWith('.wasm') ? wasmUrl : path),
	});

	return {
		fact: Module.cwrap('fact', 'number', ['number']) as (n: number) => number,
	};
}

const foo = await loadMain();

console.log(foo.fact(5));

const node = document.getElementById('root');
const root = createRoot(node!);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
