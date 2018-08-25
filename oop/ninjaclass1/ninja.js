function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.Sayname = function () { console.log("my name is", name) }
    this.showstats = function () { console.log("Name:" + name, "Speed:" + speed, "strength:" + strength, "Health:" + this.health) }
    this.drinksake = function () { this.health += 10; console.log(this.health) }
    this.punch = function (ninja) {
        if (ninja instanceof Ninja) {
         ninja.health -= 5; console.log(name, this.health)
        }
    }

    this.kick = function (ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 15 * strength; console.log(ninja.name, ninja.health)
        }
    }

}
var ninja = new Ninja("Boss")
var ninja2 = new Ninja("Me")
ninja.Sayname();
ninja.showstats();
ninja.drinksake();
ninja.punch(ninja2);
ninja.kick(ninja2);
