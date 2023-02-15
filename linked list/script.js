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
        console.log(data);
        if(!this.head) {
            this.head = data; 
            this.tail = data;
         } else {
           data.next = this.head
           this.head = data
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
        let current = this.head
        let result = '['
        while(current){
            result+=current.data
            result+=','
            current = current.next
        }
        result+=']'
        console.log(result)
    }
}

let x = new LinkedLink();

x.add(2);
x.add("t");
x.add(10);
x.add("g");
x.addAtStart(1);
x.addAtStart("Sle");
x.print();

//search
//print [data,data,data]