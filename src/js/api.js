import * as constants from "./constants"

export function getApiData(searchFraze) {
    const apiUrl = constants.apiUrl + searchFraze;
    return fetch(apiUrl)
        .then(resp => {
            if (!resp.ok) {
                throw new Error("Big error");
            }
            else {
                return resp.json();
            }
        })
        .then(resp => {
            let result = JSON.stringify(resp);
            return result;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}