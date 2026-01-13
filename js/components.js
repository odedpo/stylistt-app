// Stylistt Components - Shared UI Components

const Components = {

    // Standard Header with menu, logo, and actions
    header(options = {}) {
        const {
            showMenu = true,
            showSearch = false,
            showCart = true,
            showBack = false,
            subtitle = '',
            rightIcon = 'shopping_bag',
            onBack = () => Router.navigate('/daily-edit')
        } = options;

        return `
            <header class="sticky top-0 z-50 flex items-center bg-white/95 backdrop-blur-md pt-12 pb-4 px-6 justify-between border-b border-gray-50">
                <div class="text-primary flex size-10 shrink-0 items-center justify-start">
                    ${showBack ? `
                        <button onclick="${typeof onBack === 'string' ? onBack : 'history.back()'}" class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px]">arrow_back</span>
                        </button>
                    ` : showMenu ? `
                        <button class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px] font-light">menu</span>
                        </button>
                    ` : '<div></div>'}
                </div>
                <div class="flex-1 flex flex-col items-center justify-center">
                    <h1 class="brand-logo text-primary text-2xl font-medium leading-none tracking-tight">Stylistt</h1>
                    ${subtitle ? `<p class="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1">${subtitle}</p>` : ''}
                </div>
                <div class="text-primary flex size-10 shrink-0 items-center justify-end gap-3">
                    ${showSearch ? `
                        <button class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px] font-light">search</span>
                        </button>
                    ` : ''}
                    ${showCart ? `
                        <button onclick="Router.navigate('/shop')" class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px] font-light">${rightIcon}</span>
                        </button>
                    ` : ''}
                </div>
            </header>
        `;
    },

    // Minimal Header (for special screens)
    minimalHeader(options = {}) {
        const { title = '', showClose = false, rightIcon = '', onClose = () => history.back() } = options;
        return `
            <header class="sticky top-0 z-50 flex items-center bg-white pt-12 pb-4 px-6 justify-between">
                <div class="flex size-10 shrink-0 items-center justify-start">
                    ${showClose ? `
                        <button onclick="${typeof onClose === 'string' ? onClose : 'history.back()'}" class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px]">close</span>
                        </button>
                    ` : '<div></div>'}
                </div>
                <div class="flex-1 flex justify-center">
                    <h1 class="brand-logo text-xl font-medium">${title || 'Stylistt'}</h1>
                </div>
                <div class="flex size-10 shrink-0 items-center justify-end">
                    ${rightIcon ? `
                        <button class="hover:opacity-70 transition-opacity">
                            <span class="material-symbols-outlined text-[24px]">${rightIcon}</span>
                        </button>
                    ` : '<div></div>'}
                </div>
            </header>
        `;
    },

    // Bottom Navigation
    bottomNav(activeItem = '') {
        const items = [
            { id: 'home', icon: 'home', route: '/daily-edit' },
            { id: 'styling', icon: 'auto_fix_high', route: '/ai-outfit' },
            { id: 'camera', icon: 'photo_camera', route: '/scan', isCenter: true },
            { id: 'closet', icon: 'checkroom', route: '/closet' },
            { id: 'profile', icon: 'person', route: '/profile' }
        ];

        return `
            <nav class="bottom-nav bg-white/95 backdrop-blur-xl border-t border-gray-100 px-8 py-4 flex justify-between items-center nav-shadow">
                ${items.map(item => {
                    const isActive = activeItem === item.id;
                    if (item.isCenter) {
                        return `
                            <button onclick="Router.navigate('${item.route}')" class="nav-item" data-nav="${item.id}">
                                <div class="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center -mt-10 camera-shadow hover:bg-gray-800 transition-colors">
                                    <span class="material-symbols-outlined text-[26px]">${item.icon}</span>
                                </div>
                            </button>
                        `;
                    }
                    return `
                        <button onclick="Router.navigate('${item.route}')"
                            class="nav-item ${isActive ? 'text-black active' : 'text-gray-400'} hover:text-black transition-colors"
                            data-nav="${item.id}">
                            <span class="material-symbols-outlined text-[28px] ${isActive ? 'filled' : ''}">${item.icon}</span>
                            ${isActive ? '<span class="block w-1 h-1 bg-black rounded-full mx-auto mt-1"></span>' : ''}
                        </button>
                    `;
                }).join('')}
            </nav>
        `;
    },

    // Lookbook Card
    lookbookCard(data) {
        const { id, title, description, image, isFavorite = false } = data;
        return `
            <article class="flex flex-col group animate-fade-in-up">
                <div class="relative overflow-hidden bg-soft-gray aspect-[3/4] mb-6">
                    <img src="${image}" alt="${title}"
                        class="w-full h-full object-cover img-hover-scale"
                        loading="lazy">
                    <div class="absolute top-4 right-4">
                        <button onclick="App.toggleFavorite('${id}')"
                            class="heart-btn bg-white/90 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors ${isFavorite ? 'active' : ''}">
                            <span class="material-symbols-outlined text-[20px]">favorite</span>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h3 class="brand-title text-[28px] font-bold mb-3 tracking-tight">${title}</h3>
                    <p class="text-gray-500 text-sm leading-relaxed mb-6 font-light">${description}</p>
                    <div class="flex gap-4">
                        <button onclick="Router.navigate('/lookbook/${id}')" class="flex-1 bg-black text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] active:opacity-80 transition-opacity">
                            Wear Today
                        </button>
                        <button onclick="App.toggleFavorite('${id}')" class="flex-1 border border-black py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
                            Save Look
                        </button>
                    </div>
                </div>
            </article>
        `;
    },

    // Closet Item Card
    closetItemCard(data) {
        const { id, name, brand, image, isFavorite = false } = data;
        return `
            <div class="flex flex-col card-interactive" onclick="Router.navigate('/scan/results?id=${id}')">
                <div class="relative bg-soft-gray aspect-square mb-3 overflow-hidden">
                    <img src="${image}" alt="${name}"
                        class="w-full h-full object-cover object-center"
                        loading="lazy">
                    <button onclick="event.stopPropagation(); App.toggleFavorite('${id}')"
                        class="absolute top-2 right-2 heart-btn ${isFavorite ? 'active' : ''}">
                        <span class="material-symbols-outlined text-[18px] text-gray-400">${isFavorite ? 'favorite' : 'favorite_border'}</span>
                    </button>
                </div>
                <p class="text-xs text-gray-400 uppercase tracking-wider">Stylistt</p>
                <p class="text-xs font-medium uppercase tracking-wider">${brand}</p>
            </div>
        `;
    },

    // Shop Item Card
    shopItemCard(data) {
        const { id, name, category, image, badge = '' } = data;
        return `
            <div class="flex flex-col animate-fade-in">
                <div class="relative bg-soft-gray aspect-[3/4] mb-4 overflow-hidden magazine-shadow">
                    ${badge ? `
                        <div class="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] uppercase tracking-wider font-medium">
                            ${badge}
                        </div>
                    ` : ''}
                    <img src="${image}" alt="${name}"
                        class="w-full h-full object-cover object-center img-hover-scale"
                        loading="lazy">
                    <button class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors">
                        <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                    </button>
                </div>
                <p class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">${category}</p>
                <h4 class="brand-title text-lg italic">${name}</h4>
            </div>
        `;
    },

    // Progress Steps
    progressSteps(current, total) {
        const steps = [];
        for (let i = 1; i <= total; i++) {
            steps.push(`
                <div class="flex-1 h-[3px] ${i <= current ? 'bg-black' : 'bg-gray-200'} transition-colors"></div>
            `);
        }
        return `
            <div class="flex gap-2 px-6 py-4">
                ${steps.join('')}
            </div>
        `;
    },

    // Section Title
    sectionTitle(title, subtitle = '') {
        return `
            <div class="px-6 py-8">
                ${subtitle ? `<p class="text-[10px] font-sans uppercase tracking-[0.4em] text-gray-400 mb-2">${subtitle}</p>` : ''}
                <h2 class="brand-title text-4xl font-normal leading-tight italic">${title}</h2>
            </div>
        `;
    },

    // Tab Bar
    tabBar(tabs, activeTab, onTabChange = 'App.setActiveTab') {
        return `
            <div class="flex gap-6 px-6 overflow-x-auto hide-scrollbar border-b border-gray-100">
                ${tabs.map(tab => `
                    <button onclick="${onTabChange}('${tab.id}')"
                        class="py-4 text-sm whitespace-nowrap ${activeTab === tab.id ? 'text-black font-medium tab-active' : 'text-gray-400'} transition-colors">
                        ${tab.label}
                    </button>
                `).join('')}
            </div>
        `;
    },

    // Loading Screen
    loadingScreen(message = 'Loading...') {
        return `
            <div class="flex flex-col items-center justify-center min-h-screen bg-white p-6">
                <h1 class="brand-logo text-3xl font-medium mb-8">Stylistt</h1>
                <div class="w-8 h-8 border-2 border-gray-200 border-t-black rounded-full animate-spin mb-6"></div>
                <p class="text-sm text-gray-500">${message}</p>
            </div>
        `;
    },

    // Empty State
    emptyState(icon, title, description) {
        return `
            <div class="flex flex-col items-center justify-center py-16 px-6 text-center">
                <span class="material-symbols-outlined text-[64px] text-gray-300 mb-4">${icon}</span>
                <h3 class="text-xl font-medium mb-2">${title}</h3>
                <p class="text-gray-500 text-sm">${description}</p>
            </div>
        `;
    },

    // Stats Card
    statsCard(value, label) {
        return `
            <div class="flex flex-col items-center p-6 border border-gray-100">
                <span class="text-4xl font-light mb-1">${value}</span>
                <span class="text-[10px] uppercase tracking-wider text-gray-400">${label}</span>
            </div>
        `;
    },

    // Color Palette Circle
    paletteCircle(color, percentage, name) {
        return `
            <div class="flex flex-col items-center">
                <div class="palette-circle w-16 h-16 rounded-full flex items-center justify-center mb-2" style="background-color: ${color}">
                    <span class="text-xs font-medium ${this.isLightColor(color) ? 'text-black' : 'text-white'}">${percentage}%</span>
                </div>
                <span class="text-[10px] uppercase tracking-wider text-gray-500">${name}</span>
            </div>
        `;
    },

    // Helper to determine if color is light
    isLightColor(color) {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 155;
    }
};

// Export for use in other modules
window.Components = Components;
