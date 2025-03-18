let headings = $(".links-wrapper h3");

console.log(headings);

for (let i = 0; i < headings.length; i++) {
  $(headings[i]).on("click", () => {
    $(headings[i]).next("ul").slideToggle();
    $(headings[i]).toggleClass("rotate");
  });
  // heading[i] is a plain js DOM object to use the jquery object methods we must change it to a jquery object using $()
}
