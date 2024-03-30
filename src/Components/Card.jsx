import React from "react";
import { useGlobalContext } from '../Components/utils/global.context'
import { routes } from "./utils/routes";
import { Link } from 'react-router-dom'
import style from '../styles/styles.module.css'

const Card = ({itemProps}) => { // Cambie el orden para que tenga mas logica
      const { id, name, username } = itemProps;
      const {state, dispatch} = useGlobalContext();

      const addFav = (e)=>{
            e.preventDefault();

            let selectedCard = {
                  id: id,
                  name: name,
                  username: username,
            };
            console.log( selectedCard );

            dispatch({type: 'ADD_FAV', payload: selectedCard});
      }

      const delFav = (e)=>{
            e.preventDefault();

            dispatch({type: 'DEL_FAV', payload: id});
      }

      console.log( state.favsIndex );
      return (
            <div className="card">
                  <Link to={'/dentist/' + id}> 
                        {/* En cada card deberan mostrar en name - username y el id */}
                        <img src="../../public/images/doct  or.jpg" alt="" className="docImg"/>
                        <h3 className={style.name}>{name}</h3>
                        <p>{username}</p>
                  </Link>
                  {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

                  {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
                  { 
                        state.favsIndex[id] === 0
                        ? <button onClick={addFav} className="favButton">Add fav</button>
                        : <button onClick={delFav} className="favButton unselectedFav" >Remove fav</button>
                  }
            </div>
      );
};

export default Card;
