let baseUrl = '';
let routerMode = 'hash';
let env = 'dev';
if (process.env.NODE_ENV == 'development') {
  // baseUrl = 'http://10.116.25.123:8080/'
  baseUrl='http://api.express.ui-tech.cn/'
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://10.100.50.27:26302/'
  // baseUrl='http://192.168.31.81:8080/'//增光小米
  // baseUrl='http://10.116.36.153:8080/'//增光Lenovo
  // baseUrl='http://api.express.ui-tech.cn/'
  env = 'pro';
} else if (process.env.NODE_ENV == 'beta') {
  baseUrl = 'http://10.100.50.27:26302/'
  // baseUrl='http://192.168.31.81:8080/'
  // baseUrl='http://10.116.36.153:8080/'
  // baseUrl='http://api.express.ui-tech.cn/'
  env = 'beta';
}

export {
  baseUrl,
  env
}
