module.exports = function(sequelize, Sequelize) {
    const PhuongThucThanhToan = sequelize.define('PhuongThucThanhToan', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      PhiGiaoDich: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      Loai: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    });
  
    return PhuongThucThanhToan;
};
  