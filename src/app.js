$(document).foundation();

(function(){
   $(".modal-open").on('click', function(){
      $("#signup-modal").foundation('open');
   });

   $(".modal-close").on('click', function(){
      $("#signup-modal").foundation('close');     
   });
})();
