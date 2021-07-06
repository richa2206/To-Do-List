import React, { useState } from "react";
import TodoList from "./Todolist.js";

const Todo = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
            setItems ((oldItems) => {
                return [...oldItems, inputList];
            });
            setInputList("");
        };
        const deletedItems = (id) => {
            console.log("deleted");

            setItems((oldItems) => {
                return oldItems.filter((arrElem, index) => {
                    return index !== id;
                })
            })
        };    
    return (
    <>
    <div className ="main_div">
        <div className ="center_div">
        <br/>
        <h1> To do List </h1>
        <br/>
        <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent}/>
            <button onClick={listOfItems}> + </button>  
                <ol>
                    {/*<li> {inputList} </li>*/}
                    {items.map((itemval, index) => { 
                       return <TodoList
                       key={index} 
                       id={index}
                       text ={itemval}
                       onSelect ={deletedItems}/>;}
                        
                    )}
                </ol>
               </div>
        
    </div>
    </>
    );
};




export default Todo;