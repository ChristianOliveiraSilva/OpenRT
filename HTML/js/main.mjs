
(function() {
    'use strict';
    
    // Feature detect
    if (!(window.customElements && document.body.attachShadow)) {
        document.querySelector('open-rt').innerHTML = "<b>Your browser doesn't support Shadow DOM and Custom Elements v1.</b>";
        return;
    }
    
    // See https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
    customElements.define('open-rt', class extends HTMLElement {
        constructor() {
            super();

            // Create shadow DOM for the component.
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = `
                <div id="richtext-container">
                    <div id="richtext-header">

                    </div>
                    <div id="richtext-content" contenteditable="true">

                    </div>
                </div>
            `;
            
        }
        
        connectedCallback() {

        }
        
        disconnectedCallback() {
            
        }
    
    });

})();