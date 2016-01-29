
app.controller('ClockyCtrl', function($scope,ngAudio,$localStorage, $filter, $interval, toaster) {
    
     $scope.$storage = $localStorage;
     $scope.isPlaying = false;
       $scope.audio = ngAudio.load('chewy.wav'); 
     var alarm;
      
     var verify = function () {         
           var theTime = $filter('date')(new Date(), 'shortTime');
           if(theTime == $scope.$storage.timeAlarm){
                $scope.audio.play();
                 $scope.isPlaying = true;
                 toaster.pop('success', "Chewy!!","Uuuuuuurrrrrrr ");   
           }
     };
     
     $scope.myTime = typeof $scope.$storage.timeAlarm == 'undefined' || 
     $scope.$storage.timeAlarm < $filter('date')(new Date(), 'shortTime')
      ? new Date() : $scope.$storage.timeAlarm;
      
      if($scope.myTime > $filter('date')(new Date(), 'shortTime')){
          
           toaster.pop('warning', "Pending Alarm", "at: "+ $scope.$storage.timeAlarm );   
           alarm = $interval(verify, 1000);
      }

     $scope.setAlarm = function () {         
        
         $scope.$storage.timeAlarm = $filter('date')($scope.myTime, 'shortTime'); 
         alarm = $interval(verify, 1000);
         toaster.pop('success', "The alarm was setting", "at: "+ $scope.$storage.timeAlarm );     
         console.log( "Seteada: ",   $scope.$storage.timeAlarm );
     };
     
      $scope.stopAlarm = function () {         
         $interval.cancel(alarm);
         $scope.audio.restart();
          $scope.isPlaying = false;         
     };
   
});
