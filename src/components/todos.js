import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoRequset } from "./services/actions/actions";


const Todos = () =>{

    const {isLoading, todos, error} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTodoRequset());
    },[]);

    return(
        <div>
            <h3>Todo App</h3>
            {isLoading && <h3>Loading ...</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos &&
                todos.map((todo)=>{
                    return(
                        <article key={todo.id}>
                            <h4>{todo.id}.{todo.title}</h4>
                        </article>
                    )
                })
                }
            </section>
        </div>
    )
}

export default Todos;