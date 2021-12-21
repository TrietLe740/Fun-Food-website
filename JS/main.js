// Load page
$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	$('.preloader').delay(500).fadeOut('fast');
});

// Kiểm tra form
function frmTest(frm) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var phoneReg = /^[0-9]{9,10}$/;

    if(frm.lname) {
            if ( frm.lname.value.length < 2 ) {
                alert("Vui lòng nhập họ hợp lệ.");
                frm.lname.focus();
                return false;
            }
        }
    if ( frm.name.value.length < 4 ) {
        alert("Vui lòng nhập tên hợp lệ.");
        frm.name.focus();
        return false;
    }
    console.log('frm.email.value')
    if ( emailReg.test(frm.email.value ) == false) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        frm.email.focus();
        return false;
    }
	if ( phoneReg.test(frm.phone.value ) == false) {
        alert("Vui lòng nhập số điện thoại hợp lệ.");
        frm.phone.focus();
        return false;
    }
	if ( frm.message.value.length < 4 ) {
        alert("Nội dung liên hệ quá ngắn, vui lòng nhập từ 10 ký tự trở lên.");
        frm.message.focus();
        return false;
    }
    alert("Thông tin của bạn đã được gửi đi");
    return true;
}