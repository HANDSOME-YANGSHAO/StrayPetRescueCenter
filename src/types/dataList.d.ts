declare namespace INFO {
  interface pagination{
    pageNum: number
    pageSize: number
    total: number
  }

  interface ArticleData {
    id: string
    title: string
    avatar: string
    authorName: string
    publishTime: string
    content: string
    hitsNum: number
    replyNum: number
    thumbsUpNum: number
  }

  interface CommentData {
    avatar: string
    pickName: string
    publishTime: string
    content: string
    thumbsUpNum: number
    replyNum: number
  }
}
