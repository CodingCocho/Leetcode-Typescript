class LinkedNode {
  public next: LinkedNode | null = null;
  public val: number;

  constructor(inputVal: number) {
    this.val = inputVal;
  }

}

class MyLinkedList {

  public head: LinkedNode | null = null;
  public tail: LinkedNode | null = null;
  public length: number = 0;

  constructor() {

  }

  get(index: number): number {
    if (this.head && index < this.length && index > -1) {
      let currentNode: LinkedNode = this.head;
      let counter: number = 0;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode.val;
    }
    else {
      return -1;
    }
  }

  addAtHead(val: number): void {
    if (!this.head) {
      this.head = new LinkedNode(val);
      this.tail = this.head;
      this.length++;
    }
    else {
      let newNode = new LinkedNode(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++
    }
  }

  addAtTail(val: number): void {
    if (!this.head) {
      this.head = new LinkedNode(val);
      this.tail = this.head;
      this.length++;
    }
    else {
      let newNode = new LinkedNode(val);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++
    }

  }

  addAtIndex(index: number, val: number): void {
    if (this.head && index === 0) {
      this.addAtHead(val);
    }
    else if (index === this.length) {
      this.addAtTail(val);
    }
    else if (this.head && (index < this.length && index > -1)) {
      let counter: number = 0;
      let currentNode: LinkedNode = this.head;
      while (counter !== index - 1) {
        currentNode = currentNode.next
        counter++;
      }
      let newNode: LinkedNode = new LinkedNode(val);
      let replacedNode: LinkedNode | null = currentNode.next;
      currentNode.next = newNode;
      newNode.next = replacedNode;
      this.length++
    }
  }

  deleteAtIndex(index: number): void {
    if (this.head && index === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = this.head;
      }
      this.length--;
    }
    else if (this.head && (index < this.length && index > -1)) {
      let counter: number = 0;
      let currentNode: LinkedNode = this.head;
      while (counter !== index - 1) {
        currentNode = currentNode.next
        counter++;
      }
      if (index === this.length - 1) {
        this.tail = currentNode;
        this.tail.next = null;
      }
      else {
        let replacedNode: LinkedNode | null = currentNode.next.next;
        currentNode.next = replacedNode;
      }
      this.length--;
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  let h = head;
  var s = new Set();
  while (h != null) {
    // If we have already has this node
    // in hashmap it means their is a cycle
    // (Because you we encountering the
    // node second time).
    if (s.has(h))
      return true;

    // If we are seeing the node for
    // the first time, insert it in hash
    s.add(h);

    h = h.next;
  }

  return false;

};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  let currentNode: ListNode | null = head;
  let hashTable: Set<ListNode> = new Set();
  while (currentNode !== null) {
    if (hashTable.has(currentNode))
      return currentNode;

    hashTable.add(currentNode);
    currentNode = currentNode.next;
  }

  return null;

};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let pointerNodeA: ListNode | null = headA;
  let pointerNodeB: ListNode | null = headB;
  let hashMap: Set<ListNode> = new Set();
  while (pointerNodeA || pointerNodeB) {
    if (hashMap.has(pointerNodeA)) {
      return pointerNodeA;
    }
    if (pointerNodeA) {
      hashMap.add(pointerNodeA);
      pointerNodeA = pointerNodeA.next;
    }
    if (hashMap.has(pointerNodeB)) {
      return pointerNodeB;
    }
    if (pointerNodeB) {
      hashMap.add(pointerNodeB);
      pointerNodeB = pointerNodeB.next;
    }
  }
  return null;
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let currentNode: ListNode | null = head;
  let jumpNode: ListNode | null = head;

  let currentIndex: number = 0;
  let length: number = 0;

  if (!head.next && n == 1) {
    return null;
  }

  let jumps: number = 2;
  let goalIndex: number = 0;
  while (currentNode) {
    let jumpCounter: number = 0
    while (jumpCounter !== jumps && jumpNode) {
      if (jumpNode) {
        jumpNode = jumpNode.next
        length++;
      }
      jumpCounter++;
    }
    jumps += 2;
    if (jumpNode) {
      goalIndex = length;

    }
    if (!jumpNode) {
      goalIndex = length - n;
    }
    if (goalIndex === 0) {
      head = head.next;
      return head;
    }
    if (currentIndex === goalIndex - 1) {
      if (n === 1) {
        currentNode.next = null;
      }
      else {
        let replacementNode: ListNode | null = currentNode.next.next;
        currentNode.next = replacementNode;
      }
      return head;
    }
    if (!jumpNode) {
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  return null;
};

/**
* Definition for singly-linked list.
* class ListNode {
*     val: number
*     next: ListNode | null
*     constructor(val?: number, next?: ListNode | null) {
*         this.val = (val===undefined ? 0 : val)
*         this.next = (next===undefined ? null : next)
*     }
* }
*/

function reverseList(head: ListNode | null): ListNode | null {
  let listOfNodes: ListNode[] = [];
  if (!head) {
    return null
  }
  if (!head.next) {
    return head;
  }
  let currentNode: ListNode | null = head;
  while (currentNode) {
    listOfNodes.push(currentNode);
    currentNode = currentNode.next;
  }
  head = listOfNodes.pop();
  currentNode = head;
  while (listOfNodes.length !== 0) {
    currentNode.next = listOfNodes.pop();
    currentNode = currentNode.next;
  }
  currentNode.next = null;
  return head;
};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // No head edge case
  if (!head) {
    return null
  }

  // Head only edge case
  if (head.next === null) {
    // Check if head needs to be deleted
    if (head.val === val) {
      return null;
    }
    else {
      return head;
    }
  }

  // Head is val edge case loop
  while (head.val === val) {
    head = head.next;
    if (!head) {
      return null;
    }
  }

  // Hold our starting traversing node
  let traversingNode: ListNode | null = head;

  // Traverse the LinkedList to find the desired ListNode
  while (traversingNode.next !== null) {
    // Check if the next value 
    if (traversingNode.next.val === val) {
      // Hold the following node
      let temporaryNode: ListNode | null = traversingNode.next.next;
      // Set the new next node
      traversingNode.next = temporaryNode;
      // Check we removed the tail
      if (temporaryNode === null) {
        return head;
      }
    }
    // Traverse the linked list
    else {
      traversingNode = traversingNode.next;
    }
  }
  // Return the head
  return head;
};

/**
* Definition for singly-linked list.
* class ListNode {
*     val: number
*     next: ListNode | null
*     constructor(val?: number, next?: ListNode | null) {
*         this.val = (val===undefined ? 0 : val)
*         this.next = (next===undefined ? null : next)
*     }
* }
*/

function oddEvenList(head: ListNode | null): ListNode | null {
  // No head edge case
  if (!head) {
    return null
  }
  // Only head edge case
  if (!head.next) {
    return head;
  }
  // Hold the length of the even ListNode link
  let lengthOfEvenLink: number = 1;
  // Hold the pointer to the last odd ListNode
  let oddPointer: ListNode = head;
  // Hold the pointer the first even ListNode
  let evenPointer: ListNode = head.next;
  // Loop through the LinkedList
  while (true) {

    // Retrieve potentialNode
    let lengthCounter: number = 0;

    // Hold the next odd ListNode
    let nextOddPointer: ListNode | null = evenPointer;

    // Hold the last even ListNode
    let lastEvenPointer: ListNode | null = oddPointer;

    // Traverse the even ListNode link
    while (lengthCounter !== lengthOfEvenLink) {
      if (nextOddPointer.next === null) {
        return head;
      }
      lastEvenPointer = lastEvenPointer.next;
      nextOddPointer = nextOddPointer.next;
      lengthCounter++
    }

    // Linking
    lastEvenPointer.next = nextOddPointer.next;
    oddPointer.next = nextOddPointer;
    nextOddPointer.next = evenPointer;
    oddPointer = nextOddPointer;
    lengthOfEvenLink++;
  }

};

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let oddList = head;
  let evenList = head.next;

  let curOdd = oddList;
  let curEven = evenList;

  let curNode = head.next.next;
  let isOdd = true;

  while (curNode) {
    if (isOdd) {
      curOdd.next = curNode;
      curOdd = curOdd.next;
    } else {
      curEven.next = curNode;
      curEven = curEven.next;
    }
    curNode = curNode.next;
    isOdd = !isOdd;
  }
  curEven.next = null;
  curOdd.next = evenList;

  return oddList;

};

function isPalindrome(head: ListNode | null): boolean {

  // Theory you can do this in O(n) time complexity however we at most need O(n) space complexity since it is
  // a singly linked list to account for the O(1) space of adding a prev pointer.
  // Futhermore our length loop is irrelevant in a doubly linked list since we are given the tail node. 
  // The challenge is using O(n) space
  // My as well go with just pushing them all into an array. I was thinking unshifting and shifting since O(3n) > O(2n)

  // Single node edge case
  if (!head.next) {
    return true;
  }
  // Two node edge case
  if (!head.next.next) {
    if (head.val !== head.next.val) {
      return false;
    }
    else {
      return true;
    }
  }

  // Hold the traversing node
  let traversingNode: ListNode | null = head;
  // Hold the length of the LinkedList
  let length: number = 0;
  // Hold an array of the LinkedList
  let listNums: number[] = [];
  // Add each value into an array
  while (traversingNode) {
    listNums.push(traversingNode.val);
    traversingNode = traversingNode.next;
    length++
  }
  // Hold the two pointers
  let leftPointer: number = 0;
  let rightPointer: number = 0;

  // Check if the length is even
  if (length % 2 === 0) {
    rightPointer = length / 2;
    leftPointer = rightPointer - 1;
  }
  // Check if the length is odd
  else {
    rightPointer = Math.floor(length / 2);
    leftPointer = rightPointer;
  }
  // Traverse our array finding the condition that breaks the palindrome
  while (leftPointer !== -1 && rightPointer !== listNums.length) {
    if (listNums[leftPointer] !== listNums[rightPointer]) {
      return false;
    }
    leftPointer--;
    rightPointer++;
  }
  return true;
};