// Sustainability Screen

Screens.sustainability = function() {
    const container = document.getElementById('screen-container');

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
                        <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400">Sustainability Atelier</p>
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
                <!-- Audit Header -->
                <div class="px-6 py-8 border-b border-gray-100">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-[10px] uppercase tracking-[0.2em]">Wardrobe Audit</span>
                        <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400">Oct 2024</span>
                    </div>
                    <h2 class="brand-title text-5xl italic animate-fade-in">Conscious<br>Consumption</h2>
                </div>

                <!-- Metrics Grid -->
                <div class="px-6 py-8 grid grid-cols-2 gap-6 animate-fade-in-up" style="animation-delay: 0.1s">
                    <div>
                        <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Natural Fibers</p>
                        <p class="text-5xl font-light mb-2">72%</p>
                        <p class="text-xs text-gray-500">Your wardrobe is predominantly biodegradable.</p>
                    </div>
                    <div>
                        <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Circularity Score</p>
                        <p class="text-5xl font-light mb-2">8.5</p>
                        <p class="text-xs text-gray-500">Based on item longevity and resale value.</p>
                    </div>
                </div>

                <!-- Progress Bar -->
                <div class="px-6 pb-8 animate-fade-in-up" style="animation-delay: 0.15s">
                    <div class="h-2 bg-gray-100 flex">
                        <div class="bg-green-600" style="width: 72%"></div>
                        <div class="bg-gray-300" style="width: 28%"></div>
                    </div>
                    <div class="flex justify-between mt-2">
                        <span class="text-[10px] uppercase tracking-wider text-green-600">Organic & Natural</span>
                        <span class="text-[10px] uppercase tracking-wider text-gray-400">Synthetic</span>
                    </div>
                </div>

                <!-- Quote Section -->
                <div class="bg-black text-white px-6 py-12 animate-fade-in-up" style="animation-delay: 0.2s">
                    <p class="brand-title text-xl italic leading-relaxed text-center">
                        "True luxury lies in longevity. Extending the life of a garment by nine months reduces its environmental footprint by 30%."
                    </p>
                </div>

                <!-- Care Tips -->
                <div class="px-6 py-8 animate-fade-in-up" style="animation-delay: 0.25s">
                    <h3 class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6">Care Recommendations</h3>

                    <div class="space-y-4">
                        <div class="flex items-start gap-4 p-4 bg-soft-gray">
                            <span class="material-symbols-outlined text-[24px] text-accent-gold">dry_cleaning</span>
                            <div>
                                <p class="font-medium text-sm mb-1">Gentle Washing</p>
                                <p class="text-xs text-gray-500">72% of your items benefit from cold water cycles.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-4 bg-soft-gray">
                            <span class="material-symbols-outlined text-[24px] text-accent-gold">iron</span>
                            <div>
                                <p class="font-medium text-sm mb-1">Low Heat Care</p>
                                <p class="text-xs text-gray-500">Steam instead of ironing to preserve fabric integrity.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-4 bg-soft-gray">
                            <span class="material-symbols-outlined text-[24px] text-accent-gold">inventory_2</span>
                            <div>
                                <p class="font-medium text-sm mb-1">Proper Storage</p>
                                <p class="text-xs text-gray-500">Use cedar blocks and breathable garment bags.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Impact Summary -->
                <div class="px-6 pb-8 animate-fade-in-up" style="animation-delay: 0.3s">
                    <div class="border border-accent-gold p-6 text-center">
                        <span class="material-symbols-outlined text-[32px] text-accent-gold mb-2">eco</span>
                        <p class="text-sm text-gray-600">
                            Your conscious choices have saved an estimated <span class="font-medium text-black">124 kg CO2</span> this year.
                        </p>
                    </div>
                </div>
            </main>

            <!-- Bottom Navigation -->
            ${Components.bottomNav('home')}
        </div>
    `;
};
