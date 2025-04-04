document.addEventListener("DOMContentLoaded", function () {
    const botStatus = document.getElementById("bot-status");

    async function checkBotStatus() {
        try {
            const response = await fetch("https://discord.com/api/v10/guilds/1341826040594432146/widget.json");
            if (!response.ok) throw new Error("Failed to fetch data");
            
            const data = await response.json();
            const botID = "1330071725659918377"; // Replace with your bot's ID
            
            // Check if the bot is in the members list
            const isOnline = data.members.some(member => member.id === botID);

            botStatus.innerHTML = isOnline ? "🟢 Online" : "🔴 Offline";
        } catch (error) {
            botStatus.innerHTML = "⚠️ Unable to fetch status";
        }
    }

    checkBotStatus();
    setInterval(checkBotStatus, 30000);
});
