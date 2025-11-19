// --- Product Data & State ---
let products = [];
const whatsappNumber = '9647778076465', productsPerLoad = 12, MAX_RECENTLY_VIEWED = 8;
const ALLOWED_ADMIN_EMAILS = ["soso.lovr66@gmail.com", "ramysaad404@gmail.com"];
let currentProductIdForDetail = null, activeCategory = 'all', displayedProductCount = 0, currentFilteredProducts = [], currentSearchTerm = '', currentSizeFilter = 'all', isMobileMenuOpen = false, activeModalOrOverlay = null, activeManagementModal = null, isPanelOpening = false, swiperInstance = null, detailSwiperInstance = null, isManagementPanelOpen = false, editingProductId = null, currentUser = null, initialProductsFetched = false, adminProductSearchTerm = '';
let cart = JSON.parse(localStorage.getItem('mqCart_v4')) || [], cartItemsForOrder = [];
const categoryData = {
    all: { name: "الكل", icon: "fas fa-tags", description: "تصفحي جميع منتجاتنا المختارة بعناية فائقة." },
    tops: { name: "هودي", icon: "fas fa-user-ninja", description: "مجموعة متنوعة من الهودي والبلوزات والقمصان العصرية والكلاسيكية." },
    dresses: { name: "تي شيرت", icon: "fas fa-vest-patches", description: "تي شيرت أنيقة وعصرية لمختلف المناسبات، من الكاجوال إلى السهرة." },
    trousers: { name: "بناطيل", icon: "fa-solid fa-person", description: "تشكيلة واسعة من البناطيل المريحة والأنيقة لجميع إطلالاتك." },
    maternity: { name: "ملابس منزلية", icon: "fas fa-person-pregnant", description: "ملابس ملابس منزلية مصممة لتوفير الراحة والأناقة خلال فترة الحمل." },
    skirts: { name: "غير ذلك", icon: "fas fa-chess-queen", description: "أحدث موديلات التنانير المتنوعة لجميع الأذواق والمناسبات." }
};

// --- DOM Elements ---
const htmlElement = document.documentElement, header = document.getElementById('main-header'), mainNavLinks = document.querySelectorAll('#main-nav a.nav-link');
const mobileNavToggle = document.getElementById('mobile-nav-toggle'), mobileNavMenu = document.getElementById('mobile-nav-menu'), mobileNavMenuLinks = mobileNavMenu?.querySelectorAll('a.nav-link');
const productGrid = document.getElementById('product-grid-main'), categoryCardsContainer = document.getElementById('category-cards-container'), loadMoreButton = document.getElementById('load-more-button');
const categoryTitleMain = document.getElementById('category-title-main'), categoryDescription = document.getElementById('category-description'), clearFiltersBtn = document.getElementById('clear-filters-btn'), noResultsDiv = document.getElementById('no-results');
const newArrivalsWrapper = document.getElementById('new-arrivals-wrapper'), recentlyViewedSection = document.getElementById('recently-viewed'), recentlyViewedWrapper = document.getElementById('recently-viewed-wrapper'), recentlyViewedEmpty = document.getElementById('recently-viewed-empty');
const searchFilterToggleBtn = document.getElementById('search-filter-toggle-btn'), themeToggleButton = document.getElementById('theme-toggle-button'), scrollToTopBtn = document.getElementById('scroll-to-top-btn');

// Search & Filter Overlay Elements
const searchFilterOverlay = document.getElementById('search-filter-overlay'), closeSearchFilterOverlayBtn = document.getElementById('close-search-filter-overlay');
const overlaySearchInput = document.getElementById('overlay-search-input'), overlaySizeSelect = document.getElementById('overlay-size-select'), applyOverlayFiltersBtn = document.getElementById('apply-overlay-filters'), clearOverlayFiltersBtn = document.getElementById('clear-overlay-filters-btn');

// Cart & Order Elements
const cartButton = document.getElementById('cart-button'), cartCountSpan = document.getElementById('cart-count'), startShoppingBtnCart = document.getElementById('start-shopping-btn-cart');
const cartModalOverlay = document.getElementById('cart-modal'), cartModalCloseButton = document.getElementById('modal-close-button-cart'), cartItemsContainer = document.getElementById('cart-items-container'), cartEmptyMessage = document.getElementById('cart-empty-message'), cartOrderAllBtn = document.getElementById('cart-order-all-btn');
const orderFormModalOverlay = document.getElementById('order-form-modal'), orderFormModalCloseButton = document.getElementById('modal-close-button-order'), orderForm = document.getElementById('order-form'), formErrorMessage = document.getElementById('form-error-message');
const orderSummaryMainTitle = document.getElementById('order-summary-main-title'), orderSummarySingleItemDetails = document.getElementById('order-summary-single-item-details'), orderSummaryItemsList = document.getElementById('order-summary-items-list');
const orderSummaryTitle = document.getElementById('order-summary-title'), orderSummarySize = document.getElementById('order-summary-size'), orderSummaryPrice = document.getElementById('order-summary-price');
const orderFormProductId = document.getElementById('order-form-product-id'), orderFormProductTitle = document.getElementById('order-form-product-title'), orderFormProductSize = document.getElementById('order-form-product-size'), orderFormProductPrice = document.getElementById('order-form-product-price');

// Product Detail Panel Elements
const productDetailPanel = document.getElementById('product-detail-panel'), productDetailContent = document.getElementById('product-detail-content'), closeDetailPanelBtn = document.getElementById('close-detail-panel-btn'), productDetailBackdrop = document.getElementById('product-detail-backdrop');

// Policy & Info Modals
const privacyPolicyLink = document.getElementById('privacy-policy-link'), privacyPolicyModalOverlay = document.getElementById('privacy-policy-modal'), privacyPolicyModalCloseButton = document.getElementById('modal-close-button-privacy'), privacyModalCloseBtnBottom = document.getElementById('privacy-modal-close-btn-bottom');
const returnPolicyLink = document.getElementById('return-policy-link'), returnPolicyModalOverlay = document.getElementById('return-policy-modal'), returnPolicyModalCloseButton = document.getElementById('modal-close-button-return'), returnModalCloseBtnBottom = document.getElementById('return-modal-close-btn-bottom');
const sizeGuideFooterLink = document.getElementById('size-guide-footer-link'), sizeGuideModalOverlay = document.getElementById('size-guide-modal'), sizeGuideModalCloseButton = document.getElementById('modal-close-button-sizeguide'), sizeGuideModalCloseBtnBottom = document.getElementById('sizeguide-modal-close-btn-bottom');

// Admin Panel Elements
const productManagementToggleBtn = document.getElementById('product-management-toggle'), productManagementPanel = document.getElementById('product-management-panel'), closeManagementPanelBtn = document.getElementById('close-management-panel-btn');
const adminPanelHeaderDiv = document.getElementById('admin-panel-header'), adminUserInfo = document.getElementById('admin-user-info'), adminStatsContainer = document.getElementById('admin-stats-container');
const productManagementTableBody = productManagementPanel?.querySelector('#product-management-table tbody'), adminProductSearchInput = document.getElementById('admin-product-search-input'), adminTotalProductsCount = document.getElementById('admin-total-products-count');
const addNewProductBtn = document.getElementById('add-new-product-btn'), exportProductDataBtn = document.getElementById('export-product-data-btn'), importProductDataBtn = document.getElementById('import-product-data-btn'), deleteAllProductsBtn = document.getElementById('delete-all-products-btn');

// Admin Forms & Modals
const productManagementFormContainer = document.getElementById('product-management-form-container'), productForm = document.getElementById('product-form'), productFormTitleElement = document.getElementById('product-form-title'), formValidationError = document.getElementById('form-validation-error');
const closeProductFormBtn = document.getElementById('close-product-form-btn'), cancelProductFormBtn = document.getElementById('cancel-product-form-btn');
const pfId = document.getElementById('pf-id'), pfTitle = document.getElementById('pf-title'), pfOriginalPrice = document.getElementById('pf-original_price'), pfPrice = document.getElementById('pf-price'), pfOnSale = document.getElementById('pf-on_sale');
const pfImage1 = document.getElementById('pf-image1'), pfImage2 = document.getElementById('pf-image2'), pfSize = document.getElementById('pf-size'), pfBaseSize = document.getElementById('pf-base_size'), pfCategory = document.getElementById('pf-category');
const pfAvailability = document.getElementById('pf-availability'), pfDescription = document.getElementById('pf-description'), pfIsNew = document.getElementById('pf-is_new'), pfUpdateIdContainer = document.getElementById('pf-update-id-container'), pfUpdateId = document.getElementById('pf-update_id');
const productExportModal = document.getElementById('product-export-modal'), closeExportModalBtn = document.getElementById('close-export-modal-btn'), downloadCsvBtn = document.getElementById('download-csv-btn');
const productImportModal = document.getElementById('product-import-modal'), closeImportModalBtn = document.getElementById('close-import-modal-btn'), csvFileInput = document.getElementById('csv-file-input'), csvFileNameDisplay = document.getElementById('csv-file-name-display');
const processImportBtn = document.getElementById('process-import-btn'), cancelImportBtn = document.getElementById('cancel-import-btn'), importErrorMessage = document.getElementById('import-error-message');

// --- Utility Functions ---
const debounce = (func, wait) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func.apply(this, args), wait); }; };
const formatPrice = (priceString) => {
    try { const cleaned = String(priceString).replace(/[^\d,.]/g, '').replace(/,/g, ''); const num = parseFloat(cleaned); return isNaN(num) ? priceString : num.toLocaleString('ar-IQ'); } catch { return priceString; }
};
const parseFormattedPrice = (formattedPrice) => (!formattedPrice || typeof formattedPrice !== 'string') ? NaN : parseFloat(formattedPrice.replace(/,/g, ''));
const isValidImageUrl = (url) => url && typeof url === 'string' && url.trim() !== '' && !url.startsWith('https://placehold.co');

// --- Theme Management ---
const applyTheme = (theme) => {
    if (!htmlElement || !themeToggleButton) return;
    const icon = themeToggleButton.querySelector('i');
    htmlElement.classList.toggle('dark', theme === 'dark');
    if (icon) icon.className = theme === 'dark' ? 'fas fa-moon text-lg' : 'fas fa-sun text-lg';
    localStorage.setItem('mqTheme_v2', theme);
    document.querySelectorAll('img[src^="https://placehold.co"]').forEach(img => {
        const currentSrc = img.getAttribute('src');
        if (!currentSrc || !img.hasAttribute('onerror')) return;
        const urlParts = currentSrc.split('/');
        let bgIndex = urlParts.findIndex(p => p.length === 6 && /^[0-9A-Fa-f]{6}$/.test(p));
        if (bgIndex > -1 && bgIndex + 1 < urlParts.length) {
            const isDark = theme === 'dark';
            const map = { 'F8FAFC': '1E293B', 'E5E7EB': '374151', '0891B2': '67E8F9', '6B7280': '9CA3AF', '7F1D1D': '9CA3AF' };
            const reverseMap = Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
            let bg = urlParts[bgIndex].toUpperCase(), txt = urlParts[bgIndex + 1].toUpperCase();
            if (isDark) { if (map[bg]) urlParts[bgIndex] = map[bg]; if (map[txt]) urlParts[bgIndex + 1] = map[txt]; }
            else { if (reverseMap[bg]) urlParts[bgIndex] = reverseMap[bg]; if (reverseMap[txt]) urlParts[bgIndex + 1] = reverseMap[txt]; }
            const newSrc = urlParts.join('/');
            if (newSrc !== currentSrc) img.src = newSrc;
        }
    });
};
const toggleTheme = () => applyTheme(htmlElement.classList.contains('dark') ? 'light' : 'dark');

// --- Cart Management ---
const updateCartCount = () => {
    if (!cartCountSpan || !cartButton) return;
    const count = cart.length;
    cartCountSpan.textContent = count;
    cartCountSpan.classList.toggle('scale-100', count > 0); cartCountSpan.classList.toggle('scale-0', count === 0);
    cartCountSpan.classList.toggle('opacity-100', count > 0); cartCountSpan.classList.toggle('opacity-0', count === 0);
    cartButton.classList.toggle('has-items', count > 0);
};
const isInCart = (id) => cart.includes(Number(id));
const updateCartButtonIcon = (btn, isNowInCart) => {
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (icon) {
        icon.className = `text-base fas ${isNowInCart ? 'fa-check-circle text-success-DEFAULT dark:text-success-light' : 'fa-cart-plus'} transition-transform duration-200 ease-in-out`;
        if(btn.classList.contains('btn-icon') || btn.classList.contains('action-btn')) icon.classList.add('text-base'); else icon.classList.add('text-lg');
        requestAnimationFrame(() => { icon.classList.add('scale-125'); setTimeout(() => icon.classList.remove('scale-125'), 200); });
    }
    btn.setAttribute('aria-label', isNowInCart ? 'إزالة من السلة' : 'إضافة للسلة'); if (btn.title) btn.title = btn.getAttribute('aria-label');
    if (btn.id === 'detail-panel-cart-btn') {
        const textSpan = btn.querySelector('.button-text');
        if (textSpan) textSpan.textContent = isNowInCart ? 'تمت الإضافة (إزالة؟)' : 'إضافة للسلة';
        btn.classList.toggle('btn-success', isNowInCart); btn.classList.toggle('btn-secondary', !isNowInCart);
    }
    btn.classList.toggle('is-in-cart', isNowInCart);
};
const toggleCart = (productId) => {
    const numId = Number(productId), index = cart.indexOf(numId), wasInCart = index > -1;
    wasInCart ? cart.splice(index, 1) : cart.push(numId);
    localStorage.setItem('mqCart_v4', JSON.stringify(cart)); updateCartCount();
    document.querySelectorAll(`.cart-btn[data-id="${numId}"], .cart-remove-btn[data-id="${numId}"], #detail-panel-cart-btn[data-id="${numId}"]`).forEach(btn => {
        if (btn.classList.contains('cart-remove-btn') && wasInCart) {
            const item = btn.closest('.cart-item');
            if (item) {
                item.style.cssText = 'transition: all 0.3s ease; opacity: 0; transform: translateX(20px) scale(0.95); max-height: 0; margin: 0; padding: 0; border: 0;';
                setTimeout(() => { item.remove(); renderCartItems(); }, 400);
            }
        } else updateCartButtonIcon(btn, !wasInCart);
    });
    if (cartModalOverlay?.classList.contains('visible') && !wasInCart) renderCartItems();
};

// --- Product Card ---
const createProductCard = (product, isCarousel = false) => {
    if (!product) return null;
    const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    const phBg = theme === 'dark' ? '1E293B' : 'F8FAFC', phTxt = theme === 'dark' ? '9CA3AF' : '6B7280';
    const ph1 = `https://placehold.co/400x400/${phBg}/${phTxt}?text=صورة+1&font=cairo`, ph2 = `https://placehold.co/400x400/${phBg}/${phTxt}?text=صورة+2&font=cairo`;
    const img1 = product.image1 || ph1, img2 = (isValidImageUrl(product.image2) && product.image2 !== product.image1) ? product.image2 : img1;
    const inCart = isInCart(product.id), isOnSale = product.on_sale && product.original_price && parseFormattedPrice(product.original_price) > parseFormattedPrice(product.price);
    
    const card = document.createElement('div');
    card.className = `product-card group flex flex-col bg-light-surface dark:bg-dark-surface rounded-xl overflow-hidden shadow-card border border-light-border/30 dark:border-dark-border/30 transition-all duration-medium ease-[cubic-bezier(0.33,1,0.68,1)] hover:shadow-card-hover hover:-translate-y-1.5 hover:border-primary/40 dark:hover:border-primary-light/40 ${isCarousel ? 'swiper-product-card max-w-[260px]' : 'section-animate'}`;
    Object.assign(card.dataset, { id: product.id, category: product.category, base_size: product.base_size, title: product.title.toLowerCase() });
    
    const priceHtml = isOnSale 
        ? `<p class="price text-lg font-bold text-red-600 dark:text-red-400 mt-2"><span class="original-price">${formatPrice(product.original_price)}</span>${formatPrice(product.price)} <span class="currency text-sm font-normal text-light-text-muted dark:text-dark-text-muted mr-0.5">د.ع</span></p>`
        : `<p class="price text-lg font-bold text-primary dark:text-primary-light mt-2">${formatPrice(product.price)} <span class="currency text-sm font-normal text-light-text-muted dark:text-dark-text-muted mr-0.5">د.ع</span></p>`;

    card.innerHTML = `
        <div class="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700 product-card-image-container">
             <img src="${img1}" alt="${product.title}" loading="lazy" class="product-card-img w-full h-full object-contain" onerror="if(this.src!=='${ph1}'){this.src='${ph1}';this.classList.add('img-error','object-scale-down');}this.onerror=null;">
             <img src="${img2}" alt="${product.title}" loading="lazy" class="product-card-img-hover w-full h-full object-contain" onerror="if(this.src!=='${ph2}'){this.src='${ph2}';this.classList.add('img-error','object-scale-down');}this.onerror=null;">
             ${isOnSale ? '<span class="sale-badge">تخفيض!</span>' : ''}
            <div class="badges-container absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                ${product.availability === 'in stock' ? `<span class="badge badge-stock text-xs font-medium py-1 px-2.5 rounded-full shadow-sm border border-white/20 bg-success-DEFAULT text-success-text">متوفر</span>` : `<span class="badge badge-out-stock text-xs font-medium py-1 px-2.5 rounded-full shadow-sm border border-white/20 bg-error-DEFAULT text-error-text">غير متوفر</span>`}
                ${product.is_new ? `<span class="badge badge-new text-xs font-medium py-1 px-2.5 rounded-full shadow-sm border border-white/20 bg-info-DEFAULT text-info-text">جديد <i class="fas fa-fire text-xs"></i></span>` : ''}
            </div>
            <div class="product-card-actions absolute top-3 right-3 z-20 flex flex-col gap-2.5 opacity-0 group-hover:opacity-100 transform translate-y-2 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                <button class="cart-btn btn-icon bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm shadow-sm ${inCart?'is-in-cart':''}" data-id="${product.id}" aria-label="${inCart?'إزالة من السلة':'إضافة للسلة'}"><i class="text-base ${inCart?'fas fa-check-circle text-success-DEFAULT dark:text-success-light':'fas fa-cart-plus'}"></i></button>
                <button class="view-details-btn btn-icon bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm shadow-sm" data-id="${product.id}" aria-label="عرض التفاصيل"><i class="fas fa-eye text-base"></i></button>
            </div>
        </div>
        <div class="product-card-info p-4 pt-3 text-center border-t border-light-border/50 dark:border-dark-border/50 flex-grow flex flex-col justify-between min-h-[100px]">
            <h3 class="title text-base font-semibold text-light-text-primary dark:text-dark-text-primary mb-1.5 leading-snug h-[2.8em] overflow-hidden line-clamp-2">${product.title}</h3>${priceHtml}
        </div>`;
    
    const stopProp = (e) => e.stopPropagation();
    card.querySelector('.cart-btn')?.addEventListener('click', (e) => { stopProp(e); toggleCart(product.id); });
    card.querySelector('.view-details-btn')?.addEventListener('click', (e) => { stopProp(e); openDetailPanel(product.id); });
    card.addEventListener('click', (e) => { if (!e.target.closest('button')) openDetailPanel(product.id); });

    if (isCarousel) {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide !w-auto !h-auto flex-shrink-0 flex justify-center';
        slide.appendChild(card); return slide;
    }
    return card;
};

// --- Modal & Overlay Management ---
const setBodyScrollLock = (lock) => {
    const shouldLock = lock || (activeModalOrOverlay?.style.display === 'flex') || (productDetailPanel?.classList.contains('visible')) || isMobileMenuOpen || isManagementPanelOpen || (activeManagementModal?.style.display === 'flex');
    document.body.style.overflow = shouldLock ? 'hidden' : '';
};
const openOverlay = (el) => {
    if (!el || activeModalOrOverlay === el) return;
    if (isManagementPanelOpen && !el.classList.contains('admin-modal-overlay')) return;
    if (activeModalOrOverlay) closeOverlay(true);
    if (productDetailPanel?.classList.contains('visible')) closeDetailPanel(true);
    activeModalOrOverlay = el; el.style.display = 'flex';
    requestAnimationFrame(() => { el.classList.add('visible'); setTimeout(() => el.querySelector('input, button, select')?.focus(), 50); });
    setBodyScrollLock(true); el.dispatchEvent(new CustomEvent('overlayOpened'));
};
const closeOverlay = (instant = false) => {
    if (!activeModalOrOverlay) return;
    const el = activeModalOrOverlay; activeModalOrOverlay = null;
    el.classList.remove('visible');
    setTimeout(() => { el.style.display = 'none'; setBodyScrollLock(false); el.dispatchEvent(new CustomEvent('overlayClosed')); }, instant ? 0 : 300);
};
const openManagementModal = (el, focusEl = null) => {
    if (!el) return;
    if (activeManagementModal) closeManagementModal(true);
    activeManagementModal = el; el.style.display = 'flex';
    requestAnimationFrame(() => { el.classList.add('visible'); if (focusEl) setTimeout(() => focusEl.querySelector('input, button')?.focus(), 50); });
    setBodyScrollLock(true); el.dispatchEvent(new CustomEvent('managementModalOpened'));
};
const closeManagementModal = (instant = false) => {
    if (!activeManagementModal) return;
    const el = activeManagementModal; activeManagementModal = null;
    el.classList.remove('visible');
    setTimeout(() => { el.style.display = 'none'; setBodyScrollLock(false); el.dispatchEvent(new CustomEvent('managementModalClosed')); }, instant ? 0 : 300);
};

// --- Recently Viewed ---
const addRecentlyViewed = (id) => {
    if (!id) return;
    let viewed = JSON.parse(localStorage.getItem('mqRecentlyViewed_v1')) || [];
    viewed = [Number(id), ...viewed.filter(pid => Number(pid) !== Number(id))].slice(0, MAX_RECENTLY_VIEWED);
    localStorage.setItem('mqRecentlyViewed_v1', JSON.stringify(viewed)); renderRecentlyViewed();
};
const renderRecentlyViewed = () => {
    if (!recentlyViewedWrapper) return;
    const viewedIds = JSON.parse(localStorage.getItem('mqRecentlyViewed_v1')) || [];
    const viewedProducts = viewedIds.map(id => products.find(p => p && Number(p.id) === Number(id))).filter(Boolean);
    recentlyViewedSection.classList.toggle('hidden', viewedProducts.length === 0);
    recentlyViewedEmpty.classList.toggle('hidden', viewedProducts.length > 0);
    if (viewedProducts.length > 0) {
        recentlyViewedWrapper.innerHTML = ''; recentlyViewedWrapper.classList.add('simple-grid');
        viewedProducts.forEach((p, i) => {
            const card = createProductCard(p, false);
            if (card) { 
                card.classList.add('recently-viewed-card'); card.style.transitionDelay = `${i * 60}ms`;
                recentlyViewedWrapper.appendChild(card); if (sectionObserver) sectionObserver.observe(card); else card.classList.add('visible', 'opacity-100', 'translate-y-0');
            }
        });
    }
};

// --- Product Detail Panel ---
const openDetailPanel = (id) => {
    const product = products.find(p => p && Number(p.id) === Number(id));
    if (!product || !productDetailPanel || isPanelOpening) return;
    if (activeModalOrOverlay) closeOverlay(true); if (isManagementPanelOpen) requestAdminAuthAndTogglePanel(false);
    isPanelOpening = true; currentProductIdForDetail = Number(id);
    const inCart = isInCart(id), inStock = product.availability === 'in stock';
    const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    const phBg = theme === 'dark' ? '1E293B' : 'F8FAFC', phTxt = theme === 'dark' ? '9CA3AF' : '6B7280';
    const ph1 = `https://placehold.co/600x600/${phBg}/${phTxt}?text=صورة+1&font=cairo`, ph2 = `https://placehold.co/600x600/${phBg}/${phTxt}?text=صورة+2&font=cairo`;
    
    let priceHtml = `<span id="detail-panel-price" class="price-value text-xl font-bold text-primary dark:text-primary-light">${formatPrice(product.price)}</span>`;
    if (product.on_sale && product.original_price && parseFormattedPrice(product.original_price) > parseFormattedPrice(product.price)) {
        priceHtml = `<span class="original-price mr-2">${formatPrice(product.original_price)}</span><span id="detail-panel-price" class="price-value text-xl font-bold text-red-600 dark:text-red-400">${formatPrice(product.price)}</span>`;
    }

    let slides = '';
    [product.image1, product.image2].forEach((url, i) => {
        const ph = i===0?ph1:ph2;
        if ((url && isValidImageUrl(url) && !(i===1 && url===product.image1)) || (i===0)) {
             slides += `<div class="swiper-slide"><div class="zoom-container w-full h-full"><img src="${url||ph}" alt="${product.title}" class="detail-swiper-image zoom-image" loading="eager" onerror="if(this.src!=='${ph}'){this.src='${ph}';this.classList.add('img-error');}this.onerror=null;"></div></div>`;
        }
    });

    productDetailContent.innerHTML = `
        <div class="detail-panel-image-wrapper aspect-square mb-6 relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border border-light-border/50 dark:border-dark-border/50">
            ${product.on_sale && product.original_price ? '<span class="sale-badge absolute top-2 right-2 z-10 text-xs">تخفيض!</span>' : ''}
            <div class="swiper detail-panel-swiper"><div class="swiper-wrapper">${slides}</div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>
        </div>
        <h2 class="detail-panel-title text-2xl md:text-3xl font-bold font-heading text-light-text-primary dark:text-dark-text-primary leading-tight mb-4">${product.title}</h2>
        <div class="detail-panel-info flex flex-col gap-3 p-4 bg-light-surface dark:bg-dark-background rounded-lg border border-light-border dark:border-dark-border shadow-inner-sm mb-6">
             <div class="info-row flex justify-between items-center pb-3 border-b border-dashed border-light-border/50 dark:border-dark-border/50 text-base">
                <span class="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary font-medium"><i class="fas fa-ruler-combined text-base text-accent"></i>المقاس:</span>
                <div class="flex items-center gap-2"><span class="info-value size-badge bg-primary dark:bg-primary-light text-primary-text dark:text-dark-text-primary py-1 px-3 rounded-full text-sm font-bold">${product.size}</span><button id="detail-panel-size-guide-btn" class="btn-icon btn-icon-sm" title="عرض دليل المقاسات"><i class="fas fa-book-open text-sm"></i></button></div>
            </div>
            <div class="info-row flex justify-between items-center pb-3 border-b border-dashed border-light-border/50 dark:border-dark-border/50 text-base">
                <span class="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary font-medium"><i class="fas fa-tag text-base text-accent"></i>السعر:</span>
                <div class="price-container flex items-baseline gap-1 justify-end">${priceHtml}<span class="price-currency text-xs font-medium text-light-text-muted dark:text-dark-text-muted"> د.ع</span></div>
            </div>
            <div class="info-row flex justify-between items-center pb-3 border-b border-dashed border-light-border/50 dark:border-dark-border/50 text-base">
                <span class="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary font-medium"><i class="fas fa-box-open text-base text-accent"></i>التوفر:</span>
                <span class="info-value font-semibold ${inStock?'text-success-dark dark:text-success-light':'text-error-DEFAULT'} flex items-center gap-1.5"><i class="fas ${inStock?'fa-check-circle':'fa-times-circle'} text-sm"></i> ${inStock?'متوفر حالياً':'غير متوفر حالياً'}</span>
            </div>
            ${product.stock_level === 'low' ? `<div class="info-row low-stock-row flex justify-between items-center text-base"><span class="flex items-center gap-2 font-medium"><i class="fas fa-exclamation-triangle text-warning-DEFAULT"></i>الحالة:</span><span class="text-warning-dark dark:text-warning-light font-semibold">قطع أخيرة متوفرة</span></div>` : ''}
        </div>
        <div class="detail-panel-description-section mt-6 mb-6">
            <h3 class="text-lg font-semibold mb-2 pb-2 border-b border-light-border dark:border-dark-border">الوصف التفصيلي</h3>
            <p class="text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">${product.description || "لا يوجد وصف."}</p>
        </div>
        <div class="detail-panel-actions mt-8 flex flex-col gap-3">
            <button id="detail-panel-order-btn" data-id="${product.id}" class="btn btn-primary w-full py-3.5 text-lg" ${!inStock?'disabled':''}><i class="fas fa-truck mr-2"></i> ${inStock?'اطلب هذا المنتج الآن':'غير متوفر حالياً للطلب'}</button>
            <button id="detail-panel-cart-btn" data-id="${product.id}" class="cart-btn btn ${inCart?'btn-success is-in-cart':'btn-secondary'} w-full py-3 text-lg"><i class="text-lg ${inCart?'fas fa-check-circle':'fas fa-cart-plus'}"></i><span class="button-text mr-2">${inCart?'تمت الإضافة (إزالة؟)':'إضافة للسلة'}</span></button>
        </div>`;
    
    const orderBtn = productDetailContent.querySelector('#detail-panel-order-btn'), cartBtn = productDetailContent.querySelector('#detail-panel-cart-btn'), sgBtn = productDetailContent.querySelector('#detail-panel-size-guide-btn');
    if(orderBtn && inStock) orderBtn.onclick = (e) => { e.preventDefault(); openOrderModal(currentProductIdForDetail); }; else if(orderBtn) orderBtn.classList.add('btn-disabled-visual');
    if(cartBtn) cartBtn.onclick = () => toggleCart(currentProductIdForDetail);
    if(sgBtn) sgBtn.onclick = openSizeGuideModal;

    requestAnimationFrame(() => {
        if (typeof Swiper !== 'undefined') {
             if (detailSwiperInstance) { detailSwiperInstance.destroy(true, true); detailSwiperInstance = null; }
             detailSwiperInstance = new Swiper(productDetailContent.querySelector('.detail-panel-swiper'), { slidesPerView:1, spaceBetween:10, loop:productDetailContent.querySelectorAll('.swiper-slide').length>1, pagination:{el:'.swiper-pagination',clickable:true}, navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}, keyboard:{enabled:true} });
        }
        const zContainers = productDetailContent.querySelectorAll('.zoom-container');
        zContainers.forEach(c => {
            const img = c.querySelector('.zoom-image'); if(!img) return;
            c.onmousemove = (e) => { if(img.naturalWidth===0)return; const r=c.getBoundingClientRect(), x=((e.clientX-r.left)/c.offsetWidth)*100, y=((e.clientY-r.top)/c.offsetHeight)*100; img.style.cssText = `transition:transform 0.1s linear; transform-origin:${x}% ${y}%; transform:scale(1.75);`; };
            c.onmouseleave = () => { img.style.cssText = 'transition:transform 0.2s ease-out; transform-origin:center; transform:scale(1);'; };
        });
    });
    
    productDetailPanel.classList.remove('hidden'); productDetailBackdrop.style.display='block';
    requestAnimationFrame(() => { productDetailPanel.classList.add('visible', 'opacity-100', 'translate-x-0'); productDetailBackdrop.classList.add('visible', 'opacity-100'); });
    setBodyScrollLock(true); productDetailPanel.scrollTop = 0; addRecentlyViewed(currentProductIdForDetail);
    setTimeout(() => isPanelOpening = false, 400);
};
const closeDetailPanel = (instant = false) => {
    if (!productDetailPanel || !productDetailPanel.classList.contains('visible') || isPanelOpening) return;
    if (detailSwiperInstance) { detailSwiperInstance.destroy(true, true); detailSwiperInstance = null; }
    productDetailPanel.classList.remove('visible', 'opacity-100', 'translate-x-0'); productDetailBackdrop.classList.remove('visible', 'opacity-100');
    setTimeout(() => { productDetailPanel.classList.add('hidden'); productDetailBackdrop.style.display='none'; currentProductIdForDetail=null; productDetailContent.innerHTML=''; setBodyScrollLock(false); }, instant?0:400);
};

// --- Order Modal ---
const openOrderModal = (productId = null) => {
    if (productDetailPanel?.classList.contains('visible')) closeDetailPanel(true);
    if (activeModalOrOverlay) closeOverlay(true); if (isManagementPanelOpen) requestAdminAuthAndTogglePanel(false);
    
    let total = 0, listHtml = ''; orderSummarySingleItemDetails.classList.add('hidden'); orderSummaryItemsList.classList.add('hidden');
    cartItemsForOrder = []; orderForm?.reset(); formErrorMessage?.classList.add('hidden'); orderForm?.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

    if (productId) {
        const p = products.find(x => x && Number(x.id) === Number(productId));
        if (!p || p.availability !== 'in stock') return alert("عفواً، لا يمكن طلب هذا المنتج حالياً.");
        orderSummarySingleItemDetails.classList.remove('hidden');
        orderSummaryMainTitle.innerHTML = `<i class="fas fa-receipt text-lg"></i> ملخص طلب لمنتج واحد`;
        orderSummaryTitle.textContent = p.title; orderSummarySize.textContent = p.size; orderSummaryPrice.textContent = formatPrice(p.price);
        orderFormProductId.value=p.id; orderFormProductTitle.value=p.title; orderFormProductSize.value=p.size; orderFormProductPrice.value=p.price;
        total = parseFormattedPrice(p.price) || 0;
    } else {
        cartItemsForOrder = cart.map(id => products.find(x => Number(x.id) === Number(id))).filter(p => p && p.availability === 'in stock');
        if (cartItemsForOrder.length === 0) return alert("لا توجد منتجات متاحة للطلب في السلة.");
        orderSummaryItemsList.classList.remove('hidden');
        cartItemsForOrder.forEach(item => {
            const price = parseFormattedPrice(item.price)||0; total+=price;
            listHtml += `<li class="flex justify-between border-b border-light-border/50 dark:border-dark-border/50 pb-3 mb-3"><span class="flex-1 leading-tight">${item.title} <span class="text-sm text-light-text-muted">(${item.size})</span></span><span class="font-semibold text-primary dark:text-primary-light">${formatPrice(item.price)} د.ع</span></li>`;
        });
        orderSummaryItemsList.innerHTML = listHtml + `<li class="flex justify-between pt-3 mt-3 border-t border-primary/20 font-bold text-lg"><span>الإجمالي:</span><span class="text-primary dark:text-primary-light">${total.toLocaleString('ar-IQ')} د.ع</span></li>`;
        orderSummaryMainTitle.innerHTML = `<i class="fas fa-receipt text-lg"></i> ملخص طلب (${cartItemsForOrder.length} منتجات)`;
    }
    openOverlay(orderFormModalOverlay);
};
const closeOrderModal = () => closeOverlay();
const prepareOrderForAllCartItems = () => { closeCartModal(); setTimeout(() => openOrderModal(null), 50); };

// --- Cart Modal ---
const openCartModal = () => { renderCartItems(); openOverlay(cartModalOverlay); };
const closeCartModal = () => closeOverlay();
const renderCartItems = () => {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    const cartProducts = cart.map(id => products.find(p => Number(p.id) === Number(id))).filter(Boolean);
    if (cartProducts.length === 0) {
        cartEmptyMessage.classList.remove('hidden'); cartItemsContainer.classList.remove('has-items'); cartOrderAllBtn.disabled = true;
        cartOrderAllBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        cartEmptyMessage.classList.add('hidden'); cartItemsContainer.classList.add('has-items');
        const frag = document.createDocumentFragment();
        let availableCount = 0;
        cartProducts.forEach(p => {
            if (p.availability === 'in stock') availableCount++;
            const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
            const ph = `https://placehold.co/80x96/${theme==='dark'?'374151':'E5E7EB'}/${theme==='dark'?'9CA3AF':'6B7280'}?text=Img&font=cairo`;
            const priceDisplay = (p.on_sale && p.original_price) ? `<span class="original-price text-xs">${formatPrice(p.original_price)}</span><span class="font-bold text-red-600 dark:text-red-400">${formatPrice(p.price)}</span>` : `<span class="font-bold text-primary dark:text-primary-light">${formatPrice(p.price)}</span>`;
            
            const el = document.createElement('div');
            el.className = `cart-item bg-light-background dark:bg-dark-background flex items-center gap-4 p-3 rounded-lg border border-light-border dark:border-dark-border shadow-sm w-full ${p.availability!=='in stock'?'unavailable opacity-60 grayscale-[80%] border-dashed':''}`;
            el.innerHTML = `
                <img src="${p.image1||ph}" class="w-[60px] h-[75px] object-contain rounded border bg-white dark:bg-dark-surface" onerror="if(this.src!=='${ph}'){this.src='${ph}';this.classList.add('img-error');}">
                <div class="flex-grow overflow-hidden min-w-0"><p class="text-sm font-semibold line-clamp-2">${p.title}</p><p class="text-xs text-muted">المقاس: <span class="font-medium bg-light-border/50 px-1 rounded">${p.size}</span></p><p class="text-sm">${priceDisplay} <span class="text-xs">د.ع</span></p>${p.availability!=='in stock'?'<p class="text-xs text-error-DEFAULT">(غير متوفر)</p>':''}</div>
                <div class="flex flex-col gap-2 items-center"><button class="cart-remove-btn btn-icon btn-icon-danger btn-icon-sm" data-id="${p.id}"><i class="fas fa-trash-alt"></i></button><button class="cart-order-single-btn btn-icon btn-icon-primary btn-icon-sm" data-id="${p.id}" ${p.availability!=='in stock'?'disabled':''}><i class="fas fa-truck"></i></button></div>`;
            
            el.querySelector('.cart-remove-btn').onclick = (e) => { e.stopPropagation(); toggleCart(p.id); };
            if (p.availability === 'in stock') el.querySelector('.cart-order-single-btn').onclick = (e) => { e.stopPropagation(); closeCartModal(); setTimeout(() => openOrderModal(p.id), 50); };
            frag.appendChild(el);
        });
        cartItemsContainer.appendChild(frag);
        cartOrderAllBtn.disabled = availableCount === 0; cartOrderAllBtn.classList.toggle('opacity-50', availableCount === 0);
    }
};

// --- Policy Modals ---
const openPrivacyPolicyModal = () => openOverlay(privacyPolicyModalOverlay);
const closePrivacyPolicyModal = () => closeOverlay();
const openReturnPolicyModal = () => openOverlay(returnPolicyModalOverlay);
const closeReturnPolicyModal = () => closeOverlay();
const openSizeGuideModal = () => openOverlay(sizeGuideModalOverlay);
const closeSizeGuideModal = () => closeOverlay();

// --- Filtering & Display ---
const applyFilters = (scroll = false, instant = false) => {
    currentSearchTerm = overlaySearchInput?.value.trim().toLowerCase() || '';
    currentSizeFilter = overlaySizeSelect?.value || 'all';
    activeCategory = document.querySelector('#category-cards-container .category-card.active')?.dataset.category || 'all';
    
    currentFilteredProducts = products.filter(p => {
        if (!p) return false;
        const matchCat = activeCategory === 'all' || p.category === activeCategory;
        const matchSearch = !currentSearchTerm || (p.title && p.title.toLowerCase().includes(currentSearchTerm)) || (p.description && p.description.toLowerCase().includes(currentSearchTerm)) || String(p.id).includes(currentSearchTerm);
        const matchSize = currentSizeFilter === 'all' || String(p.size).toUpperCase().includes(currentSizeFilter.toUpperCase()) || String(p.base_size).toUpperCase() === currentSizeFilter.toUpperCase();
        return matchCat && matchSearch && matchSize;
    });
    
    const activeData = categoryData[activeCategory];
    if (categoryTitleMain) categoryTitleMain.textContent = activeCategory === 'all' ? 'جميع المنتجات' : activeData?.name;
    if (categoryDescription) categoryDescription.textContent = activeData?.description || `عرض ${currentFilteredProducts.length} منتج.`;
    clearFiltersBtn?.classList.toggle('hidden', activeCategory==='all' && !currentSearchTerm && currentSizeFilter==='all');
    
    productGrid.innerHTML = ''; displayedProductCount = 0;
    if (currentFilteredProducts.length === 0 && initialProductsFetched) {
        noResultsDiv?.classList.remove('hidden'); productGrid?.classList.add('hidden'); loadMoreButton?.parentElement?.classList.add('hidden');
    } else {
        noResultsDiv?.classList.add('hidden'); productGrid?.classList.remove('hidden'); loadMoreButton?.parentElement?.classList.remove('hidden');
        loadMoreProducts(instant);
    }
    if (scroll) setTimeout(() => { const t = document.getElementById('products'); if(t) window.scrollTo({ top: t.offsetTop - (header?.offsetHeight||70) - 20, behavior: instant?'auto':'smooth' }); }, instant?0:100);
};
const debouncedApplyFilters = debounce(applyFilters, 350);
const loadMoreProducts = (instant = false) => {
    const next = currentFilteredProducts.slice(displayedProductCount, displayedProductCount + productsPerLoad);
    if (next.length === 0) { loadMoreButton.parentElement?.classList.add('hidden'); return; }
    const frag = document.createDocumentFragment();
    next.forEach((p, i) => { const card = createProductCard(p, false); if(card){ if(!instant) card.style.transitionDelay = `${i*60}ms`; frag.appendChild(card); if(sectionObserver && !instant) sectionObserver.observe(card); else card.classList.add('visible','opacity-100','translate-y-0'); }});
    productGrid.appendChild(frag); displayedProductCount += next.length;
    loadMoreButton.parentElement?.classList.toggle('hidden', displayedProductCount >= currentFilteredProducts.length);
    loadMoreButton.innerHTML = '<i class="fas fa-chevron-down mr-2 text-sm"></i> عرض المزيد'; loadMoreButton.disabled = false;
};
const clearAllFilters = () => {
    activeCategory='all'; currentSearchTerm=''; currentSizeFilter='all';
    if(overlaySearchInput) overlaySearchInput.value=''; if(overlaySizeSelect) overlaySizeSelect.value='all';
    document.querySelectorAll('.category-card').forEach(el => el.classList.toggle('active', el.dataset.category==='all'));
    applyFilters(true, true); if(searchFilterOverlay?.classList.contains('visible')) closeOverlay();
};

// --- Category Cards Population ---
const populateCategoryCards = () => {
    if (!categoryCardsContainer) return;
    categoryCardsContainer.innerHTML = '';
    Object.keys(categoryData).forEach(k => {
        const c = document.createElement('a'); c.href="#products"; c.dataset.category=k; c.className=`category-card group flex flex-col items-center justify-center p-4 bg-light-surface dark:bg-dark-surface border-2 border-transparent rounded-xl shadow-sm hover:shadow-lg hover:border-primary/40 transition-all ${k==='all'?'active':''}`;
        c.innerHTML = `<i class="${categoryData[k].icon} text-3xl mb-2.5 text-primary dark:text-primary-light"></i><span class="text-sm font-medium">${categoryData[k].name}</span>`;
        c.onclick = (e) => { e.preventDefault(); activeCategory=k; document.querySelectorAll('.category-card').forEach(x=>x.classList.toggle('active', x.dataset.category===k)); clearAllFilters(); applyFilters(true); };
        categoryCardsContainer.appendChild(c);
    });
};

// --- WhatsApp Order Submit ---
const handleOrderSubmit = (e) => {
    e.preventDefault(); if(!orderForm) return;
    const name = document.getElementById('customer-name'), phone = document.getElementById('customer-phone'), address = document.getElementById('customer-address');
    let valid = true, errs = []; formErrorMessage.classList.add('hidden'); orderForm.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
    if(!name.value.trim()){ errs.push("يرجى إدخال الاسم."); valid=false; name.classList.add('invalid'); }
    if(!phone.value.trim() || !phone.checkValidity()){ errs.push("رقم الهاتف غير صحيح."); valid=false; phone.classList.add('invalid'); }
    if(!address.value.trim()){ errs.push("يرجى إدخال العنوان."); valid=false; address.classList.add('invalid'); }
    if(!valid){ formErrorMessage.innerHTML=errs.join('<br>'); formErrorMessage.classList.remove('hidden'); return; }
    
    let msg = `👋 *طلب جديد من Master Quality*\n\n👤 *الاسم:* ${name.value}\n📞 *الهاتف:* ${phone.value}\n📍 *العنوان:* ${address.value}\n\n🛒 *المنتجات:*\n`;
    let total = 0;
    if (cartItemsForOrder.length > 0) {
        cartItemsForOrder.forEach((item, i) => { msg += `${i+1}. ${item.title} (${item.size}) - *${formatPrice(item.price)} د.ع*\n`; total+=parseFormattedPrice(item.price)||0; });
    } else if (orderFormProductId?.value) {
         msg += `1. ${orderFormProductTitle.value} (${orderFormProductSize.value}) - *${formatPrice(orderFormProductPrice.value)} د.ع*\n`; total=parseFormattedPrice(orderFormProductPrice.value)||0;
    }
    msg += `\n💰 *الإجمالي:* ${total.toLocaleString('ar-IQ')} د.ع\n\n_تم الإرسال من الموقع_`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    
    const btn = orderForm.querySelector('button[type="submit"]'); const oldHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> تم الإرسال!'; btn.disabled = true;
    if (cartItemsForOrder.length > 0) { cart = cart.filter(id => !cartItemsForOrder.map(x=>Number(x.id)).includes(Number(id))); localStorage.setItem('mqCart_v4', JSON.stringify(cart)); updateCartCount(); cartItemsForOrder=[]; }
    setTimeout(() => { closeOrderModal(); btn.innerHTML = oldHTML; btn.disabled = false; orderForm.reset(); }, 2000);
};

// --- Swiper & Animation ---
const initSwiper = () => {
    if (typeof Swiper === 'undefined' || !newArrivalsWrapper) return;
    const arrivals = products.filter(p => p && p.is_new).sort((a,b) => (Number(b.id)||0)-(Number(a.id)||0));
    const section = newArrivalsWrapper.closest('#new-arrivals');
    if (arrivals.length > 0) {
        section.style.display=''; newArrivalsWrapper.innerHTML='';
        arrivals.forEach(p => { const s = createProductCard(p, true); if(s) newArrivalsWrapper.appendChild(s); });
        if (swiperInstance) { swiperInstance.destroy(true, true); swiperInstance = null; }
        swiperInstance = new Swiper(newArrivalsWrapper.closest('.swiper'), { slidesPerView:'auto', spaceBetween:16, grabCursor:true, loop:arrivals.length>4, navigation:{nextEl:'.arrivals-swiper .swiper-button-next',prevEl:'.arrivals-swiper .swiper-button-prev'}, pagination:{el:'.arrivals-swiper .swiper-pagination',clickable:true}, breakpoints:{640:{spaceBetween:20},1024:{spaceBetween:24}} });
    } else section.style.display='none';
};
let sectionObserver = null;
const initSectionObserver = () => {
    const els = document.querySelectorAll('.section-animate'); if(!els.length) return;
    if (!('IntersectionObserver' in window)) return els.forEach(el => el.classList.add('visible','opacity-100','translate-y-0'));
    sectionObserver = new IntersectionObserver((entries, obs) => entries.forEach(e => { if(e.isIntersecting){ requestAnimationFrame(()=>e.target.classList.add('visible','opacity-100','translate-y-0')); obs.unobserve(e.target); } }), {threshold:0.1, rootMargin:"0px 0px -50px 0px"});
    els.forEach(el => sectionObserver.observe(el));
};

// --- Headers & Scroll ---
const handleHeaderScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 50);
    let currentId = 'hero';
    document.querySelectorAll('main section[id]').forEach(s => { if(s.offsetTop <= window.scrollY + header.offsetHeight + 50) currentId = s.id; });
    mainNavLinks.forEach(l => { const active = l.getAttribute('href') === `#${currentId}`; l.classList.toggle('active', active); l.setAttribute('aria-current', active?'page':'false'); });
};
const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (mobileNavMenu) {
        mobileNavMenu.classList.toggle('visible', isMobileMenuOpen); mobileNavMenu.classList.toggle('translate-y-0', isMobileMenuOpen); mobileNavMenu.classList.toggle('-translate-y-full', !isMobileMenuOpen);
        if(mobileNavToggle?.querySelector('i')) mobileNavToggle.querySelector('i').className = `fas ${isMobileMenuOpen?'fa-times':'fa-bars'} text-lg`;
        setBodyScrollLock(isMobileMenuOpen);
    }
};
const closeMobileMenu = () => { if (isMobileMenuOpen) toggleMobileMenu(); };

// ADDED MISSING FUNCTION HERE
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const handleScroll = () => {
    if (scrollToTopBtn) { const vis = window.scrollY > window.innerHeight * 0.6; scrollToTopBtn.classList.toggle('visible', vis); scrollToTopBtn.classList.toggle('opacity-0', !vis); scrollToTopBtn.classList.toggle('invisible', !vis); }
    handleHeaderScroll();
};

// --- Firebase & Admin Logic ---
const productsCollectionRef = () => window.db ? window.db.collection("products") : null;
const fetchProductsFromFirestore = async () => {
    const ref = productsCollectionRef(); if (!ref) return [];
    try {
        const snap = await ref.orderBy("id").get();
        const list = snap.docs.map(doc => { const d = doc.data(); return { ...d, id: Number(d.id), firestoreDocId: doc.id }; });
        initialProductsFetched = true; return list;
    } catch (e) { console.warn("Fetch failed:", e); initialProductsFetched = false; return []; }
};
const signInWithGoogle = async () => {
    if (!window.firebaseAuth) return alert("Firebase Error");
    try {
        const res = await window.firebaseAuth.signInWithPopup(new window.GoogleAuthProvider());
        if (ALLOWED_ADMIN_EMAILS.includes(res.user.email)) return res.user;
        alert("ليس لديك صلاحية مدير."); await window.firebaseAuth.signOut(); return null;
    } catch (e) { alert("خطأ تسجيل الدخول: " + e.message); return null; }
};
const signOutAdmin = async () => { try { await window.firebaseAuth?.signOut(); } catch (e) { console.error(e); } };

// --- Admin UI Updates ---
const updateAdminStats = () => {
    if (!adminStatsContainer) return;
    const total = products.length, inStock = products.filter(p => p.availability === 'in stock').length, isNew = products.filter(p => p.is_new).length;
    adminStatsContainer.innerHTML = `<div class="admin-stat-card"><span class="stat-value">${total}</span><span class="stat-label">الكل</span></div><div class="admin-stat-card"><span class="stat-value">${inStock}</span><span class="stat-label">متوفر</span></div><div class="admin-stat-card"><span class="stat-value">${total-inStock}</span><span class="stat-label">نافذ</span></div><div class="admin-stat-card"><span class="stat-value">${isNew}</span><span class="stat-label">جديد</span></div>`;
};
const renderProductManagementTable = (term = '') => {
    if (!productManagementTableBody) return;
    productManagementTableBody.innerHTML = '';
    const filtered = products.filter(p => !term || String(p.id).includes(term) || p.title.toLowerCase().includes(term)).sort((a, b) => (Number(a.id)||0)-(Number(b.id)||0));
    adminTotalProductsCount.textContent = `العدد: ${filtered.length}`;
    if (filtered.length === 0) return productManagementTableBody.innerHTML = '<tr><td colspan="9" class="text-center py-5">لا توجد نتائج</td></tr>';
    
    filtered.forEach(p => {
        const row = productManagementTableBody.insertRow(); if (p.availability !== 'in stock') row.classList.add('product-out-of-stock');
        const priceDisplay = (p.on_sale && p.original_price) ? `<strong class="text-red-600">${formatPrice(p.price)}</strong>` : formatPrice(p.price);
        row.innerHTML = `<td><img src="${p.image1||''}" class="admin-table-thumbnail" onerror="this.src='https://placehold.co/80x80'"></td><td class="id-cell" onclick="navigator.clipboard.writeText('${p.id}')">${p.id}</td><td class="max-w-[200px] truncate">${p.title}</td><td>${p.original_price?formatPrice(p.original_price):'-'}</td><td>${priceDisplay}</td><td>${categoryData[p.category]?.name||p.category}</td><td>${p.availability==='in stock'?'متوفر':'غير متوفر'}</td><td>${p.on_sale?'نعم':'لا'}</td><td><div class="admin-product-actions"><button class="quick-view-btn btn btn-sm btn-info" data-id="${p.id}"><i class="fas fa-eye"></i></button><button class="edit-btn btn btn-sm btn-secondary" data-id="${p.id}"><i class="fas fa-edit"></i></button><button class="del-btn btn btn-sm btn-danger" data-id="${p.id}"><i class="fas fa-trash"></i></button></div></td>`;
        row.querySelector('.quick-view-btn').onclick = () => openDetailPanel(p.id);
        row.querySelector('.edit-btn').onclick = () => openProductForm(products.find(x => Number(x.id)===Number(p.id)));
        row.querySelector('.del-btn').onclick = () => deleteProductFromManager(p.id);
    });
};
const debouncedRenderAdminTable = debounce(renderProductManagementTable, 300);

// --- Admin Operations (CRUD & Import/Export) ---
const initializeProductsAndUI = async (isAdmin = false) => {
    if (!window.db) {
        console.warn("Firestore not initialized. Rendering empty state or local products.");
        if(noResultsDiv && products.length === 0) { noResultsDiv.classList.remove('hidden'); noResultsDiv.innerHTML = '<p class="text-error text-lg p-10">فشل الاتصال بقاعدة البيانات.</p>'; }
        refreshAllDynamicContent(); return;
    }
    let loaded = (isAdmin && currentUser && ALLOWED_ADMIN_EMAILS.includes(currentUser.email)) || (!isAdmin && !initialProductsFetched) ? await fetchProductsFromFirestore() : products;
    products = loaded.map(p => ({...p, on_sale: !!p.on_sale, is_new: !!p.is_new, description: p.description||''}));
    refreshAllDynamicContent();
};
const refreshAllDynamicContent = () => {
    applyFilters(false, true); initSwiper(); renderRecentlyViewed(); updateCartCount();
    if (cartModalOverlay?.classList.contains('visible')) renderCartItems();
    if (isManagementPanelOpen) { updateAdminStats(); renderProductManagementTable(adminProductSearchInput?.value.trim()); }
};
const requestAdminAuthAndTogglePanel = async (force = null) => {
    const shouldOpen = force !== null ? force : !isManagementPanelOpen;
    if (!shouldOpen) {
        isManagementPanelOpen = false; if(activeManagementModal) closeManagementModal(true);
        productManagementPanel.classList.remove('visible'); setTimeout(() => { productManagementPanel.style.display='none'; setBodyScrollLock(false); }, 300);
        return;
    }
    if (!currentUser) await signInWithGoogle(); else if (!ALLOWED_ADMIN_EMAILS.includes(currentUser.email)) { alert("غير مصرح"); await signOutAdmin(); }
    else {
        isManagementPanelOpen = true; if(activeModalOrOverlay) closeOverlay(true);
        productManagementPanel.style.display = 'flex'; requestAnimationFrame(() => productManagementPanel.classList.add('visible')); setBodyScrollLock(true);
        if (!initialProductsFetched) await initializeProductsAndUI(true); else refreshAllDynamicContent();
        if(adminUserInfo) adminUserInfo.innerHTML = `Admin: ${currentUser.email}`; adminUserInfo?.classList.remove('hidden');
    }
};
const openProductForm = (p = null) => {
    productForm.reset(); formValidationError.classList.add('hidden'); editingProductId = p ? p.id : null;
    productFormTitleElement.textContent = p ? `تعديل: ${p.title}` : 'إضافة منتج';
    if (p) {
        pfId.value=p.id; pfId.disabled=true; pfTitle.value=p.title; pfPrice.value=p.price; pfOriginalPrice.value=p.original_price||''; pfOnSale.checked=p.on_sale;
        pfImage1.value=p.image1; pfImage2.value=p.image2||''; pfSize.value=p.size; pfBaseSize.value=p.base_size; pfCategory.value=p.category; pfAvailability.value=p.availability; pfDescription.value=p.description; pfIsNew.checked=p.is_new;
        pfUpdateIdContainer.style.display='none';
    } else { pfId.disabled=false; pfUpdateId.checked=true; pfUpdateIdContainer.style.display='flex'; }
    pfOriginalPrice.parentElement.style.display = pfOnSale.checked ? 'block' : 'none';
    openManagementModal(productManagementFormContainer, productForm);
};
const handleProductFormSubmit = async (e) => {
    e.preventDefault(); if (!window.db) return;
    formValidationError.classList.add('hidden'); let errs = [];
    if(!pfTitle.value) errs.push("العنوان مطلوب"); if(!pfPrice.value) errs.push("السعر مطلوب");
    if(pfOnSale.checked && !pfOriginalPrice.value) errs.push("السعر الأصلي مطلوب للتخفيض");
    if(errs.length){ formValidationError.innerHTML=errs.join('<br>'); formValidationError.classList.remove('hidden'); return; }
    
    const data = {
        title: pfTitle.value.trim(), price: pfPrice.value.trim(), original_price: pfOnSale.checked?pfOriginalPrice.value.trim():null, on_sale: pfOnSale.checked,
        image1: pfImage1.value.trim(), image2: pfImage2.value.trim()||null, size: pfSize.value.trim(), base_size: pfBaseSize.value, category: pfCategory.value, availability: pfAvailability.value, description: pfDescription.value.trim()||'', is_new: pfIsNew.checked
    };
    try {
        const ref = productsCollectionRef();
        if (editingProductId) { await ref.doc(String(editingProductId)).set({...data, id: Number(editingProductId)}, {merge:true}); }
        else {
            let newId = pfId.value.trim();
            if (!newId && pfUpdateId.checked) { const last = await ref.orderBy("id", "desc").limit(1).get(); newId = last.empty ? 1 : (Number(last.docs[0].data().id)||0)+1; }
            if (!newId) throw new Error("مطلوب ID");
            if ((await ref.doc(String(newId)).get()).exists) throw new Error("ID موجود مسبقاً");
            await ref.doc(String(newId)).set({...data, id: Number(newId)});
        }
        alert("تم الحفظ بنجاح"); closeManagementModal(); await initializeProductsAndUI(true);
    } catch (e) { alert("خطأ: " + e.message); }
};
const deleteProductFromManager = async (id) => {
    if(confirm(`حذف المنتج ${id}؟`) && window.db) {
        try {
            await productsCollectionRef().doc(String(id)).delete();
            cart = cart.filter(c => c !== Number(id)); localStorage.setItem('mqCart_v4', JSON.stringify(cart));
            alert("تم الحذف"); await initializeProductsAndUI(true);
        } catch (e) { alert("فشل الحذف"); }
    }
};
const deleteAllProductsFromManager = async () => {
    if(confirm("حذف كل المنتجات؟") && prompt("اكتب 'confirm'")==='confirm' && window.db) {
        const batch = window.db.batch(), snaps = await productsCollectionRef().get();
        snaps.forEach(d => batch.delete(d.ref)); await batch.commit();
        cart=[]; localStorage.setItem('mqCart_v4', '[]'); alert("تم حذف الجميع"); await initializeProductsAndUI(true);
    }
};
const convertToCSV = (arr) => {
    if(!arr.length) return "";
    const headers = ['id','title','price','original_price','on_sale','image1','image2','size','base_size','category','availability','description','is_new'];
    return [headers.join(',')].concat(arr.map(o => headers.map(h => `"${String(o[h]===undefined?'':o[h]).replace(/"/g,'""')}"`).join(','))).join('\r\n');
};
const handleDownloadCSV = async () => {
    if(!window.db) return;
    const snap = await productsCollectionRef().orderBy("id").get(), data = snap.docs.map(d => d.data());
    const blob = new Blob(["\uFEFF"+convertToCSV(data)], {type:'text/csv;charset=utf-8;'});
    const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "products.csv"; document.body.appendChild(link); link.click(); document.body.removeChild(link); closeManagementModal();
};
const parseCSV = (txt) => {
    let rows = [], cur = [], quot = false, fld = ''; txt = txt.replace(/^\uFEFF/, '');
    for (let i = 0; i < txt.length; i++) {
        let c = txt[i];
        if (c === '"') {
            if (quot && txt[i + 1] === '"') { fld += '"'; i++; } else { quot = !quot; }
        } else if (c === ',' && !quot) {
            cur.push(fld.trim()); fld = '';
        } else if ((c === '\n' || c === '\r') && !quot) {
            if (fld || cur.length) cur.push(fld.trim());
            if (cur.length) rows.push(cur);
            cur = []; fld = '';
            if (c === '\r' && txt[i + 1] === '\n') i++;
        } else {
            fld += c;
        }
    }
    if (fld || cur.length) { cur.push(fld.trim()); rows.push(cur); }
    return rows;
};
const handleProcessImport = () => {
    if (!csvFileInput?.files?.length) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
        if (!window.db) return;
        try {
            const rows = parseCSV(e.target.result), head = rows[0].map(h=>h.toLowerCase().replace(/\s/g,'_'));
            const data = rows.slice(1).map(r => {
                let obj = {}; head.forEach((h,i) => obj[h] = r[i]||'');
                return { ...obj, id: parseInt(obj.id), on_sale: obj.on_sale==='true', is_new: obj.is_new==='true' };
            }).filter(x => !isNaN(x.id));
            
            if(confirm(`استبدال المنتجات بـ ${data.length} منتج جديد؟`)) {
                const batch = window.db.batch(), old = await productsCollectionRef().get();
                old.forEach(d => batch.delete(d.ref));
                data.forEach(d => batch.set(productsCollectionRef().doc(String(d.id)), d));
                await batch.commit(); alert("تم الاستيراد"); await initializeProductsAndUI(true); closeManagementModal();
            }
        } catch (er) { alert("فشل: " + er.message); }
    };
    reader.readAsText(csvFileInput.files[0], 'UTF-8');
};

// --- Initialization & Events ---
const setupEventListeners = () => {
    window.addEventListener('scroll', debounce(handleScroll, 50), {passive:true});
    document.addEventListener('keydown', (e) => { if(e.key==='Escape'){ if(activeManagementModal) closeManagementModal(); else if(isManagementPanelOpen) requestAdminAuthAndTogglePanel(false); else if(activeModalOrOverlay) closeOverlay(); } });
    
    mobileNavToggle?.addEventListener('click', toggleMobileMenu);
    searchFilterToggleBtn?.addEventListener('click', () => openOverlay(searchFilterOverlay));
    themeToggleButton?.addEventListener('click', toggleTheme);
    cartButton?.addEventListener('click', openCartModal);
    startShoppingBtnCart?.addEventListener('click', (e) => { e.preventDefault(); closeOverlay(); window.scrollTo({top:document.getElementById('products')?.offsetTop-100, behavior:'smooth'}); });
    
    closeSearchFilterOverlayBtn?.addEventListener('click', closeOverlay);
    applyOverlayFiltersBtn?.addEventListener('click', () => { applyFilters(true, true); closeOverlay(); });
    overlaySearchInput?.addEventListener('input', () => debouncedApplyFilters(true, false));
    overlaySizeSelect?.addEventListener('change', () => applyFilters(true, true));
    clearOverlayFiltersBtn?.addEventListener('click', clearAllFilters); clearFiltersBtn?.addEventListener('click', clearAllFilters);
    
    closeDetailPanelBtn?.addEventListener('click', closeDetailPanel); productDetailBackdrop?.addEventListener('click', closeDetailPanel);
    orderFormModalCloseButton?.addEventListener('click', closeOrderModal); cartModalCloseButton?.addEventListener('click', closeCartModal);
    cartOrderAllBtn?.addEventListener('click', prepareOrderForAllCartItems);
    
    // Fixed assignments using checks instead of optional chaining assignment
    if(privacyPolicyLink) privacyPolicyLink.onclick = openPrivacyPolicyModal; 
    if(privacyPolicyModalCloseButton) privacyPolicyModalCloseButton.onclick = closePrivacyPolicyModal;
    if(privacyModalCloseBtnBottom) privacyModalCloseBtnBottom.onclick = closePrivacyPolicyModal; // Added

    if(returnPolicyLink) returnPolicyLink.onclick = openReturnPolicyModal; 
    if(returnPolicyModalCloseButton) returnPolicyModalCloseButton.onclick = closeReturnPolicyModal;
    if(returnModalCloseBtnBottom) returnModalCloseBtnBottom.onclick = closeReturnPolicyModal; // Added

    if(sizeGuideFooterLink) sizeGuideFooterLink.onclick = openSizeGuideModal; 
    if(sizeGuideModalCloseButton) sizeGuideModalCloseButton.onclick = closeSizeGuideModal;
    if(sizeGuideModalCloseBtnBottom) sizeGuideModalCloseBtnBottom.onclick = closeSizeGuideModal; // Added

    if(scrollToTopBtn) scrollToTopBtn.onclick = scrollToTop;
    
    loadMoreButton?.addEventListener('click', () => loadMoreProducts());
    
    // Admin Listeners
    productManagementToggleBtn?.addEventListener('click', () => requestAdminAuthAndTogglePanel());
    closeManagementPanelBtn?.addEventListener('click', () => requestAdminAuthAndTogglePanel(false));
    addNewProductBtn?.addEventListener('click', () => openProductForm(null));
    productForm?.addEventListener('submit', handleProductFormSubmit);
    
    closeProductFormBtn?.addEventListener('click', () => closeManagementModal());
    cancelProductFormBtn?.addEventListener('click', () => closeManagementModal()); // Added

    exportProductDataBtn?.addEventListener('click', () => openManagementModal(productExportModal));
    importProductDataBtn?.addEventListener('click', () => openManagementModal(productImportModal));
    deleteAllProductsBtn?.addEventListener('click', deleteAllProductsFromManager);
    downloadCsvBtn?.addEventListener('click', handleDownloadCSV);
    
    closeExportModalBtn?.addEventListener('click', () => closeManagementModal());
    
    closeImportModalBtn?.addEventListener('click', () => closeManagementModal());
    cancelImportBtn?.addEventListener('click', () => closeManagementModal()); // Added

    processImportBtn?.addEventListener('click', handleProcessImport);
    csvFileInput?.addEventListener('change', (e) => { if(e.target.files.length) { csvFileNameDisplay.textContent = e.target.files[0].name; processImportBtn.disabled = false; } });
    adminProductSearchInput?.addEventListener('input', () => debouncedRenderAdminTable(adminProductSearchInput.value));
    
    // Forms Click Outside
    [productManagementPanel, productManagementFormContainer, productExportModal, productImportModal].forEach(el => el?.addEventListener('click', e => { if(e.target===el && el.classList.contains('admin-modal-overlay')) closeManagementModal(); else if(e.target===el) requestAdminAuthAndTogglePanel(false); }));
    
    const yearSpan = document.getElementById('year'); if(yearSpan) yearSpan.textContent = new Date().getFullYear();
    if(pfOnSale) pfOnSale.addEventListener('change', () => pfOriginalPrice.parentElement.style.display = pfOnSale.checked ? 'block' : 'none');
    if(orderForm) { orderForm.addEventListener('submit', handleOrderSubmit); ['customer-name','customer-phone','customer-address'].forEach(id=>document.getElementById(id)?.addEventListener('input',function(){this.classList.remove('invalid')})); }
};

document.addEventListener('DOMContentLoaded', async () => {
    if (typeof firebase === 'undefined' || !window.db) {
        console.error("Firebase Missing"); products=[]; await initializeProductsAndUI(false);
    } else {
        window.firebaseAuth.onAuthStateChanged(async (u) => {
            currentUser = (u && ALLOWED_ADMIN_EMAILS.includes(u.email)) ? u : null;
            if (currentUser) { localStorage.setItem('lastAdminLogin', new Date().toLocaleString()); await initializeProductsAndUI(true); }
            else { initialProductsFetched=false; products=[]; if(isManagementPanelOpen) requestAdminAuthAndTogglePanel(false); await initializeProductsAndUI(false); }
        });
        await initializeProductsAndUI(false);
    }
    applyTheme(localStorage.getItem('mqTheme_v2') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    populateCategoryCards();
    initSectionObserver(); updateCartCount(); setupEventListeners(); handleScroll();
    console.log("App Ready");
});