const { createServer } = require('http')
const { parse } = require('url')
const pathMatch = require('path-match')
const next = require('next')

const conf = require('./next.config')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev, conf })
const handle = app.getRequestHandler()
const route = pathMatch()
const inteligenciaFinanceira = route('/inteligencia-financeira/:id')

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const params = inteligenciaFinanceira(pathname)

    if (params === false) {
      handle(req, res, parsedUrl)
      return
    }
    app.render(req, res, '/inteligencia-financeira', Object.assign(params, query))
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
