//Checked input by default on search bar

$(document).ready(function() {
    // Set the "checked" input of "By Title" on page load
    $("#default-check").prop("checked", true);

    // Change one input at a time
    $("input[name='searchType']").change(function() {
        // Do something when a radio button is selected
        console.log("Selected: " + $(this).val());
    });
});


// Toggle menu on mobile

const navbarToggle = $('.navbar-toggle');
const results = $('#results');
const myShelf = $('.myShelf');


function toggleNavbar() {
    navbarToggle.on('click', function () {
        results.toggleClass('hide');
        myShelf.toggleClass('hide');

    });
}

toggleNavbar();
