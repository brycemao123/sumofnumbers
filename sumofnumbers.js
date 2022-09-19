function sumFor(nums){
  let total = 0;
  for(let i = 0; i < nums.length; i++){
    total = total+nums[i];
  }
  return total;
}

console.log(sumFor([1, 2, 3, 4]));

function sumWhile(nums){
  let total = 0;
  let i = 0
  while( i<nums.length){
    total = total + nums[i];
    i++
  }
  return total;
}

console.log(sumWhile([1, 2, 3, 4]))

function sumRecursion(nums){
  if(nums.length == 0){
    return 0;
  }
  else {
    return nums[0] + sumRecursion(nums.slice(1));
  }
}
console.log(sumRecursion([1, 2, 3, 4]))

function  sumTheSimpleWay(nums){
  return _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}
console.log(sumTheSimpleWay([1, 2, 3, 4]))