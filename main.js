
function shuffleFrames() {
    const itemContainer = document.querySelector('.item-Container');
    for (let i = itemContainer.children.length; i>=0; i--) {
        itemContainer.appendChild(itemContainer.children[Math.random() * i | 0]);
    }
}
shuffleFrames();