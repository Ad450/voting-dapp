
interface NetworkService{
     get(url:string , data:any):Promise<{data: any}>;
     post(url:string, data:any):Promise<{data:any}>;
}

export default NetworkService;