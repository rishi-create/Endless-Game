const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 20;
const enemiesArray = []

let gameFrame = 0;
// enemy1 = {
//     x:0,
//     y:0,
//     width: 200,
//     height: 200
// }
class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy1.png';
        // this.speed = Math.random() * 4 - 2;  //some go to left and right
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.2;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);

    }
    update(){
        this.x+= Math.random() * 15 - 7.5;
        this.y+= Math.random() * 10 - 5;
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++; 
        }
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    } 
}
// const enemy1 = new Enemy();
// const enemy2 = new Enemy();
for(let i=0; i<numberOfEnemies; i++){
    enemiesArray.push(new Enemy());
}
// console.log(enemiesArray);

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // enemy1.update();
    // enemy1.draw();
    // ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    // ctx.fillRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();