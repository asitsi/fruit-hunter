
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

		// text_1
		const text_1 = this.add.text(1003, 439, "", {});
		text_1.text = "New text";
		text_1.setStyle({ "fontSize": "80px" });

		// fruitCatcher_banner
		this.add.image(1220, 530, "fruitCatcher_banner");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
