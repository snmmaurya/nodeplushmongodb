import mongoose from 'mongoose';

const connectDatabase = async () => {
  mongoose.connect(process.env.DATABASE_CONNECTION_URL!,{
  }).then(()=>{
    console.log('Database connection success');
  }).catch((e)=>{
    console.log('Database connection failed: ' + e.message);
  })
};

export default {connectDatabase};