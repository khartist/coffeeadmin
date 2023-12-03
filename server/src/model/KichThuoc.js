module.exports = function (sequelize, Sequelize) {
    const KichThuoc = sequelize.define('kichthuoc', {
      ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      Size: {
        type: Sequelize.ENUM('LON', 'NHO'),
      //  allowNull: false,
        primaryKey: true
      },
      Gia: {
        type: Sequelize.NUMERIC(10, 2),
        allowNull: false
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_ID_KT',
          references: {
            table: 'NuocUong',
            field: 'ID'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return KichThuoc;
};
  