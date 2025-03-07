# 💖 HeartSync - The Ultimate Love Calculator 💻❤️  

[![Made with Love](https://img.shields.io/badge/Made%20With-❤️-red)](https://github.com/yourusername/HeartSync)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)](https://github.com/yourusername/HeartSync)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-blue)](https://github.com/yourusername/HeartSync)

🌟 **Where Code Meets Cupid!** 🌟  

Ever wondered if you and your crush are **destined lovers** or just **good friends**? 🤔  
With **HeartSync**, let **code play cupid** and predict your love destiny! 💘✨  

> "Love is not just about fate—it's about FLAMES too!" 🔥  

---

## 🌟 **Features**
✔️ **FLAMES Algorithm** – Find out if you're **Friends, Lovers, Affectionate, Marriage-bound, Enemies, or Siblings!** 🔥  
✔️ **Love Percentage Calculation** – Based on name compatibility, cosmic destiny, and randomness! ✨  
✔️ **Heart Animation** – A **heart fills up dynamically** based on your love score! 💕  
✔️ **AI Love Tips** – Unlock **exclusive AI-generated relationship advice** when getting "Lovers"! 💡😍  
✔️ **Marriage Prediction** – Find out **years together, number of kids, and how your love story unfolds!** 💍😂  
✔️ **Floating Hearts Animation** – Beautiful **hearts flowing across the screen**! 💘  

---

## 🚀 **How to Install & Run**  

### 🛠️ **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/HeartSync.git
cd HeartSync
```

### 🔑 **2. API Setup (For AI Love Tips)**

If you want to enable AI-generated love tips, you need to set up the Google Gemini AI API.
1️⃣ Get an API Key
```sh
    Go to Google Cloud Console → Google AI API
    Generate an API Key
```

2️⃣ Add API Key to script.js

Replace "YOUR_GEMINI_API_KEY" with your actual API key:

```sh
const API_KEY = "YOUR_GEMINI_API_KEY";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

async function fetchLoveTips() {
    const requestBody = {
        contents: [{ parts: [{ text: "Give me 3 short and useful love tips for a happy and strong relationship." }] }]
    };

    try {
        const response = await fetch(GEMINI_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        const aiTips = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
            "1. Communicate openly 💬\n2. Show appreciation 💕\n3. Always support each other 🤝";
        return aiTips.split("\n").slice(0, 3);
    } catch (error) {
        console.error("Error fetching AI tips:", error);
        return ["1. Communicate openly 💬", "2. Show appreciation 💕", "3. Always support each other 🤝"]; 
    }
}
```

3️⃣ Enable API in Your Google Cloud Account

```sh
    Enable Gemini API in your Google Cloud project.
    Make sure billing is enabled (Google might require it for API usage).
```

### 🌍 3. **Open in Browser**

Simply open index.html in your favorite browser! 🚀

## 🛠️ Tech Stack  

[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)  
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)  
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[![jQuery](https://img.shields.io/badge/jQuery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)](https://jquery.com/)  
[![Google Gemini AI](https://img.shields.io/badge/Google%20Gemini%20AI-%230077B5.svg?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)  

🚀 **Technologies Used:**  
🔹 **HTML** – Structure & Layout  
🔹 **CSS** – Styling, Animations, and Effects  
🔹 **JavaScript** – Core Logic (FLAMES Algorithm, Love Tips, Interactive UI)  
🔹 **Google Gemini AI API** – AI-powered Love Tips 💡  
🔹 **jQuery** – Smooth Animations and DOM Manipulation  


## 📜 **License**

🔓 HeartSync is Open Source! Feel free to fork, modify, and share with ❤️


