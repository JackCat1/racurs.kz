$(document).ready(function () {
    $('.active-list >.list-body').show('slow');
    $('.tabs').tabs();
    $('.scrollspy').scrollSpy({'scrollOffset':60,'activeClass':'active1','throttle':200});
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
})
$('.list-hed').click(function () {
   $('.active-list >.list-body').slideUp();
   $('.active-list').removeClass('active-list')
   $(this).parent().addClass('active-list');
   $('.active-list >.list-body').show('slow');
})
$('#name').blur(function () {
    if($('#name').val()===''){
        $('#name').addClass('invalid');
    }
})
$('#phone').blur(function () {
    if($('#phone').val()===''){
        $('#phone').addClass('invalid');
    }
})

$('#sendReq').click(function () {
    if($('#name').val()===''){
        $('#name').addClass('invalid');
    } else if ($('#phone').val()===''){
        $('#phone').addClass('invalid');
    } else {
        let data={
            'name':'',
            'phone':''
        }
        if($('#name').val()!==''){
            data['name']= $('#name').val();
        }
        if($('#phone').val()!==''){
            data['phone']=$('#phone').val();
        }
        post(data);
        M.toast({html:'Ваш запрос отравлен. С ваши в ближайшее время свяжется наш менеджер.'});
        $('#modal1').modal('close');
        $('#name').val('');
        $('#name').removeClass('valid');
        $('#phone').val('');
        $('#phone').removeClass('valid');
    }
})
$('.send').click(function () {
    $('#modal1 h4').text('Оставить заявку на услугу');
    $('#modal1').modal('open');
})
$('#call').click(function () {
    $('#modal1 h4').text('Заказать обратный звонок');
})

function post(data) {
    $.ajax({
        url: 'php/sendMail.php',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        success: function() {
        },
        statusCode:{
            200:function(){
            },
            404:function(){
                M.toast({html:'Ошибка сервера! Попробуйте еще раз'});

            }
        }
    });

}
