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
    remove() {
        if(!this.tail.next){
            debugger;
            let vlod = this.head;
            if (vlod.next === null) {
                return null;
            }
            while(vlod.next !== this.tail){
                vlod = vlod.next;
            }   
            vlod.next = null;
            return this.head;
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
// x.add(10);
// x.remove();
x.addAtStart(1);
x.addAtStart("Sle");
x.print();