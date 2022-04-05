$(document).ready(function(){
    $('#submit').on('click', function(event){
      var formName = $('#name');
      var formEmail = $('#email');
      var formPhone = $('#phone');
      var formMessage = $('#message');
      const required = [formName, formEmail, formPhone];
      for (i=0; i<required.length; i++){
        if (required[i].val() === ""){
          required[i].prev().addClass("warning"); 
          $("p").html("<em>Please Fill Out Required Fields</em>").addClass("warning");
      
        }else if (required[i].val() !== ""){
          required[i].prev().removeClass("warning");
        }
      };
      
      if (!($("label").hasClass("warning"))) {
        $("form").remove();
        $("h2").html("<em>Thanks for your feedback</em>");
      }

    });
    
})
