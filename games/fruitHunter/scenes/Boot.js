
// You can write more code here
import { getQueryParam } from "@/libs/Helpers";

/* START OF COMPILED CODE */

export default class Boot extends Phaser.Scene {

	constructor() {
		super("Boot");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {
		const text_1 = this.add.text(1720, 958, "", {});
		text_1.text = "Loading.....";
		text_1.setStyle({ "fontSize": "82px" });
		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	activeConsole;

	preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.pack(
            "boot",
            "/game-assets/fruitCatcher/asset-pack-fruit-catcher-main.json"
        );
    }

	init() {
		// Read active console from URL query param `active_console`
		this.activeConsole = getQueryParam("active_console", "fruitCatcherMobile");
    }

	create() {

		this.editorCreate();
		this.scene.start("Preloader", { activeConsole: this.activeConsole });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
