module.exports = function(sequelize, Sequelize) {
    const EmailNhanVien = sequelize.define('emailnhanvien', {
      MaNhanVien: {
        type: Sequelize.CHAR(9),
        allowNull: false,
        primaryKey: true
      },
      Email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaNhanVien_Email',
          references: {
            table: 'NhanVien',
            field: 'MaNhanVien'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return EmailNhanVien;
  };
  