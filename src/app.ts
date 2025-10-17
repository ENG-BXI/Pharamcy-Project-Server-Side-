import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.status(201).json({message: 'Hello in Pharmacy Project'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Run in http://localhost:${PORT}/`);
});
