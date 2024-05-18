console.log('TWITTER-WIPER: loaded: ver 2024-05-18 16:25 GMT+0900')
const className = 'r-l5o3uw'

window.onload = () => {
  obj = document.getElementsByClassName(className); for (o of obj) { o.style.opacity = 0.1 }
  console.log(`TWITTER-WIPER: onload() executed: check document.getElementsByClassName("${className}")`)
}
window.onfocus = () => {
  obj = document.getElementsByClassName(className); for (o of obj) { o.style.opacity = 0.1 }
  console.log(`TWITTER-WIPER: onfocus() executed: check document.getElementsByClassName("${className}")`)
}
window.onpopstate = () => {
  obj = document.getElementsByClassName(className); for (o of obj) { o.style.opacity = 0.1 }
  console.log(`TWITTER-WIPER: onpopstate() executed: check document.getElementsByClassName("${className}")`)
}
