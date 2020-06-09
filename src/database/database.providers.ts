import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async (configService: ConfigService) => {

            // 기본 옵션 설정
            const options = {
                dialect: configService.get('db.sequelize.dialect'),
                host: configService.get<string>('db.host'),
                port: configService.get<number>('db.port'),
                username: configService.get<string>('db.username'),
                password: configService.get<string>('db.password'),
                database: configService.get<string>('db.database'),
                logging: configService.get<boolean>('db.sequelize.logging')
            };

            const sequelize = new Sequelize(options);
            sequelize.addModels([
                // TODO: 엔티티 모델 추가
            ]);
            await sequelize.sync();
            return sequelize;
        },
        inject: [ConfigService] // 환경 변수 관련 서비스 주입
    },
];