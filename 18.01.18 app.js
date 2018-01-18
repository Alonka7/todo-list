 $(function(){
               
                $(window).keypress(function(e){
                if(e.keyCode===13){
                    alert('entered!')
                    newItem();
                }
                });
                function newItem(){
                    var item = $('#todo').val();
                    if(item !== '')
                    $('#todos').append('<li>'+ item +'</li>');
                    $('#todo').val('');
                }
                
                $('ul').on('click','li',function(e){
                    $(e.target).remove();
                    
                   // alert('alert');
                });
            });
         