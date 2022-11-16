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

 function removeElements(head: ListNode | null, val: number): ListNode | null 
 {
   // No head edge case
   if(!head)
   {
     return null
   }
   
   // Head only edge case
   if(head.next === null)
   {
     // Check if head needs to be deleted
     if(head.val === val)
     {
       return null;
     }
     else
     {
       return head;
     }
   }
   
   // Head is val edge case loop
   while(head.val === val)
   {
     head = head.next;
     if(!head)
     {
       return null;
     }
   }
   
   // Hold our starting traversing node
   let traversingNode: ListNode | null = head;
   
   // Traverse the LinkedList to find the desired ListNode
   while(traversingNode.next !== null)
   {
     // Check if the next value 
     if(traversingNode.next.val === val)
     {
       // Hold the following node
       let temporaryNode: ListNode | null = traversingNode.next.next;
       // Set the new next node
       traversingNode.next = temporaryNode;
       // Check we removed the tail
       if(temporaryNode === null)
       {
         return head;
       }
     }
     // Traverse the linked list
     else
     {
       traversingNode = traversingNode.next;
     }
   }
   // Return the head
   return head;
 };