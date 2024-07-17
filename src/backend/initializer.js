import { HyperCloudServer } from "@nasriya/hypercloud";
import path from 'path';

/**@param {HyperCloudServer} server */
function serverInitializer(server) {
    server.rendering.siteName.multilingual.set({ default: 'Nasriya Software', ar: 'ناصرية سوفتوير' });
    server.rendering.assets.stylesheets.link.internal(path.resolve(import.meta.dirname, '../assets/global/global.style.css'))
    server.rendering.assets.stylesheets.link.internal(path.resolve(import.meta.dirname, '../assets/global/styles.css'))
    server.rendering.assets.metaTags.add.name('author', 'Nasriya Software, LLC.')

    server.rendering.pages.register(path.join(import.meta.dirname, '../assets/pages'));
    server.rendering.components.register(path.join(import.meta.dirname, '../assets/components'));
    server.rendering.cache.enableFor.everything();

    server.languages.supported = ['en', 'ar'];
    server.languages.default = 'en';
}

export default serverInitializer;