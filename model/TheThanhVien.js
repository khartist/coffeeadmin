module.exports = function(sequelize, Sequelize) {
    const TheThanhVien = sequelize.define('thethanhvien', {
      MaThe: {
        type: Sequelize.CHAR(7),
        allowNull: false,
        primaryKey: true
      },
      CMND_KH: {
        type: Sequelize.CHAR(12),
        references: {
          model: 'KhachHang',
          key: 'CMND'
        }
      },
      LoaiThe: {
        type: Sequelize.CHAR(3),
        allowNull: false,
        validate: {
          isIn: [['NOR', 'VIP']]
        }
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_CMND_KH_TTV',
          references: {
            table: 'KhachHang',
            field: 'CMND'
          }
        }
      ]
    });
  
    return TheThanhVien;
  };
  