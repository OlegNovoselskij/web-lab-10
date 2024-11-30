const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Підключення до бази даних MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '61hovumo',
    database: 'cars_db',
    port: 3306
});

// Перевірка підключення
db.connect(err => {
    if (err) {
        console.error('Помилка підключення до MySQL:', err);
        return;
    }
    console.log('Підключено до MySQL');
});

// Middleware для CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

// Маршрут з фільтрами
app.get('/api/cars', (req, res) => {
    const { search, maxPrice } = req.query;

    let query = 'SELECT * FROM cars';
    let params = [];

    // Додати умови пошуку
    if (search) {
        query += ' WHERE name LIKE ? OR description LIKE ?';
        const searchParam = `%${search}%`;
        params.push(searchParam, searchParam);
    }

    // Додати умови фільтру за ціною
    if (maxPrice) {
        query += params.length ? ' AND price <= ?' : ' WHERE price <= ?';
        params.push(parseFloat(maxPrice));
    }

    // Виконання запиту
    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Помилка виконання запиту:', err);
            res.status(500).json({ error: 'Внутрішня помилка сервера' });
            return;
        }

        res.json(results); // Повертаємо всі автомобілі або відфільтровані
    });
});

// Запуск сервера
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

