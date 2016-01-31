// default active state to false
// meaning that the first element is not select by default
var config = {active:false};

function removeDef(){
    $(this).parent().parent().parent().find('#def').remove(); 
}

function isMyDef(){
    var nextSibling = $(this).parent().parent().next();
    return (nextSibling.attr('id') === 'def')
}

function markdownIt(str){
   return  markdown.toHTML(str);
}

function getAll(data){
    var resultHTML = '';
    $.each(data,function(index,item){                        
        resultHTML += '<tr class="match"><td><b>'+item.caption + ' -</b><a href="#">Read More</a></td></tr>';  
    });    
    return resultHTML;
}



