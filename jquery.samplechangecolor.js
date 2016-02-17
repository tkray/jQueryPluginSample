(function($) {
  $.fn.samplechangecolor = function(options) {

    var settings = $.extend({
      'color' : 'red'
    }, options);

    return this.each(function() {
      // 受け取った要素のcolorをsettingsで定義した色に変更する
      $(this).css("color", settings.color);
    });
  };
})(jQuery);