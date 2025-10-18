export const ConsoleConfigs = {
    fruitCatcher: {
        assetPacks: [
            {
                title: "asset-pack-console",
                src: "/game-assets/fruitCatcher/asset-pack-fruit-catcher-console.json",
            },
        ],
        sceneMobile: "fruitCatcherMobile",
        sceneTablet: "fruitCatcherTablet",
        gameShopSlug: "fruitCatcher",
    },
};

export const getAssetPacksToLoad = (consoleName) => {
    try {
        return ConsoleConfigs[consoleName].assetPacks;
    } catch {
        return [];
    }
};

export const getSceneToLoad = (consoleName, aspectRatio) => {
    let consoleConf = {};
    try {
        consoleConf = ConsoleConfigs[consoleName];
    } catch {
        consoleConf = ConsoleConfigs["fruitCatcher"];
    }
    const scene =
        aspectRatio > 2.0 ? consoleConf.sceneMobile : consoleConf.sceneTablet;
    return scene;
};
