const apiUrl = "http://localhost:8000";

export const getAllVragenlijsten = async () => {
    return await fetchJSON(`/vragenlijsten`);
};

/**
 * Wraps the fetch api and returns body parsed through json with optional custom settings same as the
 * @param {*} url required string where the method send the requests to excluding the base api url
 * @param {*} settings optional object parameter to set custom settings for the fetch method
 * @param {*} base optional string to set the base of the url
 * @returns the json response from the api endpoint request
 */
async function fetchJSON(url, settings = {}, base = apiUrl) {
    return await fetch(base + url, settings)
        .then((res) => res.json())
        // .then((json) => json)
        .catch((err) => err);
}
