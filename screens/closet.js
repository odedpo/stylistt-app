// Closet Screen - My Wardrobe Grid

Screens.closet = function() {
    const container = document.getElementById('screen-container');
    const categories = App.data.categories;
    const activeFilter = App.state.closetFilter;
    const items = App.getFilteredClosetItems();

    // Sample closet items with proper images
    const closetItems = [
        { id: '1', name: 'Cashmere Sweater', brand: 'LORO PIANA', category: 'Knits', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkAMlTJ1Y3oeaOcmZZcZ_ixOvl0hPyBhfYG64bZ-4UbLZ-EbKqVLvCMDQFO-YaEdq2KWsVd3TRoE-1a5nDyJGSNpOdxJIv8vM1i2HYDnG2IfYPMGvSC_pSl2n9Ll-kL88Dj_bOmf_wvuqVeONGPiNJCUbDy1NJHCEj0t-1Rr3YdPMNPVf7xJKvPR8E3kCE4rG6I5RQbQ' },
        { id: '2', name: 'Silk Pants', brand: 'THE ROW', category: 'Silk', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5V3nqEBNRPIf77nLMJGa3sYUeCfN-4GXqVSBEJ6aRNAKSeLi-4nXPQsMiCl-3J6dBdxNLIWNIH6PMc-bsrN-mZkLaJu6Cw6Cj-tJN9GfE0' },
        { id: '3', name: 'Trench Coat', brand: 'BURBERRY', category: 'Outerwear', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAohjnQFCkWlBt_L_Z6GjPnHIuZ3g-FCdhKgGgdRx1WT42Q7jkJ0UxT3O2vf5A3TCQvp-yL0Ees7H-9nExWKn9LTfFXZm5q7RW5C-mLBw' },
        { id: '4', name: 'Chelsea Boots', brand: 'KHAITE', category: 'Shoes', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8nSKN3Gf8x5fPpEYP9H1dVhZLuVJnAcGnAn8VoE5pGIcLTk5H1UQzRqhD3GkSdKP4AEQM' },
        { id: '5', name: 'Silk Blouse', brand: 'TOTEME', category: 'Silk', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ0GGjCAUhvL3G5b' },
        { id: '6', name: 'Mini Bag', brand: 'CELINE', category: 'Accessories', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpW5XGPC6' }
    ];

    const filteredItems = activeFilter === 'All Items'
        ? closetItems
        : closetItems.filter(item => item.category === activeFilter);

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white pb-24">
            <!-- Header -->
            <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md pt-12 pb-4 px-6 border-b border-gray-50">
                <div class="flex items-center justify-between mb-4">
                    <button class="hover:opacity-70 transition-opacity">
                        <span class="material-symbols-outlined text-[24px]">menu</span>
                    </button>
                    <div class="text-center">
                        <h1 class="brand-logo text-2xl font-medium">Stylistt</h1>
                        <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400">My Closet</p>
                    </div>
                    <button class="hover:opacity-70 transition-opacity">
                        <span class="material-symbols-outlined text-[24px]">add</span>
                    </button>
                </div>
            </header>

            <!-- Category Tabs -->
            <div class="sticky top-[88px] z-40 bg-white border-b border-gray-100">
                <div class="flex gap-6 px-6 overflow-x-auto" style="-webkit-overflow-scrolling: touch;">
                    ${categories.map(cat => `
                        <button
                            onclick="App.setClosetFilter('${cat}')"
                            class="py-4 text-sm whitespace-nowrap ${activeFilter === cat ? 'text-black font-medium border-b-2 border-black' : 'text-gray-400'} transition-colors"
                        >
                            ${cat}
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Items Grid -->
            <main class="flex-1 p-6">
                ${filteredItems.length > 0 ? `
                    <div class="grid grid-cols-2 gap-4">
                        ${filteredItems.map((item, index) => `
                            <div class="flex flex-col card-interactive animate-fade-in-up" style="animation-delay: ${index * 0.05}s">
                                <div class="relative bg-soft-gray aspect-square mb-3 overflow-hidden">
                                    <img
                                        src="${item.image}"
                                        alt="${item.name}"
                                        class="w-full h-full object-cover object-center"
                                        loading="lazy"
                                        onerror="this.style.display='none'"
                                    >
                                    <button
                                        onclick="event.stopPropagation(); App.toggleFavorite('${item.id}')"
                                        class="absolute top-2 right-2 heart-btn ${App.isFavorite(item.id) ? 'active' : ''}"
                                    >
                                        <span class="material-symbols-outlined text-[20px] ${App.isFavorite(item.id) ? 'text-accent-gold filled' : 'text-gray-400'}">
                                            favorite
                                        </span>
                                    </button>
                                </div>
                                <p class="text-[10px] text-gray-400 uppercase tracking-wider">Stylistt</p>
                                <p class="text-xs font-medium uppercase tracking-wider">${item.brand}</p>
                            </div>
                        `).join('')}
                    </div>

                    <div class="text-center py-8">
                        <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400">End of Collection</p>
                    </div>
                ` : `
                    <div class="flex flex-col items-center justify-center py-16 text-center">
                        <span class="material-symbols-outlined text-[64px] text-gray-300 mb-4">checkroom</span>
                        <h3 class="text-xl font-medium mb-2">No items yet</h3>
                        <p class="text-gray-500 text-sm mb-6">Start scanning items to build your digital closet</p>
                        <button
                            onclick="Router.navigate('/scan')"
                            class="bg-black text-white px-8 py-3 text-[11px] font-bold uppercase tracking-wider"
                        >
                            Scan First Item
                        </button>
                    </div>
                `}
            </main>

            <!-- Bottom Navigation -->
            ${Components.bottomNav('closet')}
        </div>
    `;
};
