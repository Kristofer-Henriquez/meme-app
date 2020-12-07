import React, { Component } from "react";
import axios from "axios";
// import CurrentUser from './CurrentUser';

class MemeData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      user_id: "",
      current_user: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/memes/")
      .then((response) => {
        this.setState({
          lists: response.data,
        });
      })
      .catch((error) => console.log(error));

    axios
      .get("/api/users/" + localStorage.user_id, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      })
      .then((response) => {
        this.setState({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          username: response.data.username,
          user_id: response.data.id,
          current_user: response.data.current_user,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { first_name, last_name, email, username } = this.state;
    axios
      .patch(
        "/api/users/" + localStorage.user_id,
        {
          // id: id,
          username: username,
          first_name: first_name,
          last_name: last_name,
          email: email,
        },
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      )
      .then((response) => this.toggleHidden())
      .catch((error) => {
        console.log("user update error", error);
      });
    event.preventDefault();
  }

  render() {
    // return <CurrentUser data={this.state}>
    return (
      <div className="lists-container">
        <h1>Memes Created by {this.state.first_name}: </h1>
        {this.state.lists.map((list) => {
          if (list.user_id === this.state.user_id)
            return (
              <div className="caption">
                <h3>toptext: {list.toptext}</h3>
                <h3>bottomtext: {list.bottomtext}</h3>
                <h3>Original Photo: {list.image_url}</h3>
                <h3>complete_meme: {list.complete_meme} </h3>
                <h3>
                  complete_meme_jpg: <img src={list.complete_meme_jpg} alt="" />
                </h3>

                <hr></hr>
              </div>
            );
        })}
      </div>
    );
  }
}
export default MemeData;
