const blue = $('#blue');

let welcome = $('#welcome');
let begin = $('#begin');

begin.on('click', function() 
{
questionOne.css('display', 'block');
welcome.css('display', 'none');

});

let questionOne = $('#questionOne');
questionOne.css('display', 'none');

let questionTwo = $('#questionTwo');
questionTwo.css('display', 'none');

let questionThree = $('#questionThree');
questionThree.css('display', 'none');


blue.on('click', function()
{alert('Correct');
blue.css('background-color', 'green');
questionTwo.css('display', 'block')
localStorage.setItem('highScore', JSON.stringify('correct'));

});

let fortyTwo = $('#fortyTwo');
fortyTwo.on('click', function ()
{alert('Correct');
fortyTwo.css('background-color', 'green');
questionThree.css('display', 'block');
localStorage.setItem('highScore', JSON.stringify('sgaddgs'));
});


let andy = $('#andy');
andy.on('click', function ()
{alert('Correct');
andy.css('background-color', 'green');
questionThree.css('display', 'block')});


let highScore = $('#highScore');



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