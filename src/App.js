import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  }
  console.log(errors);
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" {...register("username", { required: "Username is required" })} placeholder="Username" />
          </div>
          <p>{errors.username?.message}</p>
          <div className="field">
            <label>Email</label>
            <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "This is not a valid email" } })} placeholder="Email" />
          </div>
          <p>{errors.email?.message}</p>
          <div className="field">
            <label>Password</label>
            <input type="password"  {...register("password", { required: "Password is required", minLength: { value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 10, message: "Password cannot exceed be more than 10 characters" } })} placeholder="Password" />
          </div>
          <p>{errors.password?.message}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
