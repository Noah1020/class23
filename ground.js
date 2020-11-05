class ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
        
    }

    display(){

        var Noah = this.body.position;

        fill("blue");

        rectMode(CENTER);

        rect(Noah.x,Noah.y,this.width,this.height);
    }


}



















