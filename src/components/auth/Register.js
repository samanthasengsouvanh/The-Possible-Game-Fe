import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Box, Button, FormField, TextInput } from "grommet";

import { AuthContext } from "../../auth/auth";

export default function Register({ history }) {
  // todo: errors my friend...
  const { user, registerUser, errors = {} } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

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
        Back to home
      </Link>
      <div
        style={{
          borderRadius: "3px",
          letterSpacing: "1.5px",
          color: "white",
          fontSize: "30px",
          fontWeight: "bold"
        }}
      >
        <br />
        {/* <h4>
          <b>Register</b>
        </h4> */}
        {/* <p>
          Already have an account? <Link to="/login">Log in</Link>
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

          const newUser = {
            name,
            email,
            password,
            password2
          };

          registerUser(newUser, history);
        }}
      >
        <p
          align="center"
          style={{
            fontWeight: "bold"
          }}
        >
          REGISTER
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
              placeholder="Name"
              onChange={event => setName(event.target.value)}
              value={name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames("", {
                invalid: errors.name
              })}
            />
          </FormField>
          <span style={{ color: "white" }}>{errors.name}</span>
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
              placeholder="Email"
              onChange={event => setEmail(event.target.value)}
              value={email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email
              })}
            />
          </FormField>
          <span style={{ color: "white" }}>{errors.email}</span>
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
              onChange={event => setPassword(event.target.value)}
              value={password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password
              })}
            />
          </FormField>
          <span style={{ color: "white" }}>{errors.password}</span>
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
              placeholder="Confirm Password"
              onChange={event => setPassword2(event.target.value)}
              value={password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames("", {
                invalid: errors.password2
              })}
            />
          </FormField>
          <span style={{ color: "white" }}>{errors.password2}</span>
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
            label="Sign Up"
          />
        </div>
      </form>
    </Box>
  );
}
