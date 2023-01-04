function checkAllKey(person,personKey) {
    return (personKey in person);
}
    const person = {
    name: "Sergey",
    surname: "Shipilov",
    age: 37,
    position: "Student",
    school: "Skillfactory"
}
console.log(checkAllKey(person,'age'))
console.log(checkAllKey(person,'weight'))
console.log(checkAllKey(person,'height'))
