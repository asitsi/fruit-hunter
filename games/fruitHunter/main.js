import { Game, AUTO, Scale } from "phaser";
import VirtualJoystickPlugin from "phaser3-rex-plugins/plugins/virtualjoystick-plugin.js";
import Boot from "./scenes/Boot";
import Preloader from "./scenes/Preloader";
import fruitCatcherMobile from "./scenes/consoles/fruitHuntConsole/fruitCatcherMobile";
import fruitCatcherTablet from "./scenes/consoles/fruitHuntConsole/fruitCatcherTablet";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

const StartGame = (parent) => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const size =
        aspectRatio > 2.0
            ? { width: 2366, height: 1080 }
            : { width: 2048, height: 1536 };

    const baseScenes = [Boot, Preloader];
    const mobileScenes = [fruitCatcherMobile];
    const tabletScenes = [fruitCatcherTablet];
    let scene = [...baseScenes];
    if (aspectRatio > 2.0) {
        scene = [...scene, ...mobileScenes];
    } else {
        scene = [...scene, ...tabletScenes];
    }

    const config = {
        type: AUTO,
        width: size.width,
        height: size.height,
        scale: {
            mode: Scale.FIT,
            autoCenter: Scale.CENTER_BOTH,
            fullscreenTarget: "game-container",
        },
        parent: "game-container",
        backgroundColor: "#00000000",
        transparent: true,
        scene: scene,
        title: "fruitHunter",
        version: "1.0",
        disableContextMenu: true,
        fps: {
            min: 10,
            target: 60,
            limit: 60,
        },
        plugins: {
            global: [
                // {
                //     key: "rexVirtualJoystick",
                //     plugin: VirtualJoystickPlugin,
                //     start: true,
                // },
            ],
        },
    };
    return new Game({ ...config, parent });
};

export default StartGame;
