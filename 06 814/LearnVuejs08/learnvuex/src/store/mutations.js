import { INCREMENT } from './mutations.types'
export default {
  // 方法
  [INCREMENT](state) {
    this.state.counter++
  },
  decrement(state) {
    this.state.counter--
  },
  //1.普通的提交封装
  // incrementCount(state, count) {
  //   state.counter += count
  // },
  incrementCount(state, payload) {
    state.counter += payload.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    state.info.name = 'coderwhy'

    // setTimeout(()=>{  //不能在这里异步操作有弊端，用action
    //   state.info.name ='coderwhy'
    // },1000)

    // state.info['address'] = '洛杉矶'
    // Vue.set(state.info, 'address', '洛杉矶')

    // 该方式做不到响应式
    // delete state.info.age
    // Vue.delete(state.info, 'age')
  }
}