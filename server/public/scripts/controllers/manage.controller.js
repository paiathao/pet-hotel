app.controller('ManageController', ['HotelService', function (HotelService) {
    console.log('Manage Controller loaded')
    
    let self = this;

    self.editMode = false;

    self.owners = HotelService.owners;
  
    self.addOwner = function (newOwner) {
        HotelService.addOwner(newOwner);
    }      

    self.deleteOwner = function (ownerId) {
        HotelService.deleteOwner(ownerId)
    }

    self.updateOwner = function (owner) {
        HotelService.updateOwner(owner);
    }
}]);