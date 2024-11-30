const tiles = document.querySelectorAll('.tile');

tiles.forEach(tile => {
    const tileNumber = parseInt(tile.textContent);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
    const currentDay = currentDate.getDate();

    if (currentMonth === 12 && currentDay > tileNumber) {
        const imageSrc = `images/${tile.dataset.image}`;
        tile.innerHTML = `<img src="${imageSrc}" alt="Advent Image">`;
        tile.classList.add('revealed');
    }

    // Add click event listener for interactive opening
    tile.addEventListener('click', () => {
        if (currentMonth === 12 && currentDay >= tileNumber && !tile.classList.contains('revealed')) {
            const imageSrc = `images/${tile.dataset.image}`;
            tile.innerHTML = `<img src="${imageSrc}" alt="Advent Image">`;
            tile.classList.add('revealed');
        } else {
            return
        }
    });
});