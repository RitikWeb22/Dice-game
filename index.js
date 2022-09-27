// alert('hello')
var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomImage = 'dice' + randomNumber1 + '.png'
var imageSource = 'images/' + randomImage
var Image1 = document.querySelectorAll('img')[0]
Image1.setAttribute('src', imageSource)

var randomNumber2 = Math.floor(Math.random() * 6) + 1
// var randomimage2 = 'dice' + randomNumber2 + '.png'
var randomimageSource2 = 'images/dice' + randomNumber2 + '.png'
document.querySelectorAll('img')[1].setAttribute('src', randomimageSource2)
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'the player 1 wins'
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = 'the player 2 Win'
} else {
  document.querySelector('h1').innerHTML = 'match is Draw'
}
