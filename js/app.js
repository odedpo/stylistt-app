// Stylistt App - Main Application State & Logic

const App = {
    // Application State
    state: {
        user: {
            name: 'Studio',
            initials: 'JB',
            archetype: 'Parisian Chic',
            piecesScanned: 42,
            looksCreated: 12,
            totalItems: 184
        },
        styleDNA: {
            step: 1,
            totalSteps: 5,
            selections: {}
        },
        favorites: new Set(),
        activeTab: 'all',
        closetFilter: 'All Items'
    },

    // Mock Data
    data: {
        lookbooks: [
            {
                id: 'weekend-chic',
                title: 'Weekend Chic',
                description: 'A sophisticated blend of textures: our model wears a soft cream cashmere sweater paired with fluid silk wide-leg trousers.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS0VHRB4CvprlzT_EiRFPsPIpHBBGD0r36xV3bjShS9mD-6zaG4u55R5BzIkenJGNnLqZz4cly9CmtVOZkALnTSzkwHEht2Xinzm6Yuo6i_g5SJ0Bo0ZL_s_KHTQ5GejvxM9JTlLh1i3J_VUyCRdlxxWj95qlOFy1B7VBYk-4Zn1QCfq_tAwimHzmaAdj6QpyIfSPsJP033CXthIQuW-UZnfOrABv2OTeUJpHwgncp-ulXWbu9-k20TIRBv87rkkdOf4mOpRTF4efa'
            },
            {
                id: 'office-minimalist',
                title: 'Office Minimalist',
                description: 'Commanding presence through simplicity. The model showcases a sharp-shouldered blazer layered over a pleated midi skirt.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiPaLAe3nAW1rJwNgkmaZ0hGIehH201D_KtzNw623roCMaO8VSI44MIc-e8AT-d1RMKccGI8P9RqjaXLvr2Ya8RzaNgLxilgyJfbjxtoHSgphZ4hqsLF9-erqKPmeou1qQ6XAWmVOTQeIJpoFArZIrC2yUpft5QNudI6nZ2J5a6buqyY6JSOB_tEOVbvDFaBwpqe7dOujDt9OzO-3OZW9qwYAIUTM9rdfjrbWlVhMUxvdMLxes7qahvLxso-HxvLebAJrl2mBmgAuD'
            },
            {
                id: 'evening-editorial',
                title: 'Evening Editorial',
                description: 'Late-night elegance reimagined. Featuring a bias-cut silk slip dress anchored by structured leather boots for a modern edge.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQymJmio_BDaL8KqgHlPaZb9FkLOqJ9hdVs8cLzSWPxlBKLMyhtQStzeAfQeJ8E4HQZ44j-9HgExkaa8ceuefb7RyL61LYTkxyY4x_WBS3b0aMUHYKt9c5CTxgGWs8psZTkjjpNGnRQU7smXAgMXEJt_ijd5benNMdkJ20Wtdp0bPHF6-jRjGeeZQiuuWabt9C8S91eCLLw4dxj1FVOm5-1hCIBBsD4qCv2rDAUPMOhIWR61is8N39rvdJjNtGw6gdGswwv5OYBNMB'
            }
        ],
        closetItems: [
            { id: '1', name: 'Cashmere Sweater', brand: 'LORO PIANA', category: 'Knits', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkAMlTJ1Y3oeaOcmZZcZ_ixOvl0hPyBhfYG64bZ-4UbLZ-EbKqVLvCMDQFO-YaEdq2KWsVd3TRoE-1a5nDyJGSNpOdxJIv8vM1i2HYDnG2IfYPMGvSC_pSl2n9Ll-kL88Dj_bOmf_wvuqVeONGPiNJCUbDy1NJHCEj0t-1Rr3YdPMNPVf7xJKvPR8E3kCE4rG6I5RQbQ' },
            { id: '2', name: 'Wide-Leg Pants', brand: 'THE ROW', category: 'Silk', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5V3nqEBNRPIf77nLMJGa3sYUeCfN-4GXqVSBEJ6aRNAKSeLi-4nXPQsMiCl-3J6dBdxNLIWNIH6PMc-bsrN-mZkLaJu6Cw6Cj-tJN9GfE0' },
            { id: '3', name: 'Trench Coat', brand: 'BURBERRY', category: 'Outerwear', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAohjnQFCkWlBt_L_Z6GjPnHIuZ3g-FCdhKgGgdRx1WT42Q7jkJ0UxT3O2vf5A3TCQvp-yL0Ees7H-9nExWKn9LTfFXZm5q7RW5C-mLBw' },
            { id: '4', name: 'Leather Boots', brand: 'KHAITE', category: 'Shoes', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8nSKN3Gf8x5fPpEYP9H1dVhZLuVJnAcGnAn8VoE5pGIcLTk5H1UQzRqhD3GkSdKP4AEQM' },
            { id: '5', name: 'Silk Blouse', brand: 'TOTEME', category: 'Silk', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ0GGjCAUhvL3G5b' },
            { id: '6', name: 'Leather Bag', brand: 'CELINE', category: 'Accessories', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpW5XGPC6' }
        ],
        categories: ['All Items', 'Knits', 'Outerwear', 'Silk', 'Shoes', 'Accessories'],
        styleDNAOptions: [
            { id: 'parisian-chic', label: 'Parisian Chic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBM1xyJPOIy-nzV_VmVqR-gMKfPR2pVdxHwZ3K0u0ZqnNlEF3vJHqR8DFvZKL5q7E' },
            { id: 'minimalist', label: 'Minimalist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8' },
            { id: 'soft-textures', label: 'Soft Textures', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC' },
            { id: 'avant-garde', label: 'Avant Garde', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD' },
            { id: 'bohemian', label: 'Bohemian', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuE' },
            { id: 'classic', label: 'Classic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuF' }
        ],
        palette: [
            { color: '#1a1a1a', percentage: 32, name: 'Noir' },
            { color: '#F3EFE0', percentage: 24, name: 'Ecru' },
            { color: '#1F2937', percentage: 18, name: 'Navy' },
            { color: '#C27A65', percentage: 12, name: 'Clay' }
        ],
        outfitTabs: [
            { id: 'parisian-dinner', label: 'Parisian Dinner' },
            { id: 'sunday-brunch', label: 'Sunday Brunch' },
            { id: 'art-gallery', label: 'Art Gallery' },
            { id: 'weekend', label: 'Weekend' }
        ]
    },

    // State Management Methods
    toggleFavorite(id) {
        if (this.state.favorites.has(id)) {
            this.state.favorites.delete(id);
        } else {
            this.state.favorites.add(id);
        }
        // Re-render current screen to update UI
        Router.handleRouteChange();
    },

    isFavorite(id) {
        return this.state.favorites.has(id);
    },

    setActiveTab(tab) {
        this.state.activeTab = tab;
        Router.handleRouteChange();
    },

    setClosetFilter(filter) {
        this.state.closetFilter = filter;
        Router.handleRouteChange();
    },

    getFilteredClosetItems() {
        if (this.state.closetFilter === 'All Items') {
            return this.data.closetItems;
        }
        return this.data.closetItems.filter(item => item.category === this.state.closetFilter);
    },

    // Style DNA Quiz Methods
    selectStyleOption(step, optionId) {
        this.state.styleDNA.selections[step] = optionId;
        const selected = document.querySelector(`[data-option="${optionId}"]`);
        document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
        if (selected) selected.classList.add('selected');
    },

    nextStyleDNAStep() {
        if (this.state.styleDNA.step < this.state.styleDNA.totalSteps) {
            this.state.styleDNA.step++;
            Router.handleRouteChange();
        } else {
            // Quiz complete, go to daily edit
            Router.navigate('/daily-edit');
        }
    },

    prevStyleDNAStep() {
        if (this.state.styleDNA.step > 1) {
            this.state.styleDNA.step--;
            Router.handleRouteChange();
        } else {
            Router.navigate('/welcome');
        }
    },

    // Scan Methods
    startScan() {
        Router.navigate('/scan');
    },

    // Initialize App
    init() {
        // Register all routes
        Router.register('/welcome', () => Screens.welcome());
        Router.register('/style-dna', () => Screens.styleDNA());
        Router.register('/daily-edit', () => Screens.dailyEdit());
        Router.register('/lookbooks', () => Screens.lookbooks());
        Router.register('/closet', () => Screens.closet());
        Router.register('/ai-outfit', () => Screens.aiOutfit());
        Router.register('/scan', () => Screens.scanItem());
        Router.register('/scan/results', () => Screens.scanResults());
        Router.register('/shop', () => Screens.shop());
        Router.register('/insights', () => Screens.insights());
        Router.register('/evolution', () => Screens.styleEvolution());
        Router.register('/sustainability', () => Screens.sustainability());
        Router.register('/profile', () => Screens.profile());
        Router.register('/lookbook/:id', (params) => Screens.lookbookDetail(params));

        // Initialize router
        Router.init();

        console.log('Stylistt App initialized');
    }
};

// Screen registry (will be populated by screen modules)
window.Screens = {};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());

// Export for use in other modules
window.App = App;
