import React, { Component } from 'react'
import TodoItems from './TodoItems'

export default class TodoList extends Component {
    render() {
        const { items , clearList, handleDelete, handleEdit} = this.props;
        return (
            <ul className="list-group my-5">
                <div className="text-capitalize text-center">
                    <h3>todo list</h3>
                </div>
                {
                    items.map(item => {
                        return (
                        <TodoItems 
                        key={item.id} 
                        title={item.title} 
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={()=> handleEdit(item.id)}
                        />
                    );
                })
            }


                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>
                    clear me
            </button>
            </ul>

        )
    }
}
