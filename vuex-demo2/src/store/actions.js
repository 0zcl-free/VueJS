import types from './mutation-types'

const actions={
  incrementAsync({commit,state}){
    var p = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve();
      }, 2000);
    })
    p.then(()=>{
      console.log('commit increment')
      commit(types.INCREMENT)
    }).catch(()=>{
      console.log('异步操作')
    })
  }
}

export default actions
