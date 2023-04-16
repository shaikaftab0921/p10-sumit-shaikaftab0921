function memoize(func){
const cache=new Map();
return function (...args){
   const key=args.toString();
   if(cache.has(key))
   return cache.get(key);
   else{
    cache.set(key,func(...args));
    return cache.get(key);
   }
};

}

function add(...args)
{
    return args.reduce((acc,current)=> acc+current,0);
};
//Create a method called memoize such that:
const memoizeAdd= memoize(add);
//then calling...
console.log(memoizeAdd(100,100));
//returns 200
console.log(memoizeAdd(100));
//returns 100
console.log(memoizeAdd(100,200));
//returns 300
console.log(memoizeAdd(100,100));
//returns 200 without computing
