/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var tr=t;
    var sr=s;
    if(sr.length>=tr.length){
    for(let i=0;i<sr.length;i++){
        if(tr.indexOf(sr.charAt(i))==-1){
            return false;
        }
        if(tr.indexOf(sr.charAt(i))!=-1){
            tr=tr.replace(sr.charAt(i),"");
        }        
    }
    }
    if(tr.length>sr.length){
    for(let i=0;i<tr.length;i++){
        if(sr.indexOf(tr.charAt(i))==-1){
            return false;
        }
        if(sr.indexOf(tr.charAt(i))!=-1){
            sr.replace(tr.charAt(i),"");
        }        
    }
    }
    return true;
};