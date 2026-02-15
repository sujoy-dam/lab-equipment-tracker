import express from "express"
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Sujoy!')
})
export default app;