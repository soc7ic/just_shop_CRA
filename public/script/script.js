
;(function($){

  let cnt=0;
 
  //선택자(Selector) : 마우스가 올라가면 버튼에 클래스추가 색상 변경 & 서브메뉴 부드럽게 보인다.
  // $('.main-btn').on({       //메인버튼이 4개인데 그 중에 한개를
  //   mouseenter: function(){ //마우스올리면 : 콜백함수 어떠한 결과 보여주는 함수
  //     $('.sub').fadeOut(0);      //4개 서브메뉴 모두 초기화 안보이게
  //     // $('.sub').slideUp(0);      //4개 서브메뉴 모두 초기화 안보이게
  //     $(this).next().fadeIn(300);  //0.3초 300 ms 0.1초는 100 ms  1초는 1000 ms(밀리세컨드)
  //     // $(this).next().slideDown(300);  //0.3초 300 ms 0.1초는 100 ms  1초는 1000 ms(밀리세컨드)
      
  //     $('.main-btn').removeClass('on'); //추가된 모든 on 클래스 삭제
  //     $(this).addClass('on');           //현재 지금 마우스 선택된 메뉴만 추가 클래스
  //   }
  // });

  //선택자 #nav 를 마우스(mouse)가 떠나면(leave) 추가된 on  클래스 삭제와 서브메뉴 부드럽게 사라지게한다.
  // $('#nav').on({});
  // $('#nav').on({
  //   mouseleave: function(){
  //     $('.main-btn').removeClass('on'); //메인버튼에 추가된 on 클래스를 삭제
  //     $('.sub').fadeOut(300);   //모든 서브메뉴 부드럽게 사라진다.
  //     // $('.sub').slideUp(300);   //모든 서브메뉴 부드럽게 사라진다.
  //   }
  // });

// 메인 슬라이드 스크립트 상하이동 애니메이션
// 1. 메인 슬라이드 함수
 function mainSlide(){
  $('.slide-wrap').animate({top:-300*cnt}, 600, function(){
    if(cnt===3){
      cnt=0;
      $('.slide-wrap').animate({top:-300*cnt}, 0);
    }
  });
 }
// 2. 다음 카운트 함수
  
 function nextCount(){
  cnt++;
  mainSlide();
 }
// 3. 자동 타이머 함수
 function autoTimer(){
  setInterval(nextCount, 3000);
 }

 autoTimer();


 // 섹션2 - 공지사항 / 갤러리 탭 메뉴
 // 갤러리 버튼을 클릭하면 공지사항 박스, 갤러리버튼, 갤러리박스에 on class 추가

  
//  $('.gallery-btn').on({
//   click: function(){
//     $('.notice-btn, .gallery-btn, .notice-box, .gallery-box').addClass('on');
//   }
//  });

//  $('.notice-btn').on({
//   click: function(){
//     $('.notice-btn, .gallery-btn, .notice-box, .gallery-box').removeClass('on');
//   }
//  });


 //모달창

//  $('.modal-btn').on({
//   click:function(){
//     $('#modal').fadeIn(300);
//   }
//  });

//  $('.modal-close').on({
//   click:function(){
//     $('#modal').fadeOut(300);
//   }
//  });

})(jQuery);