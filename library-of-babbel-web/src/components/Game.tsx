import GAME_CONFIG from "core/gameConfig";
import Phaser from "phaser";
import { useEffect } from "react";

export default function Game() {
    useEffect(() => {
        const game = new Phaser.Game(GAME_CONFIG);
        return () => game.destroy(true);
    }, [

    ]);

    return <div id="game" />
}
