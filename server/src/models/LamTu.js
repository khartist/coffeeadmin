module.exports = function (sequelize, Sequelize) {
    const LamTu = sequelize.define('lamtu', {
      ID: {
        type: Sequelize.INTEGER,
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
          name: 'fk_ID_LT',
          references: {
            table: 'SanPham',
            field: 'ID'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        {
          type: 'foreign key',
          name: 'fk_MaNguyenLieu_LT',
          references: {
            table: 'NguyenLieu',
            field: 'MaNguyenLieu'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return LamTu;
};
  