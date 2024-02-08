import { Module } from '@nestjs/common';
import { DocumentModule } from './api/document.module';
@Module({
  imports: [DocumentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
