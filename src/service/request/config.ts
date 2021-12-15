let BASE_URL = ''
const TIME_OUT = 10000

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'http://152.136.185.210:5000'
    break
  case 'production':
    BASE_URL = 'http://codewhy.org/prod'
    break
  case 'test':
    BASE_URL = 'http://codewhy.org/test'
    break
}

export { BASE_URL, TIME_OUT }
