class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedLink {
    constructor(){
        this.head = null;
        this.tail = null;    
    }

    add(num) {
       let data = new Node(num);
       if(!this.head) {
           this.head = data; 
           this.tail = data;
        } else {
           this.tail.next = data;
           this.tail = data;
        }
    }
    
    addAtStart(num) {
        let data = new Node(num);
        let newHead = this.head;
        if(!this.head) {
            this.head = data; 
            this.tail = data;
         } else {
            this.head = data;
            this.head.next = newHead;
         }
    }

    removeAtStart() {
        let newHead = this.head;  
        if (this.head.next === null) {
            this.head.data = null;
        }
        if (this.head.data) {
            this.head = newHead.next;   
        }
    }

    remove() {
        if(!this.tail.next){
            debugger;
            let newHead = this.head;
            if (newHead.next === null) {
                this.head.data = null;
                return this.head;
            }
            while(newHead.next !== this.tail){
                newHead = newHead.next;
            }   
            newHead.next = null;
        }
    }
    print() {
        console.log(this.head);
    }
}

let x = new LinkedLink();

x.add(2);
x.add("t");
x.add(10);
x.add("g");
x.remove();
x.addAtStart(1);
x.addAtStart("Sle");
x.removeAtStart()
x.print();