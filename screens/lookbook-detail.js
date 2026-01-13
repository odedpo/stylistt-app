// Lookbook Detail Screen

Screens.lookbookDetail = function(params) {
    const container = document.getElementById('screen-container');
    const lookId = params.id || 'weekend-chic';

    // Find the lookbook or use default
    const look = App.data.lookbooks.find(l => l.id === lookId) || App.data.lookbooks[0];

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white">
            <!-- Header -->
            <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md pt-12 pb-4 px-6">
                <div class="flex items-center justify-between">
                    <button onclick="history.back()" class="hover:opacity-70 transition-opacity">
                        <span class="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <div class="text-center">
                        <h1 class="brand-logo text-xl font-medium italic">Stylistt</h1>
                        <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400">Lookbook Detail</p>
                    </div>
                    <button class="hover:opacity-70 transition-opacity">
                        <span class="material-symbols-outlined text-[24px]">more_horiz</span>
                    </button>
                </div>
            </header>

            <!-- Main Content -->
            <main class="flex-1">
                <!-- Hero Image -->
                <div class="relative aspect-[3/4] bg-gray-100 overflow-hidden animate-fade-in">
                    <img
                        src="${look.image}"
                        alt="${look.title}"
                        class="w-full h-full object-cover"
                    >
                </div>

                <!-- Look Info -->
                <div class="px-6 py-8 animate-fade-in-up">
                    <div class="inline-block bg-soft-gray px-3 py-1 mb-4">
                        <span class="text-[10px] uppercase tracking-wider">Fall / Winter 2024</span>
                    </div>

                    <h2 class="brand-title text-4xl italic mb-4">The ${look.title.split(' ')[0]}<br>Edit</h2>

                    <p class="text-gray-500 text-sm leading-relaxed mb-8">
                        ${look.description}
                    </p>

                    <!-- Outfit Components -->
                    <div class="mb-8">
                        <h3 class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4">What You'll Need</h3>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 p-3 bg-soft-gray">
                                <div class="w-16 h-16 bg-white flex items-center justify-center">
                                    <span class="material-symbols-outlined text-gray-400">checkroom</span>
                                </div>
                                <div class="flex-1">
                                    <p class="font-medium text-sm">Cashmere Sweater</p>
                                    <p class="text-xs text-gray-400">Loro Piana</p>
                                </div>
                                <span class="material-symbols-outlined text-gray-400 text-[20px]">check_circle</span>
                            </div>
                            <div class="flex items-center gap-4 p-3 bg-soft-gray">
                                <div class="w-16 h-16 bg-white flex items-center justify-center">
                                    <span class="material-symbols-outlined text-gray-400">checkroom</span>
                                </div>
                                <div class="flex-1">
                                    <p class="font-medium text-sm">Wide-Leg Trousers</p>
                                    <p class="text-xs text-gray-400">The Row</p>
                                </div>
                                <span class="material-symbols-outlined text-gray-400 text-[20px]">check_circle</span>
                            </div>
                            <div class="flex items-center gap-4 p-3 border border-dashed border-gray-300">
                                <div class="w-16 h-16 bg-soft-gray flex items-center justify-center">
                                    <span class="material-symbols-outlined text-gray-400">add</span>
                                </div>
                                <div class="flex-1">
                                    <p class="font-medium text-sm text-gray-400">Missing Item</p>
                                    <p class="text-xs text-accent-gold">Shop Similar</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex gap-4">
                        <button class="flex-1 flex items-center justify-center gap-2 py-4 border border-black hover:bg-black hover:text-white transition-all">
                            <span class="material-symbols-outlined text-[20px]">calendar_today</span>
                            <span class="text-[11px] font-bold uppercase tracking-wider">Add to Calendar</span>
                        </button>
                        <button class="flex-1 flex items-center justify-center gap-2 py-4 bg-black text-white">
                            <span class="material-symbols-outlined text-[20px]">checkroom</span>
                            <span class="text-[11px] font-bold uppercase tracking-wider">Wear Today</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    `;
};
