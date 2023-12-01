


## 스택(Stack)

입력과 출력이 한 곳(방향)으로 제한

##### LIFO (Last In First Out, 후입선출) : 가장 나중에 들어온 것이 가장 먼저 나옴


<br>

***언제 사용?*** 

함수의 콜스택, 문자열 역순 출력, 연산자 후위표기법, DFS, 재귀


<details>
<summary>&nbsp; 자세히 보기</summary>

---
<br>

`주요 기능`

<!-- push와 pop할 때는 해당 위치를 알고 있어야 하므로 기억하고 있는 '스택 포인터(SP)'가 필요함
스택 포인터는 다음 값이 들어갈 위치를 가리키고 있음 (처음 기본값은 -1) -->

<br>



---
</details>


<br>
<br>
<br>

## 큐(Queue)

입력과 출력을 한 쪽 끝(front, rear)으로 제한

##### FIFO (First In First Out, 선입선출) : 가장 먼저 들어온 것이 가장 먼저 나옴


front, rear 두방향으로 접근할 수 있고 front로 데이터를 추출하고 rear로 데이터를 삽입한다.
<br>
접근방법은 가장 첫 원소와 끝 원소로만 가능

> 데이터를 넣고 뺄 때 해당 값의 위치를 기억해야 함. (스택에서 스택 포인터와 같은 역할)
> 이 위치를 기억하고 있는 게 front와 rear
>
> front : deQueue 할 위치 기억<br>
> rear : enQueue 할 위치 기억

<br>

***언제 사용?***

버퍼, 마구 입력된 것을 처리하지 못하고 있는 상황, BFS




<details>
<summary>&nbsp; 선형 큐</summary>

---
> rear = n - 1이면 큐가 꽉찬 것.<br>
> front 앞에 있는 공간이 낭비된다.<br>
> front = rear = n - 1일 때 큐가 비어 있으면서 꽉차 있는 놀라운 현상이 발생할 수 있다.


---
</details>


<details>
<summary>&nbsp; 원형 큐</summary>

---
원형 큐란? 

> 논리적으로 배열을 원형으로 재해석한 자료구조이다.<br>
> rear = front - 1이면 큐가 꽉 찬 것.<br>
> rear가 front 앞에 있는 공간을 활용할 수 있게 된다.

---
</details>









<br>




<br>
<br>
<br>


## 정리

|            큐(Queue)             |           스택(Stack)           |
| :-----------------------------: | :-----------------------------: |
| F.I.F.O <br/> First In First Out | L.I.F.O <br/> Last In First Out |


> LIFO: 마지막에 넣은 데이터를 가장 먼저 추출하는 데이터 관리 정책<br>
> FILO: 처음에 넣은 데이터를 가장 마지막에 추출하는 데이터 관리 정책