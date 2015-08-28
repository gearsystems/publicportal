var app = angular.module('ChatBot', ['ngCookies','naif.base64']);

app.config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
function generateMap(term) {
    var url = "http://maps.google.com/maps?=q="+encodeURIComponent(term)+"&output=embed&t=m&z=7";
    var iframe = document.getElementById("mapframe");
    iframe.style.display = '';
    iframe.src = url;
}

app.controller('ChatScreen',['$scope','$http','$cookies','$sce',
function($scope,$http,$cookies,$sce){
   $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
   $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
   $scope.state=-1;
   $scope.mode=0;
   $scope.complaint_id=-1;
   $scope.location_temp="";
   $scope.chats=[{'message':"Hello, I am GEARBot",'uid':0},{'message':"How are you?",'uid':0}];
   $scope.statelist="0000000"
   $scope.addchat=function(){
   	  var newchat={'message':$scope.newchat,'uid':1};
   		$scope.chats.push(newchat);
   		var in_data = jQuery.param({'content': $scope.newchat,'csrfmiddlewaretoken': $cookies.csrftoken, 'state_flag': $scope.state, 'mode': $scope.mode,'complaint_id':$scope.complaint_id, 'state_list': $scope.statelist});
   		var url='http://localhost:8000/livechatbot';
   		var my_data={test: 'data'};
   		$http.post(url, in_data)
          .success(function(out_data) {
            // Reset the form in case of success.
            console.log(out_data);
            $scope.chats.push(out_data);
            $scope.state=out_data.state;
            $scope.mode=out_data.mode;
            $scope.complaint_id=out_data.complaint_id;
            $scope.newchat="";
            $scope.statelist=out_data.statelist;
            document.getElementById('Chatwindow').scrollIntoView();
            window.scrollTo(0,document.body.scrollHeight);
            if($scope.state == 7){
              var endchat={'message': "Chat ended.....", 'uid': 0};
              $scope.chats.push(endchat);
              $scope.chats.push({'message':"Hello, I am GEARBot.",'uid':0});
              $scope.chats.push({'message':"How are you?",'uid':0});
              $scope.mode=0;
              $scope.complaint_id=-1;
              $scope.state=0;
              
            }
            if($scope.state == 5){
              //Lat long 
              console.log("Entered state 5");
              document.getElementById("chatbox").style.display = "none";
              document.getElementById("latlongmap").style.display = "block";
            }
            var mydiv = $('#Chatwindow');
            mydiv.scrollTop(mydiv.prop('scrollHeight'));

        });
   };

   $scope.getloc=function(){

      var in_data = jQuery.param({'csrfmiddlewaretoken': $cookies.csrftoken,'complaint_id':$scope.complaint_id});
      var url='http://localhost:8000/getlocation';
      var my_data={test: 'data'};
      $http.post(url, in_data)
          .success(function(out_data) {
            console.log("Map.......");
            var location=out_data.location;
            console.log(location);
            $scope.location_temp=location;
            var iframe = document.createElement('iframe');
            iframe.style.display = "block";
            iframe.style.width="100%";
            iframe.style.height="100%";
            iframe.src = "http://localhost:8000/mapareachatbot/"+$scope.location_temp+"/";
            document.getElementById('modal_map').appendChild(iframe);
            $('#myModal').modal('show');
          }
      );

   };

   $scope.updateloc=function(loc){
    console.log("Inside updateloc func.............");
    $scope.newchat=loc
    $scope.addchat();
    $('#myModal').modal('toggle');
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("latlongmap").style.display = "none";

   };

   $scope.addpic=function(){
    console.log($scope.complaint_image.base64);
    var image_tag="<img id='complaint_image' src='data:image/png;base64,"+$scope.complaint_image.base64+"' alt='Chat-img' ng-if='chat.uid == 2' />"
      var newchat={'message':image_tag,'uid':2};
      $scope.complaint_imagetag=$sce.trustAsHtml(image_tag);
      $scope.chats.push(newchat);
      var in_data = jQuery.param({'content': $scope.complaint_image.base64,'csrfmiddlewaretoken': $cookies.csrftoken, 'state_flag': $scope.state, 'mode': $scope.mode,'complaint_id':$scope.complaint_id, 'state_list': $scope.statelist});
      var url='http://localhost:8000/chatbotaddpicture';
      var my_data={test: 'data'};
      $http.post(url, in_data)
          .success(function(out_data) {
            // Reset the form in case of success.
            console.log(out_data);
            $scope.chats.push(out_data);
            $scope.state=out_data.state;
            $scope.mode=out_data.mode;
            $scope.complaint_id=out_data.complaint_id;
            $scope.newchat="";
            $scope.statelist=out_data.statelist;
            document.getElementById('Chatwindow').scrollIntoView();
            window.scrollTo(0,document.body.scrollHeight);
            if($scope.state == 7){
              var endchat={'message': "Chat ended.....", 'uid': 0};
              $scope.chats.push(endchat);
              $scope.chats.push({'message':"Hello, I am GEARBot.",'uid':0});
              $scope.chats.push({'message':"How are you?",'uid':0});
              $scope.mode=0;
              $scope.complaint_id=-1;
              $scope.state=0;
              
            }
            if($scope.state == 5){
              //Lat long 
              console.log("Entered state 5");
              document.getElementById("chatbox").style.display = "none";
              document.getElementById("latlongmap").style.display = "block";
            }
            var mydiv = $('#Chatwindow');
            mydiv.scrollTop(mydiv.prop('scrollHeight'));

        });

   };

}]);