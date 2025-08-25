# QnA Hub - API 연동 가이드

## API 연동 기능

이 프로젝트는 백엔드 API와의 연동을 지원합니다. API 모드를 활성화하면 실제 서버에서 데이터를 가져와 표시할 수 있습니다.

### 환경 설정

`.env` 파일에서 API 서버 URL을 설정하세요:

```env
VITE_API_BASE_URL=http://localhost:3000
```

실제 서버 URL로 변경하여 사용하세요.

### API 엔드포인트

다음 API 엔드포인트들이 구현되어 있습니다:

### API 엔드포인트

#### 1. 대표 질문 목록 조회
```
GET /api/questions/representative?skip=0&limit=10
```

#### 2. 최근 답변 목록 조회 (새로운 답변 전용 API)
```
GET /api/answers/?skip=0&limit=10
```

#### 3. 인기 질문 목록 조회 (대표 질문과 동일)
```
GET /api/questions/representative?skip=0&limit=10
```

#### 4. 질문 제출 (새로운 스펙)
```
POST /api/questions/raw?force=0
Content-Type: application/json

{
  "content": "질문 내용",
  "author_id": "anonymous"
}
```

**Query Parameter:**
- `force=0`: 유사 질문 검사 수행
- `force=1`: 유사 질문 무시하고 강제 등록

#### 5. 질문 좋아요
```
POST /api/questions/{questionId}/like
```

### API 응답 형식

#### 질문 목록 조회 응답 (배열 형태)
```json
[
  {
    "_id": "7DAdC7DaE3F06e1BdAbC8c01",
    "title": "질문 제목",
    "total_votes": 42,
    "status": "unanswered",
    "created_at": "2025-08-25T09:16:58.383Z"
  }
]
```

#### 답변 목록 조회 응답 (질문-답변 연결 형태)
```json
[
  {
    "question": {
      "title": "질문 제목",
      "total_votes": 0,
      "status": "answered",
      "created_at": "2025-08-25T09:44:21.510Z",
      "_id": "Fd598bdbf3fe3Faf96EDFaC7"
    },
    "answer": {
      "content": "답변 내용",
      "author_id": "작성자ID",
      "representative_question_id": "FabDf401f3F1a1c7f9faFCc4",
      "total_votes": 15,
      "_id": "a035FbB9ff31fFe6Fd72c98C",
      "created_at": "2025-08-25T09:44:21.510Z"
    }
  }
]
```

#### 필드 설명
**질문 객체:**
- `_id`: 질문 고유 ID
- `title`: 질문 제목/내용
- `total_votes`: 총 투표(좋아요) 수
- `status`: 답변 상태 ("answered" | "unanswered")
- `created_at`: 생성 시간 (ISO 8601 형식)

**답변 객체:**
- `_id`: 답변 고유 ID
- `content`: 답변 내용
- `author_id`: 답변 작성자 ID
- `representative_question_id`: 연결된 질문 ID
- `total_votes`: 답변 좋아요 수
- `created_at`: 답변 생성 시간

#### 질문 제출 응답 형식

**1. 정상 등록:**
```json
{
  "status": "new_question_submitted",
  "message": "새로운 질문으로 정상 접수되었습니다.",
  "submitted_question": {
    "content": "질문 내용",
    "author_id": "anonymous",
    "status": "pending",
    "created_at": "2025-08-25T09:52:22.061000",
    "force_submitted": false,
    "_id": "68ac3256a078fcc6dcafd53f"
  },
  "similar_question": null
}
```

**2. 유사 질문 발견:**
```json
{
  "status": "similar_question_found",
  "message": "매우 유사한 질문이 이미 존재합니다. 기존 질문에 공감하시거나, 새로운 질문으로 등록해주세요.",
  "submitted_question": null,
  "similar_question": {
    "title": "서비스 회원가입 시 이메일 인증 속도 개선 방법",
    "total_votes": 0,
    "status": "answered",
    "created_at": "2025-08-25T09:20:50.727000",
    "_id": "68ac2af245c585ab514a0157"
  }
}
```

**3. 부적절한 질문:**
```json
{
  "detail": "유효하지 않은 질문입니다. 이유: 욕설 및 부적절한 내용을 포함하고 있기 때문입니다."
}
```

### 사용 방법

1. **API 모드 활성화**: 우측 상단의 "로컬 모드" 버튼을 클릭하여 "API 모드"로 전환
2. **데이터 확인**: API에서 데이터를 가져와 화면에 표시
3. **질문 제출**: 질문 입력 후 제출하면 API로 전송
4. **에러 처리**: API 호출 실패 시 에러 메시지 표시 및 재시도 버튼 제공

### 구현된 기능

- ✅ 대표 질문 목록 조회
- ✅ 최근 답변 목록 조회  
- ✅ 인기 질문 목록 조회
- ✅ 질문 제출
- ✅ 로딩 상태 표시
- ✅ 에러 처리 및 재시도
- ✅ 로컬/API 모드 전환

### 백엔드 요구사항

백엔드 서버는 다음 사항을 충족해야 합니다:

1. **CORS 설정**: 프론트엔드 도메인에서의 요청 허용
2. **JSON 응답**: 모든 응답은 JSON 형식
3. **에러 핸들링**: 적절한 HTTP 상태 코드 반환
4. **페이지네이션**: skip/limit 파라미터 지원

### 개발 팁

- API 모드와 로컬 모드를 쉽게 전환할 수 있어 개발 중 테스트가 용이합니다
- 에러 발생 시 콘솔에 상세한 에러 정보가 출력됩니다
- 로딩 스켈레톤으로 사용자 경험을 개선했습니다

### 커스터마이징

`src/services/api.ts` 파일에서 API 호출 로직을 수정할 수 있습니다.
`src/hooks/useApi.ts` 파일에서 데이터 페칭 로직을 커스터마이징할 수 있습니다.
