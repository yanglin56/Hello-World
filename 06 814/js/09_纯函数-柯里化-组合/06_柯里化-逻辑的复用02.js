// function log(date, type, message) {
//   console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`)
// }

// log(new Date(), "DEBUG", "查找轮播图的bug")
// log(new Date(), "DEBUG", "查找菜单的bug")
// log(new Date(), "DEBUG", "查找数据的bug")

// 柯里化的优化
var log = date => type => message => {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`)
}

// 如果我现在打印的都是当前时间
var nowLog = log(new Date())
nowLog("DEBUG")("查找轮播图的bug")
nowLog("DEBUG")("查找菜单的bug")

var nowAndDebuglog = log(new Date())("DEBUG")
nowAndDebuglog("查找轮播图的bug")
nowAndDebuglog("查找轮播图的bug")
nowAndDebuglog("查找轮播图的bug")
nowAndDebuglog("查找轮播图的bug")

var nowAndFeturelog = log(new Date())("FETURE")
nowAndFeturelog("添加新功能")