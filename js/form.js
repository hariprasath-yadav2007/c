class Form{
    constructor(){
        this.input = createInput("want to make india proud");
        this.button = createButton('yes');
        this.button1 = createButton('no');
        this.greeting = createElement('h3');
    }

    display(){
        var title = createElement('h2');
        title.html("a survey to bring change");    
        title.position(400,100);
        this.input.position(450,250);
        this.button.position(550,300);
        this.button1.position(550,325);
        this.button.mousePressed(()=>{
            this.input.hide();    
            this.button.hide();
            this.button1.hide();
            this.greeting.html("thanks for your valuable feedback");
            this.greeting.position(480,250);
        });
        this.button1.mousePressed(()=>{
            this.input.hide();    
            this.button.hide();
            this.button1.hide();
            this.greeting.html("thanks for your valuable feedback");
            this.greeting.position(480,250);
        });
    }
}
