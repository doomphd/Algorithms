class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLL {
    constructor() {
            this.head = null;
        }

    // ------------------------------------- Week 1 Day 3 algo -------------------------------------------
    
    insertAtFront(val){
      var newnode = new Node(val)
      newnode.next = this.head;
      this.head = newnode;
      //GOOD JOB!
        // construct a node with the val
        // make the new node as the front (HINT: What is the front of a Singly Linked List)
    }


    removeHead(){
        // Remove the head (HINT: What will be the new head?)
        //Think about it... we want to remove but not create
        //removing the node from the list will automatically remove that node when you run the program

        this.head = this.head.next;

    }

    //*** bonus question ***
    average(){
        // Find the average of all the nodes inside a Singly Linked List
        // HINT: How to get an average? What information do we need to generate an average?
        // BONUS: What if one of the nodes stored String instead of int? How do you want to handle that edge case?
        let runner = this.head;
        let sum = runner.val;
        let counter = 1;
        while(runner.next) {
        if(isNaN(runner.val)){
          runner=runner.next;
          console.log("hi")
        }
        else{
        runner = runner.next;
        console.log(runner)
        sum += runner.val;
        counter++;
        }
        }
        let avg = sum/counter
        return avg;


    }
    // ------------------------------------- END OF Week 1 Day 3 algo -------------------------------------------



    // If you want to use the following methods, please fill in the logic on your own. (You can copy from Discord if you want to)
    // ------------------------------------- Week 1 Day 2 algo -------------------------------------------
    isEmpty(){
      if(!this.head) {
        return "Empty list";
      }
      else {
        return "Not empty list";
      }
    }

    insertAtBack(val){
      const new_node = new Node(val);
      if(!this.head) {
        this.head = new_node;
        return `This list is now ${this.printList()}`;
      }
      else {
        let runner = this.head;
        while(runner.next) {
          runner = runner.next;
        }
        runner.next = new_node;
        return `This list is now ${this.printList()}`;
      }
    }

    arrToList(arr){
      for(let i = 0; i < arr.length; i++) {
        this.insertAtBack(arr[i]);
      }
      return `This list is now ${this.printList()}`;
    }

    printList(){
        let result = "";
        if(!this.head){
            return "Empty list";
        }
        var runner = this.head;
        while(runner){
            result += runner.val + " -> ";
            runner = runner.next;  
        }
        result += "null";
        return result;
    }

    // ------------------------------------- END OF Week 1 Day 2 algo -------------------------------------------


}

var a = new Node(1)
var b = new Node(2)
var c = new Node("sup")
var d = new Node(4)

a.next = b;
b.next = c; 
c.next = d;
var list1 = new SLL();
list1.head = a;
console.log(list1.average());
list1.printList();
// list1: (1) --> (2) --> (3) --> null
