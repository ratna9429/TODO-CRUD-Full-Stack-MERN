import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import taskRoutes from './routes/TaskRoutes.js'

dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('API is walking...')
})

app.use('/api/task' , taskRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
})
