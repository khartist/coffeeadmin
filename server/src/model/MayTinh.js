module.exports = function(sequelize, Sequelize) {
    const MayTinh = sequelize.define('MayTinh', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      TinhTrang: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      MaChiNhanh: {
        type: Sequelize.CHAR(10),
        references: {
          model: 'ChiNhanh',
          key: 'MaChiNhanh'
        }
      },
      SoLuong: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaChiNhanh_MT',
          references: {
            table: 'ChiNhanh',
            field: 'MaChiNhanh'
          }
        }
      ]
    });
  
    return MayTinh;
};
  