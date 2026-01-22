// linked List 

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
   
    constructor(){
        this.head = null;
    }
    append(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    DeleteLastNode(){
        let current = this.head
        console.log('%c🤪 ~ file: b:\program\JavaScript\Linkedlist.js:29 [] -> current : ', 'color: #2ee2b4', current);
        
        if(!this.head){
            return
        }
        if(!this.head.next){
            return
        }
        let secondNode = null
        let interNode = null
        while(current){
            secondNode = interNode
            interNode = current
            current = current.next
        }
        secondNode.next = null; 
        this.head = secondNode
        console.log("<----------------------------deleted Last Node---------------------->");
    }

    DeleteFirstNode(){
        let current  = this.head
        if(!this.head){
            return
        }
        this.head = current.next
        console.log("<-----------------deleted first Node --------------------------->")
    }

    printlist(){
        let current = this.head
        while(current){
            console.log(current)
            current = current.next
            console.log("<-------------------------------------------------------------->")
        }
    }
}

const list = new LinkedList();
list.append("milton");
list.append("milton2");
list.append("milton3");
list.printlist();
list.DeleteFirstNode();
list.printlist();
list.DeleteLastNode();
list.printlist();
