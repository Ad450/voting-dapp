import NetworkServiceImpl from "../../../core/network/network_service_impl";

const networkService : NetworkServiceImpl =  new NetworkServiceImpl();


const getVerificationCode = async(email : string): Promise<void> => {
        const result  =  await networkService.post('https://uenrlibrary.herokuapp.com/api/auth/resend-verification-links', {'email': email});
     if(result.has('error')){
        throw Error(result.get('error'))   
      }
   else{
       return;
   }
} 

const verifyCode = async (email:string , code:string)=>{
    const result  =  await networkService.get(`https://uenrlibrary.herokuapp.com/api/auth/email-verify/${code}/${email}`, {});
    if(result.has('error')){
       throw Error(result.get('error'))   
     }
  else{
      return;
  }
}

export {getVerificationCode, verifyCode}