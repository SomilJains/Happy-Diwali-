document.addEventListener('DOMContentLoaded', () => {
    const cracker = document.getElementById('cracker');
    const greetingContainer = document.getElementById('greeting-container');
    
    // The messages to be typed out after the blast
    const messages = [
        { id: 'line1', text: 'kali@cyberspace:~$ sudo run_diwali_protocol --force-joy' },
        { id: 'line2', text: '...Executing Festive Payload. Success Code: 200 OK.' },
        { id: 'line3', text: 'STATUS: Zero-Day Vulnerability in Sorrow Exploited. Patching...' },
        { id: 'line4', text: '>>> [Luminous Message Decrypted]: Happy Diwali' },
        { id: 'line5', text: '>>> May your firewalls be strong, your code clean, and your light of success shine brightest. -- //root/Community_Core_Server' }
    ];

    const launchDuration = 2000; // 2 seconds from CSS

    function typeWriter(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = ''; // Clear content
        
        // Remove the CSS typing cursor animation before starting the JS typing
        element.style.borderRight = 'none';

        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else {
                // If it's the main Diwali message, add the highlight class
                if (element.classList.contains('main-message')) {
                    element.innerHTML = text.replace('Happy Diwali', '<span class="highlight">Happy Diwali</span>');
                }
                
                // Once a line is done, run the callback for the next line
                if (callback) callback();
            }
        }
        typing();
    }

    function startTyping(index) {
        if (index < messages.length) {
            const { id, text } = messages[index];
            const element = document.getElementById(id);
            
            // Set the element text for typing
            typeWriter(element, text, 40, () => {
                // Once this line is done, move to the next line
                startTyping(index + 1);
            });
        }
    }

    // --- MAIN ANIMATION SEQUENCE ---
    setTimeout(() => {
        // --- 1. BLAST FLASH EFFECT ---
        const blastFlash = document.createElement('div');
        blastFlash.style.cssText = `
            position: absolute;
            top: 15%; /* Position near the top of the terminal body */
            left: 50%;
            transform: translate(-50%, -50%);
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background-color: #ff6600;
            box-shadow: 0 0 100px 60px #ffcc00;
            opacity: 0;
            transition: all 0.05s ease-in;
            z-index: 10;
        `;
        document.getElementById('terminal-window').appendChild(blastFlash);

        // Flash ON
        setTimeout(() => { blastFlash.style.opacity = 1; }, 10);
        
        // Flash OFF and Reveal Message Container
        setTimeout(() => {
            blastFlash.style.opacity = 0;
            setTimeout(() => blastFlash.remove(), 500); 
            
            // 2. Reveal the Terminal Content
            greetingContainer.style.opacity = 1;

            // 3. Start the Typing Animation!
            startTyping(0);

        }, 100); 
        
    }, launchDuration);
});
