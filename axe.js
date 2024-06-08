document.addEventListener("DOMContentLoaded", function() {
    const players = [
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        { name: "", region: "", rank: "", tier: "" },
        
    ];

    players.forEach(player => {
        const tierList = document.querySelector(`#${player.tier} .players`);
        if (tierList) {
            const div = document.createElement('div');
            div.className = `player ${player.rank} ${player.region}`;
            div.innerHTML = player.name;
            tierList.appendChild(div);
        }
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        document.querySelectorAll('.player').forEach(player => {
            if (player.textContent.toLowerCase().includes(query)) {
                player.style.display = 'block';
            } else {
                player.style.display = 'none';
            }
        });
    });
});