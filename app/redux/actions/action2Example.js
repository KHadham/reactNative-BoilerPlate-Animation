import axios from 'axios';
import URL from "../URL";


/////////////////////////////////////////////
export const getExample2 = () => {
  return {
    type: 'GET_EXAMPLEE2',
    payload: axios.get(URL+'/example2'),
  };
};

/////////////////////////////////////////////
export const getExampleById2 = (exampleId) => {
  return {
      type: 'GET_EXAMPLEE2_BY_ID',
      payload: axios.get(URL +`/example2/${exampleId}`)
  }
}
/////////////////////////////////////////////
export const postExample2 = (data) => {
  return {
    type: "POST_EXAMPLEE2",
    payload: axios.post(URL+'/example2', data[0])
  };
};

/////////////////////////////////////////////
export const deleteExample2 = (exampleId) =>{
	return{
		type: 'DELETE_EXAMPLEE2',
		payload: axios.delete(URL +`/example2/${exampleId}`)
	}
}


/////////////////////////////////////////////
export const updateExample2 = (exampleId, data) => {
  return {
      type: 'UPDATE_EXAMPLEE2',
      payload: axios.patch(URL +`/example2/${exampleId}`, data)
  }
}
