import { useState } from "react";
import user from "./user.avif";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name != "" &&
      email != "" &&
      password != "" &&
      confirmPassword != "" &&
      password == confirmPassword
    ) {
      setSuccess(true);
      
      // alert("successfully sign up");
    } else {
      setSuccess(false);
      // alert("something is wrong check it");
    }
    var popup=document.getElementById("pop_up");
    popup.classList.add("down");
    popup.classList.remove("up");
  };
  const done=()=>{
    var popup=document.getElementById("pop_up");
    popup.classList.remove("down");
    popup.classList.add("up");
  }
  return (
    <div className="form_area">
      <h1>Sign Up</h1>
      <h5>Please fill out this form to register</h5>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputs"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Username"
          required
        />
        <input
          type="email"
          className="inputs"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          placeholder="Email"
        />
        <input
          type="password"
          className="inputs"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
                  />
        <input
          type="password"
          className="inputs"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div className="pop_up" id="pop_up">
        {success === true ? (
          <>
            <h2>🎉 Successfully Sign-Up 🎉</h2>
            <img className="pop_img" src={user} alt="" />
            <div className="user_details">
              <h3 className="detail detail_name">{name}</h3>
              <h3 className="detail">📧 {email}</h3>
              <button className="pop_btn" onClick={done} >Done</button>
            </div>
          </>
        ) : (
          <>
          <h1>❌ Sign-up Failed ❌</h1>
          <button className="pop_btn" onClick={done} >Done</button>
          </>
          
        )}
      </div>
    </div>
  );
};

export default Form;
