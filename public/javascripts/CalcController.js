/**
 * Created by abhay-pc on 3/3/2016.
 */
var app = angular.module('Calculator', []);
app.controller('ccontroller', function($scope, $http)
{
    $scope.addition = function ()
    {
        $http ({
            method: "POST",
            data: {
                "first_num": $scope.first_num,
                "second_num": $scope.second_num
            },
            url: "http://localhost:3000/server/add"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
    }
    $scope.subtract = function ()
    {
        $http ({
            method: "POST",
            data: {
                "first_num": $scope.first_num,
                "second_num": $scope.second_num
            },
            url: "http://localhost:3000/server/subtract"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
    }

    $scope.multiplication = function ()
    {
        $http ({
            method: "POST",
            data: {
                "first_num": $scope.first_num,
                "second_num": $scope.second_num
            },
            url: "http://localhost:3000/server/multiply"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
    }

    $scope.divide = function ()
    {
        if($scope.second_num!=0)
        {
            $http({
                method: "POST",
                data: {
                    "first_num": $scope.first_num,
                    "second_num": $scope.second_num
                },
                url: "http://localhost:3000/server/divide"
            }).then(function success(output) {
                $scope.result = output.data;
            }, function err(err) {
            })
        }
        else
        {
            alert("Divide by zero error");
        }
    }
});
