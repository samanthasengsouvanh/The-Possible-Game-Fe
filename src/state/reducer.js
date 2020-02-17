import { level_one } from "../levels";
export default function reducer(state, action) {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...state,
        player: {
          ...state.player,
          ...action.payload
        }
      };
    case "RENDER":
      return {
        ...state,
        player: { ...state.player, ...action.payload.player }
      };
    case "UPDATE_OBSTACLES":
      return {
        ...state,
        obstacles: {
          ...state.obstacles,
          ...action.payload
        }
      };
    case "UPDATE_DISPLAYBLOCKS":
      return {
        ...state,
        displayBlocks: {
          ...state.displayBlocks,
          ...action.payload
        }
      };
    case "UPDATE_SCORE":
      return {
        ...state,
        score: action.payload.score
      };
    case "GAMEOVER":
      return {
        ...state,
        playing: false
      };
    case "NEW_GAME":
      return {
        obstacles: level_one.reduce((acc, cur, y) => {
          const blocks = cur.split("").reduce((bs, b, x) => {
            if (b === " ") {
              return [...bs];
            }
            return [
              ...bs,
              {
                type: b,
                dx: -1,
                x: x * 30,
                y: y * 30,
                width: 30,
                height: 30
              }
            ];
          }, []);
          return [...acc, ...blocks];
        }, []),
        playing: true,
        player: {
          y: 200,
          dy: 5,
          x: 60,
          dx: 0,
          landed: false,
          r: 0,
          falling: true,
          jumping: false,
          alive: true,
          width: 30,
          height: 30
        },
        score: 0
      };

    // console.log(res);

    default:
      throw new Error("Event not found: ", action.type);
  }
}
