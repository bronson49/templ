$(".menu a").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 800);
    return false;
});


$('#form').submit(function () {
    $.ajax({
        type: "POST",
        url: "form.php",
        data: $(this).serialize()
    }).done(function () {
        $('#form').html('<h2>спасибо за обратную связь!</h2>');
    });
    return false;
});

