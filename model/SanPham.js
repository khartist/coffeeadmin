module.exports = function (sequelize, Sequelize) {
    const SanPham = sequelize.define('sanpham', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      TenSanPham: {
        type: Sequelize.STRING(15),
        allowNull: false
      }
    });
  
    return SanPham;
};
  