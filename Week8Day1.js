class Stack{
	constructor(){
		this.items=[]
		this.capacity= 10
	}

	push(item){
		this.items.push(item);
		//add an item at the top
	}

	pop(){
    this.items.pop();
		//remove the top/last item from the stack 
		//return the removed item
	}
  
	peek(){
    return this.items[this.items.length-1]
		// return the top item without removing it
	}

	size(){
    return this.items[this.items.length]
		//return the size of the stack
	}

	isEmpty(){
		// check if the stack is empty
    if(this.items.length === 0){
      return "empty"
    }
    return "not empty"
	}

	isFull(){
		// check if the stack is full based on the capacity
    if(this.items.length === this.capacity){
      return "I'm Full."
    }
    return "I'm Hungry."
	}
	
	printStack(){
		console.log("TOP");
		for(var i=this.items.length-1; i >= 0; i--){
			console.log(this.items[i])
		}
	}
}

var stack1 = new Stack()
//TESTING PUSH
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.pop();
console.log(stack1.peek());

stack1.printStack() //expected: top 5,4,3,2,1

// TESTING POP()
// console.log(stack1.pop());  //expected: 5
// stack1.printStack() // expected: top 4,3,2,1
