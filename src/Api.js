import axios from "axios";

const BASE_API = 'http://localhost:8080/api';

export default{
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();        
        return json;
    },
    signIn: async () =>{
        console.log("URL", `${BASE_API}/usuarios/auth`);
        console.log("BODY", JSON.stringify({login, senha}));
        axios.post(`${BASE_API}/usuarios/auth`, {
            login: login,
            senha: senha
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          });
    },
    signUp: async (name, password) =>{
        const req = await fetch(`${BASE_API}/usuarios/auth`,{
            method: 'POST',
            body: JSON.stringify({name, password})
        });
        const json = await req.json();
        return json;
    },
}