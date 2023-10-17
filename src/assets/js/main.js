import { mediaQuery } from "./utils/mediaQuery.js";
import { UserAgent } from "./utils/userAgent.js";
import { loadSpriteSVG } from "./utils/loadSpriteSVG.js";

// mediaQuery
if(mediaQuery.isPC) {
  console.log('is PC');
}

// userAgent
new UserAgent();

// SpriteSVG
loadSpriteSVG('/assets/images/sprite.svg');