import { getCookieValue, onExitGameOnHost, setCookieValue } from "@/libs/Helpers";


export default class fruitHunterBase extends Phaser.Scene {

    initVariables() {
        this.score = 0;
        this.cursorKey = null;
        this.gameOver = false;
    }

    glowEffect(gameObject) {
        if (!gameObject.postFX) {
            gameObject.postFX = this.add.postFX("glow");
        }
        gameObject.postFX.addGlow(
            0xffffff,
            3,
            1
        );
    }

    addPhysics(gameObject) {
        this.physics.add.existing(gameObject);
        /** @type {Phaser.Physics.Arcade.Body} */
        const body = gameObject.body;
        if (body) { 
            if (gameObject.texture
                .key !== "fruit_hunter_basket_1") {
                    body.setAllowGravity(true);
                    body.setImmovable(false);
                    body.setCollideWorldBounds(false);
            } else {
                body.setAllowGravity(false);
                body.setImmovable(true);
                body.setCollideWorldBounds(true);
            }
            // body.setSize(gameObject.displayWidth, gameObject.displayHeight, true);
        }
    }

    addCursorKey() {
        this.cursorKey = this.input.keyboard.createCursorKeys();
    }

    registerTouchIterativeButtons() {
        this.fruit_hunter_retry_game.setInteractive();
        this.fruit_hunter_back_to_home.setInteractive();
    }

    defineBasicInteractions() {
        this.fruit_hunter_retry_game.on("pointerdown", 
            this.restartGame.bind(this));
        this.fruit_hunter_back_to_home.on("pointerdown", () => {
            this.backToHome();
        });
    }

    async create() {
        this.editorCreate();
        this.initVariables();
        this.glowEffect(this.fruit_hunter_basket_1);
        this.addPhysics(this.fruit_hunter_basket_1);
        // this.addPhysics(this.brown_don_png);
        // this.addPhysics(this.candy_3_png);
        this.addCursorKey();
        this.candyFrame = this.textures.get("candy_spritesheet_1").getFrameNames();
        this.candyGroup = this.physics.add.group([]);
        this.candyAppearTimer = this.time.addEvent({
            delay: 1000,
            callback: this.candyAppear,
            callbackScope: this,
            loop: true
        });

        this.physics.add.overlap(this.fruit_hunter_basket_1, this.candyGroup, this.catchCandy, null, this);

        this.timedEvent = this.time.delayedCall(30 *1000, this.handleGameExit, [], this);

        // Register interactions for end-of-game UI buttons
        this.registerTouchIterativeButtons();
        this.defineBasicInteractions();
    }

    handleGameExit() {
        console.log("game exit");
        this.timedEvent.destroy();
        this.gameOver = true;
        this.container_fruit_hunter_score.setVisible(true);
        const highestScore = getCookieValue("fruitHunterScore");
        if (this.score > highestScore || !highestScore) {
            setCookieValue("fruitHunterScore", this.score);
            this.fruite_hunter_highest_score.setText(this.score);
        } else {
            this.fruite_hunter_highest_score.setText(highestScore);
        }
        
        this.fruite_hunter_your_score.setText(this.score);
        // onExitGameOnHost();
    }

    restartGame() {
        console.log("restartGame");
        this.container_fruit_hunter_score.setVisible(false);
        this.scene.restart();
    }

    backToHome() {
        this.container_fruit_hunter_score.setVisible(false);
        onExitGameOnHost();
    }

    catchCandy(basket, candy) {
        if (this.gameOver) return;
        candy.disableBody(true, true);
        this.score += 1;
        this.fruit_hunter_score.setText(this.score);

        if (this.score <= 9) {
            this.fruit_hunter_score_text.setX(1950);
        } else if (this.score <= 99) {
            this.fruit_hunter_score_text.setX(1930);
        } else {
            this.fruit_hunter_score_text.setX(1870);
        }
    }

    candyAppear() {
        if (this.gameOver) return;
        const candyFrame = Phaser.Utils.Array.GetRandom(this.candyFrame);
        const candy = this.candyGroup.getFirstDead(true, Phaser.Math.RND.between(50, this.scale.width - 50), -20, "candy_spritesheet_1");
        candy.setScale(0.8).setActive(true).setVisible(true).setVelocityY(0).setVelocityX(0).setFrame(candyFrame);
        this.addPhysics(candy);
    }

    update() {
        if (this.gameOver) {
            this.fruit_hunter_basket_1.body.setVelocityX(0);
            return;
        }
        this.fruit_hunter_game_timer.setText(Math.round(this.timedEvent.getRemaining() / 1000));
        if (this.timedEvent.getRemaining() <= 0) {
            this.handleGameExit();
        }
        if (!this.cursorKey) return;
        const leftDown = this.cursorKey.left && this.cursorKey.left.isDown;
        const rightDown = this.cursorKey.right && this.cursorKey.right.isDown;
        /** @type {Phaser.Physics.Arcade.Body} */
        const body = this.fruit_hunter_basket_1 && this.fruit_hunter_basket_1.body;
        if (!body) return;
        if (leftDown) {
            body.setVelocityX(-350);
        }
        if (rightDown) {
            body.setVelocityX(350);
        }
        if (!leftDown && !rightDown) {
            body.setVelocityX(0);
        }

        this.candyGroup.getChildren().forEach(candy => {
            if (!candy.active || !candy.visible) {
                return
            }
            if (candy.y > this.scale.height + 10) {
                candy.setActive(false).setVisible(false);
            }
        });
    }
}