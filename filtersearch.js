angular.module("myapp",[])
.controller("myctrl",function($scope)
{
    var PC=[
        {id:'p01',name:'Core i9 10850KF',vendor:'Intel',price:50000,quantity:15,cond:"New"},
        {id:'p02',name:'DDR4 8GB 3666MHz',vendor:'Corsair',price:4000,quantity:50,cond:"New"},
        {id:'p03',name:'Z490 Strix',vendor:'Asus',price:35000,quantity:4,cond:"Refurb"},
        {id:'p04',name:'ML360R',vendor:'CM',price:13000,quantity:5,cond:"Openbox"},
        {id:'p05',name:'Ryzen 3950X',vendor:'AMD',price:40000,quantity:1,cond:"Used"}
    ];
    console.log(PC);
    $scope.PC=PC;
    $scope.rowlimit=10;
});
