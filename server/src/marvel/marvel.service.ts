import { Injectable, HttpService } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { AxiosResponse } from "axios";
import { ICharactersResult } from '../../../common/model/characters.interface';
import { appConfig } from "src/config";
import { Md5 } from "ts-md5";
import { ICharacter } from "../../../common/model/character.interface";

@Injectable()
export class MarvelService {
    private url = "https://gateway.marvel.com/v1/public/"
    constructor(
        private http: HttpService
    ){}

    getCharacters(): Observable<AxiosResponse<ICharactersResult>> {
        let ts = Date.now();
        let token = this.getToken(ts);
        let params = {
            ts: ts,
            apikey: appConfig.MARVEL_PUBLIC_KEY,
            hash: token
        };

        return this.http.get(`${this.url}characters`, {
            params: params
        });
    }

    getCharacter(id: string): Observable<AxiosResponse<ICharactersResult>> {
        let ts = Date.now();
        let token = this.getToken(ts);
        let params = {
            ts: ts,
            apikey: appConfig.MARVEL_PUBLIC_KEY,
            hash: token
        };

        console.log(`${this.url}characters/${id}`);

        return this.http.get(`${this.url}/characters/${id}`, {
            params: params
        });
    }

    private getToken(ts: number){
        let md5 = new Md5();
        md5.appendStr(ts + appConfig.MARVEL_PRIVATE_KEY + appConfig.MARVEL_PUBLIC_KEY);
        return md5.end();
    }
}