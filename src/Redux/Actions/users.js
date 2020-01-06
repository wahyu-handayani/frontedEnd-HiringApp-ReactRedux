import axios from "axios";

export const getAllUser = () => {
  const URL_STRING = "http://localhost:8000/sort";
  const token = localStorage.getItem("usertoken")
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return {
    type: "GET_ALL_USER",
    payload: axios.get(URL_STRING, config)
  };
};

export const register = newUser => {
  const URL_STRING = "http://localhost:8000/regis";
  return {
    type: "POST_ALL_REGIS",
    payload: axios.post(URL_STRING, {
      email: newUser.email,
      password: newUser.password,
      position: newUser.position
    })
  };
}

export const login = user => {
  const URL_STRING = "http://localhost:8000/loginUser";
  return {
    type: "POST_ALL_LOGIN",
    payload: axios.post(URL_STRING, {
      email: user.email,
      password: user.password,
      position: user.position
    })
  }
}

export const pagination = (search, sortby, limit, page, order) => {
  const URL_STRING = `http://localhost:8000/sort?search=${search}&sortby=${sortby}&limit=${limit}&page=${page}&order=${order}`;
  const token = localStorage.getItem("usertoken")
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  //console.log(URL_STRING, config, 'ini email')

  return {
    type: "PAGINATION",
    payload: axios.get(URL_STRING, config)
  }
}

export const getOneUser = (email) => {
  const URL_STRING = `http://localhost:8000/engineer/${email}`;
  const token = localStorage.getItem("usertoken")
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return {
    type: "GET_ONE_USER",
    payload: axios.get(URL_STRING, config)
  };
};

export const postData = user => {
  const URL_STRING = "http://localhost:8000/engineer";
  const token = localStorage.getItem("usertoken")
  const myemail=localStorage.getItem("email")
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return {
    type: "POST_DATA",
    payload: axios.post(URL_STRING, {
      id: user.id,
      name: user.name,
      description: user.description,
      skill: user.skill,
      location: user.location,
      birth: user.birth,
      showcase: user.showcase,
      email: myemail
    }, config)
  }
}