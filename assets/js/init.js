function isDef(){    
    return (this.attr('id') === 'def')
}

function getAll(data){
    var resultHTML = '';
    $.each(data,function(index,item){         
    	console.log('index is : ',index);               
        resultHTML += '<tr class="match"><td><small class="index '+ index+ '">' + (index+1) + ' - </small> <b>'+item.name + '</b> - <small><a href="#">Read More</a></small></td></tr>';  
    });    
    return resultHTML;
}