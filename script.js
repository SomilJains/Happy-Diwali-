document.addEventListener('DOMContentLoaded', () => {
    const cracker = document.getElementById('cracker');
    const greeting = document.getElementById('greeting-container');

    // Get the launch duration (2 seconds)
    const launchDuration = 2000; // 2000ms from CSS

    // Wait for the cracker to 'launch'
    setTimeout(() => {
        // --- BLAST FLASH EFFECT ---
        const blastFlash = document.createElement('div');
        blastFlash.style.cssText = `
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-color: #ff6600;
            box-shadow: 0 0 80px 50px #ffcc00;
            opacity: 0;
            transition: all 0.05s ease-in;
            z-index: 10;
        `;
        document.body.appendChild(blastFlash);

        // 1. Flash ON
        setTimeout(() => { blastFlash.style.opacity = 1; }, 10);
        
        // 2. Flash OFF and Reveal Message
        setTimeout(() => {
            blastFlash.style.opacity = 0;
            setTimeout(() => blastFlash.remove(), 500); 
            
            // Reveal the Decrypted Message
            greeting.style.opacity = 1;

        }, 100); 
        
    }, launchDuration);
});
