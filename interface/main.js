
// function to fecth the songs from the service search-and-play and load them in the html page
async function search() {
  const searchTerm = document.getElementById('search-term').value
  const response = await fetch(`http://localhost:3000/search?query=${searchTerm}`)
  if (response.ok) {
    registerMetric('search_request', 1)
    const jsonResponse = await response.json()
    const results = document.getElementById('results')
    let html = ''
    for (song of jsonResponse) {
      html += `<div>${song.name} - <audio controls>
                                      <source src="http://localhost:3000/${song.file}" type="audio/ogg"> 
              </audio> </div>`
    }
    results.innerHTML = html
  }
}



// function to fecth the songs from the service playlists and load them in the html page

async function playlist() {  
  const response = await fetch('http://localhost:3001/playlist')
  if (response.ok){
    registerMetric('play-clicked', 1)
      var i=0
      const jsonResponse = await response.json()
      const playlist = document.getElementById('playlist')
      let html = ''
      for (song of jsonResponse) {
        html += `<div>${song.name} - <audio controls>
                                        <source src="http://localhost:3000/${song.file}" type="audio/ogg"> 
                </audio></div>`
      }
      playlist.innerHTML = html 
  }
}


    
    
// this function help us to post function for the stats
async function registerMetric(key, value) {
  const response = await fetch('http://localhost:3002/stats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ key: key, value: value })
  })
  if (response.ok) {
    console.log(response.status)
  } else {
    console.log(response.status)
  }
}

// funtion to fecth the songs from the service stats and load them in the html page
async function stats() {
const searchTerm = document.getElementById('search-term').value
const response = await fetch(`http://localhost:3002/stats`)
if (response.ok) {
  const jsonResponse = await response.json()
  console.log(jsonResponse)
  const results = document.getElementById('stats')
  let html = `<div>${JSON.stringify(jsonResponse)}</div>`
  results.innerHTML = html
}
}
setInterval(() => {
stats()
}, 500);
  
async function autoplaylist1() {  
  const response = await fetch('http://localhost:3003/songlist1')
  if (response.ok){
    registerMetric('autoplaylist1', 1)
      var i=0
      const jsonResponse = await response.json()
      const autoplaylist1 = document.getElementById('autoplaylist1')
      let html = ''
      for (song of jsonResponse) {
        html += `<div>${song.name} - <audio controls autoplay>
                                        <source src="http://localhost:3003/${song.file}" type="audio/ogg"> 
                </audio></div>`
      }
      autoplaylist1.innerHTML = html 
  }
}

async function autoplaylist2() {  
  const response = await fetch('http://localhost:3003/songlist2')
  if (response.ok){
    registerMetric('autoplaylist2', 1)
      var i=0
      const jsonResponse = await response.json()
      const autoplaylist2 = document.getElementById('autoplaylist2')
      let html = ''
      for (song of jsonResponse) {
        html += `<div>${song.name} - <audio controls autoplay>
                                        <source src="http://localhost:3003/${song.file}" type="audio/ogg"> 
                </audio></div>`
      }
      autoplaylist2.innerHTML = html 
  }
}

async function autoplaylist3() {  
  const response = await fetch('http://localhost:3003/songlist3')
  if (response.ok){
    registerMetric('autoplaylist3', 1)
      var i=0
      const jsonResponse = await response.json()
      const autoplaylist3 = document.getElementById('autoplaylist3')
      let html = ''
      for (song of jsonResponse) {
        html += `<div>${song.name} - <audio controls autoplay>
                                        <source src="http://localhost:3003/${song.file}" type="audio/ogg"> 
                </audio></div>`
      }
      autoplaylist3.innerHTML = html 
  }
}

//References:
// Fastify, Fast and low overhead web framework, for Node.js (2021) Fastify. Available at: https://www.fastify.io/ (Accessed: 2 June 2021).
// Gonzalez, D. (2021) Cloud Services & Integration [Wed 12:00] ??? dgonzalez@cct.ie - Google Drive. Available at: https://drive.google.com/drive/folders/1-bMtWxYjQssLye5Nzkfxvdo8IgFkQveh (Accessed: 2 June 2021).
    
            