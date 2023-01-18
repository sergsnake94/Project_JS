const { Chance } = require("chance")
const chance = new Chance();

const newMap = new Map();
newMap.set("Mercury", { radius: 2440, density: 5.43, distance: 0.395 }),
    newMap.set("Venus", { radius: 6052, density: 5.24, distance: 0.723 }),
    newMap.set("Earth", { radius: 6378, density: 5.52, distance: 1 }),
    newMap.set("Mars", { radius: 3396, density: 3.93, distance: 1.53 }),
    newMap.set("Jupiter", { radius: 71492, density: 1.33, distance: 5.21 }),
    newMap.set("Saturn", { radius: 60268, density: 0.69, distance: 9.551 }),
    newMap.set("Uranus", { radius: 25559, density: 1.27, distance: 19.213 }),
    newMap.set("Neptune", { radius: 24764, density: 1.64, distance: 30.07 })
let somePlanet = "Saturn"

const neValues = new Set();
neValues.add("Mercury");
neValues.add("Not Mercury");

export const isSuperSet = (set, subset) => {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

export const union = (setA, setB) => {
    var _union = new Set(setA);
    for (var elem of setB) {
        _union.add(elem);
    }
    return _union;
}

export const difference = (setA, setB) => {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

export const intersection = (setA, setB) => {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

export const addNewSystem = (planets) => {
    const arrayAfter = planets.map((el) => el.solarSystem = true);

    for (let el of arrayAfter) {
        console.log(el)
    }
    planets.forEach(solarSystem => {
        cy.log(JSON.stringify(solarSystem));
    })

}

export const addNewObj = (planets, newObj) => {
    planets.push(newObj)
    planets.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })

}

export const sumRadius = (planets) => {
    let newValues = planets.reduce((total, values) => {
        return total + values.radius
    }, 0)
    console.log(newValues)
}

export const planetDistanсe = (planets) => {
    let newPlanets = [];
    for (let i = 0; i < planets.length; i++) {
        if (planets[i].distance > 5) {
            newPlanets.push(planets[i])
        }
    }
    console.log(newPlanets)
}

export const deletePlanet = (planets) => {
    let planetsName = planets.findIndex(item => item.planet == "SomeNewPlanet");
    console.log(planetsName)
    planets.splice(8, 1)
    console.log(planets)
}

export const planetSort = (planets) => {
    planets.sort(function (a, b) {
        if (a.radius > b.radius) {
            return 1;
        }
        if (a.radius < b.radius) {
            return -1;
        }
        return 0;
    })
    console.log(planets)
}

export const sortByName = (planets) => {

    function SortArray(x, y) {
        return x.planet.localeCompare(y.planet);
    }
    var sortByName = planets.sort(SortArray);
    console.log(sortByName);
    console.log(planets.length)
}

export const sortByKeys = (newMap) => {
    for (let item of newMap.keys()) {
        console.log(item);
    }
}

export const sortByValues = (newMap) => {
    for (let item of newMap.values()) {
        console.log(item);
    }
}

export const verifyExistingPlanet = (newMap, somePlanet) => {
    console.log(newMap.has(somePlanet))
}

export const getAllPlanet = (newMap) => {
    console.log(newMap)
}

export const getInfoPlanet = (newMap, somePlanet) => {
    console.log(newMap.get(somePlanet))
}

export const getSizePlanet = (newMap) => {
    console.log(newMap.size)
}

export const getNewSetValues = (neValues) => {
    console.log(neValues)
}

export const verifySetPlanet = (neValues) => {
    console.log(neValues.has("Not Mercury"))
}

export const deleteAndVerifyPlanet = (newMap) => {
    newMap.delete("Uranus");
    console.log(newMap.has("Uranus"))
}

export function mergeMapObjects(...maps) {

    const map = new Map();

    for (const m of maps) {
        for (const item of m) {
            map.set(...item);
        }
    }

    return map;
}

export const merdgeTwoMap = (newMap) => {
    const mapOne = new Map();

    mapOne.set("Pluto", { radius: 2677, density: 8.43, distance: 0.800 })
    let MapTwo = mergeMapObjects(mapOne, newMap)

    console.log(MapTwo);
}

export const verifyObject = () => {
    let planet = { planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395 }

    for (let element in planet) {
        alert(element);
        alert(planet[element])
    }
}

export const verifyOld = () => {

    if (chance.age({ type: 'child' }) < 5) {
        console.log("Child");
    }
    else if (chance.age({ type: 'teen' } > 20)) {
        console.log("Teen");
    }
    else if (chance.age({ type: 'adult' } > 20)) {
        console.log("Adult");
    }
    else if (chance.age({ type: 'senior' } > 30)) {
        console.log("Senior");
    }
}

export const verifyOldBySwitch = () => {

    let ages = chance.age()
    switch (ages) {

        case ages >= 25 ? console.log("adult") : false:
            break;
        case ages >= 30 ? console.log("senior") : false:
            break;
        case ages <= 5 ? console.log("child") : false:
            break;
        case ages = 17 ? console.log("teen") : false:
            break;
    }
}