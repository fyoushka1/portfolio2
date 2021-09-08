

$('.menu_bur').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');
});
$(document).ready(function(){
  $(".menu_bur").on('click',function(){
    $(this).find(".hambergerIcon").toggleClass("open");
  });
});
VanillaTilt.init(document.querySelectorAll(".skill__item"), {
  max: 25,
  speed: 300
});

let swithMode = document.getElementById("switch-mode");

swithMode.onclick = () => {
        document.body.classList.toggle("dark")
};
const text = [
  'Web developer, PSD to HTML,'
];

function typeText(){
  let line = 0;
  let cout = 0;
  let out = '';
  let intro__title = document.querySelector('.intro__title');

  function typeLine(){
    let interval = setTimeout(function(){
      out += text[line][cout];
      intro__title.innerHTML = out;
      cout++;

      //
      if(cout >= text[line].length){
        cout = 0;
        line++;
        if(line == text.length){
          clearTimeout(interval);
          return true;
        }
      }

      typeLine();
    }, 200);

  }
  typeLine();

}

typeText()









