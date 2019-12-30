const initialState = {
  ListExample: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const blabla = (state = initialState, action) => {
  switch (action.type) {
//////////////  G E T /////////////////////////////////////////

    case 'GET_EXAMPLEE_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_EXAMPLEE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_EXAMPLEE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        ListExample: action.payload.data,
      };
/////////////POST//////////////////////////////////////////

    case "POST_EXAMPLEE_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "POST_EXAMPLEE_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "POST_EXAMPLEE_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          ListExample: action.payload.data
        };
///////////// GET1 or GET BY ID //////////////////////////////////////////

    case 'GET_EXAMPLEE_BY_ID_PENDING': // in case when loading post data
    return {
      ...state,
      isLoading: true,
      isFulFilled: false,
      isRejected: false
      }
  case 'GET_EXAMPLEE_BY_ID_REJECTED': // in case error network/else
      return {
          ...state,
          isLoading: false,
          isRejected: true,
      }
  case 'GET_EXAMPLEE_BY_ID_FULFILLED': // in case successfuly post data
      return {
          ...state,
          isLoading: false,
          isFulFilled: true,
          ListExample: action.payload.data,
      }

///////////////DELETE////////////////////////////////////////      

    case 'DELETE_EXAMPLEE_PENDING': // in case when loading post data
        return {
            ...state,
            isLoading: true,
            isFulFilled: false,
            isRejected: false
        }
    case 'DELETE_EXAMPLEE_REJECTED': // in case error network/else
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        }
    case 'DELETE_EXAMPLEE_FULFILLED': // in case successfuly post data
        return {
            ...state,
            isLoading: false,
            isFulFilled: true,
            ListExample: [state.ListExample, action.payload.data[0]],
        }

//////////////UPDATE/////////////////////////////////////////         

    case 'UPDATE_EXAMPLEE_PENDING': // in case when loading post data
        return {
            ...state,
            isLoading: true,
            isFulFilled: false,
            isRejected: false
        }
    case 'UPDATE_EXAMPLEE_REJECTED': // in case error network/else
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        }
    case 'UPDATE_EXAMPLEE_FULFILLED': // in case successfuly post data
        return {
            ...state,
            isLoading: false,
            isFulFilled: true,
            ListExample: [state.ListExample, action.payload.data[0]],
        }


    default:
      return state;
  }
};

export default blabla;
