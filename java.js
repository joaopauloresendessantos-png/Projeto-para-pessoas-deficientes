function playAnimalSound(animal) {
    const audio = new Audio(`${animal}.mp3`);
    audio.play();
}
playAnimalSound(currentAnimal.dataset.animal);


function showNextAnimal() {
    animals.forEach(el => el.classList.remove('blink'));
    currentAnimal = animals[Math.floor(Math.random() * animals.length)];
    currentAnimal.classList.add('blink');
    message.textContent = 'Escute o som e clique no animal certo';
    playAnimalSound(currentAnimal.dataset.animal);
}
