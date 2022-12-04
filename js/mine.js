function count( selector ,index ,  startValue ,endValue )
{
    let x = setInterval(function(){
        if(startValue>=endValue)
        {
            clearInterval(x);
            $(`${selector}`).eq(index).html(endValue);
        }
        else
        {
            $(`${selector}`).eq(index).html(startValue++);  
        }
    },10) 
}
$(window).scroll(()=>{
    if($(window).scrollTop()>=$('#clients').offset().top)
    {
        count(".clientsCh .fw-bolder" , 0 ,0 ,200);
        count(".clientsCh .fw-bolder" , 1 ,0 ,345);
        count(".clientsCh .fw-bolder" , 2 ,0 ,1800);
        count(".clientsCh .fw-bolder" , 3 ,0 ,1200);
    }
})
$('iframe').height($('#blog .col-lg-4  img').height());
$('iframe').width($('#blog .col-lg-4  img').width());