module.exports = function(sequelize, Sequelize) {
    const SdtNhanVien = sequelize.define('sdtnhanvien', {
      MaNhanVien: {
        type: Sequelize.CHAR(9),
        allowNull: false,
        primaryKey: true
      },
      SDT: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaNhanVien_SDT',
          references: {
            table: 'NhanVien',
            field: 'MaNhanVien'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return SdtNhanVien;
};
  