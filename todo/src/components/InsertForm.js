import React, {useState, useCallback} from "react";

function InsertForm ({onInsert}){
    const [inputValue, setInputValue] = useState([]);

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        if (typeof onInsert==="function" && inputValue) {
            onInsert(inputValue)
            }
        setInputValue('')
        }, [onInsert,inputValue]
        )

        console.log(inputValue);
        return(
            <form onSubmit={handleSubmit}>
                <input value = {inputValue} onChange={ (e)=>{
                    setInputValue(e.target.value)
                }}></input>
                <button type = "submit">등록</button>
            </form>
        );    


    }
    

export default InsertForm;