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

  interface PetData {
    id: string
    petName: string
    age: string
    contactInfo: string
    petIntroduction: string
    sex: string
    petCategory: string
    character: string
    vaccinated: string
    adoptionRecord: string
    imgList: string[]
  }

  interface feedRecordData {
    id: string
    petName: string
    remarks: string
    datetime: string
    feedPlace: string
    imgList: string[]
  }

  interface PayRecord {
    time: string
    pay: number
    title: string
    describe: string
    imgList: string[]
  }
  interface IncomeRecord {
    time: string
    income: number
    title: string
    describe: string
    imgList: string[]
  }
  interface LoveList {
    userName: string
    location: string
    donation: number
  }

  interface Notice {
    id: string
    title: string
    date: string
    content: string
  }
}
