let customName = document.getElementById('customname');

let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

let Output = document.querySelector('.output p'); 
function randomStoryValue(array) {
    const random = Math.floor(Math.random() * array.length);

    return array[random];
}

let storyText = "It was 94 fahrenheit outside, so insertx went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — insertx weighs 300 pounds, and it was a hot day.";

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    xItem = randomStoryValue(insertX);
   
    yItem = randomStoryValue(insertY);
   
    zItem = randomStoryValue(insertZ);

    newStory = newStory.replace('insertx', xItem);
    newStory = newStory.replace('insertx', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    var name = customName.value;
    
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("kaduna").checked) {
    let weight = Math.round((300*0.45)) + 'Kg';
    let temperature =  Math.round((94 - 32) * (5/9)) + 'Celcius';

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);

  }
  Output.textContent = `Hello ${name}, Welcome to my random story generator. Have fun!!!`;

  Output.style.visibility = 'visible';
  Output.style.color = 'black';
  Output.style.width = '100%';
  Output.style.fontSize = '24PX';
  Output.style.textAlign = 'center';
  story.textContent = newStory;
  story.style.visibility = 'visible';
}