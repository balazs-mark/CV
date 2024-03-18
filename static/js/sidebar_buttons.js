// jshint esversion:6


// Hide sidebar
$("#hide_sidebar").click(() => {
    $("nav").animate({width: 0});
    $("#hamburger_menu_icon").show();
});


// Show sidebar
$("#hamburger_menu_icon").click(() => {
    $("#hamburger_menu_icon").hide();
    $("nav").animate({width: "270px"});
});


// Open CV PDF in new tab
$("#open_as_pdf").click(() => window.open("/static/contents/Márk Balázs önéletrajza.pdf", target="_blank"));


// Switch language
$("#switch_english").click(() => window.open(url="/gov/en/", target="_self"));


// Open original photo
$("#photo").click(() => window.open("/static/images/mark_balazs.jpg"));

$("#open_source_code").click(() => window.open("https://github.com/balazs-mark/CV"));
