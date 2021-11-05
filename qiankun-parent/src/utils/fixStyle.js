// 定义styleCount用于记录<style>标签数，styleList用于保存<style>节点对象
let styleCount = 0, styleList = []
export const fixStyle = () => {
  let qiankunStyles = document.querySelectorAll('div[data-qiankun="senscapeElectricityProjectWeb"] style')
  let len = qiankunStyles.length
  if (styleCount < len) {
    console.log(`保存style数量：从${styleCount}变为${len}`)
    styleList = Array.from(qiankunStyles)
    styleCount = len
  } else if (styleCount > len) {
    let container = document.querySelectorAll('div[data-qiankun="senscapeElectricityProjectWeb"]')[0]
    qiankunStyles.forEach(style => { // 移除旧<style>
        container.removeChild(style)
    })
    styleList.forEach(style => { // 重新添加完整<style>
        container.appendChild(style)
    })
  }
}