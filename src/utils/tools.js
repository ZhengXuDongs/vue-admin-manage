export const formatMenuData = (roleArray, asyncRouterMap) => {
  const Array = []
  asyncRouterMap.map((item, index) => {
    if (roleArray.indexOf(item.code) === -1) {
    } else {
      Array.push(item)
      if (item.children && item.children.length > 0) {
        Array[index].children = formatMenuData(roleArray, item.children)
      }
    }
  })

  return Array
}

export default {
  install(Vue) {
    Vue.prototype.$formatMenuData = formatMenuData
  }
}
