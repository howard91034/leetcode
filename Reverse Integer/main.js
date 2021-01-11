/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sum=0;
    if(x>0){
        while(Math.floor(x)!=0){                
            sum=Math.floor(sum*10+(x%10));
            Math.floor(x/=10);            
        }   
        if(sum>max){
            return 0;
        }
        return sum;
    }    
    if(x<0){
        x=-x;
        while(Math.floor(x)!=0){
            sum=Math.floor(sum*10+(x%10));
            Math.floor(x/=10); 
        }
        if(sum>max){
            return 0;
        }
        return -sum;
    }
    return sum;
};