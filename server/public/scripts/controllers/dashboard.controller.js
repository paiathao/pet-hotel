app.controller('DashboardController', ['HotelService', function (HotelService) {
  console.log('Dashboard Controller loaded')
  let self = this;

  self.pets = HotelService.pets;
  self.owners = HotelService.owners;
  self.checkInForm = false;
  
  self.editing = false;
  self.editing_id = 0;

  self.newPet = {};

  self.getAllOwners = HotelService.getAllOwners;

  self.getAllPets = HotelService.getAllPets;

  self.toggleForm = function () {
    self.checkInForm = !self.checkInForm;
  }

  self.addPet = function (pet) {
    if(self.editing === true) {
      // Do the PUT instead of POST
      HotelService.editPetInfo (pet, self.editing_id); 
      // toggle editing back to false
      self.editing = false;
      // clear input
      self.newPet = {};
      //collapse form
      self.checkInForm = !self.checkInForm;
  } else {
    HotelService.addPet(pet);
    self.newPet = {};
  }
};

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

    self.editPet = function (petToEdit) {
    console.log('pet to edit', petToEdit)
    self.checkInForm = !self.checkInForm;
    self.editing = true;
    self.editing_id = petToEdit.pet_id;
    //put the pet info into existing inputs
    self.newPet.name = petToEdit.pet_name;
    self.newPet.breed = petToEdit.pet_breed;
    self.newPet.color = petToEdit.pet_color;
    self.newPet.owner_id = '' + petToEdit.owner_id;
    self.newPet.check_in = petToEdit.check_in;
    // console.log(self.newPet)
  }


}]);