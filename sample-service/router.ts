import { SampleController } from './controller/sample'
import { Application } from 'express'

export function Router(app: Application): void {
  app.route('/sample').get(SampleController)
}
