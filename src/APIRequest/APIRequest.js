import axios from "axios";

const BasedUrl = "http://localhost:5000"

export function RegistrationRequest(email,firstName,lastName,mobile,password,photo){

    let URL = BasedUrl+'/registration';
    let PostBody = {"email":email,"firstName":firstName,"lastName":lastName,"mobile":mobile,"password":password,"photo":photo}
    axios.post(URL,PostBody).then(res =>{
        if(res.status===200){
            if(res.data['status']==='fail'){
                console.log("Email already exists");
                return false;
            }else{
                console.log("Something went wrong")
                return false;
            }

        }else{
            console.log("Registration successful");
        }
    }).catch(err =>{
        console.log("Something went wrong");
        return false;
    })
    
}