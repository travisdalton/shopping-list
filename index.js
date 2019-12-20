function changeList() {
    console.log('change made');
    listenHere();
}  
 
 
function listenHere() {
    $('shopping-list-entry').submit(function() {
        let grocery = $('shopping-item').val();
        let large = '<li><span class="shopping-item">' + grocery + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
        $('#shopping-list').append(large);  
    });

    $("shopping-item-toggle").click(function() {
        $("span.shoppting-item").toggleClass("shopping-item__checked")
        $("shopping-item").css("text-decoration", "line-through")
    });

    $("shopping-item-delete").click(function() {
        $("li").remove()
    });
}

 $(changeList);   









