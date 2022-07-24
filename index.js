// bài tập 1

document.getElementById("tinhTienTR").onclick = function () {
  // Đầu vào
  var soTR = document.getElementById("soTR").value * 1;
  var soNguoi = document.getElementById("soNguoi").value * 1;
  //   Xử lý
  var soNguoiPhuThuoc = soNguoi * 16e5;
  var soTienThue = 0;
  if (soTR <= 6e7) {
    soTienThue = (soTR - 4e6 - soNguoiPhuThuoc) * 0.05;
  } else if (soTR > 6e7 && soTR <= 12e7) {
    soTienThue = (soTR - 4e6 - soNguoiPhuThuoc) * 0.1;
  } else if (soTR > 12e7 && soTR <= 21e7) {
    soTienThue = (soTR - 4e6 - soNguoiPhuThuoc) * 0.15;
  } else if (soTR > 21e7 && soTR <= 384e6) {
    soTienThue = (soTR - 4e6 - soNguoiPhuThuoc) * 0.2;
  } else if (soTR > 384e6 && soTR <= 624e6) {
    soTienThue = (soTR - 4e6 - soNguoiPhuThuoc) * 0.25;
  } else if (soTR > 624e6 && soTR <= 96e7) {
    soTienThue = (soTR - 4e6 - soNguoiPhuThuoc) * 0.3;
  } else if (soTR > 96e7) {
    soTienThue = (soTR - 4e6 - soNguoiPhuThuoc) * 0.35;
  }

  // format vnđ
  var format = new Intl.NumberFormat("vn-VN");
  var soTienThueVND = format.format(soTienThue) + " vnd";
  // Đầu ra
  document.getElementById("thongBao").innerHTML = soTienThueVND;
};

// Bài tập 2
document.getElementById("tinhTienCap").onclick = function () {
  // Đầu vào
  var mySelect = document.getElementById("mySelect").value;
  var maKhanhHang = document.getElementById("maKhanhHang").value;
  var soKenh = document.getElementById("soKenh").value * 1;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  // Xử lý
  var doanhNghiep = soKetNoi;

  if (soKetNoi <= 10 && mySelect === "Doanh nghiệp") {
    doanhNghiep = 90 + soKenh * 50;
  } else if (soKetNoi > 10 && mySelect === "Doanh nghiệp") {
    doanhNghiep = 90 + (soKetNoi - 10) * 5 + soKenh * 50;
  } else if (mySelect === "Người dân") {
    doanhNghiep = 25 + soKenh * 7.5;
  } else if (mySelect === "Người dân" && soKenh === 0) {
    doanhNghiep = 25;
  } else {
    confirm("Vui lòng trọn khách hàng");
  }

  // format vnđ
  var format = new Intl.NumberFormat();
  var doanhNghiepTien = "$" + format.format(doanhNghiep);

  var dauRa =
    "Mã khách hàng: " + maKhanhHang + "; " + "Tiền cáp: " + doanhNghiepTien;
  // Đàu ra
  document.getElementById("thongBao2").innerHTML = dauRa;
};
