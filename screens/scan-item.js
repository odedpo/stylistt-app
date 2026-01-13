// Scan Item Screen - Camera Flow

Screens.scanItem = function() {
    const container = document.getElementById('screen-container');

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white">
            <!-- Header -->
            <header class="sticky top-0 z-50 bg-white pt-12 pb-4 px-6">
                <div class="flex items-center justify-between">
                    <button onclick="history.back()" class="hover:opacity-70 transition-opacity">
                        <span class="material-symbols-outlined text-[24px]">close</span>
                    </button>
                    <div class="text-center">
                        <h1 class="brand-logo text-xl font-medium">Stylistt</h1>
                    </div>
                    <button class="hover:opacity-70 transition-opacity">
                        <span class="material-symbols-outlined text-[24px]">bolt</span>
                    </button>
                </div>
            </header>

            <!-- Step Indicator -->
            <div class="px-6 py-4">
                <h2 class="brand-title text-2xl mb-2">01 <span class="font-normal">Front</span></h2>
                <div class="flex gap-2">
                    <div class="flex-1 h-[3px] bg-black"></div>
                    <div class="flex-1 h-[3px] bg-gray-200"></div>
                    <div class="flex-1 h-[3px] bg-gray-200"></div>
                </div>
            </div>

            <!-- Camera View -->
            <div class="flex-1 px-6 py-4">
                <div class="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                    <!-- Placeholder for camera view -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAohjnQFCkWlBt_L_Z6GjPnHIuZ3g-FCdhKgGgdRx1WT42Q7jkJ0UxT3O2vf5A3TCQvp-yL0Ees7H-9nExWKn9LTfFXZm5q7RW5C-mLBw"
                            alt="Item to scan"
                            class="w-full h-full object-cover"
                        >
                    </div>
                    <!-- Scan Frame -->
                    <div class="absolute inset-8 scan-frame pointer-events-none"></div>
                </div>

                <!-- Capture Button -->
                <div class="flex justify-center py-8">
                    <button
                        onclick="Screens.showScanProcessing()"
                        class="w-20 h-20 bg-black rounded-full flex items-center justify-center camera-shadow active:scale-95 transition-transform"
                    >
                        <div class="w-16 h-16 border-4 border-white rounded-full"></div>
                    </button>
                </div>

                <!-- Photo Slots -->
                <div class="flex justify-center gap-4">
                    <div class="w-16 h-20 border-2 border-black flex flex-col items-center justify-center bg-black text-white">
                        <span class="material-symbols-outlined text-[20px] mb-1">add</span>
                        <span class="text-[8px] uppercase tracking-wider">Front</span>
                    </div>
                    <div class="w-16 h-20 border border-gray-200 flex flex-col items-center justify-center text-gray-400">
                        <span class="text-[8px] uppercase tracking-wider">Back</span>
                    </div>
                    <div class="w-16 h-20 border border-gray-200 flex flex-col items-center justify-center text-gray-400">
                        <span class="text-[8px] uppercase tracking-wider">Label</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// Processing animation
Screens.showScanProcessing = function() {
    const container = document.getElementById('screen-container');

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white items-center justify-center p-6">
            <!-- Header -->
            <header class="absolute top-0 left-0 right-0 flex items-center justify-between pt-12 pb-4 px-6">
                <div></div>
                <h1 class="brand-logo text-xl font-medium">Stylistt</h1>
                <button onclick="Router.navigate('/closet')" class="hover:opacity-70 transition-opacity">
                    <span class="material-symbols-outlined text-[24px]">close</span>
                </button>
            </header>

            <!-- Processing Content -->
            <div class="text-center animate-fade-in">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-soft-gray rounded-full mb-6">
                    <span class="material-symbols-outlined text-[16px] text-accent-gold">auto_awesome</span>
                    <span class="text-[10px] uppercase tracking-wider">AI Processor</span>
                </div>

                <h2 class="brand-title text-3xl italic mb-8">Refining your<br>digital atelier...</h2>

                <!-- Item Preview -->
                <div class="relative w-64 h-80 mx-auto mb-8 overflow-hidden">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAohjnQFCkWlBt_L_Z6GjPnHIuZ3g-FCdhKgGgdRx1WT42Q7jkJ0UxT3O2vf5A3TCQvp-yL0Ees7H-9nExWKn9LTfFXZm5q7RW5C-mLBw"
                        alt="Processing item"
                        class="w-full h-full object-cover opacity-50"
                    >
                    <!-- Analysis Overlays -->
                    <div class="absolute top-1/4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 text-left">
                        <span class="text-[8px] uppercase tracking-wider text-gray-400 block">Texture</span>
                        <span class="brand-title text-sm italic">Wool Blend</span>
                    </div>
                    <div class="absolute bottom-1/3 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 text-left">
                        <span class="text-[8px] uppercase tracking-wider text-gray-400 block">Cut</span>
                        <span class="brand-title text-sm italic">Structured</span>
                    </div>
                </div>

                <!-- Progress -->
                <div class="w-64 mx-auto">
                    <div class="flex justify-between mb-2">
                        <span class="text-[10px] uppercase tracking-wider text-gray-400">Scanning</span>
                        <span class="text-[10px] uppercase tracking-wider">84%</span>
                    </div>
                    <div class="h-[2px] bg-gray-200 overflow-hidden">
                        <div class="h-full bg-accent-gold animate-pulse-slow" style="width: 84%"></div>
                    </div>
                    <p class="text-xs text-gray-400 italic mt-4">Identifying signature silhouette...</p>
                </div>
            </div>

            <!-- Auto-navigate after delay -->
            <script>
                setTimeout(() => Router.navigate('/scan/results'), 2500);
            </script>
        </div>
    `;
};
