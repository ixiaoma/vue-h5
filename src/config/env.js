let baseUrl = '';
let routerMode = 'hash';
let env = 'dev';
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://10.100.50.27:26302/'
  // baseUrl='http://192.168.31.81:8080/'
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://10.100.50.27:26302/'
  // baseUrl='http://192.168.31.81:8080/'
  env = 'pro';
} else if (process.env.NODE_ENV == 'beta') {
  baseUrl = 'http://10.100.50.27:26302/'
  // baseUrl='http://192.168.31.81:8080/'
  env = 'beta';
}

export {
  baseUrl,
  env
}
