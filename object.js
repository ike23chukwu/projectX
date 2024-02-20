const user = {
    fullname: "Emeka Daniel",
    email: "emekadaniel@gmail.com",
    phone: [
        {
            home: "02145874566",
            mobile: "74524885694"
        }
    ],
    age: 26,
    children: ["Matthais", "Ikenna"],
    newBirth: function () {
        return `${this.fullname} births a new child`
    }
}

console.log(user)
console.log(user.fullname)
console.log(user.children)
console.log(user.newBirth())
