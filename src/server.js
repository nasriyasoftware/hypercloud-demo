import hypercloud from '@nasriya/hypercloud';
import serverInitializer from './backend/initializer.js';
import path from 'path';

const server = hypercloud.Server({ secure: true });
serverInitializer(server);

const router = server.Router();

router.favicon(path.join(import.meta.dirname, './assets/imgs'));

router.get('/', (request, response, next) => {
    response.render('home');
})

server.listen(process.env.PORT || 5000);