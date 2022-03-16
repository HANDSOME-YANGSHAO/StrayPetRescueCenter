declare namespace INFO {
  interface pagination{
    pageNum: number
    pageSize: number
    total: number
  }

  interface ArticleData {
    title: string
    time: string
    content: string
  }
}
