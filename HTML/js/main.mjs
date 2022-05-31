
'use strict';
import OpenRT from './module/open-rt.mjs';

(function() {
    if (!(window.customElements && document.body.attachShadow)) {
        document.querySelector('open-rt').innerHTML = "<b>Your browser doesn't support Shadow DOM and Custom Elements v1.</b>";
        return;
    }

    customElements.define('open-rt', OpenRT)
})();