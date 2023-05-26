let hCont = $('.history_slide');
let hBtn = $('.history_btn li');
let hIndex;

hCont.slick({

});



// 버튼 클릭하면 해당 index를 찾아서 가기
hBtn.click(function (e) {
  e.preventDefault();
  let target = $(this); //클릭한 그것을 선택
  let index = target.index(); //클릭한 그것의 index번호를 찾아줌
  // console.log(index)


  if (index == 0) {
    hIndex = 0
  } else if (index == 1) {
    hIndex = 4
  } else if (index == 2) {
    hIndex = 8
  } else if (index == 3) {
    hIndex = 12
  } else if (index == 4) {
    hIndex = 16
  }
  console.log(hIndex)

  hCont.slick('slickGoTo', hIndex);

  hBtn.removeClass('active')
  target.addClass('active')

});

hCont.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  if (nextSlide >= 0 && nextSlide <= 3) {
    hBtn.removeClass('active')
    hBtn.eq(0).addClass('active')
  }else if(nextSlide >= 4 && nextSlide <= 7){
    hBtn.removeClass('active')
    hBtn.eq(1).addClass('active')
  }else if(nextSlide >= 8 && nextSlide <= 11){
    hBtn.removeClass('active')
    hBtn.eq(2).addClass('active')
  }else if(nextSlide >= 12 && nextSlide <= 15){
    hBtn.removeClass('active')
    hBtn.eq(3).addClass('active')
  }else if(nextSlide >= 16 && nextSlide <= 19){
    hBtn.removeClass('active')
    hBtn.eq(4).addClass('active')
  }

  console.log(nextSlide);
  $('.history_page em').text(nextSlide + 1)

});


//history_poster

let posterBtn = $('.poster_btn ul li')
let posterCont = $('.poster_cont .poster')

//posterCont 모두 안보이게 첫번째는 보이게해라
posterCont.hide().eq(0).show();

posterBtn.click(function(e){
  e.preventDefault();
  let target = $(this);
  let index = target.index();

  // console.log(index)
posterCont.hide().eq(index).fadeIn();
posterCont.find('figure').removeClass('move');
posterCont.eq(index).find('figure').addClass('move');

posterBtn.removeClass('active')
target.addClass('active')

// if (posterBtn.eq(index)){
//   posterBtn.removeClass('active')
//   posterBtn.eq(index).addClass('active')
// }
//이것도 작동해용..

});


$('.cider_bottle').slick({
  dots:true,
  centerMode:true,
  centerPadding:'420px'
});

//memory_slider
let mCount=$('.memory_slider');
let mBtn = $('.memory_btn li');
let mbg=$('.history-slider-bg');
let mIndex;

mCount.slick({

fade:true,

});


mBtn.click(function(e){
e.preventDefault();
let target=$(this);
let index = target.index();

// console.log(index)
if(index == 0){
  mIndex = 0;
} else if(index == 1){
  mIndex = 4;
} else if(index == 2){
  mIndex = 8;
} else if(index == 3){
  mIndex = 12;
}else if(index == 4){
  mIndex = 16;
}

mCount.slick('slickGoTo', mIndex);

});

mCount.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);

  if(nextSlide >= 0 && nextSlide <=3){
    mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-01")
  }else if(nextSlide >= 4 && nextSlide <=7){
    mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-02")
  }else if(nextSlide >= 8 && nextSlide <= 11){
    mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-03")
  }else if(nextSlide >= 12 && nextSlide <= 15){
    mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-04")
  }else if(nextSlide >= 16 && nextSlide <= 19){
    mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-05")
  }


  $('.memory_page_btn em').text(nextSlide+1)

});

// 이미지 슬라이드 넘버 보여주기