import Component from './component.mjs';

class OpenRT extends Component {

    static plugins = [];

    constructor() {
        super(`
            <div id="richtext-container">
                <div id="richtext-header"></div>
                <div id="richtext-content" contenteditable="true"></div>
            </div>
        `,`

        `);

        this.constructor.plugins.forEach(plugin => {
            plugin.sayHello();
        });
        
    }

    static setPlugin(plugin) {
        this.plugins.push(plugin)
    }
    
    connectedCallback() {
        
    }
    
    disconnectedCallback() {
        
    }

}

export default OpenRT;