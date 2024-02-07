### 들어가기전..
브라우저 정책에는 CORS와 SOP가 있다.

|SOP(Same-origin policy)| CORS(core-origin resources sharing)|
| :-------------------: | :--------------------------------: |
| 같은 출처 정책        | 다른 출처 자원 공유 |


CORS와 SOP는 모두 출처(Origin)와 관련된 개념이다.  
Origin이 무엇인지 알아보자.

### Origin (출처)

![origin](/web/img/origin.jpeg)

Origin은 URL의 프로토콜, 호스트(도메인), 포트 이 3가지로 정의된다. 즉, 어떤 URL이 같은 출처인지를 판단하려면 URL의 프로토콜, 도메인, 포트가 모두 같은지 확인하면 된다.

<br>


> #### 참고 
> Q. 다른 출처(Origin)로 요청시에 콘솔창에 SOP에러가 아닌 CORS라고 표기된 에러로 표기되던데 그럼 CORS가 아니라 SOP로 표기되어야 하는거 아닌가?
> 
> A. 브라우저 입장에서 다른 출처의 요청이 들어왔을때 CORS 설정을 해주면 요청 보내줄게라고 인식하기 때문  
>
> **다른 요청을 허용해주는것이 CORS 정책이다!!**

<br>

---


>  #### 참고
> Q. CORS 동작원리를 살펴 보기전에 CORS와 SOP는 브라우저 정책이라면 front단에서 처리하면 되는거 아닐까?  
>
> A. cors 응답 헤더 설정은 back단에서 해줘야함

<br>



### CORS의 동작원리

CORS의 기본 동작원리는 다음과 같다.

Web Server에서 Other Server로 요청시   
Request Header에 Origin: ‘{...주소}’ 기입해서 보내고  
받는 Server로에서 Request Header에 access-control-allow-origin: ‘{...주소}’를 기입하여 통일 시켜주는식으로 동작한다.


### CORS의 시나리로
1. Simple request 
2. Preflight request
3. Credentialed requset

#### Simple request 
다른 Origin으로 요청을 보낼 때 Origin 헤더에 자신의 Origin을 설정하고, 서버로부터 응답을 받으면 응답의 Allow-Contro-Allow-Origin 헤더에 설정된 Origin의 목록에 요청의 Origin 헤더 값이 포함되는지 검사하는 것이다.

![origin](/web/img/simple%20requset.png)


#### Preflight request 
단순 요청의 까다로운 조건에 충족하지 못한 요청의 경우, 서버에 실제 요청을 보내기 전에 예비 요청에 해당하는 프리플라이트 요청을 먼저 보내서 실제 요청이 전송하기에 안전한지 확인하는 것이다.
안전한 요청임이 확인되면, 그때서야 실제 요청을 서버에게 보낸다.

![origin](/web/img/preflight%20request.png)



#### Credentialed requset(인증 정보를 포함한 요청)

인증 정보를 함께 보내야 하는 요청이라면, Credentialed requset CORS 정책으로 동작한다.

*인증정보? 쿠키(Cookie) 혹은 Authorization 헤더에 설정하는 토큰 값 등을 일컫는다.

이 정책시에는 **access-control-allow-origin:** * 기입할 수 없다.  
또한 **access-control-allow-credentials: true** 설정이 필요함

> XMLHttpRequest, ajax, axios 의 경우,  
> withCredentials = true로 설정해줘야 한다.
>
> fetch API 의 경우,  
> credential = include로 설정해야 한다.

이러한 별도의 설정을 해주지 않으면 쿠키 등의 인증 정보는 절대로 자동으로 서버에게 전송되지 않는다.

![origin](/web/img/credentialed%20request.png)
