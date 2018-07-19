app.controller('ManageController', ['HotelService', function (HotelService) {
    console.log('Manage Controller loaded')
    
    let self = this;
  
    self.addOwner = function (newOwner) {
        HotelService.addOwner(newOwner);
    }      
}]);