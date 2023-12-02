module.exports = function(sequelize, Sequelize) {
    const GiaoDichCuaNCC = sequelize.define('giaodichcuancc', {
      MaNCC: {
        type: Sequelize.CHAR(7),
        allowNull: false,
        primaryKey: true
      },
      MaNguyenLieu: {
        type: Sequelize.CHAR(7),
        allowNull: false,
        primaryKey: true
      },
      Gia: {
        type: Sequelize.NUMERIC(10, 2),
        allowNull: false
      },
      SoLuong: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Ngay: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaNCC_GD',
          references: {
            table: 'NhaCungCap',
            field: 'MaNCC'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        {
          type: 'foreign key',
          name: 'fk_MaNguyenLieu_GD',
          references: {
            table: 'NguyenLieu',
            field: 'MaNguyenLieu'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });
  
    return GiaoDichCuaNCC;
  };
  