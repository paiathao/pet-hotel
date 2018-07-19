app.service('HotelService', ['$http', function ($http) {

    console.log('Hotel Service started');

    let self = this;

    self.pets = { list: []};
    self.owners = { list: []};

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
       })
       .catch (function(err){
           console.log(err)
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

     self.deleteOwner = function (ownerId) {
        console.log('Delete owner with id', ownerId);
        $http({
            url: `/owners/${ownerId}`,
            method: 'DELETE',
        })
        .then(function(response){
            self.getAllOwners();
        })
        .catch (function(err){
            console.log(err)
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
        })
        .catch (function(err){
            console.log(err)
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

     self.getAllPets();

     self.getAllOwners();
    
}])