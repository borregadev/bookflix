const API_BASE = "https://openlibrary.org/";
//since we cannot search by year, for start we will just return the first 10 newest js books
const API_NEWEST = "search.json?q=javascript&sort=new&limit=10";

const getNewestBooks = async () => { 
    const url = `${API_BASE}${API_NEWEST}`;
    let data = null;
    try{
        const response = await fetch(url);
        data = await response.json();
    }catch{
        console.error('API couldn\'t be reached at this time');
    }
    
    return data;

};