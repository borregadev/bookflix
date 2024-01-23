const API_BASE = "https://openlibrary.org/";
//since we cannot search by year, for start we will just return the first 10 newest js books
const API_NEWEST = "search.json?q=javascript&sort=new&limit=10";
const API_TITLE = "search.json?limit=10&sort=new&q=";

const getAPICall = async (url) =>
{
    let data = null;
    try{
        const response = await fetch(url);
        data = await response.json();
    }catch{
        console.error('API couldn\'t be reached at this time');
    }
    
    return data;
}

//gets the first 10 newest book about the javascript, used for the landing page.
const getNewestBooks = async () => { 
    const url = `${API_BASE}${API_NEWEST}`;
    return await getAPICall(url);
};

//gets the first newest books searched by title. 'titleQuery' param must not be empty, null or undefined when called.
const getResultByTitle = async (titleQuery) => {
    titleQuery = titleQuery ?? '';
    if(titleQuery === '') return null;
    
    const url = `${API_BASE}${API_TITLE}${titleQuery}`;
    return await getAPICall(url);
};