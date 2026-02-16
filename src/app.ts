import express from "express"
import cors from "cors"
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Sujoy!')
})
export default app;