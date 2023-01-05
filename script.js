// fetch('https://api.github.com/users')
// .then(res => res.json())
// .then(data => console.log(data))



function getUserInfo(){
    let userName = document.getElementById('fname').value
    // console.log(userName)
    let url = 'https://api.github.com/users/'+userName
    //  console.log(url)
    let userDetails = document.getElementById('userDetails')
    // console.log(userDetails)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        userDetails.innerHTML = `<h1>User Name : ${data.login}</h1>
        <img src = "${data.avatar_url}">
        `
    }).catch((error)=>{
        console.log(error)

    })
}