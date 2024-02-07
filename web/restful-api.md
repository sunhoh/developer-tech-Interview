### 들어가기전..

REST API란? REST 아키텍처 스타일에 부합하는 API
이 설계 규칙을 올바르게 지킨 시스템을 RESTful API라고 부른다.

그럼 REST API를 알기 위해 REST부터 알아야한다.

## REST
REST(Representational State Transfer)의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것을 의미합니다.

- HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고,
- HTTP Method(POST, GET, PUT, DELETE, PATCH 등)를 통해 해당 자원(URI)에 대한 CRUD Operation을 적용하는 것을 의미.

> CRUD란?  
> Create(생성), Read(읽기), Update(갱신), Delete(삭제)


### REST 특징
<details>
<summary>&nbsp; Uniform Interface(인터페이스 일관성)</summary>

---
  - url자원식별
    - 자원은 url로 식별되어야 한다.
        - 이름을 지닐 수 있는 모든 정보 
        - 개념적인 대상 (문서,이미지,자원들의 집합, 실존하는 대상등)
        - 상태는 변화가능! -> 변하지 않는 식별자 필요
        - uri를 통해 자원을 식별해야 한다.  
        예) /users/{userId} 여기서 {userId}은 실제 사용자의 고유한 식별자를 나타내는 변수, userId(자원) = 객체 
  - 표현을 통한 자원 조작
    - url과 GET,DELETE,등 HTTP 표준 메서드 등을 통해 자원을 CRUD 작업을 설명할 수 있는 정보가 담겨야 하는것을 말한다.
  - self-descriptive messages (자기 서술적 메세지)
    - HTTP header에 타입을 명시하고 각 자원들은  MIME 타입에 맞춰야함  
    - 예를 들어 .json를 반환한다면 application/json으로 명시해야함
    - Host 헤더에 도메인명 기재 필요
    - 캐쉬 관련 헤더를 통한 캐쉬 전략 지정 (http/1.1: cache-control, age, tag...) 
  - HATEOAS
    - 클라이언트 요청에 대해 응답을 할 때, 추가적인 정보를 제공하는 링크를 포함할 수 있어야 한다.
    - REST는 독립적으로 컴포넌트들을 손쉽게 연결하기 위한 목적으로도 사용된다. 따라서 서로 다른 컴포넌트들을 유연하게 연결하기 위해선, 느슨한 연결을 만들어줄 것이 필요하다.
    - 이때 사용되는 것이 바로 링크이다. 서버는 클라이언트 응용 애플리케이션에 하이퍼 링크를 제공한다.
    - 클라이언트는 이 하이퍼 링크를 통해서 전체 네트워크와 연결되며 HATEOAS는 서버가 독립적으로 진화할 수 있도록 서버와 서버, 서버와 클라이언트를 분리 할 수 있게 한다.

    > 요즘엔 서버와 통신할때 json을 넘겨주는데?  
    > 아래 그림과같이 주소로 표현되는 링크를 보내주면 HATEOAS에 유반되지 않는다라고 할 수 있음

    ![소스 코드](/web/img/HATEOAS.png)



---
</details>

<details>
<summary>&nbsp; Stateless(무상태)</summary>

---

REST는 무상태성 성격을 갖습니다. 다시 말해 작업을 위한 상태정보를 따로 저장하고 관리하지 않습니다.   
세션 정보나 쿠키정보를 별도로 저장하고 관리하지 않기 때문에 API 서버는 들어오는 요청만을 단순히 처리하면 된다. 때문에 서비스의 자유도가 높아지고 서버에서 불필요한 정보를 관리하지 않음으로써 구현이 단순해짐

이 규칙은 HTTP 자체가 Stateless이기 때문에 HTTP를 이용하는 것만으로도 만족됨  
<br>

</details>

<details>
<summary>&nbsp; Server-Client(서버-클라이언트 구조)</summary>

---

클라이언트와 서버가 서로 독립적인 구조를 가져야 한다.
물론 이는 HTTP를 통해 가능한 구조. 서버에서 HTTP 표준만 지킨다면 웹에서는 그에 따른 화면이 잘 나타나게 된다.

</details>

<details>
<summary>&nbsp; Cacheable(캐시 처리 가능)</summary>

---

REST의 가장 큰 특징 중 하나는 HTTP라는 기존 웹표준을 그대로 사용하기 때문에, 웹에서 사용하는 기존 인프라를 그대로 활용이 가능  
따라서 HTTP가 가진 캐싱 기능이 적용 가능하다. HTTP 프로토콜 표준에서 사용하는 Last-Modified태그나 E-Tag를 이용하면 캐싱 구현이 가능

HTTP는 원래 캐싱이 됨, 새로고침을 하면 304가 뜨면서 원래 있던 js와 css이미지 등을 불러오는 것을 볼 수 있음

<br>

</details>

<details>
<summary>&nbsp; Layered System(계층화)</summary>

---

계층구조로 나눠져 있는 아키텍처를 뜻함 WEB기반 서비스를 하면 보통 이러한 시스템 구축하게됨

</details>



<br>
<br>
<br>

## REST API

RESPT API란 REST의 원리를 따르는 API를 의미  
REST API를 올바르게 설계하기 위해서는 지켜야 하는 몇가지 규칙이 있다.


### REST API 규칙
1. 동작은 HTTP 메소드로만 해야 하고 url에 행위를 포함하지 않는다.
 조회 = get, 추가 = post, 수정 = put, 삭제 = delete 이용해야함
2. .jpg, .png등 확장자는 표시 하지 말아야 한다.
3. 동사가 아닌 명사로만 표기해야한다.  
    예 )  유저가 책을 소유 → ‘유저/유저아이디/inclusion/책/책아이디’
4. 대문자보다는 소문자를 사용하여야 한다.
5. 계층적인 내용을 담고 있어야한다. (/집/아파트/전세)
6. 언더바 대신 -(하이폰)을 사용한다. (언더바_안됨)
7. http응답 상태코드를 적재적소에 활용해야한다. 성공시 200대 리다이렉션 300등  
...


<br>
<br>

## RESTful API

RESTFUL이란? REST의 원리를 따르는 시스템을 의미한다.  
REST의 원리를 따르는 시스템으로 REST API의 설계 규칙을 올바르게 지킨 시스템을 RESTful하다라고 말할 수 있다.

