class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    addNode(node) {
        const temp = this.head;
        node.next = temp;
    }

    incrementSize() {
        this.size++
    }

    decrementSize() {
        this.size--
    }

    outofBound(index) {
        return (index < 0 || index > this.getSize())
    }

    prepend(value) {

        const node = new Node(value)

        if (!this.isEmpty()) {
            this.addNode(node)
        }

        this.head = node;
        this.incrementSize()

    }

    append(value) {

        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node;

        } else {

            let curr = this.head;

            while (curr.next !== null) {
                curr = curr.next;
            }

            if (curr !== null) {
                curr.next = node;
            }

        }

        this.incrementSize();

    };

    insertAt(index, value) {

        if (this.outofBound(index) === true) {
            return
        }

        if (index === 0) {
            this.prepend(value);

        } else {
            const node = new Node(value);
            let i = 0;
            let prev = this.head;

            while (i < index - 1) {
                prev = prev.next;
                i++;
            }

            node.next = prev.next;
            prev.next = node;
            this.incrementSize();
        }

    };

    removeFrom(index) {

        if (index < 0 || index >= this.getSize()) {
            return null
        }

        if (index === 0) {
            this.head = this.head.next

        } else {
            let i = 0;
            let prev = this.head;
            while (i < index - 1) {
                prev = prev.next;
                i++;
            }
            let removedNode = prev.next;
            prev.next = removedNode.next;

        }

        this.decrementSize();

    }

    removeValue(value) {

        if (this.isEmpty()) {
            return null
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.decrementSize();
            return value;

        } else {

            let prev = this.head;

            while (prev.next !== null && prev.next.value !== value) {
                prev = prev.next;
            }

            if (prev.next) {
                const removedNode = prev.next;
                prev.next = removedNode.next;
                this.decrementSize();
                return removedNode.value;

            } else {
                return null
            }

        }

    }

    search(value) {

        if (this.isEmpty()) {
            return -1
        }

        if (this.head.value === value) {
            return 0

        } else {

            let i = 0;
            let curr = this.head;

            while (curr !== null) {
                if (curr.value === value) {
                    return i
                }
                curr = curr.next;
                i++;
            }

            return -1

        }

    }

    reverse() {

        let curr = this.head;
        let prev = null;

        while (curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;

    }

    print() {

        let prev = this.head;
        let list = '';

        while (prev !== null) {
            list += `${prev.value} `
            prev = prev.next;
        }

        return list;

    }

}



