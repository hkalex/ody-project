module.exports = {
  
  'global_request_after': {
      actionName: 'http.storefront.pages.global.request.after',
      customFunction: require('./domains/storefront/global_request_after')
  },
  
  'cmspage_request_after': {
      actionName: 'http.storefront.pages.cmspage.request.after',
      customFunction: require('./domains/storefront/cmspage_request_after')
  },
  
  'read_configuration': {
      actionName: 'http.storefront.routes',
      customFunction: require('./domains/storefront/read_configuration')
  }
};
