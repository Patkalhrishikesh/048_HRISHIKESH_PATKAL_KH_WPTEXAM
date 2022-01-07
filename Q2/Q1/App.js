import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setMessage] = useState("lets msg here");
  const [list, setlist] = useState([]);

  const send = () => {
    const newList = [message, ...list];

    setlist(newList);
    setMessage("");
  };


  const changemsg = (e) => {

    const newmsg= e.target.value;
    setMessage(newmsg);
   }

  return (
    <div>
      <div>
        <h1>MyChatApp</h1>
      </div>

      <div>
        <input
          className="form-control form-control-lg mb-1"
          type="text"
          value={message}
          onChange={changemsg}
          placeholder="lets chat here..."
        />

        <input 
        className="btn btn-secondary w-50"
        type="button"
         onClick={send} />
      

     {list.map((item, index) =>{
       <div key = {index} className="alert alert-secondary fs-4">
         {item.message} 
         
         
            </div>
})
     
     
     }
    
    </div>


  );
  }
