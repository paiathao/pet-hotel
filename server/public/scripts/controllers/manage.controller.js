app.controller('ManageController', ['HotelService', function (HotelService) {
  console.log('Manage Controller loaded')

  let self = this;

  self.editMode = false;

  self.owners = HotelService.owners;

  self.addOwner = function (newOwner) {
    HotelService.addOwner(newOwner);
  }

  self.deleteOwner = function (owner) {
    console.log('owner pet', owner.number_of_pets )
    if (owner.number_of_pets > 0) {
      swal(`You can't delete this owner because there is a current pet(s) assigned to it!`);
    } else {
    swal({
      title: 'Are you sure you want to delete this owner?',
      text: 'Once you\'ve deleted, this owner will be gone!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          HotelService.deleteOwner(owner.id)
          swal('Owner has been deleted', {
            icon: 'success',
          });
        } else {
          swal('Request has been cancelled!');
        }
      })
    }
  }

  self.updateOwner = function (owner) {
    HotelService.updateOwner(owner);
  }
}]);