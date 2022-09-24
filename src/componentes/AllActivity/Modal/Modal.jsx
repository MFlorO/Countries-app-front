import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  getAllCountries, updateActivities } from "../../../redux/actions/index.js";
// import {useHistory} from "react-router-dom";
import "./modal.css"








function Modal({HandleCloseModal, input, setInput}) {
    // const history = useHistory();
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countriesAll);

    useEffect(() => {
      dispatch(getAllCountries);
      dispatch(updateActivities);
    }, [dispatch]);
  
    
  const randomSeassion = ['Summer', "Autunm" , 'Winter', 'Spring']



  function handleChange(event) {

    if(event.target.name === "id"){

      if(!input.id.includes(event.target.value)){

        setInput({
          ...input, 
          id: [...input.id, event.target.value]
        })
      }
       
    }else{
        
      setInput({
      ...input,
      [event.target.name]: event.target.value,
      })
    }}



    function handleSubmit(evento){
      evento.preventDefault();

      dispatch(updateActivities(input));
    }

    
  



  return (
    
<div className='form-allActivity'> 

<form className='items-form-allActivity' onSubmit={handleSubmit}>


<label className="labels-all-a" htmlFor="name">Id: </label>
<input className="input-all-a" type="text" name="activityId" value={input.activityId} />

          
<label className="labels-all-a" htmlFor="name">Name: </label>
<input className="input-all-a" type="text" name="name" value={input.name} onChange={handleChange} />



<label className="labels-all-a" htmlFor="difficulty">Difficulty: </label>
<input className="input-all-a" type="number"  name="difficulty" value={input.difficulty} onChange={handleChange} />


<label className="labels-all-a" htmlFor="duration">Duration: </label>
<input className="input-all-a-duration" type="time"  name="duration" value={input.duration} onChange={handleChange} />



<p className="labels-all-a">Seasion: </p>
<select className="input-all-a-seassion" name="seassion" defaultValue={"default"} onChange={handleChange}>
<option className="input-all-a-seassion-1" value={"default"} hidden>{input.seassion}</option>
{randomSeassion.map ((seassion, key) => {
  return ( 
     <option className="input-all-a-seassion-1" key={key} id="seassion" name="seassion" value={seassion}>{seassion}</option>
  )
})}
</select>



<p className="labels-all-a">Countries: </p>
<select className="input-all-a-seassion"name="id" defaultValue={"default"} onChange={handleChange}>
<option className="input-all-a-seassion-1" value={"default"} hidden>COUNTRIES</option>
{countries.map (countries => {
  return ( 
     <option className="input-all-a-seassion-1" key={countries.id} id="id" name="id" value={countries.id}>{countries.name}</option>
  )
})}
</select>

{/* <div className="countriesList">
            <ul>     
            {
                input.id?.map((c) => {
            
                    let name = countries?.map((country) =>{
                       return country.id === c ? country.name : null
                    }) 
                    
                    return ( 
                    <div className="lista-container" key={c}>
                    <li className="lista">{name}</li>
                    </div>
                )
    
                })
            }
            </ul>
</div>  */}

<div className='botones-all-a'>
<button className="button-all-a-editar" type="submit" onClick={updateActivities}>EDITAR</button> 
<button className="button-all-a-cancelar" onClick={HandleCloseModal}>CANCELAR</button>  
</div>


</form>

</div>
  )
}

export default Modal