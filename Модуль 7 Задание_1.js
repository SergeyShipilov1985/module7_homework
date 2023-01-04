let person = {
    name: "Sergey",
    surname: "Shipilov",
    age: 37,
    position: "Student",
    school: "Skillfactory"
}
function presentPerson(person){
    for(let key in person){
        console.log(key + " : " + person[key])
    }
}
presentPerson(person)


