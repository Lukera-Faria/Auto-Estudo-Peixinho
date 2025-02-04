var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);

var peixinhho;

function preload() {
    this.load.image('mar','Assets/bg_azul-escuro.png');
    this.load.image('logo','Assets/logo-inteli_branco.png');
    this.load.image('peixe','Assets/peixe_serio.png');
    this.load.image('alga', 'Assets/1961720_3ca77.gif');
}

function create(){
    this.add.image(400,300,'mar');
    this.add.image(400,525, 'logo').setScale(0.5);
    this.add.image(200,600, 'alga');
    this.add.image(600,500, 'alga');
    peixinho = this.add.image(400,300, 'peixe');
    peixinho.setFlip(true,false);
}

function update(){

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    
}
