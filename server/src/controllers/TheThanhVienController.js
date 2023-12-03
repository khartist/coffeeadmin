const TheThanhVien = require('./models/TheThanhVien');

class TheThanhVienController {
    async create(req, res){
        try {
            const thanhvien = await TheThanhVien.create({
                CMND_KH: req.body.CMND_KH,
                MaThe: req.body.MaThe,
                LoaiThe: req.body.LoaiThe,
            });
            res.status(201).send(thanhvien);
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to create the customer'
            })
        }
    }
    async showAll(req, res) {
        try {
            const thanhvien = await TheThanhVien.findAll()
            res.send(thanhvien)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to show the status'
            })
        }
    }
    async show (req, res) {
        try {
          const khach = await KhachHang.findById(req.params.CMND_KH);
          res.send(khach)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the customers'
          })
        }
    }
    async delete(req, res) {
        const _id = req.params.MaThe;
        const khach = await TheThanhVien.findOne({
            where: {
                MaThe: _id
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

    async update (req, res) {
        const _id = req.params.CMND;
        const thanhvien = await thanhvien.findOne({
            where: {
                CMND: _id
            }
            }
        )
        if (!thanhvien) {
            return res.status(404).send({
                message: 'Khách hàng không tồn tại'
            })
        }
        else {
            thanhvien.CMND_KH = req.body.CMND_KH;
            thanhvien.MaThe = req.body.MaThe;
            thanhvien.LoaiThe = req.body.LoaiThe;
            await thanhvien.save();
        }
    }
}

module.exports = new TheThanhVienController();