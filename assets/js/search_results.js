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
    results.empty();

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
            var listsText = ['Want to read', 'Currently reading', 'Already read'];
            var list = $('<li>');
            var inputId = listsText[j].replace(/\s+/g, ''); // Create a unique ID for each input
            var input = $('<input>').attr('type', 'checkbox').attr('id', inputId);

            list.append(input);

            //Add text to input
            list.append(document.createTextNode(' ' + listsText[j]));

            //Append lists
            checkboxes.append(list);

            // Add an event listener to the checkbox
            checkboxes.on('change', '#Wanttoread', function () {
                var imgURL = element.imgURL;
                var checkboxId = $(this).attr('id');

                // Get existing data from local storage or initialize an empty array
                var storedData = JSON.parse(localStorage.getItem('wantToRead')) || [];

                if ($(this).is(':checked')) {
                    // If the checkbox is checked, save imgURL to local storage
                    storedData.push({ id: checkboxId, imgURL: imgURL });
                }
                // Save the updated array back to local storage
                localStorage.setItem('wantToRead', JSON.stringify(storedData));

                //Change images on "Want To Read"
                var value = JSON.parse(localStorage.getItem('wantToRead'));
                var want1 = $('.want1');
                want1.attr('src', value[0].imgURL);
                var want2 = $('.want2');
                want2.attr('src', value[1].imgURL);
                var want3 = $('.want3');
                want3.attr('src', value[2].imgURL);
                var want4 = $('.want4');
                want4.attr('src', value[3].imgURL);
                var want5 = $('.want5');
                want5.attr('src', value[4].imgURL);
            });

            // Add an event listener to the checkbox
            checkboxes.on('change', '#Currentlyreading', function () {
                var imgURL = element.imgURL;
                var checkboxId = $(this).attr('id');

                // Get existing data from local storage or initialize an empty array
                var storedData = JSON.parse(localStorage.getItem('currentlyReading')) || [];

                if ($(this).is(':checked')) {
                    // If the checkbox is checked, save imgURL to local storage
                    storedData.push({ id: checkboxId, imgURL: imgURL });
                }
                // Save the updated array back to local storage
                localStorage.setItem('currentlyReading', JSON.stringify(storedData));

                // Save the updated array back to local storage
                localStorage.setItem('currentlyReading', JSON.stringify(storedData));

                //Change images on "Currently Reading"
                var value = JSON.parse(localStorage.getItem('currentlyReading'));
                var reading1 = $('.reading1');
                reading1.attr('src', value[0].imgURL);
                var reading2 = $('.reading2');
                reading2.attr('src', value[1].imgURL);
                var reading3 = $('.reading3');
                reading3.attr('src', value[2].imgURL);
                var reading4 = $('.reading4');
                reading4.attr('src', value[3].imgURL);
                var reading5 = $('.reading5');
                reading5.attr('src', value[4].imgURL);
            });

            // Add an event listener to the checkbox
            checkboxes.on('change', '#Alreadyread', function () {
                var imgURL = element.imgURL;
                var checkboxId = $(this).attr('id');

                // Get existing data from local storage or initialize an empty array
                var storedData = JSON.parse(localStorage.getItem('alreadyRead')) || [];

                if ($(this).is(':checked')) {
                    // If the checkbox is checked, save imgURL to local storage
                    storedData.push({ id: checkboxId, imgURL: imgURL });
                }
                // Save the updated array back to local storage
                localStorage.setItem('alreadyRead', JSON.stringify(storedData));

                // Save the updated array back to local storage
                localStorage.setItem('alreadyRead', JSON.stringify(storedData));

                //Change images on "Already Read"
                var value = JSON.parse(localStorage.getItem('alreadyRead'));
                var read1 = $('.read1');
                read1.attr('src', value[0].imgURL);
                var read2 = $('.read2');
                read2.attr('src', value[1].imgURL);
                var read3 = $('.read3');
                read3.attr('src', value[2].imgURL);
                var read4 = $('.read4');
                read4.attr('src', value[3].imgURL);
                var read5 = $('.read5');
                read5.attr('src', value[4].imgURL);
            });
        }

        row.append(cover, information, lists);
        results.append(row);
    });

}
