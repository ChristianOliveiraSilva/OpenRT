
class Component extends HTMLElement {
    constructor(html, css) {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
        ${css}
        </style>
        ${html}`;
    }
    
    connectedCallback() {

    }
    
    disconnectedCallback() {
        
    }

}

export default Component;