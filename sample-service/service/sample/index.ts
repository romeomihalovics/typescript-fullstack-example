import { Observable } from 'rxjs'
import { query } from '@common/database'
import { SampleDTO } from '@common/ts/interfaces'

export function SampleService(): Observable<SampleDTO> { 
  return new Observable(observer => {
    query<SampleDTO>('SELECT $1::text as message', ['Sample Text from db'], (err, result) => {
      observer.next(result?.rows[0])
    })
  })
}
