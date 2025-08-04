# Simple Blog Application

React와 Spring Boot를 사용한 간단한 블로그 애플리케이션입니다.

## 기능

- **계정 생성**: 새로운 사용자 계정을 생성할 수 있습니다.
- **카테고리 생성**: 게시글을 분류할 카테고리를 생성할 수 있습니다.
- **게시글 작성**: 사용자와 카테고리를 선택하여 게시글을 작성할 수 있습니다.
- **게시글 목록**: 작성된 모든 게시글을 확인할 수 있습니다.

## 기술 스택

### Backend
- **Spring Boot 3.2.0**
- **Spring Data JPA**
- **H2 Database** (인메모리)
- **Maven**

### Frontend
- **React 18.2.0**
- **React Router DOM**
- **Axios**
- **CSS3**

## 프로젝트 구조

```
for-tab-completion/
├── backend/                    # Spring Boot 백엔드
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/simpleblog/
│   │   │   │       ├── controller/     # REST API 컨트롤러
│   │   │   │       ├── service/        # 비즈니스 로직
│   │   │   │       ├── repository/     # 데이터 접근 계층
│   │   │   │       ├── entity/         # JPA 엔티티
│   │   │   │       └── dto/            # 데이터 전송 객체
│   │   │   └── resources/
│   │   │       └── application.properties
│   └── pom.xml
├── frontend/                   # React 프론트엔드
│   ├── public/
│   ├── src/
│   │   ├── components/         # React 컴포넌트
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## 설치 및 실행

### 백엔드 실행

1. Java 17 이상이 설치되어 있는지 확인하세요.

2. 백엔드 디렉토리로 이동:
   ```bash
   cd backend
   ```

3. Maven을 사용하여 의존성을 설치하고 애플리케이션을 실행:
   ```bash
   mvn spring-boot:run
   ```

4. 백엔드는 `http://localhost:8080`에서 실행됩니다.

5. H2 데이터베이스 콘솔은 `http://localhost:8080/h2-console`에서 접근할 수 있습니다.

### 프론트엔드 실행

1. Node.js가 설치되어 있는지 확인하세요.

2. 프론트엔드 디렉토리로 이동:
   ```bash
   cd frontend
   ```

3. 의존성을 설치:
   ```bash
   npm install
   ```

4. 개발 서버를 시작:
   ```bash
   npm start
   ```

5. 프론트엔드는 `http://localhost:3000`에서 실행됩니다.

## API 엔드포인트

### 사용자 API
- `POST /api/users` - 사용자 생성
- `GET /api/users` - 모든 사용자 조회
- `GET /api/users/{id}` - ID로 사용자 조회
- `GET /api/users/username/{username}` - 사용자명으로 사용자 조회

### 카테고리 API
- `POST /api/categories` - 카테고리 생성
- `GET /api/categories` - 모든 카테고리 조회
- `GET /api/categories/{id}` - ID로 카테고리 조회
- `GET /api/categories/name/{name}` - 이름으로 카테고리 조회

### 게시글 API
- `POST /api/posts` - 게시글 생성
- `GET /api/posts` - 모든 게시글 조회
- `GET /api/posts/{id}` - ID로 게시글 조회
- `GET /api/posts/user/{userId}` - 사용자별 게시글 조회
- `GET /api/posts/category/{categoryId}` - 카테고리별 게시글 조회

## 사용 방법

1. **계정 생성**: 먼저 사용자 계정을 생성합니다.
2. **카테고리 생성**: 게시글을 분류할 카테고리를 생성합니다.
3. **게시글 작성**: 생성된 사용자와 카테고리를 선택하여 게시글을 작성합니다.
4. **게시글 확인**: 작성된 게시글 목록을 확인합니다.

## 개발 가이드라인

### 백엔드 개발
- Spring Boot 3.2.0 사용
- Java 17 이상 사용
- JPA/Hibernate를 사용한 데이터 접근
- RESTful API 설계 원칙 준수
- 적절한 예외 처리 및 검증

### 프론트엔드 개발
- React 18.2.0 사용
- 함수형 컴포넌트 및 Hooks 사용
- Axios를 사용한 HTTP 통신
- 반응형 디자인 적용
- 사용자 친화적인 UI/UX

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 