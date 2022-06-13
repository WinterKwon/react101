import React, {useState, useCallback} from "react";
import styled from "styled-components";
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
            <Form onSubmit={handleSubmit}>
                <FormInput value = {inputValue} onChange={ (e)=>{
                    setInputValue(e.target.value)
                }}></FormInput>
                <Button type = "submit">등록</Button>
            </Form>
        );    


    }
    

export default InsertForm;

const Form = styled.form`
display : flex;
justify-content : center;
align-items : center;
`;

const FormInput = styled.input`
display : flex;
justify-content : center;
align-items : center;
`;

const Button = styled.button`
    font-weight : 700;
    font-size : 1.2rem;
    border-radius : 4px;
    border : 1px solid #A0D995;
    background : #A0D995;
    color : #fff;
`;