app.controller('ManageController', ['HotelService', function (HotelService) {
    console.log('Manage Controller loaded')
    
    let self = this;

    self.editMode = false;

    self.owners = HotelService.owners;
  
    self.addOwner = function (newOwner) {
        HotelService.addOwner(newOwner);
    }      

    self.deleteOwner = function (ownerId) {
        swal({
            title: 'Are you sure you want to delete this owner?',
            text: 'Once you\'ve deleted, this owner will be gone!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                HotelService.deleteOwner(ownerId)
                swal('Owner has been deleted', {
                  icon: 'success',
                });
              } else {
                swal('Request has been cancelled!');
              }
            })
       
    }

    self.updateOwner = function (owner) {
        HotelService.updateOwner(owner);
    }
}]);