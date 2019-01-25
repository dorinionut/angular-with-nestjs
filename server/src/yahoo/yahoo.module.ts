import { Module, HttpModule } from "@nestjs/common";
import { YahooController } from "./yahoo.controller";
import { YahooService } from "./yahoo.service";

@Module({
    imports: [HttpModule],
    controllers: [YahooController],
    providers: [YahooService]
})
export class YahooModule {};