import express from 'express'
import { Router } from './router'
import cors from 'cors'

const app: express.Application = express()

app.use(cors({
  origin: ['*']
} as cors.CorsOptions));
Router(app)
app.listen(3000, () => {
  console.log('App is listening on port 3000!')
})
