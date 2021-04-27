import { QueryResult } from 'pg'

export interface QueryCallbackDTO<T> {
  (
    error: Error | null,
    rows?: QueryResult<T>
  ): void
}

export interface SampleDTO {
  message: string;
}
