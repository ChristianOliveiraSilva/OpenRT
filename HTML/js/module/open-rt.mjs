import Component from './component.mjs';

class OpenRT extends Component {

    static plugins = new Set;

    constructor() {
        let css = ""

        OpenRT.plugins.forEach(plugin => {
            css += "\n"+plugin.css()
        });

        super(`
            <div id="richtext-container">
                <div id="richtext-header"></div>
                <div id="richtext-content" contenteditable="true"></div>
            </div>
        `,`
        
        /*CSS Plugin*/
        ${css}
        `);
    }

    static setPlugin(plugin) {
        this.plugins.add(plugin)
    }
    
    connectedCallback() {
        this.constructor.plugins.forEach(plugin => {
            plugin.run();
        });
    }
    
    disconnectedCallback() {
        this.constructor.plugins.forEach(plugin => {
            plugin.exit();
        });        
    }

}

export default OpenRT;