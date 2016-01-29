app.directive('second', function() {
     
    return function($scope, $element, $attributes) {
      
           // hourAngle = (360/12) * hour + (360/(12*60)) * minute;

      
 //$element.css('transition', '500ms');
       var rotate = function() {
           var angle = 360/60,
            date = new Date(),
           
            second = date.getSeconds();
           
          $element.css('-webkit-transform', 'rotate(' + (angle * second) + 'deg)');
          // $element.css(' -webkit-transition', '-webkit-transform 6000ms linear');
          // $element.css(' -o-webkit-transition', '-o-transform 600000s linear');
          // $element.css(' -ms-webkit-transition', '-ms-transform 600000s linear');
           //$element.css(' -transition', 'transform 600000s linear');
     
          setTimeout(rotate, 1000);
       };
        
        rotate();
    }
});

app.directive('minute', function() {
     
    return function($scope, $element, $attributes) {
      
           // hourAngle = (360/12) * hour + (360/(12*60)) * minute;

     //  $element.css('transition', '-webkit-transform 800ms ease');

       var rotate = function() {
           var angle = 360/60,
            date = new Date(),
           
            minute = date.getMinutes();
            
          $element.css('-webkit-transform', 'rotate(' + (angle * minute) + 'deg)');
          
          setTimeout(rotate, 1000);
       };
        
        rotate();
    }
});
app.directive('hour', function() {
     
    return function($scope, $element, $attributes) {
      
           // hourAngle = (360/12) * hour + (360/(12*60)) * minute;

      // $element.css('transition', '-webkit-transform 800ms ease');

       var rotate = function() {
           var date = new Date(),
            hour = date.getHours() % 12,
            minute = date.getMinutes(),            
            hourAngle = (360/12) * hour + (360/(12*60)) * minute;
          $element.css('-webkit-transform', 'rotate(' + hourAngle + 'deg)');
         
          setTimeout(rotate, 1000);
       };
        
        rotate();
    }
});


   app.directive('exSourceCode', function () {
      return {
        template: '<h4>{{title}}</h4><pre  hljs class="html"><code>{{sourceCode}}</code></pre>',
        scope: {},
        link: function (scope, element, attrs) {
          var tmp = angular.element((element.parent()[0]).querySelector(attrs.target || 'md-input-container'));
          if (tmp.length) {
            scope.title = attrs.title || "Source Code";
            var sourceCode = tmp[0].outerHTML
              .replace('ng-model=', 'angularModel=')
              .replace(/ng-[a-z\-]+/g, '')
              .replace(/ +/g, ' ')
              .replace('angularModel=', 'ng-model=')
              ;
            scope.sourceCode = style_html(sourceCode, {
              'indent_size': 2,
              'indent_char': ' ',
              'max_char': 78,
              'brace_style': 'expand'
            });
          }
        }
      };
    })
    .directive('hljs', function ($timeout) {
      return {
        link: function (scope, element) {
          $timeout(function () {
            hljs.highlightBlock(element[0].querySelector('code'));
          }, 100);
        }
      };
    });