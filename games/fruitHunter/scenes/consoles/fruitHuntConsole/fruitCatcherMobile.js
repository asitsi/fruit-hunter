
// You can write more code here

/* START OF COMPILED CODE */

import fruitHunterBase from "../../../core/fruitHunterBase";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class fruitCatcherMobile extends fruitHunterBase {

	constructor() {
		super("fruitCatcherMobile");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(1258, 347, "fruit_humter_background_1");
		background.scaleX = 2;
		background.scaleY = 2;

		// fruit_hunter_basket_1
		const fruit_hunter_basket_1 = this.add.image(1250, 931, "fruit_hunter_basket_1");
		fruit_hunter_basket_1.scaleX = 2;
		fruit_hunter_basket_1.scaleY = 2;

		// fruit_hunter_score
		const fruit_hunter_score = this.add.text(2343, 85, "", {});
		fruit_hunter_score.setOrigin(1, 0.5);
		fruit_hunter_score.text = "0";
		fruit_hunter_score.setStyle({ "color": "#043d8c", "fontFamily": "Bungee-Regular", "fontSize": "80px", "strokeThickness": 3 });

		// fruit_hunter_score_text
		const fruit_hunter_score_text = this.add.text(1952, 43, "", {});
		fruit_hunter_score_text.text = "Score:";
		fruit_hunter_score_text.setStyle({ "color": "#043d8c", "fontFamily": "Bungee-Regular", "fontSize": "80px", "strokeThickness": 3 });

		// fruit_hunter_game_timer
		const fruit_hunter_game_timer = this.add.text(55, 96, "", {});
		fruit_hunter_game_timer.setOrigin(0, 0.5);
		fruit_hunter_game_timer.text = "0";
		fruit_hunter_game_timer.setStyle({ "color": "#043d8c", "fontFamily": "Bungee-Regular", "fontSize": "80px", "strokeThickness": 6 });

		this.fruit_hunter_basket_1 = fruit_hunter_basket_1;
		this.fruit_hunter_score = fruit_hunter_score;
		this.fruit_hunter_score_text = fruit_hunter_score_text;
		this.fruit_hunter_game_timer = fruit_hunter_game_timer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	fruit_hunter_basket_1;
	/** @type {Phaser.GameObjects.Text} */
	fruit_hunter_score;
	/** @type {Phaser.GameObjects.Text} */
	fruit_hunter_score_text;
	/** @type {Phaser.GameObjects.Text} */
	fruit_hunter_game_timer;

	/* START-USER-CODE */

	// Write your code here

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
