declare namespace INFO {
  interface pagination{
    pageNum: number
    pageSize: number
    total: number
  }

  interface ArticleData {
    title: string
    avatar: string
    authorName: string
    publishTime: string
    content: string
    hitsNum: number
    replyNum: number
    thumbsUpNum: number
  }
}
