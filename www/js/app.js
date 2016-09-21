(function(){
 var app = angular.module('store', [ ]);
 app.controller('StoreController', function(){
   this.product=gem;
   this.products=gems;
 });

  var gem={
    name: 'Azurite',
    price: 2.95,
    description: 'Lorens ipsum dolor',
    canPurchase: false,
    soldOut: true
  };
  var gems=[
    {
      name: 'Azurite',
      price: 2.95,
      description: 'Lorens ipsum dolor',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Bloodstone',
      price: 5.95,
      description: 'Lorens ipsum dolor',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Zircon',
      price: 3.95,
      description: 'Lorens ipsum dolor',
      canPurchase: false,
      soldOut: false
    }
  ];

})();
