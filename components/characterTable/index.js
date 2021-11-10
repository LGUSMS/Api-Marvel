import React from "react";
import { CharacterItem } from "../CharacterItem";
import CircularProgress from '@material-ui/core/CircularProgress';


const CharactersTable =  ({items,loading}) =>{
    return(
        loading ?
        <CircularProgress size={80}/>:
          <section className="contents">
          {
              items.map(item => 
                  <CharacterItem key={item.id} item={item}></CharacterItem>
              )
          }

          
          </section>
    )
        
}

export default CharactersTable;