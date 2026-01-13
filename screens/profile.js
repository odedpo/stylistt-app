// Profile Screen - Studio/Account

Screens.profile = function() {
    const container = document.getElementById('screen-container');
    const user = App.state.user;

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white pb-24">
            <!-- Header -->
            <header class="sticky top-0 z-50 bg-white pt-12 pb-4 px-6">
                <div class="flex items-center justify-between">
                    <h1 class="brand-logo text-2xl font-medium">Stylistt</h1>
                    <div class="flex items-center gap-4">
                        <button class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px]">notifications</span>
                        </button>
                        <button class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px]">settings</span>
                        </button>
                    </div>
                </div>
            </header>

            <!-- Profile Section -->
            <div class="px-6 py-8 bg-soft-gray animate-fade-in">
                <div class="flex items-start justify-between">
                    <div>
                        <h2 class="brand-title text-4xl font-medium mb-1">${user.name}</h2>
                        <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400">Personal Atelier</p>
                    </div>
                    <div class="relative">
                        <div class="w-20 h-20 bg-gray-200 rounded-sm flex items-center justify-center">
                            <span class="text-2xl font-light text-gray-400">${user.initials}</span>
                        </div>
                        <button class="absolute -bottom-2 -right-2 bg-black text-white p-1.5 rounded-full">
                            <span class="material-symbols-outlined text-[16px]">edit</span>
                        </button>
                    </div>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <div class="bg-white p-6 text-center">
                        <span class="block text-4xl font-light mb-1">${user.piecesScanned}</span>
                        <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400">Pieces Scanned</span>
                    </div>
                    <div class="bg-white p-6 text-center">
                        <span class="block text-4xl font-light mb-1">${user.looksCreated}</span>
                        <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400">Looks Created</span>
                    </div>
                </div>
            </div>

            <!-- Menu Items -->
            <div class="flex-1 px-6 py-6">
                <div class="space-y-0 divide-y divide-gray-100">
                    <button onclick="Router.navigate('/evolution')" class="w-full flex items-center justify-between py-5 hover:bg-gray-50 transition-colors -mx-6 px-6">
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-[24px] text-gray-600">tune</span>
                            <span class="text-sm font-medium uppercase tracking-wider">Style Preferences</span>
                        </div>
                        <span class="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>

                    <button class="w-full flex items-center justify-between py-5 hover:bg-gray-50 transition-colors -mx-6 px-6">
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-[24px] text-gray-600">person</span>
                            <span class="text-sm font-medium uppercase tracking-wider">Account Details</span>
                        </div>
                        <span class="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>

                    <button onclick="Router.navigate('/lookbooks')" class="w-full flex items-center justify-between py-5 hover:bg-gray-50 transition-colors -mx-6 px-6">
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-[24px] text-gray-600">favorite</span>
                            <span class="text-sm font-medium uppercase tracking-wider">Saved Items</span>
                        </div>
                        <span class="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>

                    <button class="w-full flex items-center justify-between py-5 hover:bg-gray-50 transition-colors -mx-6 px-6">
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-[24px] text-gray-600">help</span>
                            <span class="text-sm font-medium uppercase tracking-wider">Help & Support</span>
                        </div>
                        <span class="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>
                </div>

                <!-- Pro Upgrade Card -->
                <div class="mt-8 bg-black text-white p-6 animate-fade-in-up">
                    <h3 class="brand-title text-xl font-medium mb-2">Stylistt Pro</h3>
                    <p class="text-sm text-gray-300 mb-4">Unlock unlimited AI outfit generations and advanced fabric analysis.</p>
                    <button class="text-[11px] font-bold uppercase tracking-wider border-b border-white pb-1 hover:opacity-80 transition-opacity">
                        Upgrade Now
                    </button>
                </div>

                <!-- Sign Out -->
                <button class="w-full text-center py-6 mt-6 text-[11px] uppercase tracking-wider text-gray-400 hover:text-black transition-colors">
                    Sign Out
                </button>
            </div>

            <!-- Bottom Navigation -->
            ${Components.bottomNav('profile')}
        </div>
    `;
};
