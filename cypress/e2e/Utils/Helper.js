
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