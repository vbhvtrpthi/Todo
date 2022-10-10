import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [{ task: 'check mails', id: 1 }, { task: 'Read article', id: 2 }, { task: 'Complete HW', id: 3 }],
            currTask: 'gamapa'
        }
    }
    //To store the value coming from input task into
    handleChange = (e) => {
        console.log("handlechange",e.target.value); //will return the value change
        this.setState({
            currTask: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState({
            tasks: [...this.state.tasks, { task: this.state.currTask, id: this.state.tasks.length + 1 }],
            currTask: ''
        })

    }

    handleDelete = (e) => {
        //    console.log(e.target.value);
        //     let data=this.state.tasks.filter(tasks=> tasks.id != e.target.value)
        //     console.log(data);
        //     this.setState({tasks:data
        //     })
       
        console.log("Delete",e);
        let newArr = this.state.tasks.filter(taskObj => taskObj.id != e)
        console.log(newArr);
        this.setState({
            tasks:[...newArr]
        })

    }

    render() {
        console.log('render function called');

        return (
            <div>
                <input type="text" value = {this.state.currTask} onChange={this.handleChange} />
                {console.log("Inside return",this.state.currTask)}
                <button onClick={this.handleSubmit}>Submit</button>
                <ul>
                    {
                        this.state.tasks.map((taskObj) => (
                            <li key = {taskObj.id}>
                                <p>{taskObj.task}</p>
                                {/* <button value={taskObj.id} onClick={this.handleDelete}>Delete</button> */}
                                <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export const arr = [1, 2, 3]

