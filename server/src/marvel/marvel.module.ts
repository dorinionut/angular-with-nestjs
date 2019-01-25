import { Module, HttpModule } from "@nestjs/common";
import { MarvelController } from "./marvel.controller";
import { MarvelService } from "./marvel.service";
import { Md5 } from "ts-md5";

@Module({
    imports: [
        HttpModule,
        Md5
    ],
    controllers: [MarvelController],
    providers: [MarvelService]
})
export class MarvelModule {};