module.exports = function(sequelize, Sequelize) {
    const NhaCungCap = sequelize.define('NhaCungCap', {
      MaNCC: {
        type: Sequelize.CHAR(7),
        allowNull: false,
        primaryKey: true
      },
      MaSoThue: {
        type: Sequelize.CHAR(10),
        allowNull: false,
        unique: true
      },
      TenNCC: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      SoNha: {
        type: Sequelize.STRING(50)
      },
      Phuong: {
        type: Sequelize.STRING(15)
      },
      Quan: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      TinhThanh: {
        type: Sequelize.STRING(15),
        allowNull: false
      }
    }, {
      constraints: [
        {
          type: 'unique',
          name: 'unique_MaSoThue',
          fields: ['MaSoThue']
        }
      ]
    });
  
    return NhaCungCap;
  };
  