module.exports = function (sequelize, Sequelize) {
    const UuDai = sequelize.define('uudai', {
      MaUuDai: {
        type: Sequelize.CHAR(6),
        allowNull: false,
        primaryKey: true
      },
      ChiTiet: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      DoiTac: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      ThoiHan: {
        type: Sequelize.DATE,
        allowNull: false
      },
      SoLuong: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  
    return UuDai;
};
  