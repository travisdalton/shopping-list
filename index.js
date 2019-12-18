$('#shopping-list-entry').click(function(event) {
    let grocery = $('#shopping-item').val();

    let large = '<li><span class="shopping-item">' + grocery + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';

    $('#shopping-list').append(large);    
            

});




