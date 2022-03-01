import { defineStore } from 'pinia';

export const useCountStroe = defineStore({
  // 这个为必填项
  id: 'count',
  // state用箭头函数的原因：
  // 1；防止ssr渲染那边造成环境污染
  // 2: 更好的支持Typescript类型判断
  state: () => {
    return {
      count: 1,
      status: '在职',
      arr: [1,2,3]
    }
  },
  actions: {
    // actions里的方法不能用箭头函数，不然会改变this指向
    changeCount() {
      this.count += 1
      this.status = '离职'
      this.arr.push(4)
    }
  },
  getters: {
    // 定义getters函数时不接收参数
    // 通过this来更改状态，这种写法得加类型判断
    getCountStatus(): string {
      return this.count + this.status
    },
    // 定义getters函数时接收参数
    getCountStatus2(state) {
      return state.count + 'getters版本2'
    }
  }
})