module.exports = function(sequelize, Sequelize) {
    const VIPCoUuDai = sequelize.define('VIPCoUuDai', {
      MaThe: {
        type: Sequelize.CHAR(7),
        references: {
          model: 'TheThanhVien',
          key: 'MaThe'
        },
        primaryKey: true
      },
      MaUuDai: {
        type: Sequelize.CHAR(6),
        references: {
          model: 'UuDai',
          key: 'MaUuDai'
        },
        primaryKey: true
      }
    }, {
      constraints: [
        {
          type: 'foreign key',
          name: 'fk_MaThe_VIP',
          references: {
            table: 'TheThanhVien',
            field: 'MaThe'
          }
        },
        {
          type: 'foreign key',
          name: 'fk_MaUuDai_VIP',
          references: {
            table: 'UuDai',
            field: 'MaUuDai'
          }
        }
      ]
    });
  
    return VIPCoUuDai;
};
  