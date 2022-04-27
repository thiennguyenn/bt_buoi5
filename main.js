function getEl(id) {
    return document.getElementById(id);

}

const A = 2;
const B = 1;
const C = 0.5;

const DT_1 = 2.5;
const DT_2 = 1.5;
const DT_3 = 1;
var diemTb = 0;
var diemChuan = 0;

function diemKV(diemKhuVuc) {
    var dKV = 0;

    if (diemKhuVuc === "A") {
        dKV = 2;
    } else if (diemKhuVuc === "B") {
        dKV = 1;
    } else if (diemKhuVuc === "C") {
        dKV = 0.5;
    } else {
    }
    return dKV;
}


function doiTuong(diemdoiTuong) {
    var dT = 0;

    if (diemdoiTuong === "1") {
        dT = 2.5;
    } else if (diemdoiTuong === "2") {
        dT = 1.5;
    } else if (diemdoiTuong === "2") {
        dT = 1;
    }
    return dT;
}


function diemCacMon(mon1, mon2, mon3) {
    if (mon1 <= 10 || mon2 <= 10 || mon3 <= 10) {
        true
    } else {
        false
        kqDiem = "Nhập điểm từ 0đ đến 10đ";
    }

}

// return    


document.getElementById("ketQuaDiem").onclick = function () {
    var mon1 = getEl("mon1").value * 1;
    var mon2 = getEl("mon2").value * 1;
    var mon3 = getEl("mon3").value * 1;
    var diemChuan = getEl("diemChuan").value * 1;
    var diemKhuVuc = getEl("chonKV").value;
    var diemdoiTuong = getEl("chonDT").value;
    var kqDiem = "";
    diemCacMon(mon1, mon2, mon3);

    var diemKVuc = diemKV(diemKhuVuc);
    var diemdTuong = doiTuong(diemdoiTuong);

    var diemUuTien = diemKVuc + diemdTuong;
    var diemTong = mon1 + mon2 + mon3 + diemUuTien;

    if (diemChuan < diemTong) {
        kqDiem = "Chúc Mừng bạn đã đậu - Điểm của bạn là: " + diemTong + "đ";

    } else {
        kqDiem = "Bạn đã rớt - Điểm của bạn là: " + diemTong + "đ";

    }


    if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
        kqDiem = "Bạn đã rớt - Điểm của bạn là: " + diemTong + "đ";

    }
    getEl("footerKetQuaDiem").innerHTML = kqDiem;
}



// bài tập 2
const DIEN_1 = 500;
const DIEN_2 = 650;
const DIEN_3 = 850;
const DIEN_4 =  1100;
const DIEN_5= 1300;

var tiendien_1 = 0;
var tiendien_2 = 0;
var tiendien_3 = 0;
var tiendien_4 = 0;
var tiendien_5 = 0;

var tongTienDien = 0;


function tinhTienDien(soKW, tienkW1, tienkW2, tienkW3, tienkW4, tienkW5) {
    
    if (0<soKW&&soKW<50) {
        tiendien_1=  tienkW1*soKW;
        tongTienDien = tiendien_1;
    } else if (soKW>50&&soKW<100){
        tiendien_1 =(49)*tienkW1;
        tiendien_2=tienkW2*(soKW-50);
        tongTienDien = tiendien_1 +tiendien_2;
    }
    else if (soKW>100&&soKW<200){
        tiendien_1 =(49)*tienkW1;
        tiendien_2=tienkW2*(100-49);
        tiendien_3=tienkW3*(soKW-100);
        tongTienDien = tiendien_1 +tiendien_2+tiendien_3;
    }
    else if (soKW>200&&soKW>350){
        tiendien_1 =(49)*tienkW1;
        tiendien_2=tienkW2*(100-49);
        tiendien_3=tienkW3*(200-100-49);
        tiendien_4=tienkW4*(soKW-200);

        tongTienDien = tiendien_1 +tiendien_2+tiendien_3+tiendien_4;
    }
    else if (soKW>350){
        tiendien_1 =(49)*tienkW1;
        tiendien_2=tienkW2*(100-49);
        tiendien_3=tienkW3*(200-100-49);
        tiendien_4=tienkW4*(350-200-100-49);
        tiendien_5=tienkW5*(soKW-350);

        tongTienDien = tiendien_1 +tiendien_2+tiendien_3+tiendien_4+tiendien_5;
    }
    

}


getEl("kqTienDien").onclick = function () {
    var hoTen = getEl("hoTen").value;
    var soKW = getEl("tienDien").value*1;
    var tien = new Intl.NumberFormat("vn-VN");

  if (soKW>0) {
    tinhTienDien(soKW, DIEN_1, DIEN_2, DIEN_3, DIEN_4, DIEN_5);
  } else {
      
  }

 
   var ketqua = "Tên bạn là: "+hoTen+ "<br>"+" Số tiền điện phải trả: "+tongTienDien;
  getEl("footerTienDien").innerHTML = ketqua;
}