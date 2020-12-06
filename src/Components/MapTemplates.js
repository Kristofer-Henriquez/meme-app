import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Meme } from "./Meme";
// import MemeCreate from "./MemeCreate";
// import FullStack from "./FullStack";
import { User } from './User';
import axios from 'axios';

const objectToQueryParam = obj => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};






function MapTemplates() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState(null);
  const userid = <User />;

  // const topTextstr = JSON.stringify({topText});
  // const bottomTextstr = JSON.stringify({bottomText});
  // const templatestr = JSON.stringify({template});
  // const memestr = JSON.stringify({meme});
  // const useridstr = JSON.stringify(userid);

  // const axios = require('axios');
  // const [postId, setPostId] = useState(null);

  // const axios = require('axios');

  
    
    

  

  // const [postId, setPostId] = useState(null);

//   const cache = [];
//   JSON.stringify(email, function(key, value) {
//     if (typeof value === 'object' && value !== null) {
//         if (cache.indexOf(value) !== -1) {
//             // Duplicate reference found, discard key
//             return;
//         }
//         // Store value in our collection
//         cache.push(value);
//     }
//     return value;
// });


   
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    );

  }, []);

  const requestOptions = () => {

    axios.post('/api/memes', {
      toptext: topText,
      bottomtext: bottomText,
      image_url: template,
      complete_meme_jpg: meme,
      user_id: 3,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
//   fetch('http://localhost:3000/api/memes', {
//     method: 'POST',
//     body: JSON.stringify({
//       toptext: {topText},
//       bottomtext: {bottomText},
//       image_url: {template},
//       complete_meme_jpg: {meme},
//       user_id: {userid},
//     })
    
//   })
//     .then(response => response.json())
// }
    // .then(data => setPostId(data.id));


  // const makePostRequest = () => {
  //   const formdata = {
  //     toptext: topText,
  //     bottomtext: bottomText,
  //     image_url: template,
  //     complete_meme_jpg: meme,
  //     user_id: email,
  //   }

  //   axios.post("http://localhost:3000/api/memes", formdata, { headers: {
  //     "content-type": "multipart/form-data"
  //   }
  // })
  // .then(response => {});
  // };

  // const data: {
    // toptext: topText,
    // bottomtext: bottomText,
    // image_url: {this.state.template}
    // complete_meme_jpg: meme,
  // }

  // const makePostRequest = (data) => {
  //   axios({
  //     method: 'POST',
  //     mode: 'CORS',
  //     url:'/api/memes',
  //     body: JSON.stringify(data),
  //   }).then(response => {
  //     return response;
  //   })

    
  
  // }
  
    
    



  
  
  





  if (meme) {
    return (
      <div style={{ textAlign: "center" }}>
        <img style={{ width: 200 }} src={meme} alt="custom meme" />
      <h1>{userid}</h1>
      <button onClick={requestOptions}>Save Meme</button>
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
            // <div key={template.id}></div>
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


export default MapTemplates;