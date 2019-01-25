import { Module } from "@nestjs/common";
import { Routes, RouterModule } from "nest-router";
import { appConfig } from "./config";
import { GoogleModule } from "./google/google.module";
import { YahooModule } from "./yahoo/yahoo.module";
import { MarvelModule } from "./marvel/marvel.module";

const Routes: Routes = [
    {
        path: appConfig.API_PREFIX,
        children: [
            {
                path: 'google',
                module: GoogleModule
            },
            {
                path: 'yahoo',
                module: YahooModule
            },
            {
                path: 'marvel',
                module: MarvelModule
            }
        ]
    }
]

@Module({
    imports: [ RouterModule.forRoutes(Routes)],
    exports: [ RouterModule ]
})
export class RoutingModule {}