app.controller('DashboardController', ['HotelService', function (HotelService) {
    console.log('Dashboard Controller loaded')
    let self = this;

    self.pets = HotelService.pets;
    self.owners = HotelService.owners;

    self.getAllOwners = HotelService.getAllOwners;

    
  
  }]);