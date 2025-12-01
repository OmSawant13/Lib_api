const mongoose=require('mongoose');

const MONGODB_URI=process.env.MONGODB_URI || 'mongodb://localhost:27017/library-management-api';

mongoose.connect(MONGODB_URI);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Database connected successfully...');
});

db.on('error',(err)=>{
    console.log('Database connection failed...', err);
});

module.exports=db;