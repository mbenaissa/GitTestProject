var array =[1,2,3,4];
var myObject={
    name:undefined,
    type:undefined,
    alist:["x","y","z"],
    embeddedObjet:{arrayObj:array, type:"", weight:1},

    addAttribut:function(key){
        this[key]= array;

    },
    getElementFromArray:function(){

    },
    createNewElement : function(){
    return myObject.createObject();
    },
    instanciateObject:function(name,type,alist,embeddedObjet){
        var newObject = new myObject(name,type,alist,embeddedObjet);
    },

}

myObject.prototype.valueOf=function(){
    var count =0;
    this.embeddedObjet.foreach(element){

        for(var i=0; i<element[array].lenght;i++){
            count++;
        }
        return "Object with count : "+count;
    }

}


