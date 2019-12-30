import axios from 'axios';
import URL from "../URL";


/////////////////////////////////////////////
export const getExample = () => {
  return {
    type: 'GET_EXAMPLEE',
    payload: axios.get(URL+'/example'),
  };
};

/////////////////////////////////////////////
export const getExampleById = (exampleId) => {
  return {
      type: 'GET_EXAMPLEE_BY_ID',
      payload: axios.get(URL +`/example/${exampleId}`)
  }
}
/////////////////////////////////////////////
export const postExample = (data) => {
  return {
    type: "POST_EXAMPLEE",
    payload: axios.post(URL+'/example', data[0])
  };
};

/////////////////////////////////////////////
export const deleteExample = (exampleId) =>{
	return{
		type: 'DELETE_EXAMPLEE',
		payload: axios.delete(URL +`/example/${exampleId}`)
	}
}


/////////////////////////////////////////////
export const updateExample = (exampleId, data) => {
  return {
      type: 'UPDATE_EXAMPLEE',
      payload: axios.patch(URL +`/example/${exampleId}`, data)
  }
}
