// Stylistt Router - Hash-based client-side routing

const Router = {
    routes: {},
    currentRoute: null,

    // Register a route
    register(path, handler) {
        this.routes[path] = handler;
    },

    // Navigate to a route
    navigate(path) {
        window.location.hash = path;
    },

    // Get current route from hash
    getRoute() {
        const hash = window.location.hash.slice(1) || '/welcome';
        return hash;
    },

    // Parse route parameters (e.g., /lookbook/:id)
    parseParams(routePattern, actualRoute) {
        const patternParts = routePattern.split('/');
        const routeParts = actualRoute.split('/');
        const params = {};

        if (patternParts.length !== routeParts.length) return null;

        for (let i = 0; i < patternParts.length; i++) {
            if (patternParts[i].startsWith(':')) {
                params[patternParts[i].slice(1)] = routeParts[i];
            } else if (patternParts[i] !== routeParts[i]) {
                return null;
            }
        }

        return params;
    },

    // Find matching route handler
    findHandler(route) {
        // Direct match
        if (this.routes[route]) {
            return { handler: this.routes[route], params: {} };
        }

        // Pattern match (for dynamic routes like /lookbook/:id)
        for (const pattern in this.routes) {
            if (pattern.includes(':')) {
                const params = this.parseParams(pattern, route);
                if (params) {
                    return { handler: this.routes[pattern], params };
                }
            }
        }

        return null;
    },

    // Handle route change
    handleRouteChange() {
        const route = this.getRoute();
        const match = this.findHandler(route);

        if (match) {
            this.currentRoute = route;
            const container = document.getElementById('screen-container');

            // Clear and render
            container.innerHTML = '';
            container.className = 'screen-enter';

            match.handler(match.params);

            // Update navigation highlight
            this.updateNavigation(route);
        } else {
            // Default to welcome
            this.navigate('/welcome');
        }
    },

    // Update bottom navigation active state
    updateNavigation(route) {
        const navItems = document.querySelectorAll('.nav-item');
        const routeMap = {
            '/daily-edit': 'home',
            '/ai-outfit': 'styling',
            '/scan': 'camera',
            '/closet': 'closet',
            '/profile': 'profile'
        };

        navItems.forEach(item => {
            const navId = item.dataset.nav;
            if (routeMap[route] === navId) {
                item.classList.add('active');
                item.classList.remove('text-gray-400');
                item.classList.add('text-black');
            } else if (navId !== 'camera') {
                item.classList.remove('active');
                item.classList.add('text-gray-400');
                item.classList.remove('text-black');
            }
        });
    },

    // Initialize router
    init() {
        window.addEventListener('hashchange', () => this.handleRouteChange());
        window.addEventListener('load', () => this.handleRouteChange());
    }
};

// Export for use in other modules
window.Router = Router;
