// Scan Results Screen - AI Verification

Screens.scanResults = function() {
    const container = document.getElementById('screen-container');

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white">
            <!-- Header -->
            <header class="sticky top-0 z-50 bg-white pt-12 pb-4 px-6">
                <div class="flex items-center justify-between">
                    <button onclick="history.back()" class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                        <span class="material-symbols-outlined text-[20px]">arrow_back</span>
                    </button>
                    <div class="bg-soft-gray px-4 py-2 rounded-full">
                        <span class="text-[10px] uppercase tracking-wider">Scan Results</span>
                    </div>
                    <button class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                        <span class="material-symbols-outlined text-[20px]">more_horiz</span>
                    </button>
                </div>
            </header>

            <!-- Item Preview -->
            <div class="flex-1 bg-gradient-to-b from-gray-100 to-white">
                <div class="relative h-64 flex items-center justify-center">
                    <!-- Placeholder - would show scanned item -->
                    <div class="w-48 h-60 bg-gray-200 flex items-center justify-center">
                        <span class="material-symbols-outlined text-[48px] text-gray-400">checkroom</span>
                    </div>
                    <!-- AI Verified Badge -->
                    <div class="absolute bottom-4 right-6 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm">
                        <span class="material-symbols-outlined text-[16px] text-accent-gold">verified</span>
                        <span class="text-[10px] uppercase tracking-wider">AI Verified</span>
                    </div>
                </div>
            </div>

            <!-- Item Details -->
            <div class="bg-white rounded-t-3xl -mt-4 relative z-10 px-6 pt-8 pb-24 animate-fade-in-up">
                <div class="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>

                <div class="text-center mb-8">
                    <h2 class="brand-title text-3xl italic mb-2">Trench Coat</h2>
                    <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400">Item #8902-XJ</p>
                </div>

                <!-- Details Grid -->
                <div class="space-y-6">
                    <div class="flex items-center justify-between py-4 border-b border-gray-100">
                        <span class="text-[10px] uppercase tracking-wider text-gray-400">Brand</span>
                        <div class="text-right">
                            <span class="block text-lg font-medium">Burberry</span>
                            <span class="text-[10px] uppercase tracking-wider text-accent-gold">Detected</span>
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-4 border-b border-gray-100">
                        <span class="text-[10px] uppercase tracking-wider text-gray-400">Material</span>
                        <div class="text-right">
                            <span class="block text-lg font-medium">Cotton Gabardine</span>
                            <span class="text-[10px] uppercase tracking-wider text-gray-400">100% Composition</span>
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-4 border-b border-gray-100">
                        <span class="text-[10px] uppercase tracking-wider text-gray-400">Category</span>
                        <span class="text-lg font-medium">Outerwear</span>
                    </div>

                    <div class="flex items-center justify-between py-4 border-b border-gray-100">
                        <span class="text-[10px] uppercase tracking-wider text-gray-400">Condition</span>
                        <span class="text-lg font-medium">Excellent</span>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="mt-8 space-y-3">
                    <button
                        onclick="Router.navigate('/closet')"
                        class="w-full bg-accent-gold text-white py-4 flex items-center justify-center gap-2 active:opacity-80 transition-opacity"
                    >
                        <span class="text-[11px] font-bold uppercase tracking-wider">Confirm to Closet</span>
                        <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>

                    <button class="w-full text-center py-3 text-[11px] uppercase tracking-wider text-gray-400 hover:text-black transition-colors">
                        Report Issue
                    </button>
                </div>
            </div>
        </div>
    `;
};
