

export default function Wizard(name,life,randNum){
    this.name = name;
    this.life = life;
    this.randNum = randNum;
    this.zap = function(){
        if (this.randNum >= 5){
            this.life++;
        }else{
            this.life--;
        }
        console.log(this.life);
    };
    this.curse = function(){
        if (this.randNum >= 5){
            this.life +=2;
        }else{
            this.life -=2;
        }
        console.log(this.life);
    };
    this.hex = function(){
        if (this.randNum >= 5){
            this.life +=3;
        }else{
            this.life -=3;
        }
        console.log(this.life);
    };
}