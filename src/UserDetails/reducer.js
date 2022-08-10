const initialstate={
    name:'Abhishek ojha',
    age:22
}

const UserDetailsReducer =(state=initialstate,action)=>{
      const {type,payload}=action;
      switch(type){
        case 'update name':
            return {...state,...{name:payload.name}}
        case 'update age':
            return {...state,...{age:payload.age}}
        default :
        return {...state};
      }
}
export default UserDetailsReducer;