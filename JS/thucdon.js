$(document).ready(function () {
    var offsetY;
    var toastAddCart = `
        <div class="toast-message">
            <div class="toast-icon"><i class="fas fa-check-circle"></i></div>
            <div class="toast-text"> Bạn đã thêm món </div>
            <div class="toast-close"><i class="fas fa-times"></i></div>
        </div>`;
    
    const parallaxs = document.querySelectorAll(".parallax");
    window.addEventListener("scroll", () => {
        offsetY = window.pageYOffset;
        parallaxs.forEach((parallax) => {
            parallax.style.backgroundPositionY = offsetY * -0.3 + "px";
        });
    });
    $('.slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        arrows:false,
        // autoplay: true,
        variableWidth: true,
        nextArrow: '<i class="fas fa-chevron-right slick-right-arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left slick-left-arrow"></i>'
      }).on('wheel', (function(e) {
        e.preventDefault();
      
        if (e.originalEvent.deltaY > 0) {
          $(this).slick('slickNext');
        } else {
          $(this).slick('slickPrev');
        }
      }));
      $('.card').each(function (indexInArray, valueOfElement) {
            if($(this).data('sp')){
                $(this).append(`
                    <img class="card-img-top" src="./IMG/thucdon/${sanpham[$(this).data('sp')].img}" alt="Card image cap">
                    <div class="card-body">
                        <h2 class="card-title">${sanpham[$(this).data('sp')].ten}</h2>
                        <ul class="card-text">
                            <h6>Đã bán: ${sanpham[$(this).data('sp')].daBan}</h6>
                            <div class="collapse">
                                ${sanpham[$(this).data('sp')].moTa}
                            </div>
                            <button class="btn btn-primary card-more-btn">
                                Chi Tiết  <i class="fas fa-chevron-down"> </i>
                            </button>
                        </ul>
                    </div>
                    <span class="card-price">${sanpham[$(this).data('sp')].gia1}.<span>000đ <span><del>${sanpham[$(this).data('sp')].gia2}.000đ</del></span></span></span>
                    <div class="button-group">
                        <button class="card-addCart">Thêm vào giỏ</button>
                        <button class="card-other" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Đặt ngay</button>
                    </div>
                `);
            }
      }).promise().done(function() {
        $('.card-more-btn').click(function (e) { 
            $(this).prev().collapse('toggle');
            $(this).toggleClass('rotate-180')
        });
        $('.card-other').click(function () { 
            var key = $(this).parents('.card').data('sp');
            $('.modal-body').html(`
                <img class="modal-img" src="./IMG/thucdon/${sanpham[$(this).parents('.card').data('sp')].img}" alt="Card image cap">
                <div class="modal-main">
                    <h2 class="card-title">${sanpham[$(this).parents('.card').data('sp')].ten}</h2>
                    <div class="card-star">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        <i class="fas fa-star"></i><i class="far fa-star"></i>
                    </div>
                    <ul class="card-text">
                        <h6>${sanpham[$(this).parents('.card').data('sp')].daBan}</h6>
                        <div>${sanpham[$(this).parents('.card').data('sp')].moTa}</div>
                    </ul>
                    <form class="modal-price-group">
                        <span class="modal-price card-price">${sanpham[$(this).parents('.card').data('sp')].gia1}.<span>000đ <span><del>${sanpham[$(this).parents('.card').data('sp')].gia2}.000đ</del></span></span></span>
                        <div class="modal-quantily">
                            <button class="" onclick="var result = document.getElementById('qtym');var qtypro = result.value; if( !isNaN( qtypro ) && qtypro > 1 ) result.value--;return false;" 
                            type="button">-</button>
                            <input type="text" id="qtym" name="quantity" value="1"">
                            <button class="" onclick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro )) result.value++;return false;" type="button">+</button>
                        </div>
                        <div class="modal-group-button">
                            <button type="button" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" data-bs-dismiss="modal" class="modal-other">Đặt</button>
                        </div>
                    </form>
                </div>
            `)

            $('.modal-other').click(function () {
                listCart[key] = $(this).parents('.modal-group-button').prev().children('input').val()
                localStorage.setItem('listCart', JSON.stringify(listCart));
                window.location.href = "./giohang.html"
            });
        });
        // cap nhat danh sach gio hang
        var listCart = {};
        console.log(localStorage)
        if (localStorage.listCart) {
            listCart = JSON.parse(localStorage.listCart);
        } else {
            localStorage.setItem('listCart', JSON.stringify(listCart));
        }
        $('.card-addCart').click(function () {
            $(toastAddCart).appendTo('.toast-container').delay(4500)
            .queue(function() {
                $(this).remove();
            });
            if (!listCart[$(this).parents('.card').data('sp')]) {
                listCart[$(this).parents('.card').data('sp')] = 1;
            }
            localStorage.setItem('listCart', JSON.stringify(listCart));
            console.log(localStorage.listCart);
        });
        localStorage.setItem('listCart', JSON.stringify(listCart));
      })
    
});