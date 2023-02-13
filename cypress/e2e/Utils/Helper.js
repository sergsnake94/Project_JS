const { Chance } = require("chance")
const chance = new Chance();

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

export const verifyOld = (age) => {
    if (age) {
        console.log("Child");
    }
    else if (age) {
        console.log("Teen");
    }
    else if (age) {
        console.log("Adult");
    }
    else if (age) {
        console.log("Senior");
    }
}

export const verifyOldBySwitch = (age) => {
    
    switch (age) {

        case age >= 25 ? console.log("adult") : false:
            break;
        case age >= 30 ? console.log("senior") : false:
            break;
        case age <= 5 ? console.log("child") : false:
            break;
        case age = 17 ? console.log("teen") : false:
            break;
    }
}