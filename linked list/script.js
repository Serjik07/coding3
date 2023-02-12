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
    remove() {
        if(!this.tail.next){
            debugger;
            // console.log(this.tail);
            // console.log(this.head);
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
x.add(10);
x.remove();
x.print();