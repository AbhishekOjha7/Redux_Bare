const initialstate={
 data:[
     {
         nam:'Abhishek',
         emai:'abhi@g.com'
     }
 ]
}

const FormReducer =(state=initialstate,action)=>{
      const {type,payload}=action;

      switch(type){
        case 'Add Details':
            return {...state,data: [...state.data, payload]}
        case 'Update Details':
            return {...state, ...payload}
        case 'Delete':
                return{...state,...payload}
        case 'Edit':
            return{...state,...payload}

        default :
        return {...state};
      }
}
export default FormReducer;