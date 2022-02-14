import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 8000

app.use(cors())
type Quote = {
    id: number
    firstName: string
    lastName: string
    photo: string
    age: number
    text: string
}
const quotes: Quote[] = [
    {
        id: 1,
        firstName: 'Nelson',
        lastName: 'Mandela',
        photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/a4b9c726714513.56359606a87fc.jpg',
        age: 95,
        text: 'Do not judge me by my successes, judge me by how many times I fell down and got back up again.'
    },
    {
        id: 2,
        firstName: 'Richard',
        lastName: 'Armour',
        photo: 'https://images.gr-assets.com/authors/1338769201p8/205834.jpg',
        age: 82,
        text: 'Politics, it seems to me, for years, or all too long, has been concerned with right or left instead of right or wrong.'
    },
    {
        id: 3,
        firstName: 'Aristotle',
        lastName: '',
        photo: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2ODIwNDI5NjA2OTU0OTg1/aristotle--getty.jpg',
        age: 62,
        text: 'Democracy arises out of the notion that those who are equal in any respect are equal in all respects; because men are equally free, they claim to be absolutely equal.'
    },
    {
        id: 4,
        firstName: 'Winston',
        lastName: 'Churchill',
        photo: 'https://www.madametussauds.com/wien/media/ge2b0w0o/winston-churchill-min.jpg?center=0.15733997428394192,0.47833333333333333&mode=crop&width=700&height=700',
        age: 90,
        text: 'The inherent vice of capitalism is the unequal sharing of blessings; the inherent virtue of socialism is the equal sharing of miseries.'
    },
    {
        id: 5,
        firstName: 'George',
        lastName: 'Orwell',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/George_Orwell%2C_c._1940_%2841928180381%29.jpg/1200px-George_Orwell%2C_c._1940_%2841928180381%29.jpg',
        age: 46,
        text: 'Political language… is designed to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind.'
    },
    {
        id: 6,
        firstName: 'Franklin P.',
        lastName: 'Adams',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Franklin_P._Adams.jpg',
        age: 78,
        text: 'When the political columnists say Every thinking man they mean themselves, and when candidates appeal to Every intelligent voter they mean everybody who is going to vote for them.'
    },
    {
        id: 7,
        firstName: 'Franklin D.',
        lastName: 'Roosevelt',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/1200px-FDR_1944_Color_Portrait.jpg',
        age: 63,
        text: 'In politics, nothing happens by accident. If it happens, you can bet it was planned that way.'
    },
    {
        id: 8,
        firstName: 'Plato',
        lastName: '',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/1200px-Plato_Silanion_Musei_Capitolini_MC1377.jpg',
        age: 81,
        text: 'Mankind will never see an end of trouble until lovers of wisdom come to hold political power, or the holders of power become lovers of wisdom.'
    },
    {
        id: 9,
        firstName: 'Albert',
        lastName: 'Einstein',
        photo: 'https://thedecisionlab.com/wp-content/uploads/2020/11/albert-einstein.jpg',
        age: 76,
        text: 'An empty stomach is not a good political advisor.'
    },
    {
        id: 10,
        firstName: 'Ronald',
        lastName: 'Reagan',
        photo: 'https://m.media-amazon.com/images/M/MV5BMGZjNDNlMGYtZWY4MS00MjhmLWIwMWEtYjk3Y2UzNTQ1YzJjXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
        age: 93,
        text: 'Government exists to protect us from each other. Where government has gone beyond its limits is in deciding to protect us from ourselves.'
    },
    {
        id: 11,
        firstName: 'Napoleon',
        lastName: 'Bonaparte',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/1200px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg',
        age: 51,
        text: 'In politics stupidity is not a handicap.'
    },
    {
        id: 12,
        firstName: 'Leo',
        lastName: 'Rosten',
        photo: 'https://images.gr-assets.com/authors/1290229826p8/59780.jpg',
        age: 88,
        text: 'A conservative is one who admires radicals centuries after they re dead.'
    },
    {
        id: 13,
        firstName: 'Margaret',
        lastName: 'Thatcher',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Margaret_Thatcher_stock_portrait_%28cropped%29.jpg',
        age: 87,
        text: 'In politics, if you want anything said, ask a man; if you want anything done, ask a woman.'
    },
    {
        id: 14,
        firstName: 'Franklin D.',
        lastName: 'Roosevelt',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/1200px-FDR_1944_Color_Portrait.jpg',
        age: 63,
        text: 'Let us never forget that government is ourselves and not an alien power over us. The ultimate rulers of our democracy are not a President and senators and congressmen and government officials, but the voters of this country.'
    },
    {
        id: 15,
        firstName: 'Martin L.',
        lastName: 'Gross',
        photo: 'https://static01.nyt.com/images/2013/09/03/us/GROSS-obit/GROSS-obit-superJumbo.jpg',
        age: 88,
        text: 'We live in a world in which politics has replaced philosophy.'
    },
    {
        id: 16,
        firstName: 'Barack',
        lastName: 'Obama',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg',
        age: 60,
        text: 'When our government is spoken of as some menacing, threatening, foreign entity, it ignores the fact that in our democracy, government is us.'
    },
    {
        id: 17,
        firstName: 'Oscar',
        lastName: 'Ameringer',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Oscar_Ameringer.jpg',
        age: 73,
        text: 'Politics is the gentle art of getting votes from the poor and campaign funds from the rich, by promising to protect each from the other.'
    },
    {
        id: 18,
        firstName: 'Ernest',
        lastName: 'Benn',
        photo: 'https://4.bp.blogspot.com/-0Mf6OESW2Ek/WfO8DM4E4tI/AAAAAAAAHNE/Mf1O28h3FYYY1Fr6r0dS1Ed0gDeQihBpgCLcBGAs/s1600/2297225957_1a5775fe8a%255B1%255D_0.jpg',
        age: 78,
        text: 'Politics is the art of looking for trouble, finding it whether it exists or not, diagnosing it incorrectly, and applying the wrong remedy.'
    },
    {
        id: 19,
        firstName: 'Winston',
        lastName: 'Churchill',
        photo: 'https://www.madametussauds.com/wien/media/ge2b0w0o/winston-churchill-min.jpg?center=0.15733997428394192,0.47833333333333333&mode=crop&width=700&height=700',
        age: 90,
        text: 'Some men change their party for the sake of their principles; others their principles for the sake of their party.'
    },
    {
        id: 20,
        firstName: 'Winston',
        lastName: 'Churchill',
        photo: 'https://www.madametussauds.com/wien/media/ge2b0w0o/winston-churchill-min.jpg?center=0.15733997428394192,0.47833333333333333&mode=crop&width=700&height=700',
        age: 90,
        text: 'Politics are almost as exciting as war, and quite as dangerous. In war you can only be killed once, but in politics many times.'
    }
]

app.get('/', function (req,res){
    res.send('Welcome to our Quotes API')
})
app.get('/quotes', (req,res) =>{
    res.send(quotes)
})
app.get('/quotes/:id', (req, res) => {
    const id = Number(req.params.id);
  
    const match = quotes.find((quote) => quote.id === id);
  
    if (match) {
      res.send(match);
    } else {
      res.status(404).send({ error: 'Quote not found.' });
    }
});
app.listen(PORT, () =>{
    console.log(`Server running in port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * quotes.length) + 1
    const randomQuote = quotes.find(quote => quote.id === randomNumber)
    res.send(randomQuote);
});
const randomNumber = Math.floor(Math.random() * quotes.length)
app.get('/quote-of-the-day', (req, res) => {
    const randomQuote = quotes[randomNumber]
    res.send(randomQuote);
});
app.get('/quotes/:searchedvalue', (req, res) => {
    const searchedvalue = req.params.searchedvalue;
    let updatedQuotes = quotes
    updatedQuotes = updatedQuotes.filter(quote => quote.text.toLowerCase().includes(searchedvalue.toLowerCase()))
    res.send(updatedQuotes);
});