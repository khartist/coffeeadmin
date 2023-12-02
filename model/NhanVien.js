
module.exports = (sequelize, Sequelize) => {
    const NhanVien = sequelize.define('nhanvien', {
        MaNhanVien: {
          type: Sequelize.CHAR(9),
          defaultValue: '0',
          primaryKey: true
        },
        HoVaTen: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        GioiTinh: {
          type: Sequelize.CHAR(1),
          allowNull: false,
          validate: {
            isIn: [['F', 'M']]
          }
        },
        SoNha: {
          type: Sequelize.STRING(50)
        },
        Phuong: {
          type: Sequelize.STRING(20)
        },
        Quan: {
          type: Sequelize.STRING(20)
        },
        TinhThanh: {
          type: Sequelize.STRING(30),
          allowNull: false
        },
        NgaySinh: {
          type: Sequelize.DATE,
          allowNull: false
        },
        ChucVu: {
          type: Sequelize.STRING(10),
          allowNull: false,
          validate: {
            isIn: [['PhucVu', 'ThuNgan', 'PhaChe', 'QuanLy', 'Bep']]
          }
        },
        MaChiNhanh: {
          type: Sequelize.CHAR(5),
          allowNull: false
        },
        MaQuanLy: {
          type: Sequelize.CHAR(9)
        },
        CanCuocCongDan: {
          type: Sequelize.CHAR(12),
          allowNull: false,
          unique: true
        }
      }, {
        constraints: [
          {
            type: 'foreign key',
            name: 'fk_MaChiNhanh_NV',
            references: {
              table: 'ChiNhanh',
              field: 'MaChiNhanh'
            }
          },
          {
            type: 'foreign key',
            name: 'fk_MaQuanLy_NV',
            references: {
              table: 'NhanVien',
              field: 'MaNhanVien'
            }
          }
        ]
    });
    return NhanVien
}