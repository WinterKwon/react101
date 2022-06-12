import React from 'react';
function ListView({todoList, onComplete, onRemove}){
    return(
        <div>
            <ol>
                {todoList.map((item, index)=>{
                    return(
                        <li key = {item.key}>
                            <span> {item.text}</span>
                            <button onClick = {()=>onComplete(index)}>완료</button>
                            <button onClick = {()=>onRemove(index)}>삭제</button>  
                        </li>

                    )
                })}

            </ol>

        </div>

    )

}


export default ListView;