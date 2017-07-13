// C = Client, S = Server
var platform = (typeof window === "undefined") ? 'C' : 'S';

var logger = null;

var getSettings = function() {
  if (platform === 'C') {
    
  }
}

export default {
  platform,
  logger,
  getSettings
}