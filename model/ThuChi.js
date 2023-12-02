module.exports = function(sequelize, Sequelize) {
    const ThuChi = sequelize.define('ThuChi', {
      Thang: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      Nam: {
        type: Sequelize.YEAR,
        allowNull: false,
        primaryKey: true
      },
      ChiPhiMatBang: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      MaChiNhanh: {
        type: Sequelize.CHAR(10),
        references: {
          model: 'ChiNhanh',
          key: 'MaChiNhanh'
        }
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaChiNhanh_TC',
          references: {
            table: 'ChiNhanh',
            field: 'MaChiNhanh'
          }
        }
      ]
    });
  
    return ThuChi;
};
  