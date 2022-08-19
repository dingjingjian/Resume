$('#shuttle').click(function(){
    if($('.solar-syst').length<1){
        $('body').prepend('<div class="solar-syst"><div class="sun"></div><div class="mercury"></div><div class="venus"></div><div class="earth"></div><div class="mars"></div><div class="jupiter"></div><div class="saturn"></div><div class="uranus"></div><div class="neptune"></div><div class="pluto"></div><div class="asteroids-belt"></div></div>')
    }
    $('.shuttle').addClass('active');
    $('.solar-syst').addClass('active');    
    $('html , body').animate({scrollTop: 0},3000,function(){
        $('.shuttle').removeClass('active');
        $('body').addClass('active');
    });
});
$('body').on('click','.solar-syst',function(){
    $('body').removeClass('active');
    $('.solar-syst').removeClass('active');    
})