## 해시테이블 (Hash Table)

Hash table은 효율적인 탐색(빠른 탐색)을 위한 자료구조로써 key-value쌍의 데이터를 입력받습니다.


시간복잡도와 공간효율
시간복잡도는 저장, 삭제, 검색 모두 기본적으로 O(1)입니다. 다만 collision으로 인하여 worst case O(n)이 될 수 있습니다. 

공간효율성은 떨어집니다. 데이터가 저장되기 전에 미리 저장공간(slot, bucket)을 확보해야 하기 때문입니다. 따라서 저장공간이 부족하거나 채워지지 않은 부분이 많은 경우가 생길 수 있습니다.


|  | Hash table    |  Linked list(Stack)     | Array  |  
| -----  | -----| ----- | -----|   
| access | O(1) | O(n)  | O(1) |  
| insert | O(1) | O(1)| | O(n) |
| append |      | O(1)| | O(1) |
| delete | O(1) | O(1)| | O(n) |