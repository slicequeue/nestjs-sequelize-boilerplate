import { cast } from "src/utils/UtilCast";
import { join as pathJoin } from "path";
import { config } from 'dotenv';

config({path: pathJoin(__dirname, `.${process.env.NODE_ENV}.env`)});

export default () => ({

    baisc: {
        host: cast('HOST', 'string'), // 필수
        port: cast('PORT', 'number'), // 필수
        filePath: cast('CDN_PATH', 'string', '/files'),
        uploadFilePath: pathJoin(process.cwd(), cast('UPLOAD_FILE_PATH', 'string', 'public/files')) 
    },
    auth: {
        secretKey: cast('SECRET_KEY', 'string'), // 필수
        saltRound: cast('SALT_ROUND', 'number'), // 필수
        jwtExpiration: cast('JWT_EXPIRATION', 'string', '30d')
    },
    swagger: {
        host: cast('SWAGGER_HOST', 'string', `${cast('HOST', 'string')}:${cast('PORT', 'number')}`),
        basePath: cast('SWAGGER_BASEPATH', 'string') // 필수
    },
    db: {
        database: cast('DB_DATABASE', 'string', 'localhost'), 
        host: cast('DB_HOST', 'string', 'localhost'), 
        port: cast('DB_PORT', 'number', 3306),
        username: cast('DB_ID', 'string'),  // 필수
        password: cast('DB_PWD', 'string'), // 필수
        sequelize: {
            host: cast('DB_HOST', 'string', 'localhost'),        
            port: cast('DB_PORT', 'number', 3306),
            dialect: cast('SEQUELIZE_DIALECT', 'string', 'mariadb'),
            connectTimeout: cast('SEQUELIZE_CONNECT_TIMEOUT', 'number', 3000),
            logging: cast('SEQUELIZE_LOGGING', 'boolean', true),
        }
    }
})