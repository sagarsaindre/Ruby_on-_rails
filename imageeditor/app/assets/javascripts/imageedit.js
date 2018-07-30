var s,
jsmodule= {

settings: {

  switchboard:$("#switchBoard"),
  bgcolor:$("#color1"),
  fontcolor:$('#fontcolor'),
  file:$('#file'),
  fontsize:$('#fontsize'),
  header:$('#header'),
},

   init: function() {
  s = this.settings;
  this.bindUIActions();
},

bindUIActions: function() {
     this.colorchange();
     this.fontsizechange();

     // s.file.addEventListener("input", function() {
     //   jsmodule.imagechange()}),

     // s.fontsize.addEventListener("input", function() {
     //   jsmodule.fontsizechange()}),

     //  s.fontcolor.addEventListener("input", function() {
     //  jsmodule.fontcolorchange()}),

     //  s.switchboard.addEventListener("click", function() {
     //  jsmodule.slide()})


  },


colorchange : function() {
  $(document).on("input",s.bgcolor, function(){
    console.log("hhj");
    var d = s.bgcolor.val();
    console.log(d);
    s.switchboard.css("backgroundColor",s.bgcolor);
  });
},

// imagechange : function() {
//   alert(s.file.value);
//   s.switchboard.style.backgroundImage = "url(images/ss.png)";
// },

fontsizechange : function() {
  $(document).on("input",s.fontsize, function() {

    // s.header.css.fontSize = ""+s.fontsize.value+"px";
  });

},

// fontcolorchange : function() {
//   s.header.style.color = s.fontcolor.value;
// },


}
// jsmodule.init();

$(document).ready(function () {
  jsmodule.init();
 });