import React from "react";
import { SerieItem } from "../serieItem";
import CircularProgress from '@material-ui/core/CircularProgress';

const SeriesTable =  ({items,loading}) =>{
    return(
        loading ?
          <CircularProgress size={80}/>:
          <section className="contents">
          {
              items.map(item => 
                  <SerieItem key={item.id} item={item}></SerieItem>
              )
          }

          
          </section>
    )
        
}

export default SeriesTable;