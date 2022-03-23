// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const validateContactInfo = (rule: unknown, value: string, callback: any): void => {
  const phoneReg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (/@/.test(value)) {
    if (value === '') {
      callback(new Error('邮箱不能为空'))
    } else if (!emailReg.test(value)) {
      callback(new Error('请输入正确的邮箱格式'))
    } else {
      callback()
    }
  } else {
    if (value === '') {
      callback(new Error('手机号不能为空'))
    } else if (!phoneReg.test(value)) {
      callback(new Error('请输入正确的手机号'))
    } else {
      callback()
    }
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const validateAge = (rule: unknown, value: string, callback: any): void => {
  if (!value) {
    return callback(new Error('请输入年龄'))
  } else if (isNaN(Number(value))) {
    callback(new Error('请输入数字'))
  } else {
    if (Number(value) < 0 || Number(value) > 200) {
      callback(new Error('请输入合法值'))
    } else {
      callback()
    }
  }
}

export const publishRules = {
  petName: [{ required: true, message: '宠物名不能为空' }],
  age: [{ validator: validateAge, trigger: 'blur' }],
  contactInfo: [{ validator: validateContactInfo, trigger: 'blur' }]
}
