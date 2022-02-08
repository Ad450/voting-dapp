import NetworkService from "./network_service";

class NetworkServiceImpl implements NetworkService{
    async get(url: string, data: any): Promise<{ data: string; value: any; }> {
        throw new Error("Method not implemented.");
    }
   async post(url: string, data: any): Promise<{ data: string; value: any; }> {
        throw new Error("Method not implemented.");
    }

}


export default NetworkServiceImpl;