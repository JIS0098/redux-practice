import store from "../store"

let initialState={
    count:0
}

function reducer(state=initialState,action){
    if(action.type ==="INCREMENT"){ //조건
        return {...state, count: state.count+1};
        // {count외 state 변경방지, state를 어떻게 바꿀지}
        // 조건과 리턴값은 여러개 추가가능 
    }

  return {...state}  //{바뀐state값과 기존객체내용이 복사 돼있는 새로운객체를 리턴}
}

export default reducer 

