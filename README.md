# middy vs nestjs

middy는 custom middleware를 적용해본게 다 이지만,
middy와 nestjs를 비교했을 때
(middy에서 지원하고 있어도 내가 못 찾은것일수도 있지만...) nestjs에 아래와 같은 이점이 있었음

- middy에서 특정 path를 exclude하고싶을땐 white list를 배열로 관리하면서, event.routeKey가 whiteList에 포함되어 있다면 return을 했었는데 nestjs에서는 exclude를 지원해서 좋았음
- middy에서 function 안으로 오는 모든 요청에 대해 동일한 middleware를 적용했어야 했는데 nestjs는 path별로, method 별로 각기 다른 middleware를 적용할 수 있었음
결론: 좀 더 유연하고 사용하기 편한 nestjs가 더 좋았음

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
