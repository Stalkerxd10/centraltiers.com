document.addEventListener("DOMContentLoaded", function() {
    const players = [
        // Ensure your players array is populated here
        { name: "PoggerDavid", region: "Europe", rank: "High", tier: "tier3" },
        { name: "as_pect324", region: "Asia", rank: "Low", tier: "tier3" },
        // Add more players as necessary
    ];

    players.forEach(player => {
        const tierList = document.querySelector(`#${player.tier} .list`);
        const div = document.createElement('div');
        div.className = 'item';
        div.classList.add(player.rank === 'High' ? 'high-rank' : 'low-rank');
        div.innerHTML = `<span class="name">${player.name}</span>
                         <div class="tooltip">Region: ${player.region}, Rank: ${player.rank}</div>`;
        tierList.appendChild(div);
    });
});
