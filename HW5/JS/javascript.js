//check ready (not working) $(document).ready(function(){

function getNum() 
    {
        var x = Math.floor(Math.random() * 10);
        return x;  
    };
          
        
function func() 
{
//box 1
        var num1 = getNum();
        for (var i=1; i<=10; i++)
                {
                    do {num1 = getNum();}
                    while ((num1==0)|| (num1>3));
                    switch (num1)
                    {
                        case 1: $('#box1').attr('class', 'one'); break;
                        case 2: $('#box1').attr('class', 'two');  break; 
                        case 3: $('#box1').attr('class', 'three'); break; 
                    }
                };
 //box 2
             
        var num2 = getNum();
        for (var i=1; i<=10; i++)
                {
                    do {num2 = getNum();}
                    while ((num2==0)|| (num2>3));
                    switch (num2)
                    {
                        case 1: $('#box2').attr('class', 'one'); break;
                        case 2: $('#box2').attr('class', 'two');    break; 
                        case 3: $('#box2').attr('class', 'three'); break;
                    }
                };
     //box 3
        var num3 = getNum();
        for (var i=1; i<=10; i++)
                {
                    do {num3 = getNum();}
                    while ((num3==0)|| (num3>3));
                    switch (num3)
                    {
                        case 1: $('#box3').attr('class', 'one'); break;
                        case 2: $('#box3').attr('class', 'two');  break; 
                        case 3: $('#box3').attr('class', 'three'); break; 
                    }
                };

    //add Text
        if ((num1==num2)&& (num2==num3))    
            $('#msg').text('CONGRATULATIONS, YOU WON!').attr('class','bold');          
        else
            $('#msg').text('Sorry, try again.').attr('class', 'small');

 }
         
          
        $('#button').on('mouseover', function()
        {
             $(this).text('SPIN NOW');
             $(this).attr('class', 'buttonclass');
        });

         
        $('#quit').on('click', function()
        {
            $('form').fadeOut(2000);
            $('button').fadeOut(2000);
            $('p').fadeOut(2000);
            $('h2').text('GOOD BYE').attr('class', 'bold').hide().fadeIn(2000);       
        });    

// check ready });
          