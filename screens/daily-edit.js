// Daily Edit Screen - Main Home

Screens.dailyEdit = function() {
    const container = document.getElementById('screen-container');

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white pb-24">
            <!-- Header -->
            ${Components.header({ subtitle: 'The Daily Edit', showSearch: true, showCart: true })}

            <!-- Main Content -->
            <main class="flex-1 overflow-y-auto">
                <!-- Hero Editorial -->
                <div class="px-6 pt-6 animate-fade-in">
                    <div class="relative aspect-[3/4] bg-gray-100 overflow-hidden magazine-shadow">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS0VHRB4CvprlzT_EiRFPsPIpHBBGD0r36xV3bjShS9mD-6zaG4u55R5BzIkenJGNnLqZz4cly9CmtVOZkALnTSzkwHEht2Xinzm6Yuo6i_g5SJ0Bo0ZL_s_KHTQ5GejvxM9JTlLh1i3J_VUyCRdlxxWj95qlOFy1B7VBYk-4Zn1QCfq_tAwimHzmaAdj6QpyIfSPsJP033CXthIQuW-UZnfOrABv2OTeUJpHwgncp-ulXWbu9-k20TIRBv87rkkdOf4mOpRTF4efa"
                            alt="Daily Edit Feature"
                            class="w-full h-full object-cover"
                        >
                    </div>
                </div>

                <!-- Editorial Info -->
                <div class="px-6 pt-6 animate-fade-in-up" style="animation-delay: 0.1s">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400">Volume III / No. 03</span>
                        <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400">24 Oct 2024</span>
                    </div>
                    <h2 class="brand-title text-5xl italic leading-tight mb-4">The Modern</h2>
                    <h3 class="brand-title text-3xl italic text-gray-500 mb-6">Wardrobe Edit</h3>
                    <p class="text-sm text-gray-500 leading-relaxed mb-8">
                        Explore this season's essential pieces curated for the contemporary woman.
                        A refined selection of transitional favorites.
                    </p>
                </div>

                <!-- Quick Actions -->
                <div class="px-6 grid grid-cols-2 gap-4 mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
                    <button
                        onclick="Router.navigate('/lookbooks')"
                        class="flex items-center justify-center gap-2 py-4 border border-black hover:bg-black hover:text-white transition-all"
                    >
                        <span class="material-symbols-outlined text-xl">auto_awesome</span>
                        <span class="text-[11px] font-bold uppercase tracking-wider">Lookbooks</span>
                    </button>
                    <button
                        onclick="Router.navigate('/insights')"
                        class="flex items-center justify-center gap-2 py-4 border border-black hover:bg-black hover:text-white transition-all"
                    >
                        <span class="material-symbols-outlined text-xl">insights</span>
                        <span class="text-[11px] font-bold uppercase tracking-wider">Insights</span>
                    </button>
                </div>

                <!-- Featured Sections -->
                <div class="px-6 mb-8 animate-fade-in-up" style="animation-delay: 0.3s">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-[10px] font-bold uppercase tracking-[0.2em]">Your Style Evolution</h3>
                        <button onclick="Router.navigate('/evolution')" class="text-[10px] uppercase tracking-wider text-gray-400 hover:text-black">View All</button>
                    </div>
                    <div class="bg-soft-gray p-6">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-[10px] uppercase tracking-wider text-gray-400">Current Archetype</span>
                            <span class="text-accent-gold text-sm">+12%</span>
                        </div>
                        <h4 class="brand-title text-2xl italic mb-2">${App.state.user.archetype}</h4>
                        <p class="text-xs text-gray-500">Your style profile favors structured silhouettes, neutral tones, and effortless elegance.</p>
                    </div>
                </div>

                <!-- Sustainability -->
                <div class="px-6 mb-8 animate-fade-in-up" style="animation-delay: 0.4s">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-[10px] font-bold uppercase tracking-[0.2em]">Sustainability Score</h3>
                        <button onclick="Router.navigate('/sustainability')" class="text-[10px] uppercase tracking-wider text-gray-400 hover:text-black">Details</button>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-1 bg-soft-gray p-4 text-center">
                            <span class="block text-3xl font-light mb-1">72%</span>
                            <span class="text-[10px] uppercase tracking-wider text-gray-400">Natural Fibers</span>
                        </div>
                        <div class="flex-1 bg-soft-gray p-4 text-center">
                            <span class="block text-3xl font-light mb-1">8.5</span>
                            <span class="text-[10px] uppercase tracking-wider text-gray-400">Circularity</span>
                        </div>
                    </div>
                </div>
            </main>

            <!-- Bottom Navigation -->
            ${Components.bottomNav('home')}
        </div>
    `;
};
