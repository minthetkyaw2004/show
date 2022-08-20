$(document).ready(function(){
    
    $('input').attr('autocomplete','off');

    $('#birthdate').datepicker({
        showAnim: "slideDown"
    });

    $('#submit').click(function(e){
        e.preventDefault();

        $('#nameout').text($('#name').val());
        $('#emailout').text($('#email').val());
        $('#ageout').text(calcage());
        $('#dobout').text($('#birthdate').val());
        $('#addressout').text($('#address').val());
        $('#countryout').text($('#country').val());
        $('#searchout').html(`<button onclick="gotolink()">${$('#country').val()}</button>`);
    });

});

function calcage(){
    let bd = $('#birthdate').val();
    let arr = bd.split('/');
    console.log(arr[arr.length - 1]);
    // console.log(now - bd);
}


var inputs = document.querySelectorAll('input');
for(let count = 0; count < inputs.length; count++){
    if(inputs[count].getAttribute('type') == 'text' || inputs[count].getAttribute('type') == 'number' || inputs[count].getAttribute('type') == 'email'){
        let keyword = inputs[count].getAttribute('name');
        let placeholder = `Please fill in your ${keyword} ...`;
        inputs[count].setAttribute('placeholder', placeholder);
    }
} 