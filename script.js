function flamesCalculator(name1, name2) {
    // Convert names to lowercase and remove spaces
    name1 = name1.toLowerCase().replace(/\s/g, '');
    name2 = name2.toLowerCase().replace(/\s/g, '');

    let name1Array = name1.split('');
    let name2Array = name2.split('');

    // Remove common letters
    for (let i = 0; i < name1Array.length; i++) {
        let index = name2Array.indexOf(name1Array[i]);
        if (index !== -1) {
            name2Array.splice(index, 1);
            name1Array.splice(i, 1);
            i--; // Adjust index after removal
        }
    }

    // Calculate remaining letter count
    const totalLetters = name1Array.length + name2Array.length;

    // FLAMES categories
    const flames = ["Friends", "Lovers", "Affection", "Marriage", "Enemies", "Siblings"];

    // Find the index to eliminate step by step
    let index = 0;
    while (flames.length > 1) {
        index = (index + totalLetters - 1) % flames.length;
        flames.splice(index, 1);
    }

    return flames[0]; // Return final result
}


// Function to generate love percentage based on FLAMES result
function getLovePercentage(flamesResult, name1, name2) {
    // Base love percentage ranges for each FLAMES category
    const loveBaseRange = {
        "Friends": [15, 45],  // Close friendships can be strong!
        "Lovers": [65, 95],   // Lovers have a higher range but still some randomness
        "Affectionate": [45, 75], // Middle-range affectionate relationships
        "Marriage": [75, 100], // Marriage usually has high love but not always perfect
        "Enemies": [5, 30],   // Even enemies have some chance to mend relationships
        "Siblings": [35, 65], // Siblings share a unique bond, with variance
    };

    // Get the min and max range for the given FLAMES category
    let [min, max] = loveBaseRange[flamesResult] || [50, 50];

    // 🔹 **Factor 1: Name Compatibility Factor**
    // Converts name lengths into a compatibility score
    let nameFactor = Math.abs(name1.length - name2.length) * 3; // Name length difference
    let nameScore = 100 - (nameFactor % 20); // Normalize within 100%

    // 🔹 **Factor 2: Random Love Energy**
    let randomLoveBoost = Math.floor(Math.random() * 15); // Add extra unpredictability

    // 🔹 **Factor 3: Cosmic Destiny Adjustment**
    let cosmicFactor = (name1.charCodeAt(0) + name2.charCodeAt(0)) % 10; // Cosmic fate by first letters

    // **Final Love Percentage Calculation**
    let lovePercentage = Math.floor(
        ((Math.random() * (max - min)) + min) + (nameScore / 10) + randomLoveBoost - cosmicFactor
    );

    // Ensure the percentage stays within the valid range (0-100)
    return Math.min(100, Math.max(0, lovePercentage));
}



// Function to determine the love type
function determineLoveType(lovePercentage) {
    if (lovePercentage >= 90) {
        return "💞 Destined Lovers - A love written in the stars! You both are truly meant for each other. ✨";
    } else if (lovePercentage >= 85) {
        return "🔥 Passionate Flames - Your bond burns bright! Keep the fire alive. ❤️‍🔥";
    } else if (lovePercentage >= 80) {
        return "💑 Power Couple - A strong and unstoppable connection. You make an amazing team! 🔥";
    } else if (lovePercentage >= 75) {
        return "💘 Romantic Spark - The chemistry is undeniable! Keep nurturing this beautiful love. 💕";
    } else if (lovePercentage >= 70) {
        return "💖 Heartfelt Bond - You both share something special. Keep building on this love. 💞";
    } else if (lovePercentage >= 65) {
        return "💌 Budding Romance - The foundation is set. Time to see where love takes you! 🌱";
    } else {
        return "💔 Undefined Love - Something is missing, but love works in mysterious ways! 🤷‍♂️";
    }
}


// Function to show a love-themed dialog box
function showLoveTypeDialog(loveType) {
    const dialogBox = document.createElement("div");
    dialogBox.classList.add("love-dialog");
    dialogBox.innerHTML = `
        <div class="dialog-content">
            <h2>💖 Love Analysis 💖</h2>
            <p>Your relationship type is: <b>${loveType}</b></p>
            <button onclick="showLoveTipsDialog()">Get Love Tips 💡</button>
            <button onclick="closeDialog()">Close</button>
        </div>
    `;

    document.body.appendChild(dialogBox);
}

// Function to predict marriage details
function predictMarriage() {
    const children = Math.floor(Math.random() * 5); // 0 to 4 children
    const yearsMarried = Math.floor(Math.random() * 60) + 1; // 1 to 60 years
    const endings = [
        "happily ever after ❤️",
        "a dramatic Bollywood-style breakup 🎭",
        "a peaceful separation with mutual respect 🤝",
        "a mysterious disappearance... 👀",
        "growing old together, holding hands forever 💑"
    ];
    const ending = endings[Math.floor(Math.random() * endings.length)];

    return { children, yearsMarried, ending };
}

// Function to show marriage dialog
function showMarriageDialog() {
    const { children, yearsMarried, ending } = predictMarriage();

    const dialogBox = document.createElement("div");
    dialogBox.classList.add("love-dialog");
    dialogBox.innerHTML = `
        <div class="dialog-content">
            <h2>💞 Love Destiny 💞</h2>
            <p>👩‍❤️‍👨 You will be married for <b>${yearsMarried} years</b>!</p>
            <p>👶 You will have <b>${children} children</b>.</p>
            <p>💔 Your love story will end in: <b>${ending}</b></p>
            <button onclick="closeDialog()">Close</button>
        </div>
    `;

    document.body.appendChild(dialogBox);
}

// Function to close the dialog box
function closeDialog() {
    document.querySelector(".love-dialog")?.remove();
}

// Function to update heart liquid height
function updateLiquidHeight(percentage) {
    const liquid = document.getElementById('liquid');
    if (liquid) {
        liquid.style.transition = "height 1.5s ease-in-out";
        liquid.style.height = `${percentage}%`;
        console.log(`Heart filling to: ${percentage}%`);
    }
}

// Function to fetch AI-generated love tips (3 short relationship tips)
async function fetchLoveTips() {
    const API_KEY = "YOUR-GEMINI-API-KEY"; // Replace with your actual API key
    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const requestBody = {
        contents: [{
            role: "user",
            parts: [{ text: "Give me 3 different short and useful love tips. Each tip should be unique and include a relevant emoji. Format them as plain text without asterisks, bullets, or extra symbols." }]
        }]
    };

    try {
        const response = await fetch(GEMINI_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorData.error.message}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Debugging

        // Extract AI-generated tips
        let aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

        // Ensure it's split into exactly 3 unique tips and clean formatting
        let aiTips = aiResponse.split("\n").map(tip => tip.replace(/^[-*•\d.]+\s*/, '').trim()).filter(Boolean);

        // If fewer than 3 tips are returned, request AI again
        if (aiTips.length < 3) {
            console.warn("Less than 3 AI tips received. Fetching again...");
            return await fetchLoveTips(); // Retry until we get 3 unique tips
        }

        console.log(aiTips.slice(0, 3))
        return aiTips.slice(0, 3); // Return only the first 3 unique tips
    } catch (error) {
        console.error("Error fetching AI tips:", error);
        return [
            "💬 Communicate openly and honestly.",
            "💖 Show daily appreciation for your partner.",
            "🎉 Keep the relationship fun and spontaneous."
        ]; // Default unique fallback tips
    }
}


// Function to show AI-generated love tips in a romantic dialog box
async function showLoveTipsDialog() {
    const aiTips = await fetchLoveTips();
    const dialogBox = document.createElement("div");
    dialogBox.classList.add("love-dialog");

    dialogBox.innerHTML = `
        <div class="dialog-content">
            <h2>💡 Love Tips 💡</h2>
            <ul>${aiTips.map(tip => `<li>${tip}</li>`).join("")}</ul>
            <button onclick="closeDialog()">Close</button>
        </div>
    `;

    document.body.appendChild(dialogBox);
}

// Function to calculate love and update UI
async function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (!name1 || !name2) {
        alert('Please enter both names!');
        return;
    }

    const flamesResult = flamesCalculator(name1, name2);
    const lovePercentage = getLovePercentage(flamesResult, name1, name2);

    updateLiquidHeight(lovePercentage);
    document.getElementById('result').textContent = `Love Percentage: ${lovePercentage}%`;
    document.getElementById('flames-result').textContent = `FLAMES: ${flamesResult}`;

    if (flamesResult === "Marriage") {
        setTimeout(showMarriageDialog, 2000);
    } else if (flamesResult === "Lovers") {
        const loveType = determineLoveType(lovePercentage);
        setTimeout(() => showLoveTypeDialog(loveType), 2000);
    }
}

// Attach event listener for calculation
document.getElementById('calculate').addEventListener('click', calculateLove);
