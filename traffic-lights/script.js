window.onload = function redFun() {
    document.getElementById("red").style.backgroundColor = 'red';
    document.getElementById("txt").innerHTML = 'You Have to Stop!!!';
    setInterval(yelFun,10000);
}

function yelFun() {
    document.getElementById("red").style.backgroundColor = 'white';
    document.getElementById("txt").innerHTML = 'You Will Be StandBy!!!';
    document.getElementById("yellow").style.backgroundColor = 'yellow';
    setInterval(greFun,10000);
}

function greFun() {
    document.getElementById("yellow").style.backgroundColor = 'white';
    document.getElementById("txt").innerHTML = 'You Have to Move!!!';
    document.getElementById("green").style.backgroundColor = 'green';
}


class Car {
    constructor(brand) {
        this.carname = brand;
    }

    getName() {
        return 'The name of the car is ' + ' ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand,mod) {
        super(brand,mod);
        this.brand = brand;
        this.mod = mod;
    }

    getShow() {
        return this.getName() + ' ' + ' Brand is ' + ' ' + this.mod;
    }
}

let Gname = new Model('Ford','Mustang');
console.log(Gname.getShow());
