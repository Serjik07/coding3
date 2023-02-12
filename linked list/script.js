class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedLink {
    constructor(){
        this.head = null
        this.tail = null
        
    }

    add(num) {
        debugger;
       let data = new Node(num);
       if(!this.head) {
           this.head = data; 
           this.tail = data
        } else {
           this.tail.next = data
           this.tail = data
        }
    }
    remove() {
        if(this.head){

        }
    }
    print() {
        console.log(this.head)
    }
}

let x = new LinkedLink();
x.add(2);
x.add("t");
x.add(10);
x.print();