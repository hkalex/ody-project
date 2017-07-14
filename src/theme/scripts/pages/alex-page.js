require([
  "modules/jquery-mozu",
  "modules/api",
  "underscore",
  "hyprlive",
  "modules/backbone-mozu",
  "modules/cart-monitor",
  "modules/models-product",
  "modules/views-productimages",
  "hyprlivecontext"],
  function ($, api, _, Hypr, Backbone, CartMonitor, ProductModels, ProductImageViews, HyprLiveContext) {
    api.request('GET', '/alex-page-api').then(function(response) {
      $("#alex-div").text(JSON.stringify(response));
    });
  }
);
