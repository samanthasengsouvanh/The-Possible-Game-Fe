import React, { useContext } from "react";
import { Box, Button } from "grommet";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/auth";

export default function Dashboard() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <>
      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Box
          direction="row"
          align="center"
          justify="center"
          style={{ marginTop: "4rem", padding: "20px", color: "white" }}
        >
          <div>
            <h4>
              <b
                style={{
                  fontSize: "40px"
                }}
              >
                Hello {user.name.split(" ")[0]}
              </b>
              <p>Welcome back to 1986's top gaming site!</p>
            </h4>
            <br />
            <Button
              style={{
                border: "1px solid white",
                borderRadius: "3px",
                letterSpacing: "1px",
                background: "rgba(1, 0, 0, 0.4)",
                color: "white"
              }}
              onClick={e => {
                e.preventDefault();
                logoutUser();
              }}
              label="Log out"
            />
          </div>
        </Box>
      </div>
      <Box align="center" justify="center">
        <Box align="center" justify="center">
          <Link to="/game">
            <Button
              style={{
                border: "1px solid white",
                borderRadius: "3px",
                letterSpacing: "1px",
                background: "rgba(1, 0, 0, 0.4)",
                color: "white"
              }}
              label="start game"
            />
          </Link>
        </Box>
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
