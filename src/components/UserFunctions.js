import axios from 'axios'

export const register = newUser => {
  console.log(newUser,'hhh')
  return axios
    .post('http://localhost:8000/regis', {
      email: newUser.email,
      password: newUser.password,
      position: newUser.position
    })
    .then(response => {
      console.log(response)
      console.log('Success')
    })
    .catch(err => {
      console.log(err)
    })
}

// if(response.status === 200){
//   this.setState({
//     message: 'Success'
// })
//   console.log(this.state)
//   alert('Register Success')
// }
// else if (response.status === 'error'){
//       this.setState({
//         message: 'try again'
//     })
//     console.log(this.state)
//       alert('try again')
// }


export const login = user => {
  return axios
    .post('http://localhost:8000/loginUser', {
      email: user.email,
      password: user.password,
      position: user.position
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data.token)
      localStorage.setItem('email', user.email)
      localStorage.setItem('position',user.position)
      console.log(response.data.token)
      console.log('ok')
      console.log(user.email)
      console.log('jjjj',response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}


//gak kepakeee..hapus
export const profile = user => {
  const token =  localStorage.getItem("usertoken")
  console.log(token)
  const config={
      headers:{
          Authorization: `Bearer ${token}`
         }
     }
  return 
  console.log(user.id,'ceeeeeeeeeeeeeeeeeeeeeee');
  axios
    .post('http://localhost:8000/engineer', {
      id: user.id,
      name: user.name,
      description: user.description,
      skill: user.skill,
      location: user.location,
      birth: user.birth,
      showcase: user.showcase,
      email: user.email
    }, config)
    .then(response => {
      
      // localStorage.setItem('usertoken', response.data.token)
      // console.log(response.data)
      console.log('response.data')
      // return response.data
      
      
    })
    .catch(err => {
      console.log(localStorage.getItem("usertoken"))
      console.log(err)
    })
}
