import React, { useState, useEffect } from 'react';
import classes from './Todo.module.css'

const Todo = (props) => {
    const [todo, setTodo] = useState([]);
    const [errorText, setErrorText] = useState([]);
    const [event, setEvent] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [id, setId] = useState(0);
    const [key, setKey] = useState("");
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = () => {
        let data = {
            "searchKey": searchKey
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        // fetch("http://127.0.0.1:5000/read", requestOptions)
        fetch("https://testpy37-env.eba-re4rth2i.us-east-2.elasticbeanstalk.com/read", requestOptions)
            .then((res) => res.json())
            .then((result) => {
                if (result.data == null) {
                    setErrorText(result.error);
                    setTodo([]);
                }
                else {
                    setErrorText("");
                    setTodo(result.data)
                }
            })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        if (dueDate == "") {
            alert("Due date not entered");
            return;
        }
        let today = new Date()

        let data = {
            "id": id + 1
            , "event": event
            , "create_date": today.getFullYear() + "-" + ("0" + (parseInt(today.getMonth()) + 1)).slice(-2, 2) + "-" + today.getDate()
            , "due_date": dueDate
            , "key": key
        };
        console.log(data);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        // fetch("http://127.0.0.1:5000/save",requestOptions)
        //     .then(res => res.json())
        //     .then(response => console.log(response))
        //     .then(setTimeout(getTodos(),5000));
        // let response = await fetch("http://127.0.0.1:5000/save", requestOptions);
        let response = await fetch("https://testpy37-env.eba-re4rth2i.us-east-2.elasticbeanstalk.com/save", requestOptions);
        console.log(response.json());
        getTodos();
    }

    const deleteTodo = async (id) => {
        // await fetch("http://127.0.0.1:5000/delete?id=" + id);
        await fetch("https://testpy37-env.eba-re4rth2i.us-east-2.elasticbeanstalk.com/delete?id=" + id);
        getTodos();
    }

    let todoList = "";
    todoList = todo.map((value, index) => {
        if (parseInt(value["id"]) > id)
            setId(parseInt(value["id"]))
        return <div key={index} className={classes.note}>
            {/* event: {value["event"]}, create date: {value["create_date"]}, due date: {value["due_date"]}   */}
            <button className={classes.removeBtn} onClick={() => { deleteTodo(value["id"]) }}>X</button>
            <h2>{value["event"]}</h2>
            <p>Start: {value["create_date"]}</p>
            <p>Due: {value["due_date"]}</p>
        </div>
    })
    // let todoList = [];
    // for (let key in todo) {
    //         if (parseInt(value["id"]) > id)
    //             setId(parseInt(value["id"]))
    //     console.log(todo[key])
    //     todoList.push((
    //         <div id={key}>
    //             event: {todo[key]["event"]}, create date: {todo[key]["create_date"]}, due date: {todo[key]["due_date"]}  <button onClick={() => { deleteTodo(todo[key]["id"]) }}>X</button>
    //         </div>))
    // }


    return (
        <div>
            <form>
                {/* <label>key: <input type="text" id="searchKey" style={{ width: 100 }} onChange={(e) => { setSearchKey(e.target.value) }} /></label> */}
                {/* <button onClick={(e) => {e.preventDefault(); getTodos()} }>Search</button> */}
            </form>
            {todoList}
            {errorText}
            <br />
            <form>
                <label>event:</label> <input type="text" id="event" style={{ width: 100 }} onChange={(e) => { setEvent(e.target.value) }} />
                <label>due date:</label> <input type="date" id="dueDate" style={{ width: "130px" }} onChange={(e) => { setDueDate(e.target.value) }} />
                <br />
                {/* <label>key: <input type="text" id="key" style={{ width: 100 }} onChange={(e) => { setKey(e.target.value) }} /></label> */}
                <button onClick={submitForm} style={{marginLeft: "20px"}}>Add</button>
            </form>
        </div>
    );
}

export default Todo;