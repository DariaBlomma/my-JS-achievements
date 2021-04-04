$(document).ready(function() {
    console.log('jQuery works')
    $('div').css({'color': 'red'});
    $('.div').css({'font-size': '20px'});
    $('#div').css({'color': 'green'});


    let dataAttribute =  $('#h2').data('number');
    console.log('dataAttribute: ', dataAttribute); //js quick console try
    console.log(dataAttribute);

    $('input[name="message"]').css({'border': '5px solid blue'})

    $('ul li:nth-child(3)').css({'font-size': '40px'})

    $('div:has("span")').css({'background-color': 'purple'})

    let attr = $('input').attr('type');
    console.log(attr)

    // $('#btn2').click(function() {
    //     console.log('btn2 clicked')
    // })


    $('#btn2').on('click', function() {
        console.log('btn2 clicked')
        $('.divHidden').addClass('blue');
        $('.divHidden').removeClass('visible');
        $('.divHidden').toggleClass('border');
        $('.divHidden').show();
        $('.divHidden').hide();
        $('.divHidden').toggle();

    })


    $('#btn2').mouseenter(function() {
        console.log('btn2 entered')
    })
    
//show what we right in input
    $('input[name="message"]').on('input', function() {
        $('.result').html($(this).val());
    })

    $('#form').on('submit', function() {
        alert('the form is submitted')
    })
//animation
    $('#btn').on('click', function() {
        $('.div').animate({'height': '500px'}, 1000)
        $('.div').animate({'width': '300px'}, 1000)
    })
})

