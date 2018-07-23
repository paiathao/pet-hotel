app.controller('DashboardController', ['HotelService', function (HotelService) {
  console.log('Dashboard Controller loaded')
  let self = this;

  self.pets = HotelService.pets;
  self.owners = HotelService.owners;
  self.checkInForm = false;
  self.newPet = {};

  self.getAllOwners = HotelService.getAllOwners;

  self.getAllPets = HotelService.getAllPets;

  self.toggleForm = function () {
    self.checkInForm = !self.checkInForm;
  }

  self.addPet = function (newPet) {
    HotelService.addPet(newPet);
    self.newPet = {};
  }

  self.updatePetCheckIn = function (pet) {
    HotelService.updatePetCheckIn(pet)
  }

  self.deletePet = function (petId) {
    swal({
      title: 'Are you sure you want to delete this pet?',
      text: 'Once you\'ve deleted, this pet will be gone!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          HotelService.deletePet(petId);
          swal('Pet has been deleted', {
            icon: 'success',
          });
        } else {
          swal('Request has been cancelled!');
        }
      })

  }



}]);