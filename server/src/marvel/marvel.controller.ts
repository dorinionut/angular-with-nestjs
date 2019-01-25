import { Controller, Get, Res, Param, Catch, NotFoundException} from "@nestjs/common";
import { MarvelService } from "./marvel.service";
import { map } from 'rxjs/operators';

@Controller()
export class MarvelController {
    constructor (private marvelService: MarvelService){}

    @Get('characters')
    getCharacters(@Res() response){
        return this.marvelService
            .getCharacters()
            .pipe(
                map(result => result.data.data.results)
            )
            .subscribe(result => {
                response.send(result);
            });
    }

    @Get('characters/:id')
    getCharacter(@Res() response, @Param() params){
        return this.marvelService
            .getCharacter(params.id)
            .pipe(
                map(result => result.data.data.results[0])
            )
            .subscribe(result => {
                response.send(result);
            });
    }
}