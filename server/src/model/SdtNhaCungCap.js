module.exports = function(sequelize, Sequelize) {
    const SdtNhaCungCap = sequelize.define('SdtNhaCungCap', {
      MaNCC: {
        type: Sequelize.CHAR(7),
        allowNull: false,
        primaryKey: true
      },
      SDT: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaNCC_SDT',
          references: {
            table: 'NhaCungCap',
            field: 'MaNCC'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return SdtNhaCungCap;
};
  