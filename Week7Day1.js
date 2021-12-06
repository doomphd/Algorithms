//construct Node class
class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}



//printNode(a)

//construct SLL class
class SLL{
    constructor(list){
      this.head = list;
    }

}

//create a list of nodes following (1) -> (2) -> (3) -> null
// you can use the helper function printNode(node)
// you can create a new class by 
//let a = new ClassName(val)

let a = new Node(1)
let b = new Node(2)
a.next = b;
let c = new Node(3)
b.next = c;

let d = new Node(4)
c.next = d;

let e = new Node(5)
d.next = e;

//create a SingleLinkedList with the above nodes. (1) is the head
// you can use the helper function printList(list) 

var sll = new SLL(a);
printList(sll);

// ---------------HELPER FUNCTION --------------------
//Print the nodes
function printNode(node){
    var str="";
    var curr = node
    while(curr){
        str+=curr.val+" -> ";
        curr=curr.next;

    }
    str+="null";
    console.log(str)

}



//Print the SLL 
function printList(list){
    if(!list.head){
        return "Empty list"
    }
    var str="";
    console.log("List head: "+list.head.val)
    var curr = list.head;
    while(curr){
        str+=curr.val+" -> ";
        curr=curr.next;

    }
    str+="null";
    console.log(str)
}