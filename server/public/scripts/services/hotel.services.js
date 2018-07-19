app.service('HotelService', ['$http', function ($http) {

    console.log('Hotel Service started');

    let self = this;

    self.addOwner = function (newOwner) {
       console.log('adding new owner', newOwner);
       $http({
           url: '/pets',
           method: 'POST',
           data: {name : newOwner}
       })
       .then(function(response){
           console.log('add Owner', response)
       })
       .catch (function(err){
           console.log(err)
       })
    }

    
}])