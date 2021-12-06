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

    // ----------- Week 1 Day 4 algo ------------
    

    contains(val){
        //Determines whether or not the given search value exists in this list.
        //val = 3
        // ( 1 ) --> (2) --> (3) --> null
        //return a boolean

        var runner = this.head;
        while(runner){ // runner will be null at the end
            console.log(runner.val);
            if(runner.val === val){
              return true;
            }
            runner = runner.next;            
        }
        return false;
    }

    containsRecursive(val, curr = this.head){
        // Determines the number of nodes that the given search value exists in this list.
        // i.e. val = 10, 
        //(10) --> (2) --> (10) --> (10) --> null 
        // This should return 3
        // var counter;
        //     if(curr.val === null){
        //       return counter;
        //     }
        //     else if(curr.val === val){
        //       counter += 1;
        //       return containsRecursive(val, curr = this.head.next)
        //     }
        //     else{
        //   return containsRecursive(val, curr = this.head.next)

        //     }
        // }
        var count = 0;
        while(curr != null){
            if(val === curr.val){
                count++
            }
            curr = curr.next;            
        }
        return count
    }


    

    removeBack(){
        //remove the last node of a SLL
        var follower;
        var runner  = this.head;
        while(runner.next){ //runner will be the end node
            follower = runner;
          runner = runner.next;
        }
        follower.next =null
    }
 
    // ------------ END OF Week 1 Day 4 algo ------------


    printList(){
        if(!this.head){
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while(runner){ // runner will be null at the end
            console.log(runner.val);
            runner = runner.next;            
        }
        runner  = this.head;
        while(runner.next){ //runner will be the end node
          runner = runner.next;
        }
        var endnode = runner

    }

}

var a = new Node(10)
var b = new Node(10)
var c = new Node(10)
a.next = b;
b.next = c; 
var list1 = new SLL();
list1.head = a;
console.log(list1.removeBack());
list1.printList();
// list1: (1) --> (2) --> (3) --> null
// console.log(list1.containsRecursive(1));