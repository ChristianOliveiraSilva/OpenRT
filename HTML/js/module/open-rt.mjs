import Component from './component.mjs';

class OpenRT extends Component {
    constructor() {
        super(`
            <div id="richtext-container">
                <div id="richtext-header"></div>
                <div id="richtext-content" contenteditable="true"></div>
            </div>
        `,`

        `);
        
    }
    
    connectedCallback() {
        
    }
    
    disconnectedCallback() {
        
    }

}

export default OpenRT;