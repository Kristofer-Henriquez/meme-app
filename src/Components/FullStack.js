import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import { Meme } from "./Meme";
import MapTemplates from "./MapTemplates";

class FullStack extends Component {
  constructor() {
    super();
    this.state = {
      templates: [],
      template: null,
      topText: "",
      bottomText: "",
      Meme: <Meme />,
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      user_id: "",

      current_user: {},
    };
    this.handleMinimize = this.handleMinimize.bind(this);
  }

  handleMinimize() {
    this.props.history.push("/");
  }

  componentDidMount() {
    axios
      .get("/api/users/" + localStorage.user_id, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      })
      .then((response) => {
        this.setState({
          // id: response.data.id,
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

  render() {
    return (
      // <div className="app">
      //     <div>
      //       <Meme />
      //       <MemeCreate />
      //     </div>
      //   <hr></hr>

      // </div>

      <div style={{ textAlign: "center" }}>
        {this.state.template && (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // add logic to create meme from api
              const params = {
                template_id: this.state.template.id,
                text0: this.state.topText,
                text1: this.state.bottomText,
                username: "xzk03017",
                password: "xzk03017@cndps.com",
              };
              const response = await fetch(
                `https://api.imgflip.com/caption_image${this.state.objectToQueryParam(
                  params
                )}`
              );
              const json = await response.json();
              this.state.meme(json.data.url);
            }}
          >
            <Meme template={this.state.template} />
            <input
              placeholder="top text"
              value={this.state.topText}
              onChange={(e) => this.state.topText(e.target.value)}
            />
            <input
              placeholder="bottom text"
              value={this.state.bottomText}
              onChange={(e) => this.state.bottomText(e.target.value)}
            />
            <button type="submit">create meme</button>
          </form>
        )}
        {!this.state.template && (
          <>
            {/* <h1>Pick a template: {this.state.email}</h1> */}
            <h1>Pick a template: </h1>

            <MapTemplates />
          </>
        )}
      </div>
    );
  }
  changeName() {
    let text = "Start an empty template ";
    text += this.state.show === true ? "hide" : "show";
    return text;
  }
  changeName2() {
    let text = "User Created Memes ";
    text += this.state.show2 === true ? "hide" : "show";
    return text;
  }
  showHide() {
    const { show } = this.state;
    this.setState({ show: !show });
  }
  showHide2() {
    const { show2 } = this.state;
    this.setState({ show2: !show2 });
  }
}
// Roughcut V2^

// function App() {
//   return (
//     <div>
//       <Header />
//       <Login />
//     </div>
//   )
// }
// export default App;

// function App() {
//   return <p>Hii</p>;
// }
// export default App

export default FullStack;
