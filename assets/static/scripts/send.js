$(function() {
    let modal = $('.form__modal'),
        btn_close = modal.find('.form__btn.form__btn_type_close');

    // Подключаем обработчик события к кнопке модального окна.
    btn_close.on('click', function () {
        return modal.hasClass('active') ? 
        modal.removeClass('active') : false;
    })

    $('.form__form').submit(function(e) {
        let $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function() {
            // Очищаем форму 
            $form.trigger('reset');

            // Если форма отправелена, то вешаем активный класс на модальное окно
            if (!modal.hasClass('active'))
                return modal.addClass('active');
        }).fail(function() {
            alert('Произошла неизвестная ошибка.')
            });
        e.preventDefault(); 
    });
});