const axios = require("axios");

let visited = {};

const getInformation = async (ids, auth_token) => {
	let results = []
	for (let id of ids) {
		if (id in visited) {
			results.push(visited[id]);
		} else {
			try {
				const res = await axios.get(`https://challenges.qluv.io/items/${id}`, {
					headers: {
						"Authorization": `${auth_token}`
					}
				});
				results.push(res.data);
				visited[id] = res.data;
			} catch(err) {
				console.error(err);
			}
		}
	}
	return results;
	
}

let ids = ["cRF2dvDZQsmu37WGgK6MTcL7XjH", "cRF2dvDZQsmu37WGgK6MTcL7XjH", "cRF2dvDZQsmu37WGgK6MTcL7XjH"];
getInformation(ids, "Y1JGMmR2RFpRc211MzdXR2dLNk1UY0w3WGpI")
	.then(info => console.log(info))
	.catch(err => console.error(err))
