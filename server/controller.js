// varialbe that import out from json files
const houses = require('./db.json')
let globalId = 4;



module.exports = {
    getHouses: (req,res) => {
  res.status(200).send(houses)
    }, 

    deleteHouse: (req,res) => {const existingId = +req.params.id

    let index = houses.findIndex(house => house.id === existingId)
    houses.splice(index,1)
    res.status(200).send(houses)

    },
    createHouse: (req,res) => {
    const {imageURL,address,price} = req.body

    let newHouse = {
        address, 
        price,
        imageURL,
        id: globalId
    }
    houses.push(newHouse)
    res.status(200).send(houses)
    globalId++
    
    },
    updateHouse: (req,res) => {
        const existingId = +req.params.id
    let index = houses.findIndex(house => house.id === existingId)
    
    if(req.body.type === 'plus'){
        if(houses[index].price >= 700000000){
            res.status(400).send('Cannot price a house over 100000')
        }else{
            houses[index].price += 10000
            res.status(200).send(houses)
        }
    }else {
        if(houses[index].price <= 1){
            res.status(400).send('Cannot rate house under 1')
        }else{
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
    } 

    }
}