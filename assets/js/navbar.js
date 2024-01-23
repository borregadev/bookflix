const navbarToggle = $('.navbar-toggle');
const results = $('#results');
const myShelf = $('.myShelf');


function toggleNavbar() {
    navbarToggle.on('click', function() {
        results.toggleClass('hide');
        myShelf.toggleClass('hide');

    });
  }

  toggleNavbar();