module.exports = function (sequelize, Sequelize) {
    const EmailNhaCungCap = sequelize.define('EmailNhaCungCap', {
      MaNCC: {
        type: Sequelize.CHAR(7),
        allowNull: false,
        primaryKey: true
      },
      Email: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaNCC_Email',
          references: {
            table: 'NhaCungCap',
            field: 'MaNCC'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return EmailNhaCungCap;
  };
  