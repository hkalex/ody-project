/**
 * Implementation for http.storefront.pages.global.request.after


 * HTTP Actions all receive a similar context object that includes
 * `request` and `response` objects. These objects are similar to
 * http.IncomingMessage objects in NodeJS.

{
  configuration: {},
  request: http.ClientRequest,
  response: http.ClientResponse
}

 * Call `response.end()` to end the response early.
 * Call `response.set(headerName)` to set an HTTP header for the response.
 * `request.headers` is an object containing the HTTP headers for the request.
 * 
 * The `request` and `response` objects are both Streams and you can read
 * data out of them the way that you would in Node.

 */

 //var labels = require('../common/en');

module.exports = function(context, callback) {
  var locale = context.apiContext.localeCode;
  console.info("locale=" + locale);

  // console.info("context.items.siteContext.themeSettings=" + context.items.siteContext.themeSettings);
  // console.info("Object.keys(context.items.siteContext.themeSettings)=" + Object.keys(context.items.siteContext.themeSettings));
  // console.info("context.items.siteContext.themeSettings.Item('labels-en')=" + context.items.siteContext.themeSettings.Item('labels-en'));
  // console.info("context.items.siteContext.themeSettings.InnerDictionary=" + context.items.siteContext.themeSettings.InnerDictionary);
  // console.info("Object.keys(context.items.siteContext.themeSettings.InnerDictionary)=" + Object.keys(context.items.siteContext.themeSettings.InnerDictionary));
  // console.info("context.items.siteContext.themeSettings.InnerDictionary.Keys.Count=" + JSON.stringify(context.items.siteContext.themeSettings.InnerDictionary.Keys));


  // console.info("context.items.siteContext.generalSettings=" + context.items.siteContext.generalSettings);
  // console.info("context.items.siteContext.generalSettings.timeZone=" + context.items.siteContext.generalSettings.timeZone);
  // console.info("context.items.siteContext.labels.logIn=" + context.items.siteContext.labels.logIn);
  // console.info("context.items.siteContext.labels['logIn']=" + context.items.siteContext.labels['logIn']);
  // console.info("Object.keys(context.items.siteContext.labels)=" + JSON.stringify(Object.keys(context.items.siteContext.labels)));
  // console.info("context.items.siteContext.labels.Item('logIn')=" + context.items.siteContext.labels.Item('logIn'));
  // console.info("context.items.siteContext.labels=" + context.items.siteContext.labels);

  //context.items.siteContext.labels.Clear();
  var labelApplied = context.items.siteContext.labels.ContainsKey('__label__applied__');
  console.info("labelApplied=" + labelApplied);
  if (!labelApplied) {
    //console.info("context.items.siteContext.themeSettings.InnerDictionary.Item('labels_en')=" + context.items.siteContext.themeSettings.InnerDictionary.Item('labels_en'));

    var labels = JSON.parse(context.items.siteContext.themeSettings.InnerDictionary.Item('labels_en'));


    console.info("Applying labels...");
    context.items.siteContext.labels.Clear();
    for(var key in labels) {
      context.items.siteContext.labels.Add(key, labels[key]);
    }
    context.items.siteContext.labels.Add('__label__applied__', '1');
    console.info("Applyed labels");
  }

  // locale = locale || locale.toLowerCase();
  // if (context.items.siteContext.themeSettings['labels-' + locale]) {
  //   context.items.siteContext.labels = context.items.siteContext.themeSettings['labels-' + locale];
  // } else {
  //   context.items.siteContext.labels = context.items.siteContext.themeSettings['labels-en'];
  // }

  //console.info("context.items.siteContext.labels.logIn=" + context.items.siteContext.labels);

  console.info('done');
  callback();
};