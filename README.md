# Simple Blog Project

React + Spring Boot 기반의 블로그 프로젝트입니다.

## 프로젝트 구조

```
for-tab-completion/
├── frontend/          # React 프론트엔드
│   ├── src/
│   │   ├── components/
│   │   └── App.js
│   └── package.json
└── backend/           # Spring Boot 백엔드
    ├── src/main/java/
    │   └── com/example/simpleblog/
    │       ├── controller/
    │       ├── entity/
    │       └── repository/
    └── pom.xml
```

## 개발 가이드라인

### 1. 명령어 실행 후 결과 확인
- 모든 터미널 명령어 실행 후 결과를 꼭 확인
- 오류 발생 시 즉시 해결책 제시
- 성공했다고 넘어가지 말고 실제 동작 확인

### 2. 서버 실행 시 주의사항
- 백엔드: `mvn spring-boot:run` (포트 8080)
- 프론트엔드: `npm start` (포트 3000)
- 포트 충돌 시 기존 프로세스 종료 후 재시작

### 3. Git 작업 시 주의사항
- `.gitignore` 먼저 설정 후 파일 추가
- 커밋 전 `git status`로 상태 확인
- 커밋 메시지는 명확하게 작성

### 4. 문제 해결 시 즉각적 반응
- 오류 발생 시 "어떻게 하지?" 하지 말고 바로 해결책 시도
- 사용자 피드백에 즉각적으로 반응
- 작업 완료 여부를 명확히 확인하고 보고

### 5. 터미널 출력 모니터링
- 명령어 실행 후 결과를 꼼꼼히 읽기
- 오류 메시지가 있으면 바로 해결
- 백그라운드 작업의 상태를 지속적으로 확인

## 주요 기능

- 사용자 관리 (등록, 조회)
- 카테고리 관리 (등록, 조회)
- 블로그 글 관리 (작성, 조회, 수정, 삭제)

## 기술 스택

- **Frontend**: React, JavaScript, CSS
- **Backend**: Spring Boot, Java, JPA, H2 Database
- **Build Tools**: Maven, npm 