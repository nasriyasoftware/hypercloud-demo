import { Page } from "@nasriya/hypercloud";
import path from 'path';

const _dirname = import.meta.dirname

const home = new Page('home');
home.template.path.set(path.join(_dirname, 'home.ejs'));

home.title.set('HyperCloud Framework');
home.description.set('Testing SSR Components');

home.stylesheets.link.internal(path.join(_dirname, 'home.style.css'));

home.locals.multilingual.set({
    default: { welcome: 'Welcome to HyperCloud!' },
    ar: { welcome: 'مرحباً بكم في HyperCloud!' }
})

export default home;