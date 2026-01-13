// Welcome Screen - Landing/Onboarding

Screens.welcome = function() {
    const container = document.getElementById('screen-container');

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white">
            <!-- Header -->
            <header class="flex items-center justify-between px-6 pt-12 pb-4">
                <button class="p-2 -ml-2 hover:opacity-70 transition-opacity">
                    <span class="material-symbols-outlined text-2xl">menu</span>
                </button>
                <h1 class="brand-logo text-2xl font-medium tracking-tight">Stylistt</h1>
                <button class="p-2 -mr-2 hover:opacity-70 transition-opacity">
                    <span class="material-symbols-outlined text-2xl">search</span>
                </button>
            </header>

            <!-- Hero Image -->
            <div class="relative mx-6 aspect-[3/4] bg-gray-100 overflow-hidden animate-fade-in">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS0VHRB4CvprlzT_EiRFPsPIpHBBGD0r36xV3bjShS9mD-6zaG4u55R5BzIkenJGNnLqZz4cly9CmtVOZkALnTSzkwHEht2Xinzm6Yuo6i_g5SJ0Bo0ZL_s_KHTQ5GejvxM9JTlLh1i3J_VUyCRdlxxWj95qlOFy1B7VBYk-4Zn1QCfq_tAwimHzmaAdj6QpyIfSPsJP033CXthIQuW-UZnfOrABv2OTeUJpHwgncp-ulXWbu9-k20TIRBv87rkkdOf4mOpRTF4efa"
                    alt="Fashion model in cream sweater"
                    class="w-full h-full object-cover"
                >
                <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5">
                    <span class="text-[10px] uppercase tracking-[0.2em] font-medium">Collection 01</span>
                </div>
            </div>

            <!-- Content -->
            <div class="flex-1 px-6 pt-8 pb-6 animate-fade-in-up" style="animation-delay: 0.2s">
                <h2 class="brand-title text-4xl leading-tight mb-4">
                    Your AI-Powered<br>
                    <span class="italic">Wardrobe Atelier.</span>
                </h2>
                <p class="text-gray-500 text-sm leading-relaxed mb-8">
                    Experience high-end personalization. Scan your collection to receive curated styling advice and exclusive outfit insights.
                </p>

                <!-- CTA Buttons -->
                <button
                    onclick="Router.navigate('/style-dna')"
                    class="w-full bg-black text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] mb-4 active:opacity-80 transition-opacity"
                >
                    Get Started
                </button>

                <button
                    onclick="Router.navigate('/daily-edit')"
                    class="w-full text-center text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors py-2"
                >
                    Existing User? Log In
                </button>
            </div>
        </div>
    `;
};
