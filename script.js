document.addEventListener("DOMContentLoaded", function() {
    const players = [
        { name: "ImaCreep_", region: "Asia", rank: "Low", tier: "tier3" },
        { name: "PoggerDavid", region: "Europe", rank: "High", tier: "tier2" },
        // Add more players as needed
    ];

    function renderPlayers() {
        players.forEach(player => {
            const tierList = document.querySelector(`#${player.tier} .list`);
            const div = document.createElement('div');
            div.className = 'item';
            div.innerHTML = `<span class="name">${player.name}</span>
                             <div class="tooltip">Region: ${player.region}, Rank: ${player.rank}</div>`;
            tierList.appendChild(div);
        });
    }

    renderPlayers();

    const searchBox = document.getElementById('searchBox');
    const modal = document.getElementById('profileModal');
    const modalClose = document.querySelector('.close');

    searchBox.addEventListener('input', function() {
        const searchValue = searchBox.value.toLowerCase();
        const player = players.find(p => p.name.toLowerCase().includes(searchValue));
        if (player) {
            document.getElementById('modalName').textContent = "Name: " + player.name;
            document.getElementById('modalRegion').textContent = "Region: " + player.region;
            document.getElementById('modalRank').textContent = "Rank: " + player.rank;
            document.getElementById('modalTier').textContent = "Tier: " + player.tier.toUpperCase();
            modal.style.display = "block"; // Show the modal
        }
    });

    modalClose.addEventListener('click', function() {
        modal.style.display = "none"; // Hide the modal on close click
    });

    // Close the modal by clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
