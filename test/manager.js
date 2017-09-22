var M = module.exports = {}

var ccc = {id: 'ccc', password: '12345'}
var jason = {id: 'jason', password: '54321'}

var userMap = {
    'ccc': ccc,
    'jason': jason
}

M.login = function (id, password) {
    var user = userMap[id]
    if(user.password === password) {
        return user
    }
}

var user1 = M.login('ccc', '11111')
console.log('user1 = %j', user1)

var user2 = M.login('jason', '54321')
console.log('user2 = %j', user2)