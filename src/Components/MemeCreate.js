// import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Meme } from "./Meme";
// import {CurrentUser} from './CurrentUser';
// import FullStack from "./FullStack";
// import axios from 'axios';
// import CurrentUser from './CurrentUser';


const objectToQueryParam = obj => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};






function MemeCreate() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState(null);
  // const email = <CurrentUser.email />
  // const user_id = "",
  // const [CurrentUserComponent, setUser] = useState([]);
  // const [email, setEmail] = useState(null);
  // const [user_id, setUserID] = useState("");
  // const [users, setUser] = useState(null);
  // const first_name: ""
  // const last_name: ""
  // const username: ""
  // const email: ""
  // const password: ""
  // const user_id: ""
  // show: false,
  // user_id: '',
  // isHidden: true,
  // const current_user: {}
  // const handleSubmit = async e => {
    
  // };

  

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);

  // useEffect(() => {
  //   fetch("localhost:3000/api/users/1").then(x => x.json().then(response => setUser(response.data.user))
  //   );
  // }, []);

  // useEffect(() => {
  //   fetch("localhost:3000/api/users/1").then(x => x.json().then(response => setUser(response.data.user))
  //   );
  // }, );


  
  // if (user) {
  //   return (
  //   <div>
  //     <h1>{user.email} is loggged in</h1>
  //   </div>
  //   );
  // }
  



  if (meme) {
    return (
      <div style={{ textAlign: "center" }}>
        <img style={{ width: 200 }} src={meme} alt="custom meme" />
      </div>

    );
    
  }

  

  return (

    

    <div style={{ textAlign: "center" }}>
      {template && (
        <form
          onSubmit={async e => {
            e.preventDefault();
            // add logic to create meme from api
            const params = {
              template_id: template.id,
              text0: topText,
              text1: bottomText,
              username: "xzk03017",
              password: "xzk03017@cndps.com"
            };
            const response = await fetch(
              `https://api.imgflip.com/caption_image${objectToQueryParam(
                params
              )}`
            );
            const json = await response.json();
            setMeme(json.data.url);
          }}
        >
          <Meme template={template} />
          <input
            placeholder="top text"
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
          <input
            placeholder="bottom text"
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
          <button type="submit">create meme</button>
        </form>
      )}
      {!template && (
        <>

          {/* <h1>Pick a template: </h1> */}
          {/* {this.state.dataFromParent} */}
          
          {/* {CurrentUserComponent.map(information => {
            return (
              information={setEmail} */}

              {/* {CurrentUserComponent.map(information => {
                return (
                  information={setEmail}
                )
              })} */}
        
        



          {templates.map(template => {
            return (
              <Meme
                template={template}
                onClick={() => {
                  setTemplate(template);
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default MemeCreate;

