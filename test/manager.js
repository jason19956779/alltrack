var M = module.exports = {}

var ccc = {id: 'ccc', password: '12345'}
var jason = {id: 'jason', password: '54321'}

var userMap = {
    'ccc': ccc,
    'jason': jason
}

M.login = function (id, password) {
    var user = userMap[id]
    if(typeof user !== undefined && user.password === password) {
        return user
    }
}