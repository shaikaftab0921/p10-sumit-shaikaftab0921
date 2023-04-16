function createIncrement() {
    let count=0;
    function increment() {
        console.log(count);
        count++;
    }
    let message=`Count is${count}`;
    function log() {
        console.log(message);
        
    }
    return[increment,log];
    
}
    const[increment,log] =createIncrement();
    increment();
    increment();
    increment();
    log();// What is logged?
    //Answer:Count is0
//Explanation: when the first createIncrement is called the message is defined with the count value present at that time(i.e 0)
// and that message variable is fixed and never updated by anyways ,only the count value is changed usimg increment function.