document.addEventListener('DOMContentLoaded', function() {
    const addPlayerBtn = document.getElementById('addPlayerBtn');
    const removePlayerBtn = document.getElementById('removePlayerBtn');
    const removeMessage = document.getElementById('removeMessage');

    addPlayerBtn.addEventListener('click', function() {
        const name = document.getElementById('playerName').value;
        const region = document.getElementById('playerRegion').value;
        const rank = document.getElementById('playerRank').value;
        const tier = document.getElementById('playerTier').value;
        const page = document.getElementById('playerPage').value;
    
        if (!name || !region || !rank || !tier || !page) {
            alert('Please fill out all fields.');
            return;
        }
    
        const players = JSON.parse(localStorage.getItem('players')) || [];
        players.push({ name, region, rank, tier, page });
        localStorage.setItem('players', JSON.stringify(players));
    
        alert('Player added successfully!');
    
        // Clear input fields
        document.getElementById('playerName').value = '';
        document.getElementById('playerRegion').value = '';
        document.getElementById('playerRank').value = '';
        document.getElementById('playerTier').value = '';
        document.getElementById('playerPage').value = '';
    });
    

    removePlayerBtn.addEventListener('click', function() {
        const nameToRemove = document.getElementById('removePlayerName').value.toLowerCase();
        if (!nameToRemove) {
            removeMessage.textContent = 'Please enter a player name.';
            return;
        }

        let players = JSON.parse(localStorage.getItem('players')) || [];
        const initialLength = players.length;

        players = players.filter(player => player.name.toLowerCase() !== nameToRemove);

        if (players.length === initialLength) {
            removeMessage.textContent = 'Invalid player name.';
        } else {
            localStorage.setItem('players', JSON.stringify(players));
            removeMessage.textContent = 'Player removed successfully!';
        }
    });
});


