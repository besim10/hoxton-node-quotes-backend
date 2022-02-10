import express from 'express'
const app = express()
const PORT = 8000

type Quote = {
    id: number
    name: string
    text: string
}
const quotes: Quote[] = [
    {
        id: 1,
        name: 'Nelson Mandela',
        text: 'Do not judge me by my successes, judge me by how many times I fell down and got back up again.'
    },
    {
        id: 2,
        name: 'Richard Armour',
        text: 'Politics, it seems to me, for years, or all too long, has been concerned with right or left instead of right or wrong.'
    },
    {
        id: 3,
        name: 'Aristotle',
        text: 'Democracy arises out of the notion that those who are equal in any respect are equal in all respects; because men are equally free, they claim to be absolutely equal.'
    },
    {
        id: 4,
        name: 'Winston Churchill',
        text: 'The inherent vice of capitalism is the unequal sharing of blessings; the inherent virtue of socialism is the equal sharing of miseries.'
    },
    {
        id: 5,
        name: 'George Orwell',
        text: 'Political language… is designed to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind.'
    },
    {
        id: 6,
        name: 'Franklin P. Adams',
        text: 'When the political columnists say Every thinking man they mean themselves, and when candidates appeal to Every intelligent voter they mean everybody who is going to vote for them.'
    },
    {
        id: 7,
        name: 'Franklin D. Roosevelt',
        text: 'In politics, nothing happens by accident. If it happens, you can bet it was planned that way.'
    },
    {
        id: 8,
        name: 'Plato',
        text: 'Mankind will never see an end of trouble until lovers of wisdom come to hold political power, or the holders of power become lovers of wisdom.'
    },
    {
        id: 9,
        name: 'Albert Einstein',
        text: 'An empty stomach is not a good political advisor.'
    },
    {
        id: 10,
        name: 'Ronald Reagan',
        text: 'Government exists to protect us from each other. Where government has gone beyond its limits is in deciding to protect us from ourselves.'
    },
    {
        id: 11,
        name: 'Napoleon Bonaparte',
        text: 'In politics stupidity is not a handicap.'
    },
    {
        id: 12,
        name: 'Leo Rosten',
        text: 'A conservative is one who admires radicals centuries after they re dead.'
    },
    {
        id: 13,
        name: 'Margaret Thatcher',
        text: 'n politics, if you want anything said, ask a man; if you want anything done, ask a woman.'
    },
    {
        id: 14,
        name: 'Franklin D. Roosevelt',
        text: 'Let us never forget that government is ourselves and not an alien power over us. The ultimate rulers of our democracy are not a President and senators and congressmen and government officials, but the voters of this country.'
    },
    {
        id: 15,
        name: 'Martin L. Gross',
        text: 'We live in a world in which politics has replaced philosophy.'
    },
    {
        id: 16,
        name: 'Barack Obama',
        text: 'When our government is spoken of as some menacing, threatening, foreign entity, it ignores the fact that in our democracy, government is us.'
    },
    {
        id: 17,
        name: 'Oscar Ameringer',
        text: 'Politics is the gentle art of getting votes from the poor and campaign funds from the rich, by promising to protect each from the other.'
    },
    {
        id: 18,
        name: 'Ernest Benn',
        text: 'Politics is the art of looking for trouble, finding it whether it exists or not, diagnosing it incorrectly, and applying the wrong remedy.'
    },
    {
        id: 19,
        name: 'Winston Churchill',
        text: 'Some men change their party for the sake of their principles; others their principles for the sake of their party.'
    },
    {
        id: 20,
        name: 'Winston Churchill',
        text: 'Politics are almost as exciting as war, and quite as dangerous. In war you can only be killed once, but in politics many times.'
    }
]

app.get('/', function (req,res){
    res.send('Welcome to our Quotes API')
})
app.get('/quotes', (req,res) =>{
    res.send(quotes)
})

app.listen(PORT, () =>{
    console.log(`Server running in port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * quotes.length) + 1
    const randomQuote = quotes.find(quote => quote.id === randomNumber)
    res.send(randomQuote);
  });