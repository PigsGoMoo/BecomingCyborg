import Phaser from 'phaser';

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    this.spriteKey = spriteKey;
    this.scene = scene;
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.setAllowGravity(false);
    this.speed = 80;
    this.health = 40;
    this.direction = '';
    this.takeDamage = this.takeDamage.bind(this);
  }

  takeDamage(damage) {
    /*
      Enemy damage logic to update enemy health based on damage taken.
      If enemy dies, set enemy sprite to invisible + inactive + non-mobile + turn off collision.
      param damage: int -> The amount of damage the enemy will take.
      returns null.
    */

    // Subtract damage from health
    this.health -= damage;
    const hitAnimation = this.playDamageAnimation();

    // Death logic.
    if (this.health <= 0) {
      this.setVelocityX(0);
      this.setVelocityY(0);
      this.setActive(false);
      this.setVisible(false);
      this.body.enable = false;
    }
    this.scene.time.delayedCall(1000, () => {
      hitAnimation.stop();
      this.clearTint();
    });
  }

  playDamageAnimation() {
    return this.scene.tweens.add({
      targets: this,
      duration: 100,
      repeat: -1,
      tint: 0xffffff,
    });
  }

  enemyMovement(direction, angle) {
    /*
      Enemy animation logic. This will determine which sprite/animation to display while the enemy walks/runs/attacks.
      param direction: string -> Enemy current moving direction. Current strings are: left, right, up, down
      param angle: float -> Angle at which the enemy is facing. Only relevant for the punching up/down animations. Adjusts the enemy's angle to display properly.
    */
    switch (direction) {
      case 'left':
        this.angle = 0;
        this.direction = 'left';
        return this.play(`${this.spriteKey}RunLeft`, true);
      case 'right':
        this.angle = 0;
        this.direction = 'right';
        return this.play(`${this.spriteKey}RunRight`, true);
      case 'up':
        this.angle = 0;
        this.direction = 'up';
        return this.play(`${this.spriteKey}RunUp`, true);
      case 'down':
        this.angle = 0;
        this.direction = 'down';
        return this.play(`${this.spriteKey}RunDown`, true);
      case 'idle':
        this.angle = 0;
        return this.play(`${this.spriteKey}IdleRight`, true);
      case 'punchLeft':
        console.log('HERE', this.spriteKey);

        this.angle = 0;
        return this.play(`${this.spriteKey}AttackLeft`, true);
      case 'punchRight':
        this.angle = 0;
        return this.play(`${this.spriteKey}AttackRight`, true);
      case 'punchUp':
        this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
        return this.play(`${this.spriteKey}AttackUp`, true);
      case 'punchDown':
        this.angle = (angle + Math.PI) * Phaser.Math.RAD_TO_DEG + 90;
        return this.play(`${this.spriteKey}AttackDown`, true);
    }
  }

  updateEnemyMovement(player) {
    /*
      Function to determine enemy aggro and enemy movement.
      If player is within a range of the constant aggroRange, enemy will move toward the player. If player is within attack range, enemy will stop moving and play attack animation.
      param player: object -> The player object, passed in through FgScene's update -> enemy update -> here. No need to change or touch.
      returns null.
    */
    if (!this.body) return;

    const aggroRange = 50;
    const attackRange = 16;

    const angle = Phaser.Math.Angle.Between(this.x, this.y, player.x, player.y);

    if (
      Phaser.Math.Distance.Between(player.x, player.y, this.x, this.y) <=
      attackRange
    ) {
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;

      if (Math.abs(player.y - this.y) <= 10 && player.x < this.x) {
        this.enemyMovement('punchLeft', angle);
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        return;
      } else if (player.x > this.x && Math.abs(player.y - this.y) <= 10) {
        this.enemyMovement('punchRight', angle);
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        return;
      } else if (player.y > this.y && Math.abs(player.x - this.x) <= 10) {
        this.enemyMovement('punchDown', angle);
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        return;
      } else if (player.y < this.y && Math.abs(player.x - this.x) <= 10) {
        this.enemyMovement('punchUp', angle);
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        return;
      }
    }

    if (Math.round(player.x) === Math.round(this.x)) {
      this.body.velocity.x = 0;
    } else if (Math.round(player.y) === Math.round(this.y)) {
      this.body.velocity.y = 0;
    }
    if (
      Phaser.Math.Distance.Between(player.x, player.y, this.x, this.y) <=
      aggroRange
    ) {
      // if player to left of enemy AND enemy moving to right (or not moving)
      if (
        Math.round(player.x) < Math.round(this.x) &&
        Math.round(this.body.velocity.x) >= 0
      ) {
        // move enemy to left
        this.body.velocity.x = -35;
        this.enemyMovement('left');
      }
      // if player to right of enemy AND enemy moving to left (or not moving)
      else if (
        Math.round(player.x) > Math.round(this.x) &&
        Math.round(this.body.velocity.x) <= 0
      ) {
        // move enemy to right
        this.body.velocity.x = 35;
        this.enemyMovement('right');
      } else if (
        Math.round(player.y) < Math.round(this.y) &&
        Math.round(this.body.velocity.y) >= 0
      ) {
        this.body.velocity.y = -35;
        this.enemyMovement('up');
      } else if (
        Math.round(player.y) > Math.round(this.y) &&
        Math.round(this.body.velocity.y) <= 0
      ) {
        this.body.velocity.y = 35;
        this.enemyMovement('down');
      }
    }
  }

  update(player) {
    this.updateEnemyMovement(player);
  }
}
