$(document).ready(function(){

var currentTag=1;
var numberOfTags=$('.highlight').length;

function addTag(){
    $('.highlight').attr('id', function(i){
        return i+1;
    })
}

function listenForKeys(){
    $(window).keyup(function(e){
        var key = e.which;
        if(key==74){
            scrollToNextTag();
        }
        if(key==75){
            scrollToPreviousTag();
        }
    });
}

function scrollToNextTag(){
    if(currentTag<numberOfTags){
        currentTag++;
    } else {
        currentTag = currentTag;
    }
    
    var tagID = currentTag.toString();    
    $("html,body").animate({scrollTop: $('#' + tagID).offset().top});
}

function scrollToPreviousTag(){
    if(currentTag>1){
        currentTag--;
    } else {
        currentTag = currentTag;
    }

    var tagID = currentTag.toString();
    $("html,body").animate({scrollTop: $('#' + tagID).offset().top});
    
}
    addTag();
    listenForKeys();       
});
