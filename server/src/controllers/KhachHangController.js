const KhachHang = require('../models/KhachHang');
const Op = db.Sequelize.Op;

class KhachHangController {
    async create(req, res) {
        try {
            const khach = await KhachHang.create({
                CMND: req.body.CMND,
                HoVaTen: req.body.HoVaTen,
                SDT: req.body.SDT,
                Email: req.body.Email,
                NgaySinh: req.body.NgaySinh,
                MaChiNhanh: req.body.MaChiNhanh
            });
            res.status(201).send(khach);
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to create the customer'
            });
        }
    }

    async show (req, res) {
        try {
          const khach = await KhachHang.findById(req.params.CMND);
          res.send(khach)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the customers'
          })
        }
    }

    async showAll (req, res) {
        try {
          const khach = await KhachHang.findAll()
          res.send(khach)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the customers'
          })
        }
    }
    
    async update (req, res) {
        const _id = req.params.CMND;
        const khach = await KhachHang.findOne({
            where: {
                CMND: _id
            }
            }
        )
        if (!khach) {
            return res.status(404).send({
                message: 'Khách hàng không tồn tại'
            })
        }
        else {
            khach.CMND = req.body.CMND;
            khach.HoVaTen = req.body.HoVaTen;
            khach.SDT = req.body.SDT;
            khach.Email = req.body.Email;
            khach.NgaySinh = req.body.NgaySinh;
            khach.MaChiNhanh = req.body.MaChiNhanh;
            await khach.save()
        }
    }

    async delete(req, res) {
        const _id = req.params.CMND;
        const khach = await KhachHang.findOne({
            where: {
                CMND: _id
            }
            }
        )
        if (!khach) {
            return res.status(404).send({
                message: 'Khách hàng không tồn tại'
            })
        }
        else {
            await khach.destroy()
        }
    }
}

module.exports = new KhachHangController();