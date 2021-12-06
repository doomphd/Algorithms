class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
a.next = b;
b.next = c; 


class SLL {
    constructor() {
            this.head = null;
        }
    
    //Determines if the list is empty ***    
    isEmpty(){
        if (this.head = null) {
          return "Empty list"
        } else {
          return "Not empty, unlike me"
        }
    }

    //Create a new node with the given value and inserts it at the back of the list
    insertAtFront(val){
        // instantiate the node with the val
        var new_node = new Node(val)
        // put the new val into the list

        if (!this.head) {
          this.head = new_node;
        } else {
          new_node.next = this.head
          this.head = new_node;
        }
        // 1  -->  2  -->  3 --> null 
        //4 ----> 1  -->  2  -->  3    --> null
    }
        //Create a new node with the given value and inserts it at the back of the list
    insertAtBack(val){
        // instantiate the node with the val
        var new_node = new Node(val)
        // put the new val into the list

        if (!this.head) {
          this.head = new_node;
        } else {
              var runner = this.head;
              while(runner){ // while(runner != null)
             runner = runner.next;  
             if (runner.next === null) {
               runner.next = new_node;
               break;
             }               
        }

          

        }
        // 1  -->  2  -->  3 --> null 
        // 1  -->  2  -->  3 --> 4    --> null
    }
    arrToList(arr){
        //BONUS: Add all the items of an array to the back of the list
    }

    printList(){
        if(!this.head){
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while(runner){ // while(runner != null)
            console.log(runner.val);
            runner = runner.next;            
        }
        // 1  -->  2  -->  3 --> null 
        //1 --> 2 --> 3--> 4 --> null
    }

}

var list1 = new SLL();
list1.head = a;
list1.insertAtBack(7);
list1.printList();

// 1 , 2, 3 , 100, 200, 300
// list1.arrToList([100, 200 , 300])
// list1.printList();