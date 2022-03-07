const validatePhone = (rule: any, value: any, callback: any): void => {
  const phoneReg =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
  if (value === '') {
    callback(new Error('手机号不能为空'))
  } else if (!phoneReg.test(value)) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}
const validateEmail = (rule: any, value: any, callback: any): void => {
  const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (value === '') {
    callback(new Error('邮箱不能为空'))
  } else if (!emailReg.test(value)) {
    callback(new Error('请输入正确的邮箱格式'))
  } else {
    callback()
  }
}
const validateAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入年龄'))
  } else if (!Number.isInteger(value)) {
    callback(new Error('请输入数字'))
  } else {
    if (value < 0 || value > 1000) {
      callback(new Error('请输入正确的年龄！'))
    } else {
      callback()
    }
  }
}

export const commonRules = {
  userName: [{ required: true, message: '用户名不能为空' }],
  password: [
    { required: true, message: '密码不能为空' },
    { min: 3, max: 15, message: '密码长度应为 3 - 15位' }
  ],
  realName: [{ required: true, message: '真实姓名不能为空' }],
  age: [{ validator: validateAge, trigger: 'blur' }],
  address: [{ required: true, message: '地址不能为空' }],
  phoneNum: [{ validator: validatePhone, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }]
}
