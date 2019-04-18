let baseUrl = '';
let routerMode = 'hash';
let env = 'dev';
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://api.bookshop.jcwl2010.com/'
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://api.bookshop.jcwl2010.com/'
  env = 'pro';
} else if (process.env.NODE_ENV == 'beta') {
  baseUrl = 'http://api.bookshop.jcwl2010.com/'
  env = 'beta';
}

export {
  baseUrl,
  env
}
