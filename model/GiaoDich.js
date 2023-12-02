module.exports = function(sequelize, Sequelize) {
    const GiaoDich = sequelize.define('GiaoDich', {
      MaGD: {
        type: Sequelize.CHAR(5),
        allowNull: false,
        primaryKey: true
      },
      ThoiGianGiaoDich: {
        type: Sequelize.DATE,
        allowNull: false
      },
      MaChiNhanh: {
        type: Sequelize.CHAR(10),
        references: {
          model: 'ChiNhanh',
          key: 'MaChiNhanh'
        }
      },
      IDThanhToan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PhuongThucThanhToan',
          key: 'ID'
        }
      },
      CMND_KH: {
        type: Sequelize.CHAR(12),
        references: {
          model: 'KhachHang',
          key: 'CMND'
        }
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaChiNhanh_GD',
          references: {
            table: 'ChiNhanh',
            field: 'MaChiNhanh'
          }
        },
        {
          type: 'foreign key',
          name: 'fk_IDThanhToan_GD',
          references: {
            table: 'PhuongThucThanhToan',
            field: 'ID'
          }
        },
        {
          type: 'foreign key',
          name: 'fk_CMND_KH_GD',
          references: {
            table: 'KhachHang',
            field: 'CMND'
          }
        }
      ]
    });
  
    return GiaoDich;
};
  