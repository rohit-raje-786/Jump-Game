import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./Login.css";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(7),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));
const Login = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  return (
    <div>
      <Header />

      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
      <div className="Login-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
