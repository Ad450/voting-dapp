import { ApiFailure, AppStrings, UIError } from "../../../core/failures";
import NetworkServiceImpl from "../../../core/network/network_service_impl";

const networkService : NetworkServiceImpl =  new NetworkServiceImpl();


const getVerificationCode = async(email : string): Promise<void> => {
   // suppose the email validator fails - won't happen though   
   if(email === '' || email === null){
         throw new UIError('email cannot be null') 
      }
      try {
        const result  =  await networkService.post('https://uenrlibrary.herokuapp.com/api/auth/resend-verification-links', {'email': email});
        if(result.has('error')){
           throw new UIError(result.get('error'))   
         }
      else{
          return;
      }
   } catch (error) {
         if(error instanceof ApiFailure){
            throw new UIError(JSON.stringify(error));
         }
         else{
            throw new UIError(AppStrings.apiGenericError);
         }
      }
} 

const verifyCode = async (email:string , code:string)=>{
   if((email === '' || email === null) && (code === '' || code === null)){
      throw new UIError('email cannot be null') 
   }
   try {
      const result  =  await networkService.get(`https://uenrlibrary.herokuapp.com/api/auth/email-verify/${code}/${email}`, {});
       if(result.has('error')){
        throw new UIError(result.get('error'))   
      }
   else{
       return;
   }
} catch (error) {
      if(error instanceof ApiFailure){
         throw new UIError(JSON.stringify(error));
      }
      else{
         throw new UIError(AppStrings.apiGenericError);
      }
   }
}

export {getVerificationCode, verifyCode}