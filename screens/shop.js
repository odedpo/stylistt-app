// Shop Screen - Curated Recommendations

Screens.shop = function() {
    const container = document.getElementById('screen-container');

    const shopItems = [
        { id: 's1', name: 'The Structured Wool Coat', category: 'Outerwear', badge: 'Best Match', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAohjnQFCkWlBt_L_Z6GjPnHIuZ3g-FCdhKgGgdRx1WT42Q7jkJ0UxT3O2vf5A3TCQvp-yL0Ees7H-9nExWKn9LTfFXZm5q7RW5C-mLBw' },
        { id: 's2', name: 'Silk Midi Skirt', category: 'Bottoms', badge: '', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5V3nqEBNRPIf77nLMJGa3sYUeCfN-4GXqVSBEJ6aRNAKSeLi-4nXPQsMiCl-3J6dBdxNLIWNIH6PMc-bsrN-mZkLaJu6Cw6Cj-tJN9GfE0' },
        { id: 's3', name: 'Cashmere Knit', category: 'Knitwear', badge: 'New In', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkAMlTJ1Y3oeaOcmZZcZ_ixOvl0hPyBhfYG64bZ-4UbLZ-EbKqVLvCMDQFO-YaEdq2KWsVd3TRoE-1a5nDyJGSNpOdxJIv8vM1i2HYDnG2IfYPMGvSC_pSl2n9Ll-kL88Dj_bOmf_wvuqVeONGPiNJCUbDy1NJHCEj0t-1Rr3YdPMNPVf7xJKvPR8E3kCE4rG6I5RQbQ' },
        { id: 's4', name: 'Leather Tote', category: 'Accessories', badge: '', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpW5XGPC6' }
    ];

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white pb-24">
            <!-- Header -->
            <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md pt-12 pb-4 px-6 border-b border-gray-50">
                <div class="flex items-center justify-between">
                    <button class="hover:opacity-70 transition-opacity">
                        <span class="material-symbols-outlined text-[24px]">menu</span>
                    </button>
                    <div class="text-center">
                        <h1 class="brand-logo text-2xl font-medium italic">Stylistt</h1>
                        <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400">Curated Shop</p>
                    </div>
                    <button class="hover:opacity-70 transition-opacity relative">
                        <span class="material-symbols-outlined text-[24px]">shopping_bag</span>
                        <span class="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] rounded-full flex items-center justify-center">2</span>
                    </button>
                </div>
            </header>

            <!-- Main Content -->
            <main class="flex-1 overflow-y-auto">
                <!-- Hero Section -->
                <div class="px-6 py-8 text-center animate-fade-in">
                    <h2 class="brand-title text-3xl italic mb-3">Completes Your Look</h2>
                    <p class="text-sm text-gray-500">
                        Pieces hand-picked by our AI stylist to harmonize with your existing wardrobe.
                    </p>
                </div>

                <!-- Featured Item -->
                <div class="px-6 mb-8 animate-fade-in-up" style="animation-delay: 0.1s">
                    <div class="relative aspect-[3/4] bg-gray-100 overflow-hidden magazine-shadow">
                        <div class="absolute top-4 left-4 bg-white px-3 py-1 z-10">
                            <span class="text-[10px] uppercase tracking-wider font-medium">Best Match</span>
                        </div>
                        <img
                            src="${shopItems[0].image}"
                            alt="${shopItems[0].name}"
                            class="w-full h-full object-cover"
                            loading="lazy"
                        >
                        <button class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white transition-colors">
                            <span class="material-symbols-outlined text-[24px]">add_shopping_cart</span>
                        </button>
                    </div>
                    <div class="mt-4">
                        <p class="text-[10px] uppercase tracking-wider text-gray-400 mb-1">${shopItems[0].category}</p>
                        <h3 class="brand-title text-xl italic">${shopItems[0].name}</h3>
                    </div>
                </div>

                <!-- More Recommendations -->
                <div class="px-6 mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-[10px] uppercase tracking-[0.2em]">More for You</h3>
                        <button class="text-[10px] uppercase tracking-wider text-gray-400 hover:text-black">View All</button>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        ${shopItems.slice(1).map((item, index) => `
                            <div class="animate-fade-in-up" style="animation-delay: ${0.25 + index * 0.1}s">
                                <div class="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-3">
                                    ${item.badge ? `
                                        <div class="absolute top-2 left-2 bg-white px-2 py-0.5 z-10">
                                            <span class="text-[8px] uppercase tracking-wider font-medium">${item.badge}</span>
                                        </div>
                                    ` : ''}
                                    <img
                                        src="${item.image}"
                                        alt="${item.name}"
                                        class="w-full h-full object-cover"
                                        loading="lazy"
                                        onerror="this.style.display='none'"
                                    >
                                    <button class="absolute bottom-2 right-2 bg-white/90 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors">
                                        <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                    </button>
                                </div>
                                <p class="text-[10px] uppercase tracking-wider text-gray-400 mb-1">${item.category}</p>
                                <h4 class="brand-title text-sm italic">${item.name}</h4>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Style Match Section -->
                <div class="px-6 py-8 bg-soft-gray animate-fade-in-up" style="animation-delay: 0.4s">
                    <div class="text-center mb-6">
                        <span class="material-symbols-outlined text-[32px] text-accent-gold mb-2">auto_awesome</span>
                        <h3 class="brand-title text-xl italic mb-2">AI Style Match</h3>
                        <p class="text-xs text-gray-500">These pieces are selected based on your style DNA and current wardrobe gaps.</p>
                    </div>

                    <button class="w-full bg-black text-white py-4 text-[11px] font-bold uppercase tracking-wider">
                        Take Style Quiz
                    </button>
                </div>
            </main>

            <!-- Bottom Navigation -->
            ${Components.bottomNav('home')}
        </div>
    `;
};
