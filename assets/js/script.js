
// HTML document needs to be fully loaded first to prevent issues with unloaded elements
document.addEventListener('DOMContentLoaded', async function () {
    //get the default result shown
    let searchResult = await getNewestBooks();
    searchResult && doSearchDisplay(searchResult);
   
  
     // Get the search input, search button, and checkboxes
    var searchInput = document.getElementById('search');
    var searchButton = document.querySelector('.btn-primary');
    var checkboxes = document.querySelectorAll('.form-check-input');

    searchButton.addEventListener('click', function () {
        // Get the search term entered by the user
        var searchTerm = searchInput.value.toLowerCase().trim();

        // Get the selected checkboxes
        var selectedFilters = Array.from(checkboxes)
            .filter(function (checkbox) {
                return checkbox.checked;
            })
            .map(function (checkbox) {
                return checkbox.value.toLowerCase();
            });

        // Perform the search based on the selected filters
        //var searchResults = performSearch(searchTerm, selectedFilters);

        // Display the search results or a message if no results are found
        //displaySearchResults(searchResults);
    });
});

// Function to perform the search based on the selected filters
function performSearch(searchTerm, selectedFilters) {
    // Replace with API call? 
    // Add more books HERE
    var books = [
        { title: 'Book1', author: 'Author1', subject: 'Subject1', text: 'This is book text 1.' },
        // Copy & Paste format
       
    ];

    // Filter the books based on the selected filters
    var filteredBooks = books.filter(function (book) {
        return selectedFilters.some(function (filter) {
            return book[filter].toLowerCase().includes(searchTerm);
        });
    });

    return filteredBooks;
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

