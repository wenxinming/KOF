export class Controller {
    constructor($convas) {
        this.$convas = $convas;

        this.pressed_keys = new Set();
        this.start();
    }

    start() {
        let outer = this;
        this.$convas.keydown(function (e) {
            outer.pressed_keys.add(e.key);
            console.log(e.key);
        });

        this.$convas.keyup(function (e) {
            outer.pressed_keys.delete(e.key);
        });

    }
}