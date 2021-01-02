/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) { 
    for(let i=0;i<nums.length;i++){  
      let isFound=false;        
        for(let j=0;j<nums.length;j++){
             if(i==j){continue;}
             if(nums[i]==nums[j]){
                 isFound=true;
             }                     
         }
       if(isFound==false){return nums[i];} 
       // console.log(i);
    }                   
};

//s=1 ==>有重複
//s=0 ==>沒重複