export const fetchNews = async (query, filter) => {
    // have the development api key here
    // todo 
    const apiKey = 'af48933ce5ca4fb49531ddd47097fdcc';
    const endpoint = `https://newsapi.org/v2/everything?q=${query}&sortBy=${filter}&pageSize=50&apiKey=${apiKey}`;

    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
};