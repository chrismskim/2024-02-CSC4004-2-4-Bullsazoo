🎬 django 웹 서비스 기본 시나리오

1. 유저(클라이언트/웹브라우저)가 서버로 HTTP 요청 전송
2. 이를 django의 URL dispatcher가 받아 담당 View function으로 routing, View function은 사전 정의된 로직에 따라 들어온 요청을 처리
3. 그 과정에서 Model의 애플리케이션 데이터를 create/read/update/delete
4. 요청 처리 결과를 Template에 담아 render
5. render된 결과를 HTTP 응답의 형태로 View가 반환. 이를 유저에게 다시 제공.

파이참에서 사용되는 모든 클래스는 Model 클래스의 서브 클래스를 활용하여 구현

Model의 특징 

1. 하나의 클래스는 하나의 테이블에 매핑
2. 클래스의 하나의 어트리뷰트는 하나의 칼럼에 매핑
migration의 역할 : 모델 구조(테이블, 칼럼)을 코드상에서 변경 시, DB와 연동하여 DB 구조 변경

URLDispatcher : request의 url을 보고 매핑된 함수로 안내
작동 방식 : 
- urls.py의 urlpatterns 탐색
- 요청 url이 들어오면, 가장 먼저 매치된 패턴에 따라 View function으로 라우팅

ViewFunction : 들어온 HTTP 요청을 기반으로 모델에 들어있는 데이터를 조회하고 
필요 시 가공해 그 결과를 유저에게 HTTP 응답의 형태로 다시 전달

