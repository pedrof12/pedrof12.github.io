// Faqs

$("#faq_more").on('click', (e) =>{
    e.preventDefault();
    if ($("#faq_more").hasClass("img_active"))
    {
        $("#faq_more").removeClass("img_active");
        $("#yes").addClass("no");
        $("#yes").removeClass("yes");
        return;
    }
    $("#faq_more").addClass("img_active");
    $("#yes").addClass("yes");
    $("#yes").removeClass("no");
});

$("#faq_more_2").on('click', (e) =>{
    e.preventDefault();
    if ($("#faq_more_2").hasClass("img_active"))
    {
        $("#faq_more_2").removeClass("img_active");
        $("#yes_2").addClass("no");
        $("#yes_2").removeClass("yes");
        return;
    }
    $("#faq_more_2").addClass("img_active");
    $("#yes_2").addClass("yes");
    $("#yes_2").removeClass("no");
});

$("#faq_more_3").on('click', (e) =>{
    e.preventDefault();
    if ($("#faq_more_3").hasClass("img_active"))
    {
        $("#faq_more_3").removeClass("img_active");
        $("#yes_3").addClass("no");
        $("#yes_3").removeClass("yes");
        return;
    }
    $("#faq_more_3").addClass("img_active");
    $("#yes_3").addClass("yes");
    $("#yes_3").removeClass("no");
});