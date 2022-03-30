const getState = ({ setStore }) => {
	return {
		store: {
			output: [],
			people: [],
			films: []
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
			loadFilms() {
				const url = "https://swapi.dev/api/films";

				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("films*** ", result);
						setStore({
							films: result.results
						});
					})
					.catch(e => console.error(e));
				}
		}
	};
};

export default getState;