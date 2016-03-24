jQuery(document).ready(function(){

    var data_keys;    
    data_keys = Object.keys(data);
    $('#results table').html(getAll(data));    


    $('#counter').val(data_keys.length);

    $('#results table').on('click','.match a',function(e){
        e.preventDefault();        

        // if it is to show data  
        if(!config.active){                    
            config.active = true;                    
        }else{
            var myDef =  isMyDef.call(this);                   
            // meaning there is already a selected  item and we clicked on another item
            if(!myDef){
                config.active = true;                        
            }else{
                // otherwise we are clicking on the same item for the second time which means we want to hide it's def
                removeDef.call(this); 
                config.active = false;                                                
            }
        }

        if(config.active == true){
           removeDef.call(this);
            // get the key
            var keyword = $(this).siblings()[0]
                keyword = $(keyword).text().replace(' -','').toLowerCase().trim();
                console.log(keyword);

            var root = $(this).parent().parent();

            keywordItem = data[keyword];
            console.log(root);
            
            // insert definition                 
            $('<tr id="def"><td colspan="2"> '  + markdownIt(keywordItem.value) + '</td></tr>').insertAfter(root);

        }                
        return false;
    });  

    $('#search').keyup(function(){
        var searchPattern  = $(this).val();
        
        searchPattern = searchPattern.split(':');

        var index = searchPattern[1];
        searchPattern = searchPattern[0];

        // returned matches have additional IDS and the original key is named original
        var retrievedResult = fuzzy.filter(searchPattern,data_keys);                    
            retrievedResult = retrievedResult.map(function(key){
                return data[key.original];
        });
        
        $('#results table').html(getAll(retrievedResult));
        $('#counter').val(retrievedResult.length);

    }); 


  
    $('#body-wrapper').slimScroll({
        height: '500px'
    });                
    
               

});