var $list = $('#list')

function createItem(itemObject) {
  // has a description value, id, and a completed value
  var $newItem = $('#templates .item').clone()
  $newItem.attr('data-id', itemObject.id)
  $newItem.find('.description').text(itemObject.description)
  if(itemObject.completed) { $newItem.addClass('completed')}

  $list.append($newItem)
}

var $xhrLoadRequest = $.ajax({
  type: "GET",
  url: "http://listalous.herokuapp.com/lists/EmilyList"
});

$xhrLoadRequest.done(function(list) {
  list.items.forEach(function(item){
    createItem(item)
  })
})

