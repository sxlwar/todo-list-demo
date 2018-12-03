@AddAbility('biubiubiu')
class SuperMan {}

// function AddAbility(target) {
//     target.fly = true;
//     return target;
// }
function AddAbility(ability) {
    return function(target) {
        target[ability] = true;
        return target;
    };
}

console.log(SuperMan['fly']);
console.log(SuperMan['biubiubiu']);
