function changeList() {
    console.log('change made to grocery list');
    listenHere();
}  
 
 
function listenHere() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let grocery = $('#shopping-list-entry').val();
        console.log(grocery);
        let large = `<li>
        <span class="shopping-item">${grocery}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
      console.log(large);
        $('.shopping-list').append(large);
    });

    $(".shopping-list").on('click', '.shopping-item-toggle', function(event){
        event.preventDefault();
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass(" shopping-item__checked");
    })


    $(".shopping-list").on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).closest('li').remove();
    });
}

 $(changeList);   

//use this keyword
//use toggleclass
//looking at child elements







