## 해시테이블 (Hash Table)

Hash table은 효율적인 탐색(빠른 탐색)을 위한 자료구조로써 key-value쌍의 데이터를 입력받습니다.


시간복잡도와 공간효율
시간복잡도는 저장, 삭제, 검색 모두 기본적으로 O(1)입니다. 다만 collision으로 인하여 worst case O(n)이 될 수 있습니다. 

공간효율성은 떨어집니다. 데이터가 저장되기 전에 미리 저장공간(slot, bucket)을 확보해야 하기 때문입니다. 따라서 저장공간이 부족하거나 채워지지 않은 부분이 많은 경우가 생길 수 있습니다.


|  | Hash table |  Linked list(Stack)| Array |  
| -----  | -----| ----- | -----|   
| access | O(1) | O(n)  | O(1) |  
| insert | O(1) | O(1)  | O(1) |
| append |      | O(1)  | O(1) |
| delete | O(1) | O(1)  | O(n) |



## Map과 Set

### Map
맵(Map)은 키가 있는 데이터를 저장한다는 점에서 객체와 유사합니다. 다만, 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있다.

key와 value를 매핑시키는 자료구조로 key를 통해서 value를 접근할 수 있다.

- new Map() – 맵을 만듭니다.
- map.set(key, value) – key를 이용해 value를 저장합니다.
- map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
- map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
- map.delete(key) – key에 해당하는 값을 삭제합니다.
- map.clear() – 맵 안의 모든 요소를 제거합니다.
- map.size – 요소의 개수를 반환합니다.

> Object.entries: 객체를 맵으로 바꾸기<br>
> Object.fromEntries: 맵을 객체로 바꾸기

### Set
셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션이다. 셋에 키가 없는 값이 저장된다.

key가 곧 value로 저장되는 자료구조로 집합에 value가 있는지 여부를 파악하기 쉽다.



- `new Set(iterable)` – 셋을 만듭니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.
- `set.add(value)` – 값을 추가하고 셋 자신을 반환합니다.
- `set.delete(value)` – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
- `set.has(value)` – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
- `set.clear()` – 셋을 비웁니다.
- `set.size` – 셋에 몇 개의 값이 있는지 세줍니다.


#### 셋의 값에 반복 작업하기
for..of나 forEach를 사용하면 셋의 값을 대상으로 반복 작업을 수행할 수 있습니다.

```js
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```