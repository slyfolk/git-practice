function isIsogram(str){
  
  var word = str.split('')

  for (var i = 0, j = 1;i<word.length - 1;i++,j++){     
   
   if (word[i] === word[j] || word === [] ){
     return false;   
        }
  
   
  
}
  return true;
  
}


isIsogram('arguehdfee')
isIsogram('')
// tolu is wicked

