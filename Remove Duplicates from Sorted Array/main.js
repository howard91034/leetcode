/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){// 3
        if(nums[i]==nums[i+1]){
            nums.splice(i,1)
            i--      
        }       
    }
    return nums.length; 
};


 /*  // nums//[0,0,1,1,1,2,2,3,3,4]
             0 1 1 1 2 2 3 3 4
             0 1 1 2 2 3 3 4
             0 1 1 2 2 3 3 4*/