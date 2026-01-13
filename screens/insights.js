// Wardrobe Insights Screen

Screens.insights = function() {
    const container = document.getElementById('screen-container');
    const user = App.state.user;
    const palette = App.data.palette;

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
                        <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400">Wardrobe Insights</p>
                    </div>
                    <div class="flex gap-3">
                        <button class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px]">search</span>
                        </button>
                        <button onclick="Router.navigate('/shop')" class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px]">shopping_bag</span>
                        </button>
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <main class="flex-1 overflow-y-auto">
                <!-- Total Items -->
                <div class="px-6 py-12 text-center animate-fade-in">
                    <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Total Items</p>
                    <h2 class="text-7xl font-light mb-4">${user.totalItems}</h2>
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-soft-gray rounded-full">
                        <span class="material-symbols-outlined text-[16px] text-green-500">trending_up</span>
                        <span class="text-sm text-green-600">+12 this month</span>
                    </div>
                </div>

                <!-- Signature Palette -->
                <div class="px-6 py-8 border-t border-gray-100 animate-fade-in-up" style="animation-delay: 0.1s">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="brand-title text-2xl italic">Signature Palette</h3>
                        <span class="text-[10px] uppercase tracking-wider text-gray-400">Most Worn</span>
                    </div>

                    <div class="flex justify-between mb-6">
                        ${palette.map(p => `
                            <div class="flex flex-col items-center">
                                <div class="w-16 h-16 rounded-full flex items-center justify-center mb-2 palette-circle" style="background-color: ${p.color}">
                                    <span class="text-xs font-medium ${Components.isLightColor(p.color) ? 'text-black' : 'text-white'}">${p.percentage}%</span>
                                </div>
                                <span class="text-[10px] uppercase tracking-wider text-gray-500">${p.name}</span>
                            </div>
                        `).join('')}
                    </div>

                    <p class="text-sm text-gray-500 text-center">
                        Your wardrobe is defined by a grounding of <span class="text-black font-medium">Noir</span> and <span class="text-black font-medium">Ecru</span>, punctuated by seasonal warmth.
                    </p>
                </div>

                <!-- Category Breakdown -->
                <div class="px-6 py-8 bg-black text-white animate-fade-in-up" style="animation-delay: 0.2s">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="brand-title text-2xl italic">Top Designers</h3>
                        <button class="text-[10px] uppercase tracking-wider text-gray-400 hover:text-white">View All</button>
                    </div>

                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-sm">The Row</span>
                            <div class="flex items-center gap-3">
                                <div class="w-24 h-1 bg-white/20 overflow-hidden">
                                    <div class="h-full bg-white" style="width: 75%"></div>
                                </div>
                                <span class="text-xs text-gray-400">24 pieces</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm">Loro Piana</span>
                            <div class="flex items-center gap-3">
                                <div class="w-24 h-1 bg-white/20 overflow-hidden">
                                    <div class="h-full bg-white" style="width: 58%"></div>
                                </div>
                                <span class="text-xs text-gray-400">18 pieces</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm">Toteme</span>
                            <div class="flex items-center gap-3">
                                <div class="w-24 h-1 bg-white/20 overflow-hidden">
                                    <div class="h-full bg-white" style="width: 42%"></div>
                                </div>
                                <span class="text-xs text-gray-400">14 pieces</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm">Khaite</span>
                            <div class="flex items-center gap-3">
                                <div class="w-24 h-1 bg-white/20 overflow-hidden">
                                    <div class="h-full bg-white" style="width: 33%"></div>
                                </div>
                                <span class="text-xs text-gray-400">11 pieces</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="px-6 py-8 animate-fade-in-up" style="animation-delay: 0.3s">
                    <div class="grid grid-cols-2 gap-4">
                        <button onclick="Router.navigate('/evolution')" class="p-6 bg-soft-gray text-center hover:bg-gray-100 transition-colors">
                            <span class="material-symbols-outlined text-[32px] mb-2">timeline</span>
                            <p class="text-[10px] uppercase tracking-wider">Style Evolution</p>
                        </button>
                        <button onclick="Router.navigate('/sustainability')" class="p-6 bg-soft-gray text-center hover:bg-gray-100 transition-colors">
                            <span class="material-symbols-outlined text-[32px] mb-2">eco</span>
                            <p class="text-[10px] uppercase tracking-wider">Sustainability</p>
                        </button>
                    </div>
                </div>
            </main>

            <!-- Bottom Navigation -->
            ${Components.bottomNav('home')}
        </div>
    `;
};
