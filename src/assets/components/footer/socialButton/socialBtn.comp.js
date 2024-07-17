import { Component } from "@nasriya/hypercloud";

const btn = new Component('socialBtn');

btn.onRender.set((social) => {
    return `
    <a href="${social.href}" target="_blank">
        <div class="social-btn">
            ${social.svg}
            <p>${social.label}</p>
        </div>
    </a>`
})

export default btn;