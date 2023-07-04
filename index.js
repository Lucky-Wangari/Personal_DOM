const userContainer = document.getElementById('users');

const getUsers = async () => {
    try{
        const response = await fetch('https://dummyjson.com/users')
        const response_A = response.json()
        return response_A
    } catch(error){
        return error
    }
};
getUsers()

const displayDetails = async () => {
const users = await getUsers();
console.log(users.users);
users.users.map(item => {
    console.log(item)
    let div = document.createElement('div')
    let image = document.createElement('img')
    let name = document.createElement('h4')
    let userName = document.createElement('p')

    // assign values to the created elements
    image.src = item.image
    name.innerHTML = `${item.firstname} ${item.lastname}`
    userName.innerHTML = item.username


    // append the created elements into the created div
    div.appendChild(image)
    div.appendChild(name)
    div.appendChild(userName)
    div.setAttribute('key',item.id)
    div.setAttribute('class', 'people')
    userContainer.appendChild(div)

})};
displayDetails()
