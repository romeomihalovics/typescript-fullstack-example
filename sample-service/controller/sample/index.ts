import {Request, Response} from 'express'
import { SampleService } from '@/service/sample'
import { SampleDTO } from '@common/ts/interfaces'

export function SampleController(req: Request, res: Response): void {
  SampleService().subscribe((result: SampleDTO) => {
    res.json(result)
  })
}
