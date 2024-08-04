document.addEventListener("DOMContentLoaded", function() {
    const currentPage = 'nethpot'; // Change this value based on the page
    const players = JSON.parse(localStorage.getItem('players')) || [];

    function displayPlayers() {
        const tierContainers = document.querySelectorAll('.players');
        tierContainers.forEach(container => container.innerHTML = ''); // Clear all player lists

        players.forEach(player => {
            if (player.page === currentPage) {
                const tierList = document.querySelector(`#${player.tier} .players`);
                if (tierList) {
                    const div = document.createElement('div');
                    div.className = `player ${player.rank} ${player.region}`;
                    div.innerHTML = player.name;
                    tierList.appendChild(div);
                }
            }
        });
    }

    displayPlayers();

    const searchInput = document.getElementById('searchInput');
    const hiddenButton = document.getElementById('hiddenButton');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();

        document.querySelectorAll('.player').forEach(player => {
            if (player.textContent.toLowerCase().includes(query)) {
                player.style.display = 'block';
            } else {
                player.style.display = 'none';
            }
        });

        // Show the hidden button if the search input is not empty
        if (this.value.trim() !== '') {
            hiddenButton.style.display = 'block';
        } else {
            hiddenButton.style.display = 'none';
        }
    });
});