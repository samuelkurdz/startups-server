export interface ResponsePayload<T> {
  message: string,
  status: 'error' | 'success',
  data: T
}