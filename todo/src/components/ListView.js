import React from 'react';
import styled from 'styled-components'

function ListView({todoList, onComplete, onRemove}){
    return(
        <Container className='container'>
            <ol>
                {todoList.map((item, index)=>{
                    return(
                        <li key = {item.key}>
                            <ItemSpan> {item.text}</ItemSpan>
                            <Button onClick = {()=>onComplete(index)}>완료</Button>
                            <Button onClick = {()=>onRemove(index)}>삭제</Button>  
                        </li>

                    )
                })}

            </ol>

        </Container>

    )

}


export default ListView;
const Container = styled.div`
display : flex;
justify-content : center;
align-items : center;

`;

const Button = styled.button`
    font-weight : 700;
    font-size : 1.1rem;
    border : 1px solid skyblue;
    border-radius : 4px;
    background-color : rgba(0,0,0,0);
    color : skyblue;
    padding : 5px;

`;

const ItemSpan = styled.span`
 float : left;

`;