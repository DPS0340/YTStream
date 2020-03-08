const express = require('express')
const ytdl = require('ytdl-core')
const path = require('path')

const localhostOnly = (req, res, next) => {
    const localhost = ['127.0.0.1', 'localhost']
  
    if (localhost.filter(e => req.get('host').includes(e)).length > 0) {
      // console.log('localhost allowed')
      next()
    } else {
      console.log('External Access not allowed')
      res.render('inhibited.html')
    }
}

const app = express()
const port = 8890

app.use(express.static('dist/public'))

app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)

app.use(localhostOnly)

const stream = (url) => {
  const yt = ytdl(url, { filter: 'audioonly' })
  // audio stream with express server TODO
}

app.get('/' , (req, res) => {
    res.render('index.html')
})


app.get('/watch/:query', (req, res) => {
  console.log(req.params)
})

app.listen(port, () => console.log(`YTStream audio server listening on port ${port}!`))
