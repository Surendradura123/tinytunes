const fastify = require('fastify')({logger: true})
const fs = require('fs')
const path = require('path')

// To get access from the http
fastify.register(require('fastify-cors'), { 
    // put your options here
})

//song json list
const songList = [{
    name: "song 1",
    file: "songs/song_1.mp3"
}, {
    name: "bbbsong",
    file: "songs/song_2.mp3"

}, {
    name: "cccsong",
    file: "songs/song_3.mp3"

},{
    name: "song",
    file: "songs/song_4.mp3"

},{
    name: "csong",
    file: "songs/song_5.mp3"

},{
    name: "ccsong",
    file: "songs/song_6.mp3"

},{
    name: "bbsong",
    file: "songs/song_7.mp3"

},{
    name: "bbbsong",
    file: "songs/song_8.mp3"

},{
    name: "song",
    file: "songs/song_9.mp3"

},{
    name: "ddsong",
    file: "songs/song_10.mp3"

},{
    name: "dsong",
    file: "songs/song_11.mp3"

}]

// route  to searching the songs
fastify.get('/search', async (req, res) => {
    const query = req.query['query']
    const found = []
    if(query){
        for(let song of songList) {
            if(song.name.startsWith(query)) {
                found.push(song)
            }
        }
    }
    return found
})

// route to play the music
fastify.get('/songs/:filename', async (req, res) => {
    const filename = req.params['filename']
    res.header("Content-Type", "audio/mpeg")
    const file = fs.readFileSync(path.join(__dirname,'songs', filename))
    res.send(file)
})

//Run the server
async function main(){
    try{
        await fastify.listen(3000, '0.0.0.0')
    } catch(error){
        console.log(error)
        process.abort()

    }      
}

main()


//References:
// Fastify, Fast and low overhead web framework, for Node.js (2021) Fastify. Available at: https://www.fastify.io/ (Accessed: 2 June 2021).
// Gonzalez, D. (2021) Cloud Services & Integration [Wed 12:00] – dgonzalez@cct.ie - Google Drive. Available at: https://drive.google.com/drive/folders/1-bMtWxYjQssLye5Nzkfxvdo8IgFkQveh (Accessed: 2 June 2021).
