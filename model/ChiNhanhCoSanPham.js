module.exports = function (sequelize, Sequelize) {
    const ChiNhanhCoSanPham = sequelize.define('chinhanhcosanpham', {
      IDSanPham: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      MaChiNhanh: {
        type: Sequelize.CHAR(10),
        allowNull: false,
        primaryKey: true
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_IDSanPham_CNCSP',
          references: {
            table: 'SanPham',
            field: 'ID'
          }
        },
        {
          type: 'foreign key',
          name: 'fk_MaChiNhanh_CNCSP',
          references: {
            table: 'ChiNhanh',
            field: 'MaChiNhanh'
          }
        }
      ]
    });
  
    return ChiNhanhCoSanPham;
};
  