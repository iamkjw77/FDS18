// jQuery
var section = $('.board section');
// var section = document.querySelector('.board section');와 같은 의미
// jQuery() === $()

var tab = $('.board .tab a');
// a가 한개가 아니라서 유사배열이 생김

var item = $('.board li');

item.addClass('icon-dot-circled');
// 이미 클래스를 추가하는 것을 아니까 .을 안붙힘

tab.click(function(e){
  e.preventDefault();
  // 클릭하면 링크가 열리는 것이 아니라 자료실이 열리도록하는 것, 따라서 a의 디폴트 값을 없앤다.
  section.removeClass('is-active');
  //2개이기때문에 class를 지우고 생성되는 것이 괜찮지만, 카테고리가 200개라면 합리적이지 않음
  $(this).parent().parent().addClass('is-active');
  //체이닝기법
});