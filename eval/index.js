class Lexer{

    constructor(src){
        this.src = src;
    }

    next(){
        var token = null;
        const special ="+-*/";
        this.src= this.src.trim();
        if(this.src.length==0){
            return null;
        }
      
        if(special.includes(this.src[0])){
            token = this.src[0];
            this.src = this.src.slice(1)
            return token;
        }

        for(let i=0; i<this.src.length; i++){

            if(special.includes(this.src[i]) || this.src[i] == ' '){
                token = this.src.slice(0,i)
                this.src = this.src.slice(i)
                return token;
            }
        }

        token = this.src;
        this.src =''
        return token ;

    }
    
 
}
const src = "2* Math.PI / 3"
const lexer = new Lexer(src);
for(var token = lexer.next();token !==null;token = lexer.next()){
    console.log(token)
}