import React, {useState} from 'react'
import { Input, TextField } from '@material-ui/core'
const Search = ({search}) => {
    const [text, setText] = useState('')

    const onSearch=(q)=>{
        setText(q)
        search(q)
    }
    return (
        <section className="search">
            <form>
            <TextField  fullWidth label="Pesquise o persongem" id="fullWidth" color="secondary"
                onChange={(e)  =>onSearch(e.target.value)}
                value={text}/>
             
                </form>


                
        </section>
    )
}

export default Search;
