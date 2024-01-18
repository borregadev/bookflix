function searchResults() {
    // Total searched results
    totalResults = 3;

    //Display total results
    for (var i = 0; i < totalResults; i++) {

        var searchBox = $('.search-box');
        var row = $('<div>').addClass('row');
        var cover = $('<div>').addClass('cover col-sm-2');
        var information = $('<div>').addClass('information col-sm-2');
        var lists = $('<div>').addClass('lists col-sm-2');

        // Cover image
        var coverResult = $('<img>').attr('src', './assets/images/cover.jpg');
        cover.append(coverResult);

        // Book information
        var titleResult = $('<h4>').text('Title');

        var authorResult = $('<h4>').text('Author');

        var yearResult = $('<h4>').text('Year');

        information.append(titleResult, authorResult, yearResult);

        // Clickable lists
        listSelection = 3;
        var checkboxes = $('<ul>');
        lists.append(checkboxes);

        for (var j = 0; j < listSelection; j++) {
            //Create list/checkbox input
            var list = $('<li>');
            var input = $('<input>').attr('type', 'checkbox');
            list.append(input);

            //Add text to input
            listsText = ['Want to read', 'Currently reading', 'Already read'];
            list.append(document.createTextNode(' ' + listsText[j]));

            //Append lists
            checkboxes.append(list);
        }

        row.append(cover, information, lists);
        searchBox.append(row);
    }
}