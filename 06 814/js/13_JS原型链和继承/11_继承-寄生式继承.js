var pObj = {
  running: function () {
    console.log("running")
  }
}

function createStudent(name) {
  var stu = Object.create(personObj)
  stu.name = name
  stu.studying = function () {
    console.log("studying~")
  }
  return stu
}

var stuObj = createStudent("why")
var stuObj1 = createStudent("kobe")
var stuObj2 = createStudent("james")

// var stuObj = Object.create(personObj)
// stuObj.name = "why"
// stuObj.studying = function () {
//   console.log("studying~")
// }

// var stuObj1 = Object.create(personObj)
// stuObj.name = "kobe"
// stuObj.studying = function () {
//   console.log("studying~")
// }

// var stuObj2 = Object.create(personObj)
// stuObj.name = "james"
// stuObj.studying = function () {
//   console.log("studying~")
// }