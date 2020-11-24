import React, { Component } from 'react';
import axios from 'axios';

class MemeData extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/api/memes')
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="lists-container">
                {this.state.lists.map( list => {
                    return (
                        <div className="single-list" key={list.id}>
                            <h3>id: {list.id}</h3>
                            <h3>toptext: {list.toptext}</h3>
                            <h3>bottomtext: {list.bottomtext}</h3>
                            <h3>Image URL: </h3>
                            

                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default MemeData;