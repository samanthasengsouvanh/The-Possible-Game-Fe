import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button } from "grommet";
import { AuthContext } from "../../auth/auth";
import "./GameOver.css";

export default function GameOver(props) {
  const { user } = useContext(AuthContext);
  const [loser, setLoser] = useState(true);
  const [HighScores, setHighScores] = useState([]);
  function postScore(name) {
    console.log("works");
    axios
      .post(process.env.REACT_APP_URL + "/api/v1/high-scores", {
        name,
        score: props.score
      })
      .then(res => {
        console.log(res);
      });
    setLoser(false);
  }
  function newGame() {
    props.dispatch({
      type: "NEW_GAME",
      payload: {}
    });
  }

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + "/api/v1/high-scores").then(res => {
      const sorted = res.data.highScores.sort((a, b) =>
        a.score < b.score ? 1 : -1
      );
      const topTen = sorted.slice(0, 10);
      setHighScores(topTen);
      if (topTen[topTen.length - 1].score > props.score && topTen.length > 9) {
        setLoser(false);
      }
    });
  }, [HighScores, props.score]);

  return (
    <>
      {loser && (
        <div className="enter">
          <h1>
            congratulations {user.name.split(" ")[0]}! <br />
            <br />
            your score was {props.score}
          </h1>
          <h3>what name would you like to display?</h3>
          <input
            id="name"
            style={{
              color: "white",
              marginRight: "10px",
              border: "1px solid white",
              borderRadius: "3px",
              letterSpacing: "1px",
              lineHeight: "30px",
              background: "rgba(0, 0, 0, 0.4)"
            }}
          />
          <Button
            style={{
              border: "1px solid white",
              borderRadius: "3px",
              letterSpacing: "1px",
              background: "rgba(1, 0, 0, 0.4)",
              color: "white"
            }}
            label="Submit"
            onClick={() => {
              const user = document.getElementById("name");
              postScore(user.value);
            }}
          />
        </div>
      )}
      {!loser && (
        <div className="enter">
          <br />
          <h2>Congratulations {user.name.split(" ")[0]}! </h2>
          <h2> your score was {props.score}</h2>

          <h1>High Scores</h1>
          <ol
            style={{
              border: "1px solid white",
              borderRadius: "3px",
              letterSpacing: "1px",
              background: "rgba(0, 0, 0, 0.4)",
              width: "15%"
            }}
          >
            {HighScores.map(({ name, score }) => (
              <li className="scores">
                {name}: {score}
              </li>
            ))}
          </ol>
          <Button
            style={{
              border: "1px solid white",
              borderRadius: "3px",
              letterSpacing: "1px",
              background: "rgba(1, 0, 0, 0.4)",
              color: "white"
            }}
            label="Try Again"
            onClick={newGame}
          />
        </div>
      )}
    </>
  );
}
