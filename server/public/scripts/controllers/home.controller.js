app.controller('HomeController', ['HotelService', function (HotelService) {
    console.log('Home Controller loaded')
    
    let self = this;
    self.slides = [
        {img: '../images/pet hotel lobby.jpg'}, 
        {img: '../images/PetHotel.jpg'}, 
        {img: '../images/petHotel2.jpg'}, 
        {img: '../images/autumntrail.jpeg'}, 
    ]

}]);