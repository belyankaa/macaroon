document.getElementById('burger').onclick = function () {
    document.getElementById('header__menu').classList.add('open');
}

document.querySelectorAll('#header__menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('header__menu').classList.remove('open')
    }
})

let obj
let form = $('.order__form')
let thanks = $('.thanks')
let loader = $('.loader')

$('#submit').click(function () {
    let name = $('#name')
    let phone = $('#phone')
    let order = $('#ordered')
    let hasError = false

    $('.error-input').hide()
    name.css('border', '1px solid #770a1d')
    phone.css('border', '1px solid #770a1d')
    order.css('border', '1px solid #770a1d')

    if (!name.val()) {
        name.css('border', '1px solid red')
        name.next().show()
        hasError = true
    }
    if (!phone.val()) {
        phone.css('border', '1px solid red')
        phone.next().show()
        hasError = true
    }
    if (!order.val()) {
        order.css('border', '1px solid red')
        order.next().show()
        hasError = true
    }

    if (!hasError) {
        loader.css('display', 'flex')
        $.ajax({
            method: "POST",
            url: "http://testologia.site/checkout",
            data: {name: name.val(), last_name: phone.val(), type: order.val()}
        })
            .done(function (msg) {
                loader.hide()
                console.log(msg)
                obj = msg
                if (obj.success === 1) {
                    form.hide()
                    thanks.show()
                } else {
                    form.hide()
                    thanks.show().text('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                }
            });

    }
})