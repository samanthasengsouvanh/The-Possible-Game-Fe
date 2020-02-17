import React from "react";
import { Link } from "react-router-dom";
import { Box } from "grommet";

export default function() {
  return (
    <Box direction="row" pad="medium">
      <nav>
        <div>
          <Link
            to="/"
            style={{
              fontFamily: "monospace",
              color: "white",
              fontSize: "30px",
              fontWeight: "bold"
            }}
          >
            HOME
          </Link>
        </div>
      </nav>
    </Box>
  );
}
