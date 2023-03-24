import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../services/actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector( state => state);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getTodos());
    }, []);
    return (
        <div>
            <h1>Todos App</h1>
            { isLoading && <h2>Loading...</h2> }
            { error && <h2>{ error.message }</h2> }
            <section>
                { todos && todos.map( todo => {
                    const { id, title } = todo;
                    return <article key={ id }>
                        <h3>{ title }</h3>
                    </article>
                })}
            </section>
        </div>
    );
};

export default Todos;