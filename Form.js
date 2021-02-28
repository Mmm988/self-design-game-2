class Form{
    constructor(){
        this.input=createInput("NAME")
        this.button=createButton("PLAY")
        this.greeting=createElement("h3")
        this.reset=createButton("RESET")
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title=createElement("h2")
        title.html("SPACE GAME")
        title.position(310,50)
        this.reset.position(650,50)
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
        })
        this.input.position(310,350)
        this.button.position(370,450)
        this.button.mousePressed(()=>{
            console.log("mouse pressed function")
            this.input.hide()
            this.button.hide()
            player.name=this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("HELLO"+ player.name)
            this.greeting.position(400,300)
        })
    }
}