const getState = ({ setStore }) => {
	return {
		store: {
			output: [],
			people: [],
			vehicles: []
		},
		actions: {
			loadPlanets() {
				const url = "https://swapi.dev/api/planets";

				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("********* ", result);
						setStore({
							output: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadResidents() {
				const url = "https://swapi.dev/api/people/";

				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("residents*** ", result);
						setStore({
							residents: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadVehicles() {
				const url = "https://swapi.dev/api/vehicles";

				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("vehicles*** ", result);
						setStore({
							vehicles: result.results
						});
					})
					.catch(e => console.error(e));
			}
		}
	};
};

export default getState;