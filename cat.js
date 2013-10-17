

var Cat = function(tiredness, hunger,lonliness, happiness){
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happiness = happiness;

    this.sleep = function (numMin) {
        for (var i = 0; i < numMin; i++) {
            console.log("z");
            this.tiredness--;
        }
    };
    this.feed = function (food) {
        food = 5;
        this.hunger += food;
    };
    this.status = function() {
        console.log(this.tiredness, this.hunger, this.lonliness, this.happiness);
    };

    this.petted = function(petting) {
        if (petting > 10) {
            this.happiness -= 15;
        } else {
            this.happiness += 5;
        }
    };

};

var snibble = new Cat(10, 10, 10, 10);
snibble.feed();
snibble.petted(15);
snibble.status();