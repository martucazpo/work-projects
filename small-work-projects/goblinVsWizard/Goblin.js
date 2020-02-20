
export default function Goblin(name,life,randNum){
    this.name = name;
    this.life = life;
    this.randNum = randNum;
    this.kick = function(){
        if (this.randNum >= 5){
            this.life++;
        }else{
            this.life--;
        }
        console.log(this.life);
    };
    this.bite = function(){
        if (this.randNum >= 5){
            this.life += 2;
        }else{
            this.life -=2;
        }
        console.log(this.life);
    };
    this.scratch = function(){
        if (this.randNum >= 5){
            this.life += 3;
        }else{
            this.life -=3;
        }
        console.log(this.life);
    };
}