function createStack() {
    // Write your code here...
    var items=[];
    return {
        push(num){
            items.push(num);
            // console.log(items);
        },
        pop(){
            // items.pop();
            console.log(items.pop());
        }
    }
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
console.log(stack.items);// => undefined
