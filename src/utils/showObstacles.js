export default function showObstacles(obstacles, displayBlocks, dispatch) {
  for (let i = 0; i < obstacles.length; i++) {
    dispatch({
      type: "UPDATE_OBSTACLES",
      payload: {
        x: (obstacles[i].x -= 4)
      }
    });

    if (obstacles[i].x < 570) {
      dispatch({
        type: "UPDATE_DISPLAYBLOCKS",
        payload: {
          displayBlocks: displayBlocks.push(obstacles[i])
        }
      });
    }
    if (obstacles[i].x < 0) {
      dispatch({
        type: "UPDATE_OBSTACLES",
        payload: {
          obstacles: obstacles.splice(i, 1)
        }
      });
    }
  }

  for (let i = 0; i < displayBlocks.length; i++) {
    if (displayBlocks[i].x < 0) {
      dispatch({
        type: "UPDATE_DISPLAYBLOCKS",
        payload: {
          displayBlocks: displayBlocks.splice(i, 1)
        }
      });
    }
  }
}
