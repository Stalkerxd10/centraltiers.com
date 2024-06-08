const searchInput = document.getElementById('searchInput');
const players = document.querySelectorAll('.player');

searchInput.addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase();

    players.forEach(player => {
        const playerName = player.textContent.toLowerCase();
        if (playerName.includes(searchText)) {
            player.style.display = 'block';
        } else {
            player.style.display = 'none';
        }
    });
});

players.forEach(player => {
    player.addEventListener('mouseover', function() {
        player.style.position = 'relative'; // Ensure positioning context
        player.style.left = '5px'; // Move the player name to the right
        player.setAttribute('title', player.classList[1]); // Show region name on hover
    });

    player.addEventListener('mouseout', function() {
        player.style.left = 'auto'; // Reset the position when mouse leaves
        player.removeAttribute('title');
    });
});
