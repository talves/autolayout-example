/* SpinnerAnimation
    ES6 class
*/
import Transitionable from 'famous/transitions/Transitionable';

export class SpinnerAnimation {
  constructor(node, speed) {
    // store a reference to the node
    this.node = node;
    // 1=normal, 0.5 twice as fast
    this.speed = speed || 1;
    // get an id from the node so that we can update
    this.id = node.addComponent(this);
    // Transitionable Rotation values
    this.transitionY = new Transitionable();
    var milisecs = 10000 * this.speed;
    var startAngle = Math.PI * 2 / milisecs;
    this.rotateY = () => {
      this.transitionY.from(startAngle).set(Math.PI * 2, { duration: milisecs }, this.rotateY);
    }

    return this.id;
  }
  onUpdate(time) {
    // set a rotation based on time
    this.node.setRotation(0, this.transitionY.get(), 0);
    // request the update on the next frame
    this.node.requestUpdateOnNextTick(this.id);
  }
  start() {
    // Let the magic begin...
    this.node.requestUpdate(this.id);
    this.rotateY();
  }
}
