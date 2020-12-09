let app = require('express')()
const port = process.env.PORT || 8000
// Définition du moteur de template utilisé --> ejs
app.set('view engine', 'ejs')

app.get('/', (req, rep) => {
    // renvoie à l'utilisateur une simple chaine de caractere
    // rep.send('Salut')
    
    // renvoie à l'utilisateur une vue --> du code html dans notre cas
    rep.render('pages/index', {test: 'Salut à toi jeune entrepreneur'})
})


app.listen(port)
