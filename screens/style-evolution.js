// Style Evolution Screen

Screens.styleEvolution = function() {
    const container = document.getElementById('screen-container');
    const user = App.state.user;

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white pb-24">
            <!-- Header -->
            <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md pt-12 pb-4 px-6">
                <div class="flex items-center justify-between">
                    <button class="hover:opacity-70 transition-opacity">
                        <span class="material-symbols-outlined text-[24px]">menu</span>
                    </button>
                    <div class="text-center">
                        <h1 class="brand-logo text-2xl font-medium italic">Stylistt</h1>
                        <p class="text-[10px] uppercase tracking-[0.3em] text-gray-400">Style Evolution</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <button class="hover:opacity-70 transition-opacity relative">
                            <span class="material-symbols-outlined text-[24px]">notifications</span>
                        </button>
                        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <span class="text-xs font-medium">${user.initials}</span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <main class="flex-1 overflow-y-auto">
                <!-- Current Archetype Card -->
                <div class="mx-6 my-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 animate-fade-in">
                    <div class="inline-block bg-white px-4 py-2 mb-6 border border-gray-100">
                        <span class="text-[10px] uppercase tracking-[0.2em]">Current Archetype</span>
                    </div>

                    <h2 class="brand-title text-4xl italic mb-4">${user.archetype}</h2>

                    <div class="flex items-center gap-2 mb-4">
                        <span class="material-symbols-outlined text-[16px] text-accent-gold">diamond</span>
                        <div class="h-px flex-1 bg-gray-200"></div>
                    </div>

                    <p class="text-sm text-gray-500 leading-relaxed">
                        Your style profile favors structured silhouettes, neutral tones, and effortless elegance.
                    </p>
                </div>

                <!-- Activity Graph -->
                <div class="px-6 py-8 animate-fade-in-up" style="animation-delay: 0.1s">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h3 class="brand-title text-xl italic">Styling Activity</h3>
                            <p class="text-[10px] uppercase tracking-wider text-gray-400">Outfits Created Over Time</p>
                        </div>
                        <div class="text-right">
                            <span class="block text-2xl font-light">142</span>
                            <span class="text-xs text-green-500">+12%</span>
                        </div>
                    </div>

                    <!-- Simple Chart Visualization -->
                    <div class="relative h-40 bg-soft-gray p-4">
                        <svg class="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:#000;stop-opacity:0.1" />
                                    <stop offset="100%" style="stop-color:#000;stop-opacity:0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 0 80 Q 50 70 100 50 T 200 40 T 300 20"
                                fill="none"
                                stroke="black"
                                stroke-width="2"
                            />
                            <path
                                d="M 0 80 Q 50 70 100 50 T 200 40 T 300 20 L 300 100 L 0 100 Z"
                                fill="url(#chartGradient)"
                            />
                            <circle cx="100" cy="50" r="4" fill="white" stroke="black" stroke-width="2" />
                            <circle cx="200" cy="40" r="4" fill="white" stroke="black" stroke-width="2" />
                            <circle cx="300" cy="20" r="4" fill="black" />
                        </svg>
                        <div class="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-[10px] text-gray-400 uppercase tracking-wider">
                            <span>Aug</span>
                            <span>Sep</span>
                            <span>Oct</span>
                            <span>Nov</span>
                        </div>
                    </div>
                </div>

                <!-- Style Preferences -->
                <div class="px-6 py-8 animate-fade-in-up" style="animation-delay: 0.2s">
                    <h3 class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6">Your Style Preferences</h3>

                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-4 bg-soft-gray">
                            <span class="text-sm">Silhouettes</span>
                            <span class="text-sm text-gray-500">Structured, Tailored</span>
                        </div>
                        <div class="flex items-center justify-between p-4 bg-soft-gray">
                            <span class="text-sm">Color Palette</span>
                            <span class="text-sm text-gray-500">Neutrals, Earth Tones</span>
                        </div>
                        <div class="flex items-center justify-between p-4 bg-soft-gray">
                            <span class="text-sm">Fabric Preference</span>
                            <span class="text-sm text-gray-500">Natural Fibers</span>
                        </div>
                        <div class="flex items-center justify-between p-4 bg-soft-gray">
                            <span class="text-sm">Style Era</span>
                            <span class="text-sm text-gray-500">Modern Classic</span>
                        </div>
                    </div>
                </div>

                <!-- Edit Preferences Button -->
                <div class="px-6 pb-8 animate-fade-in-up" style="animation-delay: 0.3s">
                    <button onclick="Router.navigate('/style-dna')" class="w-full border border-black py-4 text-[11px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all">
                        Update Style Preferences
                    </button>
                </div>
            </main>

            <!-- Bottom Navigation -->
            ${Components.bottomNav('home')}
        </div>
    `;
};
