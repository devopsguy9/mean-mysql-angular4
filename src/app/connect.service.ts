import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';
 import 'rxjs/add/operator/map';


@Injectable()

export class connectService {
    
    
  private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    postdata(data) {
        return this.http.post("http://localhost:3019/api/register",data);
        
    }

    login(data) {
        return this.http.post("http://localhost:3019/api/login", data);
        
    }
    rideNow(data){
        return this.http.post("http://localhost:3019/api/rideNow", data); 
    }


    getRidesLog(uid){
        return this.http.get("http://localhost:3019/api/rideLogs/"+uid);
        // .map(response=>response.json());
    }
      
    searchCabs(data){
        return this.http.post("http://localhost:3019/api/searchcabs",data); 
    }
     sendOtp(data){
          return this.http.post("http://localhost:3019/api/sendOtp",data); 
     }
}

