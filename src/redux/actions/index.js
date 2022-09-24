
import axios from "axios"
const baseURL = "https://countriesapp-production.up.railway.app"



//         ##################       get_All_Countries         #################

export function getAllCountries() {
  return function (dispatch) {
   
    axios.get(`${baseURL}/countries/`)
      .then(response => {
        dispatch({
          type: get_All_Countries,
          payload: response.data
        });
      })
    .catch(error => {
      console.log("getAllCountries",error)
    })
  };
}



//         ##################       get_Countries_Name         #################

export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      let response = await axios.get(`${baseURL}/countries?name=${name}`)
      return dispatch({
        type: get_Countries_Name,
        payload: response.data
      });
    } catch (error) {
      console.log("getCountriesName", error)
    }
  };
}



//         ##################       get_Countries_Detail         #################

export function getCountriesDetail(id) {
  return function (dispatch) {
    
      axios.get(`${baseURL}/countries/${id}`)
      .then(response => {
        dispatch({
          type: get_Countries_Detail ,
          payload: response.data
        });
      })
    .catch(error => {
      console.log("getCountriesDetail",error)
    })
  };
}




//         ##################       create_Activities         #################

export function createActivities(body) {
  return async function (dispatch) {
    try {
      await axios.post(`${baseURL}/activities/`, body);
      return dispatch({
        type: create_Activities
      })
    } catch (error) {
      console.log("createActivities", error)
    }
  }
}



//         ##################       get_activities         #################

export function getActivities() {
  return function (dispatch) {
      axios.get(`${baseURL}/activities/`)

      .then(response => {
        dispatch({
          type: get_activities ,
          payload: response.data
        });
      })

    .catch(error =>{
      console.log("getActivities",error)
    })
  };
}




//         ##################       delete_activities         #################

export function deleteActivities(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${baseURL}/activities/${id}`);
      return dispatch({
        type: delete_activities
      })
    } catch (error) {
      console.log("deleteActivities", error)
    }
  }
}


//         ##################       truncate_activities         #################

export function truncateActivities(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${baseURL}/activities/`);
      return dispatch({
        type: truncate_activities
      })
    } catch (error) {
      console.log("deleteActivities", error)
    }
  }
}



// #################### update_activities ########################


export function updateActivities() {
  return async function (dispatch) {
    try {
      await axios.put(`${baseURL}/activities/`);
      return dispatch({
        type: update_activities
      })
    } catch (error) {
      console.log("update_activities", error)
    }
  }
}




//         ##################       add_Countries_Favorites         #################

export function addCountriesFavorites(payload) {
  return {
    type: add_Countries_Favorites,
    payload
  };
}



//         ##################       remove_Countries_Favorites         #################

export function removeCountriesFavrites(id) {
  return {
    type: remove_Countries_Favrites,
    payload: id
  };
}



//         ##################       delete_Countries_Detail         #################

export function deleteCountriesDetail(id) {  //--> Lo utilizo para desmontar el componente de detalle
  return {
    type: delete_Countries_Detail,
    payload: id
  };
}



//         ##################       OrderCont         #################

export function orderContinent(payload) {
  return {
    type: OrderCont,
    payload: payload
  };
}



//         ##################       asc_des         #################

export function AscDes(payload) {
  return {
    type: asc_des,
    payload: payload
  };
}



//         ##################       orderPoblation         #################

export function orderPoblation(payload) {
  return {
    type: order_Poblation,
    payload: payload
  };
}



//         ##################       Order_Type_Activities         #################

export function orderTypeActivities(payload) {
  
  console.log("payload", payload) //id de la actividad

  return {
    type: Order_Type_Activities,
    payload : payload
  };
}









export const add_Countries_Favorites = "ADD_COUNTRIES_FAVORITE";
export const remove_Countries_Favrites = "REMOVE_COUNTRIES_FAVORITE";
export const get_All_Countries = "GET_ALL_COUNTRIES"
export const get_Countries_Name = "GET_COUNTRIES_NAME";
export const get_Countries_Detail = "GET_COUNTRIES_DETAIL";
export const delete_Countries_Detail = "DELETE_COUNTRIES_DETAIL";
export const create_Activities = "CREATE_ACTIVITIES"
export const get_activities = "GET_ACTIVITIES";
export const Order_Type_Activities = "ORDER_TYPE_ACTIVITIES";
export const order_Poblation = "ORDER_POBLATION";
export const asc_des = "ASC_DES";
export const OrderCont = "ORDER_CONT";
export const delete_activities = "DELETE_ACTIVITIES";
export const update_activities = "UPDATE_ACTIVITIES";
export const truncate_activities = "TRUNCATE_ACTIVITIES"



