const express = require('express')
const ytdl = require('ytdl-core')
import { setProgressBar, endProgressBar } from './main'

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

app.get('/', (req, res) => {
    res.render('index.html')
})

const options = { filter: 'audioonly', quality: 'highestaudio', format: 'mp3' }

app.get('/watch/:query', (req, res) => {
    const query = req.params.query
    const url = `https://www.youtube.com/watch?v=${query}`
    console.log(url)
    ytdl(url, options).pipe(res)
})


app.get('/download/:query', (req, res) => {
    const query = req.params.query
    const url = `https://www.youtube.com/watch?v=${query}`
    const yt = ytdl(url, options)

    res.header("Content-Disposition", `attachment;  filename="${query}.mp3"`)
    setProgressBar()
    yt.pipe(res)
        .on('finish', () => {
            endProgressBar()
        })

})


app.listen(port, "0.0.0.0", () => console.log(`
                    YTStream audio server listening on port $ { port }!`))
