import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config';

@Module({
    imports: [],
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule {}
