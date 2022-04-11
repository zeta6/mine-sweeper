## mine sweeper

## Demo

https://mine.alchemystars.link/

## explanation

지뢰찾기 게임입니다.

NEXT.js로 제작되었습니다.

빌드와 실행은 node.js, npm 으로 가능합니다.

npm을 통한 노드모듈 설정이 필요합니다.  
현재 yarn을 통해 설정시 \_app의 Component에서 타입스크립트 에러가 발생합니다.

서버모드 게임에는 추가로 aws amplify 와의 연결이 필요합니다.

현재 로컬 모드와 서버 모드에는 게임 진행 상 차이가 없습니다.  
( 서버 모드에서는 브라우저로 지뢰 좌표가 전달되지 않습니다.)

## building for local games only

pages/api/createGame.ts , pages/api/trySweep.ts 안의  
import awsExports from 'src/aws-exports'  
Amplify.configure({ ...awsExports })  
두 라인을 비활성화 후 빌드 시 서버게임이 불가능한 상태로 빌드됩니다.

## execution with npm

- npm install
- npm run-script build
- npm run-script start

## or execution develop mode

- npm run-script dev

# runs on localhost:3000
