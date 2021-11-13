const blue = $('#blue');


blue.on('click', function()
{alert('You clicked')});

let navBarText = $('.navbar-text');

let timerText = 10;

const fortytwo = $('#fortytwo');
fortytwo.attr('hidden');


function timerCountdown() {
    var timerInterval = setInterval(function()
    {
    timerText--;
    navBarText.text(timerText);

    if (timerText === 0) {
        clearInterval(timerInterval);
        navBarText.text("You failed.");
        
    }
    
}, 1000)}


timerCountdown()