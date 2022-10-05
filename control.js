class Control{
    constructor(){
        this.forward = false;
        this.backward = false;
        this.right = false;
        this.left = false;
        this.rotateccw=false;
        this.rotatecw=false;
        this.#addKeyboardListeners();
    }

   #addKeyboardListeners(){
    document.onkeydown=(e)=>{
        switch(e.key){
            case "w":
                this.forward=true;
                break;
            case "a":
                this.left=true;
                break;
            case "s":
                this.backward=true;
                break;
            case "d":
                this.right=true;
                break;
            case "Shift":
                this.rotateccw=true;
                break;
            case " ":
                this.rotatecw=true;
                break;
        }
        
    }

    document.onkeyup=(e)=>{
        switch(e.key){
            case "w":
                this.forward=false;
                break;
            case "a":
                this.left=false;
                break;
            case "s":
                this.backward=false;
                break;
            case "d":
                this.right=false;
                break;
            case "Shift":
                this.rotateccw=false;
                break;
            case " ":
                this.rotatecw=false;
                break;
        }
        
    }
   }
};