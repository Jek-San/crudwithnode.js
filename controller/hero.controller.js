const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const Hero = require("../model/Hero.model")




router.get('/', (request, response) => {
    console.log(response)
    Hero.getHero(response);
    response.send(" request ke /Hero diterima")
})

router.get('/:id', (request, response) => {

    const id = request.params.id;
    Hero.getHeroById(id, response);
})

router.post('/update', (request, response) => {
    const data = {
        "id": request.body.id,
        "name": request.body.name,
        "role": request.body.role

    }
    Hero.updateHeroById(data, response)
})

router.post('/add', (request, response) => {
    const data = {

        "name": request.body.name,
        "role": request.body.role

    }
    Hero.addHero(data, response)
})


router.post('/remove', (request, response) => {
    const id = request.body.id
    Hero.removeHero(id, response)
})



// router.get('/balmond', (request, response)=>{
//     console.log('request to hero balmond')
//     response.send("request to hero balmond diterima")
// })
// router.get('/uranus', (request, response)=>{
//     console.log('request to hero uranus')
//     response.send("request to hero uranus diterima")
// })
// router.get('/gatot-kaca', (request, response)=>{
//     console.log('request to hero gatotkaca')
//     response.send("request to hero gatotkaca berhasil")
// })

// pakai pawrameter

// router.get("/:id", (request, response)=>{
//     console.log('request to hero gatotkaca', request.params.id)

//     response.send("request to hero gatotkaca berhasil" + request.params.id) 
// })

module.exports = router