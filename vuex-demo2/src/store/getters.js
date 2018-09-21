const getters={
  isEvenOrOdd(state){
    return state.user.count%2==0?'偶数':'奇数';  // 需要用到state.模块名.count
  }
}

export default getters;
