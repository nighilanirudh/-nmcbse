window.onload = function() {
  changeArticle(0);
};
// Dom links
var featuredDay = $(".featured-day");
var featuredMonth = $(".featured-month");
var featuredHeading = $(".featured-heading");
var featuredDesc = $(".featured-desc");
var featuredLink = $(".featured-link");
var featuredImage = $(".featured-image")
// change Article
$(".featured-button").click(function () {
  var number = this.name - 1;
  changeArticle(number);
});
// //Elements containing the articles
var day = [25, 09, 31, 18, 13];
var month = ["MAR", "FEB", "JAN", "DEC", "DEC"];
var year = [2020, 2020, 2020, 2019, 2019];
var heading = ["Schools To Reopen From September 21 For Classes 9 To 12", "Health Ministry Issues Guidelines", "CBSE Compartment Date Sheet 2020 Released", "Application For Classes 10 And 12 Starts", "Students approach Supreme Court"]
var desc = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"];
var author = ["Geetha D.", "Uma M.", "Nighil Anirudh M.", "Macklin R.", "Mohan Chandar P"];
var image = ["https://images.hdqwalls.com/download/colorful-niagara-falls-ap-7680x4320.jpg", "https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406.jpg", "https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg", "https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg", "https://aymenberrahma.com/wp-content/uploads/2020/06/maxresdefault.jpg"]

function changeArticle(number) {
  $(".featured-button").removeClass("selected")
  switch(number) {
  case 0:
    $(".1").addClass("selected")
    break;
  case 1:
    $(".2").addClass("selected")
    break;
  case 2:
    $(".3").addClass("selected")
    break;
  case 3:
    $(".4").addClass("selected")
    break;
  case 4:
    $(".5").addClass("selected")
    break;
  default:

  }
  // Chnage Featured article
  featuredDay.text(day[number]);
  featuredMonth.text(month[number]);
  featuredHeading.text(heading[number]);
  featuredDesc.text(desc[number]);
  featuredImage.css("background-image", "url(" + image[number] + ")")
}
