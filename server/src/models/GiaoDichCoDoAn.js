module.exports = function (sequelize, Sequelize) {
    const GiaoDichCoDoAn = sequelize.define('giaodichcodoan', {
      ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      MaGD: {
        type: Sequelize.CHAR(5),
        allowNull: false,
        primaryKey: true
      },
      SoLuong: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_ID_GDCDA',
          references: {
            table: 'DoAn',
            field: 'ID'
          }
        },
        {
          type: 'foreign key',
          name: 'fk_MaGD_GDCDA',
          references: {
            table: 'GiaoDich',
            field: 'MaGD'
          }
        }
      ]
    });
  
    return GiaoDichCoDoAn;
};
  