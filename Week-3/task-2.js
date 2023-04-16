function display(me){
    var fullName=[me,'knows',this.first,this.last].join(' ');
    // console.log(fullName);
  return fullName;
}
function display2(...args){
    var result=this.name+' knows';
    args.forEach((value)=>{
        result=(result+' '+ value);
    });
    console.log(result);
}
var obj1={
    first: 'king',
    last: 'kong',
};
var obj2={
    first: 'naruto',
    last: 'uzumaki',
};
var boundedName1=display.bind(obj1,'aftab');
console.log(boundedName1());
var boundedName2=display.bind(obj2,'aftab');
console.log(boundedName2());

//call method
console.log(display.call({first:'call',last:'method'},'aftab'));

//apply method
display2.apply({name:'aftab'},['bind','call','apply']);