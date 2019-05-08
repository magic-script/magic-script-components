// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import MagicScriptRenderer from './magic-script-renderer.js';

export const ReactMagicScript = {
  render(element, container, callback) {

    if (!container.__rootContainer) {
      container.__rootContainer = MagicScriptRenderer.createContainer(container);
    }
    
    // Schedule changes on the roots
    // returns expirationTime
    MagicScriptRenderer.updateContainer(element, container.__rootContainer, null, callback);

    return container;
  }
};
