angular.module("myapp",[])
.controller("myctrl",function($scope)
{
    var PC=[
        {id:'p01',name:'10850K',vend:'Intel',price:10000,quantity:7,cond:"New"},
        {id:'p02',name:'GTX 1080',vend:'Nvidea',price:17300,quantity:2,cond:"Good"},
        {id:'p03',name:'RTX 2080',vend:'Nvidea',price:20000,quantity:12,cond:"New"},
        {id:'p04',name:'RAM DDR4',vend:'Crucial',price:4350,quantity:40,cond:"Used"}
    ];
    console.log(PC);
    $scope.PC=PC;
    $scope.rowlimit=10;
});
