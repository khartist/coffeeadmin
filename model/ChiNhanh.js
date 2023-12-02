module.exports = (sequelize, Sequelize) => {
    const chiNhanh = sequelize.define("chiNhanh", {
        MaChiNhanh: {
            type: Sequelize.CHAR(5),
            primaryKey: true
        },
        SoNha: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Phuong: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        Quan: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        TinhThanh: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        MaQuanLy: {
            type: Sequelize.CHAR(9),
            allowNull: false
        },
        SoLuongNhanVien: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        DanhGiaTrungBinh: {
            type: Sequelize.DECIMAL(2, 1),
            allowNull: false,
            defaultValue: 0.0
        }
    },{
        constraints: [
            {
              type: 'foreign key',
              name: 'fk_MaQuanLy_CN',
              references: {
                table: 'NhanVien',
                field: 'MaNhanVien'
              }
            }
        ]
    });
  
    return chiNhanh;
  };