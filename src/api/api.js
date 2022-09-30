const API_KEY = 
"675f8919-67b6-4929-a3ab-dd241e65c270";

export const getMatchInfo = () => {
    const url = 
    `https://api.cricapi.com/v1/matches?apikey=${API_KEY}&offset=0`;

    return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const getMatchScore = (id) => {
    const url = 
    `https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&id=${id}`;

    return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}