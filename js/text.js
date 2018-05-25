(function(){

  //基本の配列
  var cats = [  'taro', 'jiro'  ];

  　$('.checkbtn').on('click', function(){
      var inputNumber = $('input').val();
      var i = inputNumber % 2;
        if ( i === 1) {
          console.log(cats[0]);
        } else {
          console.log(cats[1]);
        }
    });



})();
