// AI Outfit Generator Screen

Screens.aiOutfit = function() {
    const container = document.getElementById('screen-container');
    const tabs = App.data.outfitTabs;
    const activeTab = App.state.activeTab || 'parisian-dinner';

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
                        <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400">AI Outfit Generator</p>
                    </div>
                    <button onclick="Router.navigate('/shop')" class="hover:opacity-70 transition-opacity">
                        <span class="material-symbols-outlined text-[24px]">shopping_bag</span>
                    </button>
                </div>
            </header>

            <!-- Occasion Tabs -->
            <div class="sticky top-[88px] z-40 bg-white border-b border-gray-100">
                <div class="flex gap-6 px-6 overflow-x-auto" style="-webkit-overflow-scrolling: touch;">
                    ${tabs.map(tab => `
                        <button
                            onclick="App.setActiveTab('${tab.id}')"
                            class="py-4 whitespace-nowrap ${activeTab === tab.id ? 'text-black border-b-2 border-black' : 'text-gray-400'} transition-colors"
                        >
                            <span class="brand-title text-lg italic">${tab.label}</span>
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Outfit Display -->
            <main class="flex-1 px-6 py-6">
                <div class="relative aspect-[3/4] bg-gray-100 mb-6 overflow-hidden animate-fade-in">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS0VHRB4CvprlzT_EiRFPsPIpHBBGD0r36xV3bjShS9mD-6zaG4u55R5BzIkenJGNnLqZz4cly9CmtVOZkALnTSzkwHEht2Xinzm6Yuo6i_g5SJ0Bo0ZL_s_KHTQ5GejvxM9JTlLh1i3J_VUyCRdlxxWj95qlOFy1B7VBYk-4Zn1QCfq_tAwimHzmaAdj6QpyIfSPsJP033CXthIQuW-UZnfOrABv2OTeUJpHwgncp-ulXWbu9-k20TIRBv87rkkdOf4mOpRTF4efa"
                        alt="Generated Outfit"
                        class="w-full h-full object-cover"
                    >
                    <!-- Match Score -->
                    <div class="absolute bottom-4 left-4 text-white">
                        <p class="text-[10px] uppercase tracking-wider opacity-80">Look Match</p>
                        <p class="text-4xl font-light">98%</p>
                    </div>
                    <!-- Favorite Button -->
                    <button class="absolute bottom-4 right-4 heart-btn">
                        <span class="material-symbols-outlined text-[28px] text-white">favorite_border</span>
                    </button>
                </div>

                <!-- Action Buttons -->
                <div class="flex justify-center gap-4 mb-8">
                    <button class="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 transition-colors rounded-lg">
                        <div class="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center">
                            <span class="material-symbols-outlined text-[24px]">checkroom</span>
                        </div>
                        <span class="text-[10px] uppercase tracking-wider text-gray-500">Swap Top</span>
                    </button>

                    <button class="flex flex-col items-center gap-2 p-4 bg-black text-white rounded-lg">
                        <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <span class="material-symbols-outlined text-[24px] animate-spin-slow">autorenew</span>
                        </div>
                        <span class="text-[10px] uppercase tracking-wider">Regenerate</span>
                    </button>

                    <button class="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 transition-colors rounded-lg">
                        <div class="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center">
                            <span class="material-symbols-outlined text-[24px]">expand_more</span>
                        </div>
                        <span class="text-[10px] uppercase tracking-wider text-gray-500">Swap Bottom</span>
                    </button>
                </div>

                <!-- Outfit Details -->
                <div class="bg-soft-gray p-6">
                    <h3 class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4">Outfit Components</h3>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-sm">Cashmere Sweater</span>
                            <span class="text-xs text-gray-400">Loro Piana</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm">Wide-Leg Trousers</span>
                            <span class="text-xs text-gray-400">The Row</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm">Leather Ankle Boots</span>
                            <span class="text-xs text-gray-400">Khaite</span>
                        </div>
                    </div>
                </div>
            </main>

            <!-- Bottom Navigation -->
            ${Components.bottomNav('styling')}
        </div>
    `;
};
