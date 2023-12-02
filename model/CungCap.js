module.exports = function (sequelize, Sequelize) {
    const CungCap = sequelize.define('cungcap', {
      MaNCC: {
        type: Sequelize.CHAR(7),
        allowNull: false,
        primaryKey: true
      },
      MaNguyenLieu: {
        type: Sequelize.CHAR(7),
        allowNull: false,
        primaryKey: true
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaNCC_CC',
          references: {
            table: 'NhaCungCap',
            field: 'MaNCC'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        {
          type: 'foreign key',
          name: 'fk_MaNguyenLieu_CC',
          references: {
            table: 'NguyenLieu',
            field: 'MaNguyenLieu'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return CungCap;
};
  