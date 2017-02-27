
app.controller('ContactController', ['$scope', function($scope) {
    $scope.message = "";
    $scope.email = "";
    $scope.name = "";
    $scope.subject = "";
    $scope.to = "tcoulson@gmail.com";
    $scope.sendMail = function(){
        var passData = {name:$scope.name, email:$scope.email,subject:$scope.subject,message:$scope.message,to:$scope.to};

        console.log("sending email"+ passData);
        $.get("http://localhost:8080/send",passData,function(data){
            if(data=="sent")
            {
                $("#message").empty().html("Email is been sent at "+$scope.to+" . Please check inbox!");
            }
        });


    }
}]);

