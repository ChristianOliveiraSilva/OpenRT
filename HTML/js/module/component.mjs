
class Component extends HTMLElement {
    static plugins = new Set;
    
    constructor(html, css) {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
        ${css}
        </style>

        ${html}`;

        this.connectedCallback();
    }
    
    static getPlugins() {
        return Component.plugins;
    }

    static setPlugin(plugin) {
        Component.plugins.add(plugin)
    }
    
    connectedCallback() {
        Component.getPlugins().forEach(plugin => {
            plugin.run();
        });
    }
    
    disconnectedCallback() {
        Component.getPlugins().forEach(plugin => {
            plugin.exit();
        });        
    }


}

export default Component;