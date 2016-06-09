jQuery(document).ready(function(){

    var data_keys,
        data_names;

    data_keys = Object.keys(data);
    data_names = data.map(function(item){return item.name.toLowerCase();});

    $('#results table').html(getAll(data));    


    $('#counter').text(data_keys.length);

    $('#results table').on('click','.match a',function(e){
        e.preventDefault();        
        var activeItem = $(this).closest('td').find('b').html().toLowerCase(),
            keywordItem = data[data_names.indexOf(activeItem)];
            root = $(this).closest('tr'),
            nextItem = root.next();

            window.nextItem = nextItem;



        if(isDef.call(nextItem)){
            // hide the definition 
            nextItem.remove(); 
        }else{
            // remove any possible active definition
            $('#def').remove();
            // insert definition                             
            $('<tr id="def"><td colspan="2"> '  + markdownIt(keywordItem.markdown) + '</td></tr>').insertAfter(root); 
        } 
    });  

    $('#search').keyup(function(){
        var searchPattern  = $(this).val().toLowerCase();
          
        searchPattern = searchPattern.split(':');

        var index = searchPattern[1];
        searchPattern = searchPattern[0];

        // @debug
        // window.searchPattern = searchPattern;
        // window.data_names = data_names;

        // returned matches have additional IDS and the original key is named original
        var retrievedResult = fuzzy.filter(searchPattern,data_names);                    
            retrievedResult = retrievedResult.map(function(entry){
                return data[entry.index];
        });

        console.log(JSON.stringify(retrievedResult,2));
        
        $('#results table').html(getAll(retrievedResult));
        $('#counter').text(retrievedResult.length);

    }); 
      
    $('.scroller').slimScroll({
        height: '400px'
    });
            
});