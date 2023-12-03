module.exports = function (sequelize, Sequelize) {
    const NguyenLieu = sequelize.define('NguyenLieu', {
      MaNguyenLieu: {
        type: Sequelize.CHAR(7),
        allowNull: false,
        primaryKey: true
      },
      Ten: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      DonViTinh: {
        type: Sequelize.ENUM('CAI', 'LIT', 'KG'),
        allowNull: false
      },
      MoTaNguyenLieu: {
        type: Sequelize.STRING(50)
      }
    });
  
    return NguyenLieu;
};
  