$(document).ready(function () {
    var listCart = {};
    var price = 0;
    var toastOther =`
        <div class="toast-message toast-message--other">
            <div class="toast-icon"><i class="fas fa-check-circle"></i></div>
            <div class="toast-text"> Bạn đã đặt thành công </div>
            <div class="toast-close"><i class="fas fa-times"></i></div>
        </div>`;
    // cap nhat danh sach gio hang
    function showCart () {
        var count = 0;
        if (localStorage.listCart) {
            listCart = JSON.parse(localStorage.listCart);
        } else {
            localStorage.setItem('listCart', JSON.stringify(listCart));
        }
        $('.bill').html('');
        $('.pay').html('');
        
        if (!jQuery.isEmptyObject(listCart)) {
            price = 0;
            $.each(listCart, function (key, value) {
                price += value * sanpham[key].gia1;
                $('.bill').append(`
                    <tr data-sp=${key}>
                        <th scope="row">${++count}</th>
                        <td class="bill-product">
                            <img src="./IMG/thucdon/${sanpham[key].img}" alt="">
                            <h4>${sanpham[key].ten}</h4>
                        </td>
                        <td>${sanpham[key].gia1}.000đ</td>
                        <td>
                            <div class="bill-quantily">
                                <button class="sub-quantily" type="button">-</button>
                                <input type="text" id="qtym" name="quantity" min="0" value="${value}">
                                <button class="add-quantily" type="button">+</button>
                            </div>
                        </td>
                        <td>${value * sanpham[key].gia1}.000đ</td>
                        <td class="remove-product"><i class="fas fa-trash-alt"></i></td>
                    </tr>
                `);
            });
            $('.pay').html(`
                <tr>
                    <td></td>
                    <td colspan="2">Bạn đã chọn ${count} món</td>
                    <td>Tổng Thanh Toán</td>
                    <td>${price}.000đ</td>
                </tr>
                <tr class="pay-button">
                    <td></td>
                    <td colspan="2"></td>
                    <td class="return-donhang"><a href="./thucdon.html">Tiếp Tục Mua Hàng</a></td>
                    <td class="pay-bill "><a class="remove-all-product pay-bill" href="#!">Thanh Toán Ngay</a></td>
                </tr>
            `);
            $('.sub-quantily').click(function (e) {
                var result = $(this).next().val();
                result = (result<1)?1:result;
                listCart[$(this).parents('tr').data('sp')] = --result;
                localStorage.setItem('listCart', JSON.stringify(listCart));
                showCart ();
            });
            $('.add-quantily').click(function (e) {
                listCart[$(this).parents('tr').data('sp')]++;
                localStorage.setItem('listCart', JSON.stringify(listCart));
                showCart ();
            });
            $('.remove-all-product').click(function (e) {
                delete listCart[$(this).parents('tr').data('sp')];
                localStorage.setItem('listCart', `{}`);
                showCart ();
                console.log(localStorage.listCart)
            });
            $('.remove-product').click(function (e) {
                delete listCart[$(this).parents('tr').data('sp')];
                localStorage.setItem('listCart', JSON.stringify(listCart));
                showCart ();
                console.log(localStorage.listCart)
            });
            $('.pay-bill').click(function (e) { 
                $(toastOther).appendTo('.toast-container').delay(4500)
                .queue(function() {
                    $(this).remove();
                });
            });
        } else {
            $('.bill').append(`<tr><td class="empty-bill" colspan="6"><h4>Giỏ hàng trống</h4><a href="./thucdon.html">Đén trang mua</a></td></tr>`)
        }
    }
    
    showCart ();
    window.onstorage = function () {
        showCart ();
        console.log(listCart);
    }
});