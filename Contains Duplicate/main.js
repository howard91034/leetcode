/**
 * @param {number[]} nums
 * @return {boolean}
 */


var containsDuplicate = function(nums) {
    nums.sort();
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            return true;
        }
        if(nums[i]!=nums[i+1]){
            i--;
            nums.shift();
           // console.log(nums)
        }      
            //return nums[i]==nums[i+1];
}
      return false;  
            
}

