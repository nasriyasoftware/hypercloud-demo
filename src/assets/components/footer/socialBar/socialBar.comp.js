import { Component } from "@nasriya/hypercloud";

const comp = new Component('socialBar');

/**
 * @typedef {object} SocialBtn
 * @prop {string} href
 * @prop {string} label
 * @prop {HTMLElement} svg
 */

comp.onRender.set(async (locals, include) => {
    /**@type {SocialBtn[]} */
    const items = locals;

    const promises = items.map(item => {
        return new Promise((resolve, reject) => {
            include('socialBtn', item).then(rendered => resolve(rendered)).catch(err => reject(err))
        })       
    })
    
    const elements = await Promise.all(promises);
    return `<div class="social-nav">\n${elements.join(`\n<div class="social-diver">•</div>`)}</div>`;    
})

export default comp;