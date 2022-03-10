export const scrollToPosition = (distance: number, time: number): void => {
  // st为函数执行时滚动条到文档顶部的距离
  const st = document.documentElement.scrollTop
  // 需要滑动的距离
  const need = st - distance
  // 循环时间,值越小越耗性能
  const loopTime = 10
  // 循环次数
  let loopCount = time / loopTime
  // 每次步进的距离
  const step = need / loopCount

  const scrollTimer = setInterval(() => {
    if (loopCount > 0) {
      // 此项设置是为了精准定位
      loopCount !== 1
        ? (document.documentElement.scrollTop -= step)
        : (document.documentElement.scrollTop = distance)
      loopCount--
    } else {
      clearInterval(scrollTimer)
    }
  }, loopTime)
}
