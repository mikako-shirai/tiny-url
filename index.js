const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {  // '/'はサイト上のパス
  res.send('Hello World!')
})

app.get('/users/:username', (req, res) => {
  console.log(req.params)
  res.send(`Hello ${req.params.username}!`) // ${}はpythonのformat. 'の代わりに`を使う
})

// const lookup_table = {}
// app.get('/shorten', (req, res) => {
// 	console.log(req.query) // queryを使うと、変数rの名前で要素を取得する
// 	// res.send(`the url to shorten is ${req.query.r}`) // shortenの後ろに ?r= で変数rにurlを代入. ? は、その後ろが別だと伝える

// 	let originalURL = req.query.r
// 	let newURL = `hi${Math.floor(100000 + Math.random() * 900000)}`

// 	lookup_table[newURL] = originalURL
// 	res.send(`The original url was  '${originalURL}'<p>the shortened url is  '${newURL}'</p>`)
// })

// app.get('/lookup', (req, res) => {
// 	console.log(req.query)

// 	let shortURL = req.query.l
// 	let originalURL = lookup_table[shortURL]
// console.log(lookup_table)
// 	if (originalURL) {
// 		res.redirect(originalURL)
// 	} else {
// 		res.send(`error`)
// 	}
// })

// app.get('/redirect/:newurl', (req, res) => {
// 	let shortURL = req.params.newurl
// 	let originalURL = lookup_table[shortURL]
// 	console.log(req.params)
// 	console.log(lookup_table)
	
// 	if (originalURL) {
// 		console.log(`redirecting to ${originalURL}.....`)
// 		// res.redirect(originalURL)
// 		res.append('lookup', 'hii')
// 	} else {
// 		res.send(`error`)
// 	}
// })


const lookup_table = {}
app.get('/shorten', (req, res) => {
	console.log(req.query) // queryを使うと、変数rの名前で要素を取得する
	// res.send(`the url to shorten is ${req.query.r}`) // shortenの後ろに ?r= で変数rにurlを代入. ? は、その後ろが別だと伝える

	let originalURL = req.query.r
	let newURL = `hi${Math.floor(100000 + Math.random() * 900000)}`

	home = 'http://localhost:3000/'
	lookup_table[newURL] = originalURL
	res.send(`The original url was  '${originalURL}'<p>The shortened url is  '${home}${newURL}'</p>`)
})

app.get('/:newurl', (req, res) => {
	let shortURL = req.params.newurl
	let originalURL = lookup_table[shortURL]
	console.log(req.params)
	console.log(lookup_table)
	
	if (originalURL) {
		console.log(`redirecting to ${originalURL}.....`)
		res.redirect(originalURL)
	} else {
		res.send(`error`)
	}
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})