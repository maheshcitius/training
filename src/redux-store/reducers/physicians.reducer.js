import { physiciansConstants } from '../constants';

const initialState = { 
  physicians  :[],
  getPhysicianRequestSuccess:false
}

 function  physiciansReducer(state = initialState , action){
   console.log('physiciansReducer--',action.type)
    switch (action.type) {
      case physiciansConstants.GETALL_PHYSICIANS_REQUEST:
       
        return{
          getPhysicianRequestSuccess: true,
          physicians: []
         }
      case physiciansConstants.GETALL_PHYSICIANS_SUCCESS: 
      console.log('inside physicians reducers succ',action.physicians)
      return{
        ...state,
        physicians: action.physicians,
       }
        
       case physiciansConstants.POST_PHYSICIANS_REQUEST:
         return{
          ...state,
          physicians: action.physicians,
         }
      case physiciansConstants.POST_PHYSICIANS_SUCCESS:
          return{
            ...state,
            physicians: action.physicians
          }
      case physiciansConstants.POST_PHYSICIANS_FAILURE:
            return{
              ...state,
              physicians: action.physicians
            }            
      case physiciansConstants.DELETE_PHYSICIANS_REQUEST:
         return{
          ...state,
          physicians: action.physicians,
         }
      case physiciansConstants.DELETE_PHYSICIANS_SUCCESS:
          return{
            ...state,
            physicians: action.physicians
          }
      case physiciansConstants.DELETE_PHYSICIANS_FAILURE:
            return{
              ...state,
              physicians: action.physicians
            }
      
      default:
        return{
          ...state,
          physicians: action.physicians
         }
    }
  } 
  export default physiciansReducer