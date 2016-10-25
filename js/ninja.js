var global = function myNinja(){
  assert(global == myNinja, "This function is named two things - at once!" );
  this.testFun = function(){
      log(this);
      return true;
  };
  //this.testFun = function(){return true;};
  global.testFun = function(){
      log(typeof this);
      return true;
  };
  
};
global();
testFun();
global.testFun();
assert( typeof global == "function", "global is a function" );
assert( typeof myNinja == "undefined", "But myNinja isn't defined outside of the function." );
assert( global.testFun, "global.testfun is a function");
assert( testFun, "testfun is a function within the Window object");



var ninja = {
  yeah: function(n) {
    return n > 0 ? ninja.yeah(n-1) + "h" : "yea";
  },
  yell: function yeyeyell(n){
    return n > 0 ? yeyeyell(n-1) + "a" : "hiy";
  },
  hell: function(n){ 
    return n > 0 ? arguments.callee(n-1) + "a" : "hiy"; 
  } 
};
assert( ninja.yell(4) == "hiyaaaa", "Works as we would expect it to!" );

var samurai = { yell: ninja.yell };
var ninja = null;
assert( samurai.yell(4) == "hiyaaaa", "The method correctly calls itself." );



function loop(array, fn){
  for ( var i = 0; i < array.length; i++ )
    fn.call( array, array[i], i );
}
var num = 0;

loop([0, 1, 2], function(value, i){
  assert(value == num++, "Make sure the contents are as we expect it.");
  assert(this instanceof Array, "The context should be the full array.");
});



