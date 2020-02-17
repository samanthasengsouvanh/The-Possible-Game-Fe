import React from "react";
import { Link } from "react-router-dom";
import { Box } from "grommet";
import "./Landing.css";
export default function() {
  return (
    <div style={{ height: "75vh" }}>
      <Box
        align="center"
        textAlign="center"
        justify="center"
        style={{
          // backgroundColor: "rgba(0, 0, 0, 0.3)",
          margin: "20px",
          padding: "20px",
          color: "white"
        }}
      >
        <h1 alignSelf="center" textColor="white">
          <b class="fun">A E S T H E T I C G A M E S</b>
        </h1>
        <br />
        <br />
        <b alignSelf="center">
          Not registered? Do you like mediocre games built in React js? Sign up!
          Its free!
        </b>
        <br />
        <br />
        <b alignSelf="center">
          Registered already? You know the drill, log in to start gaming you
          glorious gamer
        </b>

        <br />
        <br />
        <br />
        <br />

        <div>
          <Link
            to="/register"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              color: "white",
              fontSize: "30px"
            }}
          >
            Register
          </Link>
        </div>

        <br />
        <br />

        <div>
          <Link
            to="/login"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              color: "white",
              fontSize: "30px"
            }}
          >
            Log In
          </Link>
        </div>
      </Box>
    </div>
  );
}
