import { mediaQuery } from "./utils/mediaQuery.js";
import { UserAgent } from "./utils/userAgent.js";

// mediaQuery
if(mediaQuery.isPC) {
  console.log('is PC');
}

// userAgent
new UserAgent();
