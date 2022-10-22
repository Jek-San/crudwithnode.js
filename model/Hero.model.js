const { response, request } = require('express')
const db = require('../config')

exports.getHero = (response) => {
    //query data

    const sql = "SELECT * FROM `hero`"
    db.query(sql, (error, result) => {
        if (error) return console.log("error :", error)
        const heroes = {
            title: "MOBILE-LEGEND-HERO-LIST",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('index', { heroes })
        response.end()
    })
}

// ini query untuk get hero
exports.getHeroById = (id, response) => {
    const sql = `SELECT * FROM  hero WHERE id = ${id}`

    db.query(sql, (error, result) => {
        if (error) return console.log("error :", error)

        const hero = {
            title: "Data-Hero-By-Id",
            data: JSON.parse(JSON.stringify(result))
        }

        response.render('heroDetail', { hero })
        response.end()
    })

}

// ini untukquery update hero by id
exports.updateHeroById = (data, response) => {
    const id = data.id
    const name = data.name
    const role = data.role

    const sql = `UPDATE hero SET name = '${name}', role ='${role}' WHERE id = '${id}' `

    db.query(sql, (error, result) => {
        if (error) return console.log("error :", error)

        response.redirect('/hero')
        response.end()

    })
}

exports.addHero = (data, response) => {
    
    const name = data.name
    const role = data.role

    const sql = `INSERT INTO hero (name, role) VALUES ('${name}', '${role}')`

    db.query(sql, (error, result) => {
        if (error) return console.log("error :", error)

        response.redirect('/hero')
        response.end()

    })
}
exports.removeHero = (id, response) => {
    
   

    const sql = `DELETE FROM hero WHERE id = '${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log("error :", error)

        response.redirect('/hero')
        response.end()

    })
}

