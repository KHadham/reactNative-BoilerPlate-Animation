const initialState = {
  ListExample: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const blabla = (state = initialState, action) => {
  switch (action.type) {
//////////////  G E T /////////////////////////////////////////

    case 'GET_EXAMPLEE2_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_EXAMPLEE2_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_EXAMPLEE2_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        ListExample: action.payload.data,
      };
/////////////POST//////////////////////////////////////////

    case "POST_EXAMPLEE2_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "POST_EXAMPLEE2_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "POST_EXAMPLEE2_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          ListExample: action.payload.data
        };
///////////// GET1 or GET BY ID //////////////////////////////////////////

    case 'GET_EXAMPLEE2_BY_ID_PENDING': // in case when loading post data
    return {
      ...state,
      isLoading: true,
      isFulFilled: false,
      isRejected: false
      }
  case 'GET_EXAMPLEE2_BY_ID_REJECTED': // in case error network/else
      return {
          ...state,
          isLoading: false,
          isRejected: true,
      }
  case 'GET_EXAMPLEE2_BY_ID_FULFILLED': // in case successfuly post data
      return {
          ...state,
          isLoading: false,
          isFulFilled: true,
          ListExample: action.payload.data,
      }

///////////////DELETE////////////////////////////////////////      

    case 'DELETE_EXAMPLEE2_PENDING': // in case when loading post data
        return {
            ...state,
            isLoading: true,
            isFulFilled: false,
            isRejected: false
        }
    case 'DELETE_EXAMPLEE2_REJECTED': // in case error network/else
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        }
    case 'DELETE_EXAMPLEE2_FULFILLED': // in case successfuly post data
        return {
            ...state,
            isLoading: false,
            isFulFilled: true,
            ListExample: [state.ListExample, action.payload.data[0]],
        }

//////////////UPDATE/////////////////////////////////////////         

    case 'UPDATE_EXAMPLEE2_PENDING': // in case when loading post data
        return {
            ...state,
            isLoading: true,
            isFulFilled: false,
            isRejected: false
        }
    case 'UPDATE_EXAMPLEE2_REJECTED': // in case error network/else
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        }
    case 'UPDATE_EXAMPLEE2_FULFILLED': // in case successfuly post data
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
