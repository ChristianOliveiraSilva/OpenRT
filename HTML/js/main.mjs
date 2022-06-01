'use strict';
import OpenRT from './module/open-rt.mjs';
import PluginExample from './plugin/PluginExample.mjs';

(function() {
    if (!(window.customElements && document.body.attachShadow)) {
        document.querySelector('open-rt').innerHTML = "<b>Your browser doesn't support Shadow DOM and Custom Elements v1.</b>";
        return;
    }

    OpenRT.setPlugin(new PluginExample);
    customElements.define('open-rt', OpenRT)
})();