const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";
const createFetchRequest = (url) => {
    const fullURL = BASE_URL + url;
    return fetch(fullURL);
}

export default createFetchRequest;