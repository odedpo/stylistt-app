// Style DNA Screen - Onboarding Quiz

Screens.styleDNA = function() {
    const container = document.getElementById('screen-container');
    const step = App.state.styleDNA.step;
    const totalSteps = App.state.styleDNA.totalSteps;

    const questions = [
        {
            title: 'Which aesthetic resonates with you?',
            subtitle: 'Select the imagery that best defines your aspirational wardrobe.'
        },
        {
            title: 'What colors dominate your closet?',
            subtitle: 'Choose the palette that feels most like you.'
        },
        {
            title: 'How would you describe your lifestyle?',
            subtitle: 'Select activities that define your typical week.'
        },
        {
            title: 'Which silhouettes do you prefer?',
            subtitle: 'Choose the shapes that flatter your figure.'
        },
        {
            title: 'What occasions do you dress for most?',
            subtitle: 'Help us understand your wardrobe needs.'
        }
    ];

    const options = [
        { id: 'parisian-chic', label: 'Parisian Chic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp8RlXUNRhHOlowM9xw6g76CjPNkobYuEnj-1jJGohUoSS8l6Xev6oUVF0rwL50rwMcgc_yTffIZKe3ka_YsHjlUsJBQj4dQEaUm4nljjnA80NL6Xt5WjQsZ-FQELKrDTfEF6tjHvD21PHy9IVWhnLqoK5CC56PIEKno1V31FU9P5a6JN_u3ZNYAD1ecxPhD6x6s02Aj2WXQG1XeVQ9fMR2TDe-GmzBqHtP0RPBpFZO5tVXn3O25X6ga2VNR-BV2vOA1H6R3Q1fXZR' },
        { id: 'minimalist', label: 'Minimalist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3O7gaqatTnRvfcwJCa-iBXsTQ6WL4qagsSeAohlyuoCqjloY2TfWy9mxeAqunJhqMZsKqFWjPRyRvanPBQ3i2mSZunugBzHYwagiMTK2bqjFNS320iEJnZLqjAtDuVNdjQspslHM-jnysnWM6F1lR5IGQf8eeuwBu2EcxzzZE02HYM9VYAcF7X2kkpMAwNfrVXcC4-2mZ-BqaEZ5Go-jdkNiyvIt9pQAfSbXT8IQMrD7UMUDTI0-VI67nXTlhgOynleu9Ew0FVALV' },
        { id: 'soft-textures', label: 'Soft Textures', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG1mpqFEr3sgDhMFpMao9SudPe3m8ijh_edHFHHQY_sq8kN4FPtbAXOxZt_UTnDbTfMM-IsBNxnBt6B05_PQTpm00oAOMlnPyOYLZM19qXGQFiGC3qhIEFrgf30dFO1-zERDxODxvctGuM98sUVt2ksogNdH15CWBAVx8ghXn9l1hMMHhdesEmrR8ZegZU1m53EBfdmp7ckYwFCETzG-VAIPwnyjSeKS45vClDVLe5e2XvKVeJ5MgC_OHpqWLO3NuOL94CWiT3eWMA' },
        { id: 'avant-garde', label: 'Avant Garde', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfnrT_sPeWCRHzRGWz_pRjP7HUIpOpgPt_JKYl28GvyaVjx1n9Cl0TOQdsx5uhiul0oKXPviHFPvzZqYbkwMLiYhWVpqWpQQ6UHC_SHfoUq1J7FomePHy25EkefX3lU5W5ylQ7Wg2VbjOu0Qln0FuHYwMoIV0fraB1Rj7akYT71DqBC2VZnFAmYgHTt-zM2-uPc0Wjt4Rw8mKNkLp7S5AQO5MVUDihDCkA3GqJwG_SeXV4uXpOEVNG7CL8puVSvjHpbxuZFrKkzxUA' },
        { id: 'bohemian', label: 'Bohemian', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqurwlvFV44hMELHMWTMmf99qk1VhN7j7zJvSPg1vYDMxO78csrQeiIWhn1dDwq4mhqBK-yC1G6oJRJPbT1GRcrTYz_G126fl2jJDlKzb0Zku0Ppck3lp1OHG9KIfJdN1xC-RI4NDylncwxQmGsDvv91g_dPWkNBdZB9C4vfvRW9hQoUITOEvLf-EuQmpM6yWkWqWH410ml4ddnnmQWa7lQunnQ8zygIqscQS__sND8sAkVArI7PAZzbZXBmCMfaOB5DXc3Nm1NxP9' },
        { id: 'classic', label: 'Classic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeCCNAwsgQrBeW7Vwzm2Wf9NqsYWQvvIMwW0ANOb_F-FnZN6G0szyTS6E0kegkJ1tQY7eSwy_2fd40APNxH3qNUzbG_jhPcfrXPrBlMux2xJ-dgBxn_TwSchLS3HzOgsOTvQyheQ23PbSfU-G-Sz7KD2uVYqCBsiMtks2wBX3hRMJmuVibURD2zhejC1G2_XA16ppE-p9VF9pCpImbMBa3x6hn824d2mD5FfKcFGzuiA0m6dZg7pCvANiLhQCMsodcIlQ2yoh2A6er' }
    ];

    const currentQuestion = questions[step - 1];
    const selectedOption = App.state.styleDNA.selections[step];

    container.innerHTML = `
        <div class="flex flex-col min-h-screen bg-white">
            <!-- Header -->
            <header class="flex items-center justify-between px-6 pt-12 pb-6">
                <button onclick="App.prevStyleDNAStep()" class="p-2 -ml-2 text-gray-400 hover:text-black transition-colors">
                    <span class="material-symbols-outlined text-2xl">arrow_back</span>
                </button>
                <h1 class="brand-logo text-2xl font-bold tracking-tight">Stylistt</h1>
                <button onclick="Router.navigate('/daily-edit')" class="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">
                    Skip
                </button>
            </header>

            <!-- Progress -->
            <div class="px-6 mb-8">
                <div class="flex items-end justify-between mb-2">
                    <span class="text-[10px] font-bold uppercase tracking-[0.2em]">Style DNA</span>
                    <span class="text-[10px] font-medium text-gray-400">0${step} / 0${totalSteps}</span>
                </div>
                <div class="h-[2px] w-full bg-gray-100">
                    <div class="h-full bg-black transition-all duration-500" style="width: ${(step / totalSteps) * 100}%"></div>
                </div>
            </div>

            <!-- Content -->
            <main class="flex-1 overflow-y-auto px-6 pb-32">
                <div class="mb-10 text-center animate-fade-in">
                    <h2 class="brand-title text-3xl italic leading-tight mb-3">${currentQuestion.title}</h2>
                    <p class="text-xs text-gray-500 font-light leading-relaxed max-w-[280px] mx-auto">
                        ${currentQuestion.subtitle}
                    </p>
                </div>

                <!-- Options Grid -->
                <div class="grid grid-cols-2 gap-4">
                    ${options.map((option, index) => `
                        <div class="group cursor-pointer animate-fade-in-up" style="animation-delay: ${index * 0.1}s"
                            onclick="App.selectStyleOption(${step}, '${option.id}')"
                            data-option="${option.id}">
                            <div class="quiz-option relative aspect-[4/5] w-full overflow-hidden bg-gray-50 transition-all duration-300 ${selectedOption === option.id ? 'selected' : ''}">
                                <img
                                    src="${option.image}"
                                    alt="${option.label}"
                                    class="h-full w-full object-cover ${selectedOption === option.id ? '' : 'grayscale opacity-90'} group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    loading="lazy"
                                >
                                ${selectedOption === option.id ? `
                                    <div class="absolute bottom-3 right-3 bg-black text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
                                        <span class="material-symbols-outlined text-[16px]">check</span>
                                    </div>
                                ` : ''}
                            </div>
                            <div class="mt-3 text-center">
                                <span class="text-[10px] uppercase tracking-[0.2em] font-medium ${selectedOption === option.id ? 'text-black' : 'text-gray-400'} group-hover:text-black transition-colors">
                                    ${option.label}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </main>

            <!-- Continue Button -->
            <div class="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-sm border-t border-gray-100 p-6">
                <button
                    onclick="App.nextStyleDNAStep()"
                    class="w-full bg-black text-white py-4 flex items-center justify-center group active:scale-[0.99] transition-transform"
                >
                    <span class="text-[11px] font-bold uppercase tracking-[0.3em] mr-2">
                        ${step === totalSteps ? 'Complete' : 'Continue'}
                    </span>
                    <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
            </div>
        </div>
    `;
};
