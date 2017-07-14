module.exports = function(context, callback) {
  var json = context.configuration.myjson;
  context.response.body = JSON.stringify(json);
  //context.response.end();
  callback();
};
