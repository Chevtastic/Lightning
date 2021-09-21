
var myDrink = {
    flavor: 'Mtn. Dew',
    color: 'Yellow',
    temperature: 30,
    viscosity: 'viscous',
    container: 'can',
    carbonated: true,
    volume: 1.00,
    drink: function(){
        myDrink.temperature -= .005
    }
}

console.log(myDrink)

myDrink.volume = myDrink.volume*.5
myDrink.drink
console.log(myDrink)



