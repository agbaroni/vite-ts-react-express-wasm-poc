import { Service } from './server.ts';

const service = new Service('/web');

service.listen(9443);
