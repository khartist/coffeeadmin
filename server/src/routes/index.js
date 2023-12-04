const KhachHangRoute = require('./KhachHangRoute');
const TheThanhVienRoute = require('./TheThanhVienRoute');

const route = (app) => {
    app.use("/khachhang", KhachHangRoute);
    app.use("/thethanhvien", TheThanhVienRoute);
}

module.exports = route