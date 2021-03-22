import Phaser from 'phaser';

// The Main scene is the one that calls and loads the background and foreground
// This is so we can load both bg + fg together on top of each other.
export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create(data) {
    this.scene.launch('FgScene');
    // this.scene.start('PreGameScene');
    this.scene.launch('HUDScene');
  }
}
