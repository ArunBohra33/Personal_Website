// jshint esversion:6

const buttons = document.querySelectorAll('.button button');
const containers = document.querySelectorAll('.work-container');

// Manipulating the work tabs

function showContainer (panelIndex, colorCode) {
    for (let i=0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '';
        buttons[i].style.color = '#000';
    }
    
    buttons[panelIndex].style.backgroundColor = colorCode;
    buttons[panelIndex].style.color = '#fff';
    
    for (let i=0; i < containers.length; i++) {
        containers[i].style.display = 'none';
    }
    
    containers[panelIndex].style.display = 'block';
}

showContainer(0, '#267742')

// The sticky navigation bar

$('.js--about-section').waypoint(function(direction) {
    if (direction == 'down') {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
});

// The responsive navigation bar

$('.js--nav-icon').click(function () {
    let nav = $('.js--navbar');
    let icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    if (icon.hasClass('fa-bars')) {
        icon.removeClass('fa-bars');
        icon.addClass('fa-times');
    } else {
        icon.removeClass('fa-times');
        icon.addClass('fa-bars');
    }
    
})
