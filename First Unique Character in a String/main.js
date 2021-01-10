/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s.length==1){
        return 0;
    }
    for(let i=0;i<s.length;i++){
          if((i==0) && (s.indexOf(s.charAt(i),i+1)==-1)){     
            return i;
          }
          if((s.length-1>i>0) && (s.indexOf(s.charAt(i),i+1)==-1) && (s.lastIndexOf(s.charAt(i),i-1)==-1)){
            return i;
          }
          if((i==s.length-1) && (s.lastIndexOf(s.charAt(i),i-1)==-1)){
            return i;
          }
    }         
    return -1;
};
