const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/library-management-api';

mongoose.connect(MONGODB_URI).catch(err => {
    console.error('MongoDB connection error:', err.message);
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Database connected successfully...');
});

db.on('error', (err) => {
    console.error('Database connection error:', err.message);
});

db.on('disconnected', () => {
    console.log('Database disconnected');
});

module.exports = db;