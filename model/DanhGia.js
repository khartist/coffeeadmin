module.exports = function(sequelize, Sequelize) {
    const DanhGia = sequelize.define('danhgia', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      DiemSo: {
        type: Sequelize.DECIMAL(2, 1),
        allowNull: false
      },
      GopY: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      CMND_KH: {
        type: Sequelize.CHAR(12),
        references: {
          model: 'KhachHang',
          key: 'CMND'
        }
      },
      MaChiNhanh: {
        type: Sequelize.CHAR(10),
        references: {
          model: 'ChiNhanh',
          key: 'MaChiNhanh'
        }
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_CMND_KH_DG',
          references: {
            table: 'KhachHang',
            field: 'CMND'
          }
        },
        {
          type: 'foreign key',
          name: 'fk_MaChiNhanh_DG',
          references: {
            table: 'ChiNhanh',
            field: 'MaChiNhanh'
          }
        }
      ]
    });
  
    return DanhGia;
  };
  