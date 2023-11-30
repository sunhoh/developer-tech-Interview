// 링크드 리스트의 노드 정의
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}
  
  // 링크드 리스트 클래스 정의
class LinkedList {
  constructor() {
    this.head = null;
  }
  
    // 맨 앞에 노드 추가
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  
    // 맨 뒤에 노드 추가
  insertLast(data) {
    const newNode = new Node(data);
    let current = this.head;

    console.log(current)
    // current가 null이 아니라면
    if (!current) {
      this.head = newNode;
      return;
    }
    // current이 null이 아니라 존재하면 current.next 
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

    // 노드 삽입
  insertAt(data, index) {
    if (index < 0 || index > this.size()) {
      return console.log("Invalid index");
    }
    
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    
    const newNode = new Node(data);
    let current = this.head;
    let count = 0;
    let previous;
    
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    
      newNode.next = current;
      previous.next = newNode;
  }
    
    // 리스트 크기 반환
  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

    // 노드 삭제
  deleteNode(data) {
    let current = this.head;
    let previous = null;   

    while (current !== null) {
      if (current.data === data) {
      if (previous === null) {
        this.head = current.next;
      } else {
        previous.next = current.next;
      }
      return;
    }
    
      previous = current;
      current = current.next;
    }
  }

    // 검색
  searchNode(data) {
    let current = this.head;
    
    while (current !== null) {
      if (current.data === data) {
        return true; // 데이터를 찾으면 true 반환
      }
      current = current.next;
    }
      return false; // 데이터를 찾지 못하면 false 반환
  }
    
  
    // 링크드 리스트 출력
  printList() {
    let current = this.head;
  
    while (current) {
      console.log(current.data);
      current = current.next;
      }
    }
}
  
  // 링크드 리스트 사용 예시
  const linkedList = new LinkedList();
  
  linkedList.insertFirst(10);
  linkedList.insertFirst(5);
  linkedList.insertLast(20);
  linkedList.printList() // 10, 5, 20
 
  
  // index 1에 15를 삽입
  linkedList.insertAt(15, 1);
  linkedList.printList() // 10, 15, 5, 20

  // 데이터 5를 갖는 노드 삭제
  linkedList.deleteNode(15);
  linkedList.printList() // 10, 5, 20

  const isFound = linkedList.searchNode(15);
  console.log(isFound);  // false
  
  // 데이터 10을 갖는 노드 검색
  const isFound2 = linkedList.searchNode(10);
  console.log(isFound2);  // true