'use strict';

$(document).ready(function() {
    /* ----------------------------------------
    Shared Variables
    ---------------------------------------- */
    var documentBody = $(document.body),
        window = $(window),
        view = $('html, body');
    
    /* ----------------------------------------
    Web Font Functions
    ---------------------------------------- */
    var documentFonts = document.fonts;
    
    if (typeof(documentFonts) !== 'undefined') {
        documentFonts.ready.then(function() {
            documentBody.addClass('fonts-loaded');
        });
    }
    
    /* ----------------------------------------
    User Text Functions
    ---------------------------------------- */
    var userText = $('#user-text'),
        defaultVal = userText.val();
    
    function autoResize() {
        userText.innerHeight(0);
        
        var contentHeight = userText[0].scrollHeight;
        
        userText.innerHeight(contentHeight);
    }
    
    userText.keyup(autoResize);
    window.resize(autoResize);
    
    userText.focus()
        .text(defaultVal);
    
    /* ----------------------------------------
    Anchor Link Functions
    ---------------------------------------- */
    var anchorLink = $('a[href*="#"]');
    
    anchorLink.click(function(e) {
        e.preventDefault();
        
        var targetPos = $($(this).attr('href')).offset().top;
        
        view.animate({
            scrollTop: targetPos
        }, 1000);
    });
});