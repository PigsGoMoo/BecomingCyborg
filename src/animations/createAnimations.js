// All animations are made here and imported where needed.

export default function () {
  //player animations
  this.anims.create({
    key: 'runLeft',
    frames: this.anims.generateFrameNumbers('player', {
      start: 1,
      end: 3,
    }),
    frameRate: 7,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'runRight',
    frames: this.anims.generateFrameNumbers('player', {
      start: 10,
      end: 12,
    }),
    frameRate: 7,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'runUp',
    frames: this.anims.generateFrameNumbers('player', {
      start: 28,
      end: 29,
    }),
    frameRate: 5,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'runDown',
    frames: this.anims.generateFrameNumbers('player', {
      start: 20,
      end: 21,
    }),
    frameRate: 5,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'idleRight',
    frames: this.anims.generateFrameNumbers('player', {
      start: 9,
      end: 9,
    }),
    frameRate: 0,
    repeat: 0,
  });
  this.anims.create({
    key: 'idleLeft',
    frames: this.anims.generateFrameNumbers('player', {
      start: 0,
      end: 0,
    }),
    frameRate: 0,
    repeat: 0,
  });
  this.anims.create({
    key: 'punchLeft',
    frames: this.anims.generateFrameNumbers('player', {
      start: 22,
      end: 25,
    }),
    frameRate: 20,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'punchRight',
    frames: this.anims.generateFrameNumbers('player', {
      start: 31,
      end: 34,
    }),
    frameRate: 20,
    repeat: -1,
    yoyo: true,
  });

  //Melee robot animations
  this.anims.create({
    key: 'meleeRobotRunLeft',
    frames: this.anims.generateFrameNumbers('meleeRobot', {
      start: 9,
      end: 11,
    }),
    frameRate: 7,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'meleeRobotRunRight',
    frames: this.anims.generateFrameNumbers('meleeRobot', {
      start: 3,
      end: 5,
    }),
    frameRate: 7,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'meleeRobotRunUp',
    frames: this.anims.generateFrameNumbers('meleeRobot', {
      start: 6,
      end: 8,
    }),
    frameRate: 5,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'meleeRobotRunDown',
    frames: this.anims.generateFrameNumbers('meleeRobot', {
      start: 0,
      end: 2,
    }),
    frameRate: 5,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'meleeRobotIdleRight',
    frames: [{ key: 'meleeRobot', frame: 4 }],
  });
  this.anims.create({
    key: 'meleeRobotAttackLeft',
    frames: this.anims.generateFrameNumbers('meleeRobotAttack', {
      start: 9,
      end: 11,
    }),
    frameRate: 2,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'meleeRobotAttackRight',
    frames: this.anims.generateFrameNumbers('meleeRobotAttack', {
      start: 3,
      end: 5,
    }),
    frameRate: 2,
    repeat: -1,
    yoyo: true,
  });
  this.anims.create({
    key: 'meleeRobotAttackUp',
    frames: this.anims.generateFrameNumbers('meleeRobotAttack', {
      start: 6,
      end: 8,
    }),
    frameRate: 2,
    repeat: -1,
    yoyo: true,
  });

  this.anims.create({
    key: 'meleeRobotAttackDown',
    frames: this.anims.generateFrameNumbers('meleeRobotAttack', {
      start: 0,
      end: 2,
    }),
    frameRate: 2,
    repeat: -1,
    yoyo: true,
  });

  this.anims.create({
    key: 'upgradeStationAnim',
    frames: this.anims.generateFrameNumbers('upgradeStation', {
      start: 0,
      end: 15,
    }),
    frameRate: 6,
    yoyo: true,
    repeat: 0,
  });
}
