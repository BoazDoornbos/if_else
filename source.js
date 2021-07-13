const leeftijd = 21;
const man_vrouw = true
const age = 18;
const bob = true;
const isFemale = true;

if (leeftijd > age) {
    console.log("gast is ouder dan 18");
    if (bob) {
        console.log('gast is bob en mag rijden');
        if (man_vrouw == true) {
            console.log("gast is een vrouw");
        } else {
            console.log('gast is een man');
        }
    } else {
        console.log('gast mag niet rijden');
    }
} else {
    console.log('gast is te jong');
}