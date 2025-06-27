
export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    create() {
        const text = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Hello World', {
        fontSize: '32px',
        color: '#fff'
        }).setOrigin(0.5);

        this.scale.on('resize', (gameSize: Phaser.Structs.Size) => {
        const { width, height } = gameSize;
        text.setPosition(width / 2, height / 2);
        });
    }
}
