import { QueryCallbackDTO } from '@common/ts/interfaces'
import { Pool, PoolClient, QueryResult } from 'pg'

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'test',
  database: 'sample',
  max: 20
})

function parseInserts(inserts: any[]): any[] {
  for (let i = inserts.length - 1; i >= 0; i--) {
    if (typeof inserts[i] === 'string') {
      inserts[i] = inserts[i].replace(/[\u00A0-\u9999<>&]/gim, (insert: string) => {
        return '&#' + insert.charCodeAt(0) + ';'
      })
    }
  }
  return inserts
}

export function query<T>(sql: string, inserts: string[] = [], callback: QueryCallbackDTO<T> = () => {}): void {
  inserts = parseInserts(inserts)
  pool.connect((err: Error, client: PoolClient, release: (release?: any) => void) => {
    if (err) {
      return callback(err)
    }
    client.query(sql, inserts, (err: Error, result: QueryResult<T>) => {
      release()
      if(err) {
        return callback(err)
      }
      callback(null, result)
    })
  })
}
