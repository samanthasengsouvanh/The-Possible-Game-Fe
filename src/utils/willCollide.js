export default function willCollide(player, rect2) {
  //x collision
  if (
    player.y < rect2.y + 30 &&
    rect2.y < player.y + 29 &&
    player.x < rect2.x + rect2.width &&
    player.x + player.width > rect2.x
  ) {
    player.alive = false;
  }
  if (player.y + 5 > 270) {
    player.alive = false;
  }
  //y collision
  if (
    player.y < rect2.y + 30 &&
    rect2.y < player.y + 5 + player.height &&
    player.x < rect2.x + rect2.width &&
    player.x + player.width > rect2.x &&
    player.jumping === false
  ) {
    if (rect2.type === "1") {
      player.alive = false;
    }
    player.landed = true;
    player.falling = false;
  }
  // falling
  if (
    player.jumping === false &&
    player.landed === false &&
    player.x > rect2.x + rect2.width &&
    player.dy === 0 &&
    player.dy !== -5 &&
    player.y + 5 + player.height !== 300
  ) {
    player.falling = true;
  }

  return { player };
}
