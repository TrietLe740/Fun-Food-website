function chooseWorkPlace(s1, s2) {
    var country = document.getElementById("country");
    var workplace = document.getElementById("workplace");

    workplace.innerHTML = "";

    if (country.value == "hn") {
        var optionArr = ['hnhk|Fun Food Hoàn Kiếm', 'hnbd|Fun Food Ba Đình'];
    }else if (country.value == "hp") {
        var optionArr = ['hphp|Fun Food TP Hải Phòng'];
    }else if (country.value == "dn") {
        var optionArr = ['dn|Fun Food TP Đà Nẵng'];
    }else if (country.value == "tn") {
        var optionArr = ['tnpdp|Fun Food Phan Đình Phùng', 'tnhvt|Fun Food Hoàng Văn Thụ'];
    }else if (country.value == "kh") {
        var optionArr = ['khnt|Fun Food Nha Trang'];
    }else if (country.value == "bt") {
        var optionArr = ['btpt|Fun Food Phú Trinh'];
    }else if (country.value == "hcm") {
        var optionArr = ['hcmq9|Fun Food Quận 9', 'hcmtd|Fun Food TP. Thủ Đức'];
    }else if (country.value == "ct") {
        var optionArr = ['ctnk|Fun Food Ninh Kiều', 'ctcr|Fun Food Cái Răng'];
    }


    for (var option in optionArr) {
        var pair = optionArr[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        workplace.options.add(newoption);
    }
}