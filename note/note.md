<br>

# 강의노트

<br>

# 1. Introduction

### 1. 강의 소개

### 2. 챕터별 소개

### 3. 강의 교안 및 활용법

### 4. 노션 공부 계획서

### 5. 슬랙 가입하기 (중요!)

### 6. 이용약관 (중요 🚨 )

### 7. 🚨 토론창 이용 공지사항 (꼭 읽어보고 토론창 이용하세요)

# 2. What's Node.JS?

### 1. 챕터 소개

### 2. Node.js란 무엇인가? 공부 포인트!

### 3. 노드를 배우면 좋은점들

- Javascript everywhere : 클라이언트 서버 둘 다 같은 자바스크립트로 개발하여 생산성을 높일 수 있음
- 50% of the developers use Note.js
- Big corporates use Node.js
- Easy, Simple yet Powerful and flexible
- Strong Community : 특히 npm의 수많은 라이브러리

### 4. 노드의 4가지 매력포인트

- Javascript Runtime : 자바스크립트 언어 사용 가능
- Single Thread : 스레드가 많으면 메모리 사용량 증가,비용 증가 등의 단점이 있음. 자바에서는 멀티스레딩 가능하지만 자바스크립트는 일단 싱글스레드
- Non-Blocking I/O : Input/Output를 할 때 기다리지 않고 콜백을 던져주고 다음으로 넘어감
- Event-Driven : I/O를 할 때 기다리지 않고 콜백을 던져줄 때 이벤트로 던짐

### 5. 노드 내부속으로 쏘옥 들여다보기

- 2.4의 Non-Blockung I/O와 Event-Driven, Memory Heap과 Call Stack
- Don't block the event loop : callback 함수에서 무거운 일을 처리하면 안됨 다음 콜백으로 넘어가지 않으니까

### 6. 노드 서버의 특징과 장/단점

- 멀티 스레드 환경의 전통적 서버 vs 메인 싱글 스레드 환경의 노드 서버
- 노드 12부터는 워커 스레드를 지원하므로 다수의 스레드를 만들 수 있지만 통상적으로 싱글스레드 사용

# 3. Tools · Preparation

### 1. 필요한 툴들 설치하기

- iTerm2 : 윈도우 분할 되는 터미널. 윈도우라면 cmder을 추천
- vscode : 프리티어, 단축키 등
- Node.js
- Git
- Postman

### 2. REPL이란 무엇인가?

- Read Eval Print Loop
- 콘솔에서 직접 node 실행해서 작성해보기

### 3. 노드 파일로 실행해 보기 Hello World!

- 파일에서 노드 소스를 작성해서 실행해보기

# 4. Node Modules

### 1. 노드 모듈 챕터 소개

### 2. 노드 관련 필수사이트 북마크 하기 🔖

- _https://nodejs.org/en/docs/_
- _https://nodejs.dev/learn_

### 3. 글로벌 오브젝트 - 소스 공부법

- node에서는 global. 브라우저에서는 window라는 글로벌 객체가 있음
- _1-global/app.js_

### 4. 콘솔 로그의 진실

- log, info, warn, error
- assert, table/dir, time/timeEnd, count/countReset, trace
- _2-console/app.js_

### 5. this란 (브라우저와의 차이점)

- 함수안에서 this는 global
- 클래스안에서 this는 클래스 자체
- node.js에서 this는 module.exports
- _3-this/app.js_

### 6. 모듈 (export, require)

- node에서 제공하는 방식
- _4-module/app.js_

### 7. 2015 최신 모듈 (export, import)

- javascript에서 제공하는 방식 (es6부터 지원)
- _5-module/app.js_

### 8. os (운영체제) 정보

- _6-os/app.js_

### 9. process (프로세스) 정보

- setTimeout, nextTick
- _7-process/app.js_

### 10. 타이머와 콜스택의 연관

- setInterval, setTimeout
- _8-timer/app.js_
- _8-timer/app2.js_

### 11. path 그리고 유의할 점

- \_\_dirname/\_\_filename, sep/delimiter, basename/extname, parse/format, isAbsolute/normalize/join
- 파일의 경로를 다룰 때 운영체제별로 기본경로와 구분자가 다르기 때문에 주의해야 함
- _9-path/app.js_

### 12. file 동기와 비동기 그리고 프로미스

- 동기와 비동기, 프로미스 각각의 방식으로 파일명 변경하기
- _10-file/app.js_

### 13. file - 다양한 사용법

- 프로미스는 순서가 보장되지 않음. 순서를 보장하려면 후에 실행되야 하는 작업을 then 안에 써야함 그리고 에러처리도 꼭 하자
- _10-file/app2.js_

### 14. 버퍼와 스트림 👫 베스트 프렌드

- 스트리밍의 예 : 서버에서 영상을 한번에 보내주는게 아니라 영상 조각을 조금씩 보내줌
- 사용자가 영상을 보는 속도보다 다운로드받는 속도가 빠르면 버퍼가 쌓임
- 반대라면 (쌓여있는 버퍼가 없다면) 버퍼링에 걸렸다고 함

### 15. 버퍼, 제대로 알아보기

- 버퍼 만들고 문자열로 확인하고 복사하고 합쳐보기
- _11-buffer/app.js_

### 16. 스트림의 매력

- fs 모듈의 readFile을 이용하여 파일을 한번에 읽을 때와 fs 모듈의 createReadStream을 이용하여 조각조각 읽을 때를 비교
- 체이닝 해보기
- _12-stream/app-file.js_
- _12-stream/app-stream.js_

### 17. 파이프 ǂ

- 파이프를 이용해 다른 스트림이나 서버 응답으로 흘려보내보기
- _12-stream/app-write.js_
- _12-stream/app-pipe.js_

### 18. 노드의 중요 포인트! 이벤트 🎪

- events 모듈을 이용하여 커스텀 이벤트를 emit하고 listen 하기
- _13-event/app.js_

### 19. 재사용성이 높은 이벤트 클래스 만들기

- 참고! EventEmitter는 한번 객체를 만들면 그 객체 내에서 발생하는 이벤트에 한해서 들을 수 있다. 여러 EventEmitter는 객체를 만들면 다른 이미터에서 발생하는 이벤트는 다른 이미터에서 들을 수 없다. 그래서 이벤트 이미터를 상속받은 로거 클래스를 만들어서 실습하였다.
- _13-event/main.js_
- _13-event/logger.js_

### 20. 강의 최종 노트 ⬇

# 5. NPM 구석 구석

### 1. NPM 챕터 소개

- NPM: Node Package Manager. 라이브러리 관리자.
- 'Bring the best of open source to you, your team, and your company.'
- NPX vs NPM vs yarn : npm은 특정 라이브러리를 다운로드 받아서 설치하는 개념. npx는 다운받지 않고 바로 실행할 수 있게 해줌. yarn은 npm의 문제점을 개선하기 위해 페이스북에서 만듦. 프론트앤드는 yarn을 많이 쓰며 npm과 yarn은 혼용 가능

```
// 프로젝트 이름, 버전등 프로젝트 정보, 라이브러리 정보들이 있는 package.json이라는 파일이 생성됨.
$ npm init

// 라이브러리를 프로젝트에 설치함.
$ npm install '라이브러리 이름'
```

### 2. NPM 시작하기

- https://docs.npmjs.com/cli/v7/commands npm 명령어

```
// npm 명령어
$ npm

// npm 버전정보
$ npm -v

// node 프로젝트에 대한 package.json 생성. --yes를 붙이면 기본옵션으로 생성
$ npm init --yes

// 직접 만든 스크립트 실행. package.json 의 scripts 에 추가시킨 스크립트를 실행할 수 있음
$ npm run '직접 만든 스크립트 명'
```

### 3. 소프트웨어 라이센스란? 꿀사이트 🔖

- https://spdx.org/licenses/ ISC License 설명

### 4. 라이브러리 버전관리? 꿀사이트 🔖

- https://docs.npmjs.com/about-semantic-versioning 관련 문서
- 버전 예시 ) 1.0.0, 1.0.1, 1.0.2, ..., 1.1.0 ,..., 2.0.0

  - Major 기능 대거 수정. 추가
  - Minor 작은 기능 추가
  - Patch 사소한 이슈

- package.json 에서 디펜던씨 라이브러리 버전 지정하기
  - Patch : 1.0 or 1.0.x or ~1.0.4
  - Minor : 1 or 1.x or ^1.0.4
  - Major : \* or x
  - 예시
    ```
    "dependencies": {
        "my_dep": "^1.0.0",
        "another_dep": "~2.2.0"
    },
    ```
  - https://semver.npmjs.com/ 잘 지정했는지 테스트

### 5. 글로벌로 설치 하고 목록 확인

```
// -h로 옵션들과 내용을 확인
$ npm i -h

// 프로젝트에 받지 않고 컴퓨터 전체에 설치하기
$ npm i -g

// 프로젝트에 설치된 라이브러리 확인
$ npm list

// 컴퓨터 전체에 설치된 라이브러리 확인
$ npm list -g

// dept 를 0 으로 확인 (라이브러리가 설치한 라이브러리 말고 직접 설치한 것만 확인)
$ npm list -g --dept=0
```

### 6. 프로젝트 라이브러리 확인, 설치 및 삭제

```
// 설치
$ npm i 라이브러리

// 삭제
$ npm un 라이브러리
```

- package-lock.json : 정확히 어떤 버전의 라이브러리를 사용했는지 확인할 수 있는 파일

### 7. 버전 업데이트 하기

```
// 라이브러리 정보 확인
$ npm view

// 라이브러리 중 업데이트 할 수 있는 것 목록
// 현재버젼, package.json에 작성한 권장 버전, 가장 최신 버전이 표시됨
$ npm outdated

// 특정 라이브러리 업데이트하기
$ npm update 라이브러리명
```

### 8. 개발 모드로 설치하기 + 좋은 툴 설치

- nodemon : 노드 프로젝트 작업시 파일을 수정하면 저절로 서버가 재시작되는 아주 유용한 개발 도구. nodemon 파일명 으로 실행하면 됨

```
// --save-dev : 배포에 포함되지 않는 개발용 도구 설치 옵션
$ npm i nodemon --save-dev
```

# 6. Debugging 치명적인 매력

### 1. 디버깅의 궁극적인 목표

- 디버깅 : 어디에서 문제가 발생했는지 찾고 버그를 고치는 과정으로,
  <br/>기대되는 결과와 현재 상황의 갭을 줄이는 과정 중 하나 (그 외에 과정은 유닛 테스팅, 안터그레이션 테스팅, 컨트롤 플로우 분석, 로그 분석 등이 있으며 우리가 배울 것은 interactive debugging 과 debugger 사용법임)

### 2. 디버거 기본 사용법 (툴 제대로 쓰기)

- vscode에서 디버거 사용법 실습
- _debug/app.js_

### 3. 디버거 꿀팁 🍯

- vs에서 디버깅 중 실시간으로 변수의 값 변경해보기
- vs에서 디버깅 중 watch(조사식)에 boolean 조사식 추가해보기
- vs에서 디버깅 중 브레이크 포인트에 조건 걸기 (식, 몇번째 호출, 로그 메시지? 로 걸 수 있음)

### 4. 자동 재시작 설정

- 코드 수정시 자동으로 재시작하도록 디버깅환경에 노드몬 설정해보기
- launch.json 파일 configurations에 다음 옵션을 추가하자

```
"runtimeExecutable": "nodemon",
"restart": true
```

> npm 라이브러리를 글로벌로 설치하던 중 권한 이슈가 있어서 기본 디렉토리에 대한 권한을 변경하였다. 참고
> https://stackoverflow.com/questions/47252451/permission-denied-when-installing-npm-modules-in-osx/47252840

# 7. 파일정리 스크립트 만들기

1. 스크립트 챌린지 소개 (요구 사항 분석) ❓

2. 계획 세우고 사용자 입력 처리 💡

3. 메인 로직 골격 작성하기 💡

4. 세부 기능 구현하기💡

5. 솔루션 코드 ⬇

- 폴더 이름을 입력하지 않았거나 입력한 폴더가 실제로 존재하지 않을 때 에러메시지를 보여주는 게 좋겠다
- 동기와 비동기를 잘 생각해야
- 파일 패스를 다룰때는 백틱보다는 path의 join을 쓰자

# 8. Web 기초 지식 HTTP

### 1. HTTP 챕터 소개

### 2. HTTP 역사와 HTTPs, 그리고 V2, V3

- HTTP : Hypertext Transfer Protocol. 클라이언트와 서버가 데이터를 주고받을 때 request-response 형태로 protocol
- HTTPs : Hypertext Transfer Protocol 'Secure'
- HTTP는 암호화가 안되어있어 제3자가 데이터를 가로채서 읽을 수 있음
  > 1989 HTTP
  > <br> 1994 HTTPS
  > <br> 1997 HTTP/HTTPS v1 텍스트 형태, 압축되지 않은 해더, 한번에 한 파일
  > <br> 2015 HTTPS v2 텍스트가 아닌 바이너리 형태, 압축된 헤더, 한번에 여러 파일
  > <br> 2019~ HTTPS v3 TCP -> UDT
  - 현재 v2가 가장 많이 쓰이며 앞으로 설명할 것들도 v2에 대한 설명임
- TCP 커넥션이 연결됨
  <br> -> client가 server에게 request
  <br> -> server가 client에게 response
  <br> -> TCP 커넥션이 닫힘

### 3. Status Code 잘 활용하기

- 1xx: information
- 2xx: successful
- 3xx: redirection
- 4xx: client error
- 5xx: server error
- https://developer.mozilla.org/ko/docs/Web/HTTP/Status

### 4. Request Method + 면접 질문!

- 서버에 있는 데이터를 변경하는 요청은 post, put, delete, patch 가 있음
- idempotent(멱등성): 동일한 요청을 여러번 했을 때 항상 서버를 동일한 상태로 유지할 수 있는 지? 예를 들면 post 메소드는 서버에 데이터를 만드는것이므로 idempotent: no (여러개가 만들어질 수도 있으니까), put은 idempotent: yes
  (https://developer.mozilla.org/ko/docs/Glossary/Idempotent)
- https://developer.mozilla.org/ko/docs/Web/HTTP/Methods

### 5. Headers의 오해와 진실

- https://developer.mozilla.org/ko/docs/Web/HTTP/Headers

### 6. 실제 예제 분석해 보기

# 9. Node로 서버 만들기

### 1. 노드로 서버 만들기 소개

### 2. 서버 골격 만들기

_node-server/1-html.js_

### 3. HTML 컨텐츠 보내주기

_node-server/1-html.js_

### 4. 템플릿 엔진 EJS 사용해보기 (서버사이드 렌더링)

정말 별로네
_node-server/2-template.js_

### 5. JSON 보내주기 (그리고 왜?)

_node-server/3-json.js_

### 6. 중간 점검 및 앞으로 진행 계획 💎

### 7. 강의 최종 노트 ⬇

# 10. Restful APIs

### 1. Rest API 챕터 소개

### 2. 진정한 Restful API 도대체 뭘까?

### 3. Web APIs 디자인 💩 vs ✨

### 4. 보통의 Rest APIs 예제 (기업 사례)

### 5. 진정한 Rest APIs 예제 (기업 사례)

# 11. Express.js 가좌아

### 1. 왜 Express 인가? ☕️

### 2. Express의 큰그림, 중요 포인트!

### 3. 서버 만들기

### 4. 요청에 대해서

### 5. 응답에 대해서

### 6. 미들웨어의 중요한 특징

### 7. Post 처리 하기

### 8. 에러 처리의 모든것 (동기, 비동기)

### 9. 비동기 에러 처리 하는 방법 - 최신버전

### 10. 라우터 101

### 11. 유용한 내부 미들웨어들

### 12. CORS란? 개념과 처리 방법

### 13. 유용한 외부 미들웨어들

### 14. 실습 노트 ⬇

# 12. Dwitter - 프로젝트 시작!

### 1. 챌린지 소개 (드위터 데모)

### 2. 요구 사항 분석, Rest APIs 디자인 하기 ❓

### 3. 요구 사항 분석, Rest APIs 디자인 하기 💡

### 4. Rest APIs 개발을 위한 포스트맨 셋업

### 5. Rest APIs 개발을 위한 리액트 프론트엔드 셋업 ⬇

### 6. 트윗 Rest APIs 구현하기 ❓

### 7. 트윗 Rest APIs - 프로젝트 셋업 및 구조 만들기💡

### 8. 트윗 Rest APIs - CRUD 기능 구현💡

### 9. 트윗 APIs 사용하는 프론트엔드 구현 💡

### 10. 최종 코드 ⬇

# 13. 리팩토링 - MVC

### 1. MVC 패턴이란? 서버에 어떻게 활용할까?

### 2. 현재 서버 코드의 문제점 개선하기❓

### 3. 서버에 Data층을 만들어 보기 💡

### 4. 서버에 Controller 층을 만들어 보기 💡

### 5. async 비동기 함수들의 매력 포인트 💡

### 6. 프론트엔드 코드 개선 ❓

### 7. 프론트엔드 코드 개선 - 재사용성💡

### 8. 최종 코드 ⬇

# 14. Validation - 유효성

### 1. 유효성 검사란, 어디에서 하는게 좋을까?

### 2. Validation 라이브러리 소개 및 실습

### 3. Validation 코드 리팩토링 하기

### 4. Sanitization이란? 중요성에 대해

### 5. 드위터에 유효성 검사 적용해 보기 ❓

### 6. 드위터에 유효성 검사 적용해 보기 💡

### 7. 최종 코드 ⬇

# 15. Authentication - 로그인

### 1. Auth 챕터 소개

### 2. 인증이란 무엇인가?

### 3. 세션과 쿠키란? 장/단점

### 4. JWT란? 장/단점

### 5. bcrypt란?

### 6. bcrypt 사용해 보기 + 유의 사항

### 7. JWT 사용해 보기

### 8. 최종 실습 노트 ⬇

# 16. Dwitter - 로그인 적용

### 1. 드위터의 Auth 선택은? 이유는?

### 2. 로그인 Rest APIs 디자인 하기 ❓

### 3. 로그인 Rest APIs 디자인 하기 💡

### 4. 로그인 Rest APIs 개발을 위한 포스트맨 셋업

### 5. 가입, 로그인 Rest APIs 구현하기 ❓

### 6. 가입, 로그인 Rest APIs 구현하기 💡

### 7. Auth 미들웨어 구현하기 💡

### 8. User 와 Tweets 모델 분리 하기 💡

### 9. 리액트 프론트엔드 가입/로그인 구현 ❓

### 10. 리액트 프론트엔드 가입/로그인 구현 💡

### 11. 리액트 프론트엔드 자동 로그아웃 💡

### 12. Authorization 권한 부여 ❓

### 13. Authorization 권한 부여 💡

### 14. 최종 코드 ⬇

# 17. Configuration

### 1. 서버 코드에서 제일 중요한 두가지

### 2. 드위터 코드 문제점 분석 하기 ❓

### 3. 보안과 설정성 개선하기💡

### 4. 리팩토링 - 재사용성, 안정성 높이기 💡

### 5. 최종 코드 ⬇

# 18. Socket 실시간 트윗

### 1. 소켓이란?

### 2. 소켓의 기본 사용법 실습

### 3. 실시간 트윗 받아오기 ❓

### 4. 실시간 트윗 받아오기 - 서버 💡

### 5. 실시간 트윗 받아오기 - 프론트엔드 💡

### 6. 소켓에서도 중요한 Auth

### 7. 최종 코드 ⬇

# 19. Database 정리

### 1. 데이터베이스 챕터 소개

### 2. 데이터베이스란?

### 3. SQL 그 모든것

### 4. NoSQL 그 모든것

### 5. ORM과 ODM

### 6. SQL vs NoSQL 언제 어떤것을?

# 20. MySQL

### 1. MySQL 챕터에서 우리가 배울 것

### 2. MySQL 설치 하기

### 3. 스키마 정의하기

### 4. 노드 서버에서 연결하기

### 5. 드위터 Auth 관련 MySQL 사용하기 💡

### 6. 드위터 트윗 관련 MySQL 사용하기 💡

### 7. MySQL 정리 하면서

### 8. 최종 코드 ⬇

# 21. Sequelize

### 1. Sequelize ORM 시작!

### 2. Sequelize 힌트 듣고 드위터에 적용하기❓

### 3. Sequelize 드위터에 적용하기- 연결 💡

### 4. Sequelize 드위터에 적용하기- Auth 💡

### 5. Sequelize 드위터에 적용하기- 트윗 💡

### 6. Sequelize 마무리 · 소감

### 7. 최종 코드 ⬇

# 22. MongoDB

### 1. MongoDB 시작!

### 2. 설치 및 설정하기

### 3. 연결 및 공식 문서 확인

### 4. 드위터 Auth 관련 MongoDB 사용하기 ❓ (공식문서보는법)

### 5. 드위터 Auth 관련 MongoDB 사용하기 💡

### 6. 드위터 트윗 관련 MongoDB 사용하기 ❓ (NoSQL 포인트 정리)

### 7. 드위터 트윗 관련 MongoDB 사용하기 💡

### 8. MongoDB 마무리 하면서

### 9. 최종 코드 ⬇

# 23. Mongoose

### 1. Mongoose 시작!

### 2. Mongoose 힌트 듣고 드위터에 적용하기❓

### 3. Mongoose 드위터에 적용하기- 연결 💡

### 4. 23.3 Mongoose 드위터에 적용하기- Auth 💡

### 5. 23.3 Mongoose 드위터에 적용하기- 트윗 💡

### 6. Mongoose 정리 · 소감

### 7. 최종 코드 ⬇

# 24. Deployment - 배포

### 1. 배포 챕터 소개

### 2. 배포전 체크리스트 🧾

### 3. 호스팅 고르는 방법

### 4. 드위터의 선택은?

### 5. 배포전 최종 코드 점검

### 6. 드위터 서버 배포하기 (Platform.sh-HTTP v2)

### 7. 드위터 프론트엔드 배포하기 (Netlify)

### 8. Heroku 배포도 하는 이유?

### 9. Heroku 배포하기 (HTTP v1)

### 10. Heroku - PostgreSQL 업데이트

# 25. Goodbye

### 1. 수고 많으셨어요 🙆‍♀️

### 2. 백엔드 로드맵, 어디로 가야할까?

### 3. 수강 후기 남기기 😎

# 26. 보너스1. 치명적인 보안

### 1. 보안 챕터 소개

### 2. 로그인 보안과 유용한 사이트 🔖

### 3. XSS 어택이란? 대응 솔루션 🚔

### 4. XSS 어택에 안전한 백엔드 업데이트 💡

### 5. XSS 어택에 안전한 프론트엔드 업데이트 💡

### 6. XSS 어택 - 로그아웃 구현 💡

### 7. CSRF 어택이란? 대응 솔루션 🚔

### 8. CSRF 어택에 안전한 백엔드 업데이트 💡

### 9. CSRF에 안전한 프론트엔드 업데이트 💡

### 10. 정리하며 👋

### 11. 최종 코드 ⬇

# 27. 보너스 2. 서버 지키기

### 1. 챕터 소개

### 2. Rate Limiter란?

### 3. 주요 4가지 알고리즘 ➕➖

### 4. 프론트엔드 대처 방법

### 5. 백엔드 구현 하기 💡

### 6. 백엔드 알고리즘 살펴보기 💡

### 7. 프론트엔드 - Axios 사용하기 💡

### 8. 프론트엔드 - 재시도 구현하기 💡

### 9. 최종 코드 ⬇

# 28. 보너스3. Web APIs 디자인/문서화

### 1. 소개

### 2. Swagger란 무엇인가?

### 3. Swagger를 왜 배워야 할까?

### 4. OpenAPI 살펴보기

### 5. OpenAPI 데모 - 사용해보기

### 6. 프로젝트 진행하는 두가지 방법 📝

### 7. 드위터 - 문서 호스팅 하기 💡

### 8. 드위터 - API 정의로 미들웨어 만들기💡

### 9. Auth와 테스트 하기💡

### 10. 마무리 정리

### 11. 최종 코드 ⬇

# 29. 보너스4. 노드와 타입스크립트

### 1. 타입스크립트 챕터 소개

### 2. 타입스크립트 포인트!

### 3. 기본 TS 프로젝트 설정

### 4. 자동 재실행 설정하는 법

### 5. 디버깅 사용하는 법

### 6. 타입스크립트 프로젝트 처음부터 만들어보기 ❓ - Express 미니 프로젝트

### 7. 타입스크립트 프로젝트 처음부터 만들어보기 💡 - 타입정의파일 .d.ts

### 8. 타입스크립트 프로젝트 처음부터 만들어보기 💡 - 로직 완성하기

### 9. 자바스크립트에 점진적 적용하기 ❓

### 10. 자바스크립트에 점진적 적용하기 💡 - 프로젝트 설정

### 11. 자바스크립트에 점진적 적용하기 💡 - 타입스크립트 코딩
