import { CircularProgress } from "@material-ui/core";
import React from "react";
import { StoriesItem } from "../serieItem";

const StoriesTable =  ({items,loading}) =>{
    return(
        loading ?
          <CircularProgress size={80}/>:
          <section className="contents">
          {
              items.map(item => 
                  <StoriesItem key={item.id} item={item}></StoriesItem>
              )
          }

          
          </section>
    )
        
}

export default StoriesTable