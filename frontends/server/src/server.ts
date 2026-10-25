import express, { type Express } from 'express';
import http, { type Server } from 'http';

export class Service {
	private app: Express = express();
	private instance: Server;

	constructor(path: string) {
		const options = {};

		this.app.use(path, express.static(`public${path}`));

		this.app.get('/favicon.ico', (request, response) => {
			response.sendFile('favicon.ico', {
				maxAge: '24h',
				root: 'public',
				dotfiles: 'deny',
				immutable: true
			});
		});

		this.app.get('/styles/main.css', (request, response) => {
			response.sendFile('styles/main.css', {
				maxAge: '24h',
				root: 'public',
				dotfiles: 'deny',
				immutable: true
			});
		});

		this.app.get('/fonts/NotoSansDisplay-VariableFont_wdth,wght.ttf', (request, response) => {
			response.sendFile('fonts/NotoSansDisplay-VariableFont_wdth,wght.ttf', {
				maxAge: '24h',
				root: 'public',
				dotfiles: 'deny',
				immutable: true
			});
		});

		this.instance = http.createServer(options, this.app);
	}

	listen(port: number): void {
		this.instance.listen(port);
	}
}
