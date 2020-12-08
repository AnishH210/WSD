angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listProducts=[
        {id:'p01',name:'Core i9 10850KF',vendor:'Intel',price:50000,quantity:15,cond:"New"},
        {id:'p02',name:'DDR4 8GB 3666MHz',vendor:'Corsair',price:4000,quantity:50,cond:"New"},
        {id:'p03',name:'Z490 Strix',vendor:'Asus',price:35000,quantity:4,cond:"Refurb"},
        {id:'p04',name:'ML360R',vendor:'CM',price:13000,quantity:5,cond:"Openbox"},
        {id:'p05',name:'Ryzen 3950X',vendor:'AMD',price:40000,quantity:1,cond:"Used"} 
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listProducts[index].name=$scope.name;
        $scope.listProducts[index].pub=$scope.pub;
        $scope.listProducts[index].price=$scope.price;
        $scope.listProducts[index].quantity=$scope.quantity;
        $scope.listProducts[index].cond=$scope.cond;
        $scope.listProducts[index].contact=$scope.contact;
    }
    $scope.add=function()
    {
        $scope.listProducts.push({
            id:$scope.id,
            name:$scope.name,
            pub:$scope.pub,
            price:$scope.price,
            quantity:$scope.quantity,
            cond:$scope.cond,
            contact:$scope.contact
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
        $scope.pub=product.pub;
        $scope.price=product.price;
        $scope.quantity=product.quantity;
        $scope.cond=product.cond;
        $scope.contact=product.contact;
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
