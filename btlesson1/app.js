let container = document.getElementById("container")
const getData = () => {
    const request = fetch("https://reqres.in/api/users?page=2");
    request
      .then((response) => {
        console.log(response)
        return response.json();
        
      })
      .then((data) => {
        let users = data.data;
        renderUser(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const genderUsers = (users) =>{
    return` <div class=" w-1/3 bg-gray-300 p-8 rounded-xl mb-4">
    <img src="${users.avatar}" alt="">
    <p>${users.first_name} ${users.last_name}</p>
    <p>${users.email}</p>
  </div>`
  }
  const renderUser = (users) => {
    for (let i = 0; i < users.length; i++) {
      let Users = genderUsers(users[i])
      container.innerHTML += Users
      console.log(users[i])
    }
  };
  
  getData();