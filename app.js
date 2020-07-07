import express from 'express';
import studentRouter from './routes/studentRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Conectar ao MongoDB usando Mongoose
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.USERDBPASSWORD}@cluster0.3xpjn.mongodb.net/grades?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    console.log(
      `Erro ao tentar conectar com o banco de dados. Detalhes: ${error.message}`
    );
  }
})();
const app = express();

app.use(express.json());
app.use('/student', studentRouter);

app.listen(process.env.PORT, () => console.log('API started'));
