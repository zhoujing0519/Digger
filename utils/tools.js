var EventUtils = {
  prevent: function(e){
    e.preventDefault()
  },
  stop: function(e){
    e.stopPropagation()
  },
}