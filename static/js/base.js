import { GameMap } from '/static/js/game_map/base.js';
import { Koy } from './player/kyo.js';

class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        this.game_map = new GameMap(this);

        this.players = [
            new Koy(this, {
                id: 0,
                x: 100,
                y: 0,
                width: 50,
                height: 100,
                color: 'blue',
            }),
            new Koy(this, {
                id: 1,
                x: 450,
                y: 0,
                width: 50,
                height: 100,
                color: 'red',
            })
        ]
    }
}

export {
    KOF
} 