import { Module, NestModule, MiddlewareConsumer, HttpModule } from '@nestjs/common';
import { FrontendMiddleware } from './middleware/frontend.middleware';
import { RoutingModule } from './app.routing.module';
import { GoogleModule } from './google/google.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YahooModule } from './yahoo/yahoo.module';
import { MarvelModule } from './marvel/marvel.module';

@Module({
  imports: [
    GoogleModule,
    YahooModule,
    MarvelModule,
    RoutingModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes('');
  }
}
