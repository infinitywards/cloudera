import axios from '../node_modules/axios';

export const uploadExcelAndMessage=(data)=>{
console.log("uploadExcelAndMessage",data)
const formdata = new FormData() 
formdata.append('file', data.file)
formdata.append('message', data.message)

return axios({
    method: 'post',
    url: 'https://flame-backend.onrender.com/sendsms',
    data:formdata
  }).then((res)=>{
    console.log("response : ",res.data)
  }).catch(error=>{
      console.log("error : ",error)
  })
}
