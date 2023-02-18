const maxLength=2;//この2は小さめにしといたほうが良き
const char=["0","1","2","3","4","5","6","7","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let text=char[0];
while(text.length<maxLength+1){
    console.log(text)
    const texts=[];
    for(let a=0;a<text.length;a++){
        texts.push(text[a]);
    }
    function up(r,k=false){
        if(texts[r+1]==char[char.length-1]){
            texts[r+1]=char[0];
            if(r<0){
                texts.unshift(char[0]);
            }else{
                up(r-1);
            }
            return;
        }
        texts[r+1]=char[char.indexOf(texts[r+1])+1];
        return;
    }
    up(text.length-2);
    text=texts.join("");
}
