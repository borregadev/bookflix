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

                // Change images on "Want To Read"
                updateWantToReadImages();
            });

            // Function to update "Want To Read" images
            function updateWantToReadImages() {
                var value = JSON.parse(localStorage.getItem('wantToRead'));
                var want1 = $('.want1');
                var want2 = $('.want2');
                var want3 = $('.want3');
                var want4 = $('.want4');
                var want5 = $('.want5');

                // Set initial sources based on local storage data
                want1.attr('src', value[0].imgURL);
                want2.attr('src', value[1].imgURL);
                want3.attr('src', value[2].imgURL);
                want4.attr('src', value[3].imgURL);
                want5.attr('src', value[4].imgURL);
            }

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

                // Change images on "Currently Reading"
                updateCurrentlyReadingImages();
            });

            // Function to update "Currently Reading" images
            function updateCurrentlyReadingImages() {
                var value = JSON.parse(localStorage.getItem('currentlyReading'));
                var reading1 = $('.reading1');
                var reading2 = $('.reading2');
                var reading3 = $('.reading3');
                var reading4 = $('.reading4');
                var reading5 = $('.reading5');

                // Set initial sources based on local storage data
                reading1.attr('src', value[0].imgURL);
                reading2.attr('src', value[1].imgURL);
                reading3.attr('src', value[2].imgURL);
                reading4.attr('src', value[3].imgURL);
                reading5.attr('src', value[4].imgURL);
            }

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

                // Change images on "Already Read"
                updateAlreadyReadImages();
            });

            // Function to update "Already Read" images
            function updateAlreadyReadImages() {
                var value = JSON.parse(localStorage.getItem('alreadyRead'));
                var read1 = $('.read1');
                var read2 = $('.read2');
                var read3 = $('.read3');
                var read4 = $('.read4');
                var read5 = $('.read5');

                // Set initial sources based on local storage data
                read1.attr('src', value[0].imgURL);
                read2.attr('src', value[1].imgURL);
                read3.attr('src', value[2].imgURL);
                read4.attr('src', value[3].imgURL);
                read5.attr('src', value[4].imgURL);
            }

            // Initial calls to update "Want to Read", "Currently Reading" and "Already Read" images when the page loads
            $(document).ready(function () {
                updateWantToReadImages();
            });

            $(document).ready(function () {
                updateCurrentlyReadingImages();
            });

            $(document).ready(function () {
                updateAlreadyReadImages();
            });

        }

        row.append(cover, information, lists);
        results.append(row);
    });

}
