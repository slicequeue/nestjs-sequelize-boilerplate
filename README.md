## Description

nestjs 이용한 보일러 플레이트

## Installation

```bash
$ npm install
```

## Running the app

환경 설정 파일을 build 한 경로 내부에 설정해야함
dist/config/ 경로에 아래 파일을 생성한다.
<NODE_ENV환경변수값>.env 
설정 내용은 다음과 같다.

```dotnetcli
HOST=<호스트주소 ex) localhost>
PORT=<서버포트>

SECRET_KEY=<암호화키값>
SALT_ROUND=<단방향암호화_라운드수>

SWAGGER_BASEPATH=<스웨거호스트값>

DB_ID=<데이터베이스계정아이디>
DB_PWD=<데이터베이스계정비밀번호>
```
- 위 설정을 사용은 configService 이용하여 처리함

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - 김진황
