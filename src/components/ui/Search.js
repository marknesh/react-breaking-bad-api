import React, { useState } from 'react'

const Search = ({getQuery}) => {

    const [input,setInput]=useState('')

    const handleInputChange=(q)=>{
        setInput(q)
        getQuery(q)
    
       
    }
    return (
        <section className="search">
            <form >

                <input type="text" value={input} onChange={(e)=>{handleInputChange(e.target.value)}} className="form-contol" placeholder="Search characters"
                autoFocus
                />
            </form>
            
        </section>
    )
}

export default Search
