import NetworkService from "./network_service";
import axios, { AxiosResponse } from "axios";
import {ApiErrors, AppStrings, ApiFailure} from '../failures';


class NetworkServiceImpl implements NetworkService{

    async get(url: string, data: any): Promise<{ data: any }> {
        try {
            const result = await axios.get(url);
            return this._handleResponse(result);
        } catch (error) {
           throw new ApiFailure(error);
        }
    }
   async post(url: string, data: any): Promise<{ data: string }> {
        try {
            const result =await axios.post(url, data);
            return this._handleResponse(result);
        } catch (error) {
            throw new ApiFailure(error);
        }
    }

     _handleResponse (response: AxiosResponse) : {data:any}{
        if((response.status /1 ) >= 200 && (response.status /1 ) <= 203 ){
            return {'data' : response.data};
        }

        switch (response.status) {
            case 300:
               return {'data' :{'error': ApiErrors.apiGenericError }};
            case 400: 
            return {'data' :{'error': ApiErrors.apiBadRequest, 'message' : AppStrings.apiBadRequest }};
            case 401: 
            return {'data' :{'error': ApiErrors.apiBadRequest, 'message' : AppStrings.apiBadRequest }};
            
            case 404: 
             return {'data' : {'error': ApiErrors.apiNotFound, 'message' : AppStrings.apiNotFound }};
             case 500:
                 return {'data' :{'error': ApiErrors.apiServerError, 'message' : AppStrings.apiServerError }};
            default:
                return {'data' :{'error': ApiErrors.apiGenericError ,'message':AppStrings.apiGenericError }};
        }
     } 

}


export default NetworkServiceImpl;
