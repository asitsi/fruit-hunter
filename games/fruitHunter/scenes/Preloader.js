// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { getCookieValue } from "@/libs/Helpers";
import { getAssetPacksToLoad, getSceneToLoad } from "./consoles/ConsoleConfigs";
/* END-USER-IMPORTS */

export default class Preloader extends Phaser.Scene {

    constructor() {
        super("Preloader");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorCreate() {

        // progressBar
        const progressBar = this.add.rectangle(1183, 980, 1400, 50);
        progressBar.isFilled = true;
        progressBar.fillColor = 43245;
        progressBar.isStroked = true;
        progressBar.strokeColor = 43245;
        progressBar.lineWidth = 5;

        this.progressBar = progressBar;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    progressBar;

    /* START-USER-CODE */

    // Write your code here

    updateBackground(gameObject) {
        if (!gameObject || !gameObject.texture) return;

        const textureKey = gameObject.texture.key;
        const texture = this.textures.get(textureKey);
        if (!texture) return;

        // Get source image
        const imageSource = texture.getSourceImage();
        if (!imageSource) return;

        // Convert to Base64 Data URL
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas size
        canvas.width = imageSource.width;
        canvas.height = imageSource.height;

        // Draw the image onto the canvas
        ctx.drawImage(imageSource, 0, 0);

        // Convert canvas to Data URL
        const dataUrl = canvas.toDataURL("image/png");

        // Apply it as a background image
        const gameContainer = document.getElementById("game-container");
        if (gameContainer) {
            gameContainer.style.background = `url(${dataUrl}) no-repeat center center`;
            gameContainer.style.backgroundSize = "cover";
        }
    }

    init(data) {
        this.activeConsole = data?.activeConsole || "fruitCatcherMobile";
        this.editorCreate();
        this.updateBackground(this.loading_bg);
        // this.containerLogo.setPosition(
        //     this.scale.width / 2,
        //     this.scale.height / 2
        // );

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        //const bar = this.add.rectangle(this.progressBar.x - this.progressBar.width / 2 + 4, this.progressBar.y, 4, 28, 0xffffff)

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on("progress", (progress) => {
            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            this.progressBar.width = 4 + 800 * progress;
        });
    }

    preload() {
        // Loading active console's asset packs
        const assetPacks = getAssetPacksToLoad(this.activeConsole);
        assetPacks.map((pack) => {
            this.load.pack(pack.title, pack.src);
        });

        // Loading base packs required for all consoles.
        // this.load.pack(
        //     "asset-pack-exit-menu",
        //     "/game-assets/freeplay/asset-pack-exit-menu.json"
        // );
        // this.load.pack(
        //     "asset-pack-sounds",
        //     "/game-assets/freeplay/asset-pack-sounds.json"
        // );
        // this.load.pack(
        //     "asset-pack-pvp-sounds",
        //     "/game-assets/pvp/asset-pack-pvp-sounds.json"
        // );
		
		this.load.pack(
            "asset-pack-console",
            "/game-assets/fruitCatcher/asset-pack-fruit-catcher-console.json"
        );
    }

    create() {
        const aspectRatio = window.innerWidth / window.innerHeight;
        const sceneToStart = getSceneToLoad(this.activeConsole, aspectRatio);
        this.scene.start(sceneToStart);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
