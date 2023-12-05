console.log("start send request to server");
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./src/models')
const config = require('./src/config/db.config.js')
const moment = require('moment');

const app = express();
const port = 3000;

app.use(cors());
//app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sManager',
  password: 'admin2003',
  // user: 'root',
  // password: 'Quang@1802',
  database: 'INTERNET_CAFE'
})

app.listen(port, () => {
  console.log(`Server listening at: http://localhost:${port}`);
  connection.connect((err) => {
    if(err) throw err;
    console.log('Database connected');
  })
});


app.get('/khachhang', (req, res) => {
  // let sql = "SELECT * FROM KhachHang";
  let sql = "CALL GetAllKhachHang()";
  connection.query(sql, (err, results) => {
    if(err) throw err;
    const formattedResults = results[0].map((result) => ({
      ...result,
      NgaySinh: moment(result.NgaySinh).format('YYYY-MM-DD')
    }));
    res.send(formattedResults);
  })
})


// create new khach hang
app.use(express.json())
app.post('/khachhang/create', (req, res) => {
  const { CMND, HoVaTen, Email, SDT, NgaySinh, MaChiNhanh, LoaiThe} = req.body;
  const sql = `
    SELECT insert_khach_hang(?, ?, ?, ?, ?, ?, ?);
  `;
  const values = [CMND, HoVaTen, Email, SDT, NgaySinh, MaChiNhanh, LoaiThe];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error creating KhachHang:', err);
      res.status(500).json({ error: 'An error occurred while creating the KhachHang' });
      return;
    }

    res.status(201).json({ message: 'KhachHang created successfully', id: results.insertId });
  });
});
//xem khach hang 
app.get('/khachhang/:id', (req, res) => {
  const key = req.params.id;
  const sql = 'CALL GetKhachHangWithTheThanhVienDetails(?)';
  connection.query(sql, [key], (err, results) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'An error occurred while retrieving the value' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Value not found' });
      return;
    }
    res.json({ key, values: results });
  })
});
//xoa
app.delete('/khachhang/delete/:id', (req, res) => {
  const customerId = req.params.id; // Assuming the customer ID is stored as a parameter in the URL path

  // Perform validation and error handling as needed

  // Execute the SQL query to delete the customer
  const sql = 'CALL DeleteCustomerAndMembership(?)';
  connection.query(sql, [customerId], (err, results) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'An error occurred while deleting the customer' });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }

    res.status(200).json({ message: 'Customer deleted successfully' });
  });
});
//update 
app.put('/khachhang/update/:id', (req, res) => {
  const customerId = req.params.id; // Assuming the customer ID is stored as a parameter in the URL path
  const {HoVaTen, Email, SDT, NgaySinh, MaChiNhanh, LoaiThe} = req.body;

  // Perform validation and error handling as needed

  // Execute the SQL query to update the customer
  const sql = 'SELECT update_khach_hang(?, ?, ?, ?, ?, ?, ?)';
  const values = [customerId, HoVaTen, Email, SDT, NgaySinh, MaChiNhanh, LoaiThe];
  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'An error occurred while updating the customer' });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }

    res.json({ message: 'Customer updated successfully' });
  });
});

//get avg khach hang ratings
app.get('/khachhang/rating/:id', (req, res) => {
  const customerId = req.params.id;
  const sql = 'SELECT GetAverageRating_KH(?) AS avgRating';
  connection.query(sql, [customerId], (err, results) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).json({ error: 'An error occurred while retrieving the value' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Value not found' });
      return;
    }
    const avgRating = results[0].avgRating;
    res.json({avgRating});
  })
})

app.get('/khachhang/sort/')

