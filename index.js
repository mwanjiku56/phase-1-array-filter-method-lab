function findMatching(Array, string){
    const a = Array.filter(function (name){
          
            if( name.toUpperCase() === string.toUpperCase()){
            return ([name])}
          
        }
    )
     return a;
    }

function fuzzyMatch(Array, string){
    const x = 
    Array.filter(function (name){
          const length = string.length
            if( name.slice(0, length) === string){
            return [name]}
          
        }
    )
     return x;
    }

    function matchName(Array, string){
        const driver = Array.filter(function (name){
              
            if( name['name'] === string){
                return [name]}  
              
            }
        )
         return driver;
        }
