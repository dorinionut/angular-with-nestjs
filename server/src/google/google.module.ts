import { Module, HttpModule } from "@nestjs/common";
import { GoogleController } from "./google.controller";
import { GoogleService } from "./google.service";

@Module({
    imports: [HttpModule],
    controllers: [GoogleController],
    providers: [GoogleService]
})
export class GoogleModule {};