
interface NetworkService{
     get(url:string , data:any):Promise<{data:string, value:any}>;
     post(url:string, data:any):Promise<{data:string, value:any}>;
}

export default NetworkService;