module.exports = {
  'hello_custom_routing': {
    actionName: 'http.storefront.routes',
    customFunction: require('./domains/storefront/hello_custom_routing')
  },
  'read_configuration': {
    actionName: 'http.storefront.routes',
    customFunction: require('./domains/storefront/read_configuration')
  }
};
