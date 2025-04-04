document.addEventListener("DOMContentLoaded", function () {
    const botStatus = document.getElementById("bot-status");

    async function checkBotStatus() {
        try {
            const response = await fetch("https://discord.com/api/v10/guilds/1341826040594432146/widget.json");
            const data = await response.json();
            botStatus.innerHTML = data.presence_count > 0 ? "🟢 Online" : "🔴 Offline";
        } catch (error) {
            botStatus.innerHTML = "⚠️ Unable to fetch status";
        }
    }

    checkBotStatus();
    setInterval(checkBotStatus, 30000);
});
