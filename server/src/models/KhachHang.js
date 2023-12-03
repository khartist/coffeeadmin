module.exports = function(sequelize, Sequelize) {
    const KhachHang = sequelize.define('khachhang', {
      CMND: {
        type: Sequelize.CHAR(12),
        allowNull: false,
        primaryKey: true
      },
      HoVaTen: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      SDT: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      NgaySinh: {
        type: Sequelize.DATE
      },
      MaChiNhanh: {
        type: Sequelize.CHAR(10)
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaChiNhanh_KH',
          references: {
            table: 'ChiNhanh',
            field: 'MaChiNhanh'
          }
        }
      ]
    });
  
    return KhachHang;
};
  