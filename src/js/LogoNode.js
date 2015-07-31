/* LogoNode
   ES6 class
*/

import Node from 'famous/core/Node';
import DOMElement from 'famous/dom-renderables/DOMElement';

export class LogoNode extends Node {

  constructor(node) {
    super();
    //console.log('logonode', this);
    // create local node onto the passed scene/node
    this.rootNode = node.addChild(this);

    // Create an [image] DOM element providing the logo 'node' with the 'src' path
    new DOMElement(this.rootNode, { tagName: 'img' })
        .setAttribute('src', './images/famous_logo.png');

    // Chainable API
    this.rootNode
        // Set size mode to 'absolute' to use absolute pixel values: (width 250px, height 250px)
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(200, 200)
        // Center the 'node' to the parent (the screen, in this instance)
        .setAlign(0.5, 0.5, 0)
        // Set the translational origin to the center of the 'node'
        .setMountPoint(0.5, 0.5, 0)
        // Set the rotational origin to the center of the 'node'
        .setOrigin(0.5, 0.5, 0);

  }
}
