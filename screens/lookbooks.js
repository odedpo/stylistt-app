// Lookbooks Screen - Curated Looks

Screens.lookbooks = function() {
    const container = document.getElementById('screen-container');
    const lookbooks = App.data.lookbooks;

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white pb-24">
            <!-- Header -->
            ${Components.header({ subtitle: '', showSearch: false })}

            <!-- Main Content -->
            <main class="flex-1 overflow-y-auto">
                <!-- Section Title -->
                <div class="px-6 py-10">
                    <p class="text-[10px] font-sans uppercase tracking-[0.4em] text-gray-400 mb-2">Personal Curation</p>
                    <h2 class="brand-title text-4xl font-normal leading-tight italic">Curated Lookbooks</h2>
                </div>

                <!-- Lookbook Cards -->
                <div class="flex flex-col gap-16 px-6 pb-8">
                    ${lookbooks.map((look, index) => `
                        <article class="flex flex-col group animate-fade-in-up" style="animation-delay: ${index * 0.15}s">
                            <div class="relative overflow-hidden bg-soft-gray aspect-[3/4] mb-6">
                                <img
                                    src="${look.image}"
                                    alt="${look.title}"
                                    class="w-full h-full object-cover img-hover-scale"
                                    loading="lazy"
                                >
                                <div class="absolute top-4 right-4">
                                    <button
                                        onclick="event.stopPropagation(); App.toggleFavorite('${look.id}')"
                                        class="heart-btn bg-white/90 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors ${App.isFavorite(look.id) ? 'active' : ''}"
                                    >
                                        <span class="material-symbols-outlined text-[20px] ${App.isFavorite(look.id) ? 'filled text-accent-gold' : ''}">favorite</span>
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3 class="brand-title text-[28px] font-bold mb-3 tracking-tight">${look.title}</h3>
                                <p class="text-gray-500 text-sm leading-relaxed mb-6 font-light">${look.description}</p>
                                <div class="flex gap-4">
                                    <button
                                        onclick="Router.navigate('/lookbook/${look.id}')"
                                        class="flex-1 bg-black text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] active:opacity-80 transition-opacity"
                                    >
                                        Wear Today
                                    </button>
                                    <button
                                        onclick="App.toggleFavorite('${look.id}')"
                                        class="flex-1 border border-black py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
                                    >
                                        Save Look
                                    </button>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </main>

            <!-- Bottom Navigation -->
            ${Components.bottomNav('home')}
        </div>
    `;
};
