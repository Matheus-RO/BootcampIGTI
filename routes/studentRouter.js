import express from 'express';
import { studentModel } from '../models/student.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndDelete({ _id: req.params.id });
    if (!student) {
      res.status(400).send('Documento não encontrado na coleção');
    }
    res.send();
    res.send(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
