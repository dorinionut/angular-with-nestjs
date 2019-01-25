import { Controller, Get, Res, Header } from "@nestjs/common";
import { YahooService } from "./yahoo.service";

@Controller()
export class YahooController {
    constructor (private yahooService: YahooService){}

    @Get()
    get(@Res() response){
        return this.yahooService
            .get()
            .subscribe(result => {
                console.log(result);
                response.set(result.headers);
                response.send(result.data);
            });
    }
}