const { Chance } = require("chance")
import { sortByKeys, sortByValues, verifyExistingPlanet, getAllPlanet, getInfoPlanet, getSizePlanet, verifySetPlanet, getNewSetValues, deleteAndVerifyPlanet, mergeMapObjects, merdgeTwoMap, verifyObject, verifyOld, verifyOldBySwitch } from "../Utils/Helper"
describe('Test fors Array', () => {
	it('Array', () => {

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
		let planet = { planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395 }

		const chance = new Chance();
		const neValues = new Set();
		neValues.add("Mercury");
		neValues.add("Not Mercury");
		let ages = chance.age()

		sortByKeys(newMap);
		sortByValues(newMap);
		verifyExistingPlanet(newMap, somePlanet);
		getAllPlanet(newMap);
		getInfoPlanet(newMap, somePlanet);
		getSizePlanet(newMap);
		getNewSetValues(neValues);
		verifySetPlanet(neValues);
		deleteAndVerifyPlanet(newMap);
		mergeMapObjects(newMap);
		merdgeTwoMap(newMap);
		verifyObject(planet);
		verifyOld(ages);
		verifyOldBySwitch(ages);

	})
})