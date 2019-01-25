import { Controller, Get, Res, Header } from "@nestjs/common";
import { GoogleService } from "./google.service";

@Controller()
export class GoogleController {
    constructor (private googleService: GoogleService){}

    @Get()
    get(@Res() response){
        return this.googleService
            .get()
            .subscribe(result => {
                response.set(result.headers);
                response.send(result.data);
            });
    }
}