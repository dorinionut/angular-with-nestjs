import { Injectable, HttpService } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";

@Injectable()
export class GoogleService{
    constructor(
        private http: HttpService
    ){}

    get(): Observable<AxiosResponse<any>> {
        return this.http.get('http://google.com');
    }
}