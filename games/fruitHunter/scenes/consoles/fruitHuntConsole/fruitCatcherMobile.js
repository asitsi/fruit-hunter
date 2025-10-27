
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

		// container_fruit_hunter_score
		const container_fruit_hunter_score = this.add.container(1179, 553);
		container_fruit_hunter_score.visible = false;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(0, 0, 128, 128);
		rectangle_2.scaleX = 19;
		rectangle_2.scaleY = 10;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 15568051;
		rectangle_2.fillAlpha = 0.8;
		container_fruit_hunter_score.add(rectangle_2);

		// fruite_hunter_highest_score
		const fruite_hunter_highest_score = this.add.text(590, -84, "", {});
		fruite_hunter_highest_score.text = "0";
		fruite_hunter_highest_score.setStyle({ "color": "#92c024", "fontFamily": "Bungee-Regular", "fontSize": "100px", "strokeThickness": 10 });
		container_fruit_hunter_score.add(fruite_hunter_highest_score);

		// text_3fruite_hunter_highest_score_text
		const text_3fruite_hunter_highest_score_text = this.add.text(-192, -41, "", {});
		text_3fruite_hunter_highest_score_text.setOrigin(0.5, 0.5);
		text_3fruite_hunter_highest_score_text.text = "Your Highest Score:";
		text_3fruite_hunter_highest_score_text.setStyle({ "color": "#92c024", "fontFamily": "Bungee-Regular", "fontSize": "120px", "strokeThickness": 10 });
		container_fruit_hunter_score.add(text_3fruite_hunter_highest_score_text);

		// fruite_hunter_your_score
		const fruite_hunter_your_score = this.add.text(344, -270, "", {});
		fruite_hunter_your_score.text = "0";
		fruite_hunter_your_score.setStyle({ "color": "#043d8c", "fontFamily": "Bungee-Regular", "fontSize": "100px", "strokeThickness": 6 });
		container_fruit_hunter_score.add(fruite_hunter_your_score);

		// fruite_hunter_your_score_text
		const fruite_hunter_your_score_text = this.add.text(-126, -225, "", {});
		fruite_hunter_your_score_text.setOrigin(0.5, 0.5);
		fruite_hunter_your_score_text.text = "Your Score:";
		fruite_hunter_your_score_text.setStyle({ "color": "#043d8c", "fontFamily": "Bungee-Regular", "fontSize": "120px", "strokeThickness": 10 });
		container_fruit_hunter_score.add(fruite_hunter_your_score_text);

		// fruit_hunter_retry_game
		const fruit_hunter_retry_game = this.add.image(-352, 242, "fruit_hunter_retry_game");
		fruit_hunter_retry_game.scaleX = 0.4;
		fruit_hunter_retry_game.scaleY = 0.4;
		container_fruit_hunter_score.add(fruit_hunter_retry_game);

		// fruit_hunter_back_to_home
		const fruit_hunter_back_to_home = this.add.image(404, 239, "fruit_hunter_back_to_home");
		fruit_hunter_back_to_home.scaleX = 0.35;
		fruit_hunter_back_to_home.scaleY = 0.3;
		container_fruit_hunter_score.add(fruit_hunter_back_to_home);

		// fruit_hunter_preview_container
		const fruit_hunter_preview_container = this.add.container(1189, 550);
		fruit_hunter_preview_container.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 0, 128, 128);
		rectangle_1.scaleX = 19;
		rectangle_1.scaleY = 9;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 15568051;
		rectangle_1.fillAlpha = 0.7;
		fruit_hunter_preview_container.add(rectangle_1);

		// fruit_hunter_preview_title
		const fruit_hunter_preview_title = this.add.text(-74, -256, "", {});
		fruit_hunter_preview_title.setOrigin(0.5, 0.5);
		fruit_hunter_preview_title.text = "Crazy Candy Chase";
		fruit_hunter_preview_title.setStyle({ "fontFamily": "Bungee-Regular", "fontSize": "120px", "stroke": "#043d8c", "strokeThickness": 10 });
		fruit_hunter_preview_container.add(fruit_hunter_preview_title);

		// fruit_hunter_preview_description
		const fruit_hunter_preview_description = this.add.text(-59, 9, "", {});
		fruit_hunter_preview_description.setOrigin(0.5, 0.5);
		fruit_hunter_preview_description.text = "Time is ticking—grab every candy in sight! React fast, rack up points, and rule the candy-catching arena.";
		fruit_hunter_preview_description.setStyle({ "fontSize": "80px", "stroke": "#92c024", "strokeThickness": 7 });
		fruit_hunter_preview_description.setLineSpacing(5);
		fruit_hunter_preview_container.add(fruit_hunter_preview_description);

		this.fruit_hunter_basket_1 = fruit_hunter_basket_1;
		this.fruit_hunter_score = fruit_hunter_score;
		this.fruit_hunter_score_text = fruit_hunter_score_text;
		this.fruit_hunter_game_timer = fruit_hunter_game_timer;
		this.rectangle_2 = rectangle_2;
		this.fruite_hunter_highest_score = fruite_hunter_highest_score;
		this.fruite_hunter_your_score = fruite_hunter_your_score;
		this.fruit_hunter_retry_game = fruit_hunter_retry_game;
		this.fruit_hunter_back_to_home = fruit_hunter_back_to_home;
		this.container_fruit_hunter_score = container_fruit_hunter_score;
		this.fruit_hunter_preview_title = fruit_hunter_preview_title;
		this.fruit_hunter_preview_description = fruit_hunter_preview_description;
		this.fruit_hunter_preview_container = fruit_hunter_preview_container;

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
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_2;
	/** @type {Phaser.GameObjects.Text} */
	fruite_hunter_highest_score;
	/** @type {Phaser.GameObjects.Text} */
	fruite_hunter_your_score;
	/** @type {Phaser.GameObjects.Image} */
	fruit_hunter_retry_game;
	/** @type {Phaser.GameObjects.Image} */
	fruit_hunter_back_to_home;
	/** @type {Phaser.GameObjects.Container} */
	container_fruit_hunter_score;
	/** @type {Phaser.GameObjects.Text} */
	fruit_hunter_preview_title;
	/** @type {Phaser.GameObjects.Text} */
	fruit_hunter_preview_description;
	/** @type {Phaser.GameObjects.Container} */
	fruit_hunter_preview_container;

	/* START-USER-CODE */

	// Write your code here

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
