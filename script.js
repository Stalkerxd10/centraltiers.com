players.forEach(player => {
    const tierList = document.querySelector(`#${player.tier} .list`);
    if (tierList) {
        const div = document.createElement('div');
        div.className = 'item';
        div.id = player.name.replace(/\s+/g, '_').toLowerCase(); // Create a unique ID by modifying the player's name
        div.classList.add(player.rank === 'High' ? 'high-rank' : 'low-rank');
        div.innerHTML = `<span class="name">${player.name}</span>
                         <div class="tooltip">Region: ${player.region}, Rank: ${player.rank}</div>`;
        tierList.appendChild(div);
    } else {
        console.log(`Tier list not found for tier: ${player.tier}`);
    }
});
