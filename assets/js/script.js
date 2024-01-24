
// HTML document needs to be fully loaded first to prevent issues with unloaded elements
document.addEventListener('DOMContentLoaded', async function () {
    //get the default result shown
    performSearch(getNewestBooks);

    $('.btn-primary').click(() => {
        // Get the selected checkbox
        const selectedRadioButton = $('input[name="searchType"]:checked').val();
        switch (selectedRadioButton) {
            case "byTitle":
                performSearch(getResultByTitle);
                break;
            case "byAuthor":

                break;
            case "bySubject":

                break;
            case "byText":

                break;
            default:
                break;
        }
    });
});

// Function to perform the search based on the selected filters
async function performSearch(searchFunction) {
    // Get the search term entered by the user
    var searchTerm = $('#search').val().toLowerCase().trim();

    let searchResult = await searchFunction(searchTerm);
    if (searchResult) doSearchDisplay(searchResult);
    else document.getElementById('results').textContent = 'Oh No! 😭 There Are No Search Results Available';
}

// Function to display the search results or a message if no results are found
function displaySearchResults(results) {
    var resultContainer = document.getElementById('searchResults');

    // Clear previous results inside the resultContainer
    resultContainer.innerHTML = '';

    if (results.length > 0) {
        // Display the search results in a new div element for each search result 
        results.forEach(function (book) {
            var resultItem = document.createElement('div');
            resultItem.textContent = 'Title: ' + book.title + ', Author: ' + book.author + ', Subject: ' + book.subject;
            resultContainer.appendChild(resultItem);
        });
    } else {
        // Display a message if no results are found 
        // Append the noResultsMessage paragraph to the resultContainer
        var noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'Oh No! 😭 There Are No Search Results Available';
        resultContainer.appendChild(noResultsMessage);

    }
}

