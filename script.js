// script.js
let coins = 999999;
let coinsPerClick = 1;
let coinsPerSecond = 0;
let pickaxeLevel = 1;
let fillrateLevel = 1;
let pickaxeCost = 1000;
let fillrateCost = 2000;

const coinDisplay = document.getElementById('coin-display');
const coinClicker = document.getElementById('coin-clicker');
const upgradePickaxe = document.getElementById('upgrade-pickaxe');
const upgradeFillrate = document.getElementById('upgrade-fillrate');
const dailyLoginBonus = document.getElementById('daily-login-bonus');
const leaderboardList = document.getElementById('leaderboard-list');

// Coin Clicker
coinClicker.addEventListener('click', () => {
  coins += coinsPerClick;
  updateCoinDisplay();
});

// Upgrade Pickaxe
upgradePickaxe.addEventListener('click', () => {
  if (coins >= pickaxeCost) {
    coins -= pickaxeCost;
    coinsPerClick += 1;
    pickaxeLevel += 1;
    pickaxeCost = Math.floor(pickaxeCost * 4.3); // Increase the cost by 50%
    updateCoinDisplay();
    updateUpgradeButtons();
    alert('Pickaxe upgraded! Level: ' + pickaxeLevel + ', Coins per click: ' + coinsPerClick);
  } else {
    alert('Not enough coins!');
  }
});

// Upgrade Fillrate
upgradeFillrate.addEventListener('click', () => {
  if (coins >= fillrateCost) {
    coins -= fillrateCost;
    coinsPerSecond += 1;
    fillrateLevel += 1;
    fillrateCost = Math.floor(fillrateCost * 5.7); // Increase the cost by 50%
    updateCoinDisplay();
    updateUpgradeButtons();
    alert('Fillrate upgraded! Level: ' + fillrateLevel + ', Coins per second: ' + coinsPerSecond);
  } else {
    alert('Not enough coins!');
  }
});

// Daily Login Bonus
dailyLoginBonus.addEventListener('click', () => {
  coins += 500;
  updateCoinDisplay();
  alert('Daily bonus claimed! You received 500 coins.');
  dailyLoginBonus.style.display = 'none';
});

// Update Coin Display
function updateCoinDisplay() {
  coinDisplay.innerText = 'Coins: ' + coins;
}

// Update Upgrade Buttons
function updateUpgradeButtons() {
  upgradePickaxe.innerText = 'Upgrade Pickaxe (Cost: ' + pickaxeCost + ' Coins, Level: ' + pickaxeLevel + ')';
  upgradeFillrate.innerText = 'Upgrade Fillrate (Cost: ' + fillrateCost + ' Coins, Level: ' + fillrateLevel + ')';
}

// Earn coins per second
setInterval(() => {
  coins += coinsPerSecond;
  updateCoinDisplay();
}, 1000);

// Simulate Leaderboard
function updateLeaderboard() {
  const leaderboardData = [
    { name: 'Player1', coins: 5000 },
    { name: 'Player2', coins: 3000 },
    { name: 'Player3', coins: 1000 },
    ];
  leaderboardList.innerHTML = '';
  leaderboardData.forEach(player => {
    const li = document.createElement('li');
    li.innerText = `${player.name}: ${player.coins} coins`;
    leaderboardList.appendChild(li);
  });
}

updateLeaderboard();
updateCoinDisplay();
updateUpgradeButtons();