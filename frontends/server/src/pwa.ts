import { Service } from './server.ts';

const service = new Service('/pwa');

service.listen(9444);
