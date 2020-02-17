import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Box, Button, FormField, TextInput } from "grommet";
import { AuthContext } from "../../auth/auth";

export default function Login({ history }) {
  // todo: errors my friend...
  const { user, loginUser, errors = {} } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (user) {
      history.push("/dashboard");
    }
  }, [user, history]);

  return (
    <Box
      justify="center"
      align="center"
      style={{ marginTop: "4rem", padding: "20px", color: "white" }}
    >
      <Link
        style={{
          // width: "140px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          color: "white",
          fontSize: "30px",
          fontWeight: "bold"
        }}
        to="/"
      >
        Back to Home
      </Link>

      <div
        style={{
          borderRadius: "3px",
          letterSpacing: "1.5px",
          borderColor: "white"
          // paddingLeft: "11.250px"
        }}
      >
        {/* <h4>
          <b style={{ textDecoration: "underline" }}>Log In</b>
        </h4> */}
        <br />
        {/* <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p> */}
      </div>
      <form
        style={{
          border: "2px solid white",
          borderRadius: "3px",
          letterSpacing: "1px",
          padding: "10px"
          // background: "rgba(0, 0, 0, 0.4)"
        }}
        noValidate
        onSubmit={e => {
          e.preventDefault();

          const userData = {
            email,
            password
          };

          loginUser(userData);
        }}
      >
        <p
          align="center"
          style={{
            fontWeight: "bold"
          }}
        >
          LOG IN
        </p>
        <div>
          <FormField>
            <TextInput
              style={{
                border: "1px solid white",
                borderRadius: "3px",
                letterSpacing: "1px",
                background: "rgba(0, 0, 0, 0.4)"
              }}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email || errors.emailnotfound
              })}
            />
          </FormField>

          <span style={{ color: "white" }}>
            {errors.email}
            {errors.emailnotfound}
          </span>
        </div>
        <div>
          <FormField>
            <TextInput
              style={{
                border: "1px solid white",
                borderRadius: "3px",
                letterSpacing: "1px",
                background: "rgba(0, 0, 0, 0.4)"
              }}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password || errors.passwordincorrect
              })}
            />
          </FormField>

          <span style={{ color: "white" }}>
            {errors.password}
            {errors.passwordincorrect}
          </span>
        </div>
        <div align="center">
          <Button
            style={{
              border: "1px solid white",
              borderRadius: "3px",
              letterSpacing: "1px",
              background: "rgba(1, 0, 0, 0.4)",
              color: "white"
            }}
            type="submit"
            label="login"
            justify="center"
            align="center"
          />
        </div>
      </form>
    </Box>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
