import { DESCENDENTE } from "../../componentes/Filter/constantes.js";


import { add_Countries_Favorites, remove_Countries_Favrites, OrderCont, get_All_Countries, get_Countries_Name, get_Countries_Detail, delete_Countries_Detail, create_Activities, get_activities, asc_des, order_Poblation, Order_Type_Activities, delete_activities, truncate_activities, update_activities } from "../actions/index.js"


const initialState = {
    countriesAll: [],
    filterCountries: [],
    countriesDetail: [],
    createActivities: [],
    activities: [],
    countriesFavourites: [],
};




export default function rootReducer(state = initialState, action) {

    switch (action.type) {

        case create_Activities:
            return {
                ...state,
                createActivities: action.payload
            }


        case add_Countries_Favorites:
            return {
                ...state,
                countriesFavourites: [...state.countriesFavourites, action.payload]
            }


        case remove_Countries_Favrites:
            return {
                ...state, //Copio el estado para NO modificar el estado viejo
                countriesFavourites: state.countriesFavourites.filter(peliculas => peliculas.id !== action.payload)
                // CON EL FILTER ESTOY TOMANDO TODAS LAS PELICULAS MENOS LA QUE ME COINCIDE CON EL ID ASI LA ELIMINO
            }


        case get_All_Countries:
            return {
                ...state,
                countriesAll: action.payload,
                filterCountries: action.payload
            }


        case get_Countries_Name:
            return {
                ...state,
                filterCountries: action.payload
            }


        case get_Countries_Detail:
            return {
                ...state,
                countriesDetail: action.payload
            }


        case delete_Countries_Detail:   //Limpia el componente --> useEffect
            return {
                ...state,
                countriesDetail: []
            }


        case get_activities:
            return {
                ...state,
                activities: action.payload
            };


        case delete_activities:
            return{
                ...state
            }

        
        case truncate_activities:
            return{
                ...state
            }

        case update_activities:
            return{
                ...state
            }




        
        //         ##################       FILTROS         #################


        case OrderCont:
           const continetFilter = action.payload === "Default" ? state.countriesAll : state.countriesAll.filter(el => el.continent[0] === action.payload)
            return{
              ...state,
             filterCountries: continetFilter    
            }
               
        


        case Order_Type_Activities:

            let newArray = []; // let newArray = ["COL","ARG"];

            let countriesAll2 = state.countriesAll


            for (let i = 0; i < countriesAll2.length; i++) {
                if(countriesAll2[i].activities.length > 0){
                    for (let j = 0; j < countriesAll2[i].activities.length; j++) {
                        if (countriesAll2[i].activities[j].id == action.payload) {
                            newArray.push(countriesAll2[i].id)
                            console.log("newArray",newArray)
                        }
                    } 
                }
            }

            
            const activitiesFilter = action.payload === "Default" ? state.countriesAll : state.countriesAll.filter(el => newArray.includes(el.id))

            
            return{
            ...state,
            filterCountries: activitiesFilter
            }

        
        
            
        //         ##################       ORDENAMIENTOS         #################

      

        case asc_des:

            let continetOrder = [...state.filterCountries]

            let continetOrder2 = action.payload === "Default" ? continetOrder :

            continetOrder.sort((a,b) =>{
                if(a.name < b.name){
                    return action.payload === DESCENDENTE ? 1 : -1
                }
                if(a.name > b.name){
                    return action.payload === DESCENDENTE ? -1 : 1
                }
                return 0;
            })

            return {
                ...state,
                filterCountries: continetOrder2
            }






            case order_Poblation:
                let poblationOrder =  [...state.filterCountries]

                let poblationOrder2 =  action.payload === "Default" ? poblationOrder :
    
                poblationOrder.sort((a,b) =>{

                    if(a.population < b.population){
                        return action.payload === DESCENDENTE ? -1 : 1
                    }
                    if(a.population > b.population){
                        return action.payload === DESCENDENTE ? 1 : -1
                    }
                    return 0;
                })
    
                return {
                    ...state,
                    filterCountries: poblationOrder2
                }




                
        default:
            return state;
    }
}
