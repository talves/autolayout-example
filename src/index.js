// Famous dependencies
import DOMElement from 'famous/dom-renderables/DOMElement';
import FamousEngine from 'famous/core/FamousEngine';
import Camera from 'famous/components/Camera';
import { SpinnerAnimation as Spinner } from './js/animation/SpinnerAnimation';
import { LogoNode as Logo } from './js/LogoNode';
import AutoLayoutController from 'famous-autolayout/src/AutoLayoutController';

// Boilerplate code to make your life easier
FamousEngine.init();
var clock = FamousEngine.getClock();

// Create a scene for the FamousEngine to render
var scene = FamousEngine.createScene();
var camera = new Camera(scene);
camera.setDepth(1000);

var nextNode = scene.addChild();
nextNode
.setAlign(0,0,0)
.setOrigin(0.5,0.5,0.5)
.setPosition(0,0,0);

// Get a node of the Famous Logo
var logo = new Logo(nextNode);
console.log('logonode', logo);

// Setup a custom component for animation
var animation = new Spinner(nextNode);
animation.start();

// Using the very useful ES6 template-strings feature (the backtick),
// VFL can be easily copy/pasted between code and the editor.
// If you can't use the backtick symbol, use an array with strings instead:
// var vfl = ['H:|-[row:[red(green,blue)]-[green]-[blue]]-|','V:|[row]|'];
var vfl = `
H:|-[row:[red(green)]-[green]]-|
H:|-[row2:[blue(yellow)]-[yellow]]-|
V:|-[row(50%)]-[row2(50%)]-|
`;

// Create autolayout controller with some colored divs
var alc = new AutoLayoutController({
    visualFormat: vfl
});
var redNode = alc.addChild(undefined, 'red');
redNode.setOrigin(0.5,0.5,0)
new DOMElement(redNode).setProperty('border-radius', '8px').setProperty('background', 'red');
var yellowNode = alc.addChild(undefined, 'yellow');
yellowNode.setOrigin(0.5,0.5,0)
new DOMElement(yellowNode).setProperty('border-radius', '8px').setProperty('background', 'yellow');
var greenNode = alc.addChild(undefined, 'green');
greenNode.setOrigin(0.5,0.5,0)
new DOMElement(greenNode).setProperty('border-radius', '8px').setProperty('background', 'green');
var blueNode = alc.addChild(undefined, 'blue');
blueNode.setOrigin(0.5,0.5,0)
new DOMElement(blueNode).setProperty('border-radius', '8px').setProperty('background', 'blue');
var autoLayout = scene.addChild(alc); // add controller to the scene
autoLayout
  .setSizeMode('relative','relative','absolute')
  .setAbsoluteSize(1,1,1)
  .setProportionalSize(0.8, 0.75, 0)
  .setOrigin(0.5,0.5,0.5)
  .setMountPoint(0.5,0.5,0)
  .setAlign(0.5,0.5,0);

redNode.autoAnimation = new Spinner(redNode, -0.8);
clock.setTimeout(function() {redNode.autoAnimation.start();},1100);
yellowNode.autoAnimation = new Spinner(yellowNode, -0.8);
clock.setTimeout(function() {yellowNode.autoAnimation.start();},1300);
blueNode.autoAnimation = new Spinner(blueNode);
clock.setTimeout(function() {blueNode.autoAnimation.start();},1600);
greenNode.autoAnimation = new Spinner(greenNode);
clock.setTimeout(function() {greenNode.autoAnimation.start();},1800);
