/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let c="";   
    if(strs.length==0){return c;}
    else if(strs.length==1){return strs[0];}
    for(let i=0;i<strs[0].length;i++){
        let s=0;  
        for(let j=1;j<strs.length;j++){
            if(strs[0].charAt(i)==strs[j].charAt(i)){               
                s+=1;
            }
            else if(strs[0].charAt(i)!=strs[j].charAt(i)){               
                i+=strs.length;
            }
            if(s==strs.length-1){
                c+=(strs[0].charAt(i));
            } 
           
        }               
    }
    return c;
};