app.service('HotelService', ['$http', function ($http) {

    console.log('Hotel Service started');

    let self = this;

    self.pets = { list: []};
    self.owners = { list: []};
    self.checkIn = true;

    self.addOwner = function (newOwner) {
       console.log('adding new owner', newOwner);
       $http({
           url: '/owners',
           method: 'POST',
           data: {name : newOwner}
       })
       .then(function(response){
           console.log('add Owner', response)
           self.getAllOwners();
           swal('New Owner has been added!')
       })
       .catch (function(err){
           console.log(err)
           swal('Error adding New Owner!!!')
       })
    }

    self.getAllOwners = function () {
        $http({
            url: '/owners',
            method: 'GET',
        })
        .then(function(response){
            console.log('Get All Owners', response.data)
            self.owners.list = response.data;
        })
        .catch (function(err){
            console.log(err)
        })
     }

     self.updateOwner = function (owner) {
        console.log('in update owner', owner);
        $http({
            url: `/owners/${owner.id}`,
            method: 'PUT',
            data: owner
        }).then(function (res) {
            console.log(res);
            self.getAllOwners();
        }).catch(function (err) {
            console.log(err);
            swal('Error updating Owner!!!')
        })
    }

     self.deleteOwner = function (ownerId) {
        console.log('Delete owner with id', ownerId);
        $http({
            url: `/owners/${ownerId}`,
            method: 'DELETE',
        })
        .then(function(response){
            self.getAllOwners();
            swal('Owner has been deleted!')
        })
        .catch (function(err){
            console.log(err)
            swal('Error deleting Owner!!!')
        })
    }

     self.addPet = function (newPet) {
        console.log('Adding new pet', newPet);
        $http({
            url: '/pets',
            method: 'POST',
            data: newPet
        })
        .then(function(response){
            console.log('add pet', response)
            self.getAllPets();
            self.getAllOwners();
            swal('New Pet has been added!')
        })
        .catch (function(err){
            console.log(err)
            swal('Error adding New Pet!!!')
        })
     }

     self.getAllPets = function () {
        $http({
            url: '/pets',
            method: 'GET',
        })
        .then(function(response){
            console.log('Get All Pets', response.data)
            self.pets.list = response.data;
        })
        .catch (function(err){
            console.log(err)
        })
     }

     self.updatePetCheckIn = function (pet) {
        console.log('Update pet', pet)
        
        if(pet.check_in === false) {
            pet.check_in = true;
        } else if (pet.check_in === true) {
            pet.check_in = false;
        }; 

        $http({
            url: `/pets/${pet.pet_id}`,
            method: 'PUT',
            data: pet
        }).then(function (res) {
            console.log(res);
            self.getAllPets();
        }).catch(function (err) {
            console.log(err);
            swal('Error updating Pet!!!')
        })
    }

    self.deletePet = function (petId) {
        console.log('in DELETE pet', petId)
        $http({
            url: `/pets/${petId}`,
            method: 'DELETE',
        })
        .then(function(response){
            console.log(response);
            self.getAllPets();
            swal('Pet has been deleted!')
        })
        .catch(function(err){
            console.log(err);
            swal('Error deleting Pet!!!')
        })
      }

      self.editPetInfo = function (petToEdit, id) {
          console.log('in edit pet', petToEdit, id)
          $http({
            method: 'PUT',
            url: `/pets/${id}`,
            data: {
                pet_name : petToEdit.name,
                pet_breed : petToEdit.breed,
                pet_color : petToEdit.color,
                owner_id : petToEdit.owner_id,
                check_in : petToEdit.check_in,
            }
        }).then(function(response){
            console.log(response);
            self.getAllPets();
        }).catch(function(err){
            console.log('Error in edit', err);
            alert('Cannot edit pet');
        })
    }

     self.getAllPets();

     self.getAllOwners();
    
}])