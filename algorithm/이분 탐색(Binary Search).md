## 이분 탐색(Binary Search)

> 정렬된 수열에서 검색하는 알고리즘이다. 선형 탐색보다 훨씬 빠르게 탐색할 수 있다는 장점이 있다. 시간복잡도는 탐색할 범위를 절반으로 줄여서 탐색하므로 O(logn)이다.


진행 순서
- 오름차순 혹은 내림차순으로 정렬
- left와 right로 mid 값 설정
- mid와 내가 구하고자 하는 값과 비교
- 구할 값이 mid보다 높으면 : start = mid+1 구할 값이 mid보다 낮으면 : end = mid - 1
- start <= end 될 때까지 계속 반복하기


<br>


```
function binarySearch(array, target) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
    let mid = parseInt((start+end)/2)

    if(array[mid] ===target){
      return mid;
    } else if(array[mid] < target) {
      start = mid + 1  
    } else if(array[mid] > target){
      end = mid - 1
    }
  }
}
```

