import express, {Request, Response} from 'express';
import cors from 'cors';
import crossDomain from './middlewares/crossDomain';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET || 'Ocean'}));


// middlewares
// CORS middleware
app.use(crossDomain);

const PORT = process.env.PORT || 3003

// Health
app.get('/', (req: Request, res: Response)=>{
  res.set('Access-Control-Allow-Origin', '*');
  res.status(200).json({message: 'Server is healthy'})
})


// Database


// Routes


// Server

app.listen(PORT, () => {
  console.log("Server started on PORT: " + PORT)
});