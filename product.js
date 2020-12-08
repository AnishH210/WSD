angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listProducts=[
        {id:'p01',name:'10850K',vend:'Intel',price:10000,quantity:7,cond:"New"},
        {id:'p02',name:'GTX 1080',vend:'Nvidea',price:17300,quantity:2,cond:"Good"},
        {id:'p03',name:'RTX 2080',vend:'Nvidea',price:20000,quantity:12,cond:"New"},
        {id:'p04',name:'RAM DDR4',vend:'Crucial',price:4350,quantity:40,cond:"Used"},
        {id:'p05',name:'700W PSU',vend:'Antec',price:4000,quantity:20,cond:"OpenBox"}
        
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listProducts[index].name=$scope.name;
        $scope.listProducts[index].vend=$scope.vend;
        $scope.listProducts[index].price=$scope.price;
        $scope.listProducts[index].quantity=$scope.quantity;
        $scope.listProducts[index].cond=$scope.cond;
    }
    $scope.add=function()
    {
        $scope.listProducts.push({
            id:$scope.id,
            name:$scope.name,
            vend:$scope.vend,
            price:$scope.price,
            quantity:$scope.quantity,
            cond:$scope.cond
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listProducts.length;i++)
        if($scope.listProducts[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var product=$scope.listProducts[index];
        $scope.id=product.id;
        $scope.name=product.name;
        $scope.vend=product.vend;
        $scope.price=product.price;
        $scope.quantity=product.quantity;
        $scope.cond=product.cond;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listProducts.splice(index,1);
        }
    };
});
