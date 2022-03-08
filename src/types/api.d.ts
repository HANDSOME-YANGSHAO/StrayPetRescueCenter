declare namespace API {
  interface Response<T> {
    code: number
    message: string
    data?: T
  }
  interface GetList<T> {
    total: number
    pageNum: number
    pageSize: number
    totalPage: number
    rows: T[]
  }
}
