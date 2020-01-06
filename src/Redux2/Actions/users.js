import axios from "axios";



// export const getAllUser = () => {
//   const URL_STRING = "http://localhost:8000/sort";
//   const token =  localStorage.getItem("usertoken")
//   const config={
//     headers:{
//       Authorization: `Bearer ${token}`
//     }
//   }
//   return {
//     type: "GET_ALL_USER",
//     payload: axios.get(URL_STRING, config)
//   };
// };



export const register = newUser => {
  

  const URL_STRING = "http://localhost:8000/regis";
  return {
    type: "POST_ALL_REGIS",
    payload: axios.post(URL_STRING,{
      email: newUser.email,
      password: newUser.password,
      position: newUser.position
    })
  };
}