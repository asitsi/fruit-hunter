"use client";
import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import StartGame from "./main";

const GyroFreeplayGame = () => {
    const game = useRef(null);
    const router = useRouter();

    useLayoutEffect(() => {
        const navigateToLobby = () => {
            router.push("/");
        };
        window.navigateToLobby = navigateToLobby;

        if (game.current === null) {
            game.current = StartGame("game-container");
        }

        return () => {
            if (game.current) {
                game.current.destroy(true);
                if (game.current !== null) {
                    game.current = null;
                }
            }
        };
    }, []);

    return (
        <>
            <div className="h-screen w-auto" id="game-container"></div>
        </>
    );
};

export default GyroFreeplayGame;
