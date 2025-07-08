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
    popup.classNameList.add("down");
    popup.classNameList.remove("up");
  };
  const done=()=>{
    var popup=document.getElementById("pop_up");
    popup.classNameList.remove("down");
    popup.classNameList.add("up");
  }
  return (
    <div classNameName="form_area">
      <h1>Sign Up</h1>
      <h5>Please fill out this form to register</h5>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          classNameName="inputs"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Username"
          required
        />
        <input
          type="email"
          classNameName="inputs"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          placeholder="Email"
        />
        <input
          type="password"
          classNameName="inputs"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
                  />
        <input
          type="password"
          classNameName="inputs"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div classNameName="pop_up" id="pop_up">
        {success === true ? (
          <>
            <h2>🎉 Successfully Sign-Up 🎉</h2>
            <img classNameName="pop_img" src={user} alt="" />
            <div classNameName="user_details">
              <h3 classNameName="detail detail_name">{name}</h3>
              <h3 classNameName="detail">📧 {email}</h3>
              <button classNameName="pop_btn" onClick={done} >Done</button>
            </div>
          </>
        ) : (
          <>
          <h1>❌ Sign-up Failed ❌</h1>
          <button classNameName="pop_btn" onClick={done} >Done</button>
          </>
          
        )}
      </div>
    </div>
  );
};

export default Form;
