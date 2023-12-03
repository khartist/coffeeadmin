module.exports = function (sequelize, Sequelize) {
    const GiaoDichCoNuocUong = sequelize.define('giaodichconuocuong', {
      ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      MaGD: {
        type: Sequelize.CHAR(5),
        allowNull: false,
        primaryKey: true
      },
      Size: {
        type: Sequelize.ENUM('LON', 'NHO'),
    //    allowNull: false,
        primaryKey: true
      },
      SoLuong: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_ID_GDCNU',
          references: {
            table: 'NuocUong',
            field: 'ID'
          }
        },
        {
          type: 'foreign key',
          name: 'fk_MaGD_GDCNU',
          references: {
            table: 'GiaoDich',
            field: 'MaGD'
          }
        }
      ]
    });
  
    return GiaoDichCoNuocUong;
};
  