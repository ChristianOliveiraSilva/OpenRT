import Component from './component.mjs';

class OpenRT extends Component {

    constructor() {
        let css = ""

        OpenRT.plugins.forEach(plugin => {
            if (plugin.css()) {
                css += "\n"+plugin.css()
            }
        });

        const html = `
            <div id="richtext-container">
                <div id="richtext-header"></div>
                <div id="richtext-content" contenteditable="true"></div>
            </div>
        `;

        super(html, css);
    }

}

export default OpenRT;