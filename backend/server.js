require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/articles', require('./routes/articles'));
app.use('/api/teachers', require('./routes/teachers'));
app.use('/api/programs', require('./routes/programs'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/faqs', require('./routes/faqs'));
app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/subscriptions', require('./routes/subscriptions'));

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
  })
  .catch((err) => console.error('Koneksi database gagal:', err));
