import React from 'react';
function ListView({todoList}){
    return(
        <div>
            <ol>
                {todoList.map((item, index)=>{
                    return(
                        <li key = {item.key}>
                            <span> {item.text}</span>
                        </li>

                    )
                })}

            </ol>

        </div>

    )

}


export default ListView;