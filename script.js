// Find the list within the tier
const tierList = document.querySelector(`#${player.tier} .list`);

// Create the player element
const div = document.createElement('div');
div.className = 'item';
div.classList.add(player.rank === 'High' ? 'high-rank' : 'low-rank');
div.innerHTML = `<span class="name">${player.name}</span>
                 <div class="tooltip">Region: ${player.region}, Rank: ${player.rank}</div>`;

// Append or prepend based on rank
if (player.rank === 'High') {
    tierList.prepend(div); // Adds the div at the beginning if rank is High
} else {
    tierList.appendChild(div); // Adds the div at the end if rank is Low
}
