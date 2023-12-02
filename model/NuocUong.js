module.exports = function(sequelize, Sequelize) {
    const NuocUong = sequelize.define('nuocuong', {
      ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      Loai: {
        type: Sequelize.ENUM('NONG', 'LANH'),
    //    allowNull: false
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_ID_NU',
          references: {
            table: 'SanPham',
            field: 'ID'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return NuocUong;
};
  