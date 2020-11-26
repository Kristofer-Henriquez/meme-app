import React from "react";
import axios from "axios";

export default class MyMemes extends React.Component {
  state = {
    mymemes: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/memes`)
      .then(res => {
        const mymemes = res.data;
        this.setState({ mymemes });
      })
  }

  render() {
    return (
      <ul>
        { this.state.mymemes.map(mymeme => <li>
          User_ID: {mymeme.user_id}, Email: {mymeme.email}, id: {mymeme.id}, toptext: {mymeme.toptext}, bottomtext: {mymeme.bottomtext}, image: {mymeme.image_url}
        </li>)}
      </ul>
    )
  }
}