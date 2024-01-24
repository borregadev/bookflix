const API_BASE = "https://openlibrary.org/";
//since we cannot search by year, for start we will just return the first 10 newest js books
const API_NEWEST = "search.json?q=javascript&sort=new&limit=10";
const API_TITLE = "search.json?limit=10&q=";//sort=new

const getAPICall = async (url) => {
    let data = null;
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch {
        console.error('API couldn\'t be reached at this time');
    }

    return data;
}

//used to build the format of the return object, which always has to be the same for each type of api call
const buildReturnObject = (data) =>{
    let results = null;

    const books = data.docs;
    results = books.map((obj) => {
        let bookImgURL ;
        if(obj.hasOwnProperty("cover_edition_key"))
        {
            bookImgURL = `https://covers.openlibrary.org/b/olid/${obj.cover_edition_key}-M.jpg`;
        }else{
            bookImgURL = "./assets/images/No_Image_Available.jpg";
        }
        return {
            imgURL: bookImgURL,
            bookTitle: obj.title,
            authorName: obj.author_name[0],
            yearPublished: obj.publish_year[0]
        }
    });

    return results;
};

//gets the first 10 newest book about the javascript, used for the landing page.
const getNewestBooks = async () => {
    const url = `${API_BASE}${API_NEWEST}`;
    const data = await getAPICall(url);
    if (data === null) return null;

    return buildReturnObject(data);
};

//gets the first newest books searched by title. 'titleQuery' param must not be empty, null or undefined when called.
const getResultByTitle = async (titleQuery) => {
    titleQuery = titleQuery ?? '';
    if (titleQuery === '') return null;

    const data = await getAPICall(`${API_BASE}${API_TITLE}${titleQuery}`)
    if (data === null) return null;

    return buildReturnObject(data);
};

