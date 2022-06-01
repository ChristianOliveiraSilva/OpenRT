'use strict';
import OpenRT from './module/open-rt.mjs';

import BoldPlugin from './plugin/BoldPlugin.mjs';
import ColorsPlugin from './plugin/ColorsPlugin.mjs';
import TablePlugin from './plugin/TablePlugin.mjs';
import FamilyPlugin from './plugin/FamilyPlugin.mjs';
import UndoAndRedoPlugin from './plugin/UndoAndRedoPlugin.mjs';
import HeadersPlugin from './plugin/HeadersPlugin.mjs';
import UploadPlugin from './plugin/UploadPlugin.mjs';
import ItalicPlugin from './plugin/ItalicPlugin.mjs';

(function() {
    if (!(window.customElements && document.body.attachShadow)) {
        document.querySelector('open-rt').innerHTML = "<b>Your browser doesn't support Shadow DOM and Custom Elements v1.</b>";
        return;
    }

    /* SET PLUGINS HERE */
    OpenRT.setPlugin(new BoldPlugin);
    OpenRT.setPlugin(new ColorsPlugin);
    OpenRT.setPlugin(new TablePlugin);
    OpenRT.setPlugin(new FamilyPlugin);
    OpenRT.setPlugin(new UndoAndRedoPlugin);
    OpenRT.setPlugin(new HeadersPlugin);
    OpenRT.setPlugin(new UploadPlugin);
    OpenRT.setPlugin(new ItalicPlugin);

    customElements.define('open-rt', OpenRT)
})();