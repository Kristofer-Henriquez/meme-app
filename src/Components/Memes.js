import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MemesNew from "./MemesNew";
import Card from "react-bootstrap/Card";

class Memes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      memes: [],
      query: "",
    };
  }
  componentDidMount() {
    axios
      .get("/api/sessions", {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      })
      .then((response) => {
        this.setState({
          memes: response.data,
          loading: false,
        });
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  updateMemes = (newMeme) => {
    const memes = this.state.memes;
    organizations.push(newOrganization);
    this.setState({
      memes: memes,
    });
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading....</h1>;
    }

    return (
      <div className="component">
        {this.state.memes.map((meme) => {
          return (
            <Card key={meme.id}>
              <Card.Header>
                Name:
                <Link to={`/memes/${meme.id}`}>{/* {meme.name} */}</Link>
              </Card.Header>
            </Card>
          );
        })}

        <br />
        <h3>Create a Meme</h3>
        <MemesNew updateMemes={this.updateMemes} />
      </div>
    );
  }
}

export default Memes;
