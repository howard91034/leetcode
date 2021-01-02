var plusOne = function(digits) {  
	for(let i=digits.length;i>=0;i--){
      	if(digits[i]<=8){
            	digits[i]=digits[i]+1;
              	return digits;
            }
      	if(digits[i]==9){
            	digits[i]=0;
              	if(i==0){
                  	digits.unshift(1);
                  }
            }
      
      }
  return digits;
}

/*
var plusOne = function(digits) {  
	for(let i = digits.length-1; i >= 0; i--) {
      	if (digits[i] < 9) {
            	digits[i] += 1;
              	return digits;
		} else {
			digits[i] = 0;   
		}
	}
	return [1, ...digits] // spread operator
}



var plusOne = function(digits) {
  let carry = 0;
  digits[digits.length-1] += 1; // last bit + 1
  for(let i=digits.length-1;i>=0;i--){
    if(carry === 1){ // bit i +1 if carry(last iteration) === 1
      digits[i] += 1;
      carry = 0; // reset carry
    }
    if(digits[i]>9){ // handle carry(next iteration) if bit i > 9 after +1(line 41~44)
      digits[i]-=10; // set bit i by -10
      carry = 1; // set carry
    }
  }
  if(carry === 1){ // insert carry if carry(last iteration)
    digits.unshift(1)
  }
  return digits;
}
*/
//return [1, ...digits] // spread operator

/*迴圈

124  12.4
12.4 1.24
1.24 0.1
*/


//4 3 2 2....2  塞2
//


    
//    let s=digits.length;
//    digits[s-1]=digits[s-1]+1
//    return digits;