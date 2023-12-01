class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// 스택 사용 예시
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 출력: 3
console.log(stack.peek()); // 출력: 2
console.log(stack.isEmpty()); // 출력: false
console.log(stack.size()); // 출력: 2
