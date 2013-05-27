position = 'bio';

$('.contact').hide();
$('.signup').hide();

$(document).ready(function() {
    $(document).keydown(function(event) {
        css = $('#oval').css('-webkit-transform')
        if (event.keyCode=='39') {
            if (position == 'bio') {
                $('#oval').css('-webkit-transform','rotate(-90deg)');
                position = 'signup';
                $('.bio').hide();
                $('.signup').show();
            } else if(position == 'contact') {
                $('#oval').css('-webkit-transform','rotate(0deg)');
                position = 'bio';
                $('.contact').hide();
                $('.bio').show();
            };
        } else if (event.keyCode=='37') {
            if (position == 'bio') {
                $('#oval').css('-webkit-transform','rotate(90deg)');
                position = 'contact';
                $('.bio').hide();
                $('.contact').show();
            } else if (position == 'signup') {
                $('#oval').css('-webkit-transform','rotate(0deg)');
                position = 'bio';
                $('.signup').hide();
                $('.bio').show();
            };
        };
    });
});

// calcular donde estoy ahora mismo, de ahi sacar cuando hay que rotarlo, then cambiar el content div and we're done