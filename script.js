document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded, processing players...");
    const players = [
        { name: "PoggerDavid", region: "Asia", rank: "High", tier: "tier3" },
        // Ensure you have actual data here for testing
    ];

    players.forEach(player => {
        console.log(`Processing ${player.name}...`);
        const tierList = document.querySelector(`#${player.tier} .list`);
        if (tierList) {
            console.log(`Adding ${player.name} to ${player.tier}...`);
            const div = document.createElement('div');
            div.className = `item ${regionClass(player.region)}`;
            div.innerHTML = `<span class="name">${player.name}</span>
                             <div class="tooltip">Region: ${player.region}, Rank: ${player.rank}</div>`;
            if (player.rank === 'High') {
                tierList.prepend(div);
            } else {
                tierList.appendChild(div);
            }
        } else {
            console.log(`Tier list not found for ${player.tier}`);
        }
    });
});

function regionClass(region) {
    switch(region) {
        case 'Asia':
            return 'asia';
        case 'Europe':
            return 'europe';
        case 'North America':
            return 'north-america';
        default:
            return '';
    }
}
