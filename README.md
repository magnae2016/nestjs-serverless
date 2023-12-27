# 20231227

## 한 일
- nestjs의 middleware 적용
- users route에 적용 => .forRoutes('users');
- users 중 POST 요청에 적용 => .forRoutes({ path: 'users/*', method: RequestMethod.POST }); // path를 원하는대로 지정할 수 있음
- exclude 도 지정할 수 있음
- configure 안에서 consumer를 여러개 정의할 수 있음
- configure 안에서 apply안에서 여러개의 middleware를 적용할 수 있음

# 20231226

## 한 일
- nextjs + typescript 기본 scaffolding에 usersController 추가하기
- serverless 적용하기
- serverless.yml에 함수 추가
  - main
  - workaround

## 궁금
- serverless offline으로 실행 시 특이점
  - API call시, 해당 lambda의 첫 요청일때 Load하는것으로 보임
