/*this function expects array with objects, and each object should have this format : 
{
    imgURL : image-URL-value,
    bookTitle : book-title-value,
    authorName : book-author-Name,
    yearPublished : book-published-year
}
*/
function doSearchDisplay(resultArr) {

    var results = $('#results');

    //Create Results Title
    var resultsTitle = $('<h2>').text('Searched Book Results');
    results.append(resultsTitle);

    // Create results row
    resultArr.forEach(element => {
        var row = $('<div>').addClass('row');
        var cover = $('<div>').addClass('cover col-sm-4');
        var information = $('<div>').addClass('information col-sm-4');
        var lists = $('<div>').addClass('lists col-sm-4');

        // Cover image
        var coverResult = $('<img>').attr('src', element.imgURL).attr('width', 180);
        // coverResult.addClass('coverImg');
        cover.append(coverResult);

        // Book information
        var titleResult = $('<h4>').text(element.bookTitle);
        var authorResult = $('<h4>').text(element.authorName);
        var yearResult = $('<h4>').text(element.yearPublished);
        information.append(titleResult, authorResult, yearResult);

        // Clickable lists
        var listSelection = 3;
        var checkboxes = $('<ul>');
        lists.append(checkboxes);

        for (var j = 0; j < listSelection; j++) {
            //Create list/checkbox input
            var list = $('<li>');
            var input = $('<input>').attr('type', 'checkbox');
            list.append(input);

            //Add text to input
            var listsText = ['Want to read', 'Currently reading', 'Already read'];
            list.append(document.createTextNode(' ' + listsText[j]));

            //Append lists
            checkboxes.append(list);
        }

        row.append(cover, information, lists);
        results.append(row);
    });

}