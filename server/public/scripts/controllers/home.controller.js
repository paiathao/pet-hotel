app.controller('HomeController', ['HotelService', function (HotelService) {
    console.log('Home Controller loaded')
    
    let self = this;
    self.slides = [
        {img: '../images/1.png'}, 
        {img: '../images/kitty.jpg'}, 
        {img: '../images/lamb.jpg'}, 
        {img: '../images/puppy.jpg'}, 
    ]

}]);