# 백엔드 CORS 설정 가이드

## 문제 상황
- 브라우저에서 OPTIONS preflight 요청이 400 Bad Request로 실패
- 실제 API 요청이 "Failed to fetch" 에러 발생

## 해결 방법

### 1. CORS 헤더 추가
백엔드에서 다음 CORS 헤더들을 설정해주세요:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### 2. OPTIONS 메서드 처리
OPTIONS 요청에 대해 200 OK를 반환하도록 설정:

```python
# FastAPI 예시
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 또는 특정 도메인만: ["http://localhost:5174"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 또는 수동으로 OPTIONS 처리
@app.options("/api/questions/representative")
async def options_questions():
    return {"message": "OK"}
```

### 3. 현재 사용되는 엔드포인트
- `GET /api/questions/representative?skip=0&limit=10`
- `POST /api/questions` (질문 제출)
- `POST /api/questions/{id}/like` (좋아요)

### 4. 테스트 방법
다음 curl 명령으로 CORS 설정을 테스트할 수 있습니다:

```bash
# OPTIONS 요청 테스트
curl -X OPTIONS "http://3.36.109.149/api/questions/representative" \
  -H "Origin: http://localhost:5174" \
  -H "Access-Control-Request-Method: GET" \
  -v

# GET 요청 테스트  
curl -X GET "http://3.36.109.149/api/questions/representative?skip=0&limit=10" \
  -H "Origin: http://localhost:5174" \
  -v
```

### 5. 응답 예시
성공적인 OPTIONS 응답:
```
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```
