/**
 * PINK HOUSE ONE - UI2 BACKEND ENGINE
 * Handles live search filtering, Base L2 connection simulation, 
 * and dynamic asset telemetry feeds.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("⚡ [UI2 Initialized]: Backend engine online. Tapping into core telemetry...");

    // 1. DYNAMIC SEARCH & FILTER ENGINE (The "Google" Layer)
    const searchInput = document.querySelector('input[type="text"]');
    const searchButton = document.querySelector('button');
    const catalogCards = document.querySelectorAll('.grid > div');

    const executeSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        console.log(`🔍 [UI2 Query]: Searching ecosystem for -> "${query}"`);

        catalogCards.forEach(card => {
            const cardText = card.innerText.toLowerCase();
            if (query === '' || cardText.includes(query)) {
                card.style.display = 'flex';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none'; // Clean out-of-bounds items instantly
            }
        });
    };

    if (searchInput && searchButton) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') executeSearch();
        });
        searchButton.addEventListener('click', executeSearch);
    }

    // 2. BASE L2 STATUS & TELEMETRY POLL (The "Node/Bridge" Simulation)
    const networkBadge = document.querySelector('header span:nth-last-child(2)');
    
    const checkNetworkStatus = () => {
        // Simulating lightning-fast Base L2 network response check
        const isOnline = Math.random() > 0.02; // 98% uptime simulation
        if (networkBadge) {
            if (isOnline) {
                networkBadge.innerText = "Base L2: Connected [0ms]";
                networkBadge.className = "text-xs uppercase tracking-widest px-2 py-1 bg-neutral-900 border border-emerald-500/40 text-emerald-400 rounded font-mono";
            } else {
                networkBadge.innerText = "Base L2: Re-Routing...";
                networkBadge.className = "text-xs uppercase tracking-widest px-2 py-1 bg-neutral-900 border border-phAccent text-phAccent rounded font-mono";
            }
        }
    };

    // Poll every 10 seconds to keep telemetry live
    setInterval(checkNetworkStatus, 10000);
    checkNetworkStatus();

    // 3. ACTION RAIL INTERACTION HANDLERS
    const actionButtons = document.querySelectorAll('button');
    actionButtons.forEach(btn => {
        if (btn !== searchButton) {
            btn.addEventListener('click', (e) => {
                const actionTitle = e.target.closest('div').querySelector('h3, p, span')?.innerText || "Asset";
                console.log(`🚀 [UI2 Action Triggered]: Engaging pipeline for -> ${actionTitle}`);
                
                // Visual feedback flash
                const originalText = btn.innerText;
                btn.innerText = "LOADING...";
                btn.style.backgroundColor = "#ff2a5f";
                btn.style.color = "#ffffff";
                
                setTimeout(() => {
                    btn.innerText = "SUCCESS";
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.backgroundColor = "";
                        btn.style.color = "";
                    }, 1200);
                }, 600);
            });
        }
    });
});