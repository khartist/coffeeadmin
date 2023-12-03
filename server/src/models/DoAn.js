module.exports = function (sequelize, Sequelize) {
    const DoAn = sequelize.define('doan', {
      ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
          name: 'fk_ID_DA',
          references: {
            table: 'SanPham',
            field: 'ID'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return DoAn;
};
  