//we are waiting first for the whole DOM to load
$(document).ready(async ()=> {
    //calling the initial search result, which will display the newest books published instad search.
    searchResults();

    //just testing
    if (await getResultByTitle() === null) console.log('AHA!');
});
