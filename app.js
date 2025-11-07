// --- Product Data ---
let products = []; 

    // --- DOM Elements ---
    const htmlElement = document.documentElement;
    const header = document.getElementById('main-header');
    const mainNavLinks = document.querySelectorAll('#main-nav a.nav-link');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const mobileNavMenuLinks = mobileNavMenu?.querySelectorAll('a.nav-link');
    const productGrid = document.getElementById('product-grid-main');
    const categoryCardsContainer = document.getElementById('category-cards-container');
    const categoryHeader = document.getElementById('category-header');
    const categoryTitleMain = document.getElementById('category-title-main');
    const categoryDescription = document.getElementById('category-description');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    const noResultsDiv = document.getElementById('no-results');
    const loadMoreButton = document.getElementById('load-more-button');
    const newArrivalsWrapper = document.getElementById('new-arrivals-wrapper');
    const recentlyViewedSection = document.getElementById('recently-viewed');
    const recentlyViewedWrapper = document.getElementById('recently-viewed-wrapper');
    const recentlyViewedEmpty = document.getElementById('recently-viewed-empty');
    const searchFilterToggleBtn = document.getElementById('search-filter-toggle-btn');
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const cartButton = document.getElementById('cart-button');
    const cartCountSpan = document.getElementById('cart-count');
    const searchFilterOverlay = document.getElementById('search-filter-overlay');
    const overlayContent = searchFilterOverlay?.querySelector('.overlay-content');
    const closeSearchFilterOverlayBtn = document.getElementById('close-search-filter-overlay');
    const overlaySearchInput = document.getElementById('overlay-search-input');
    const overlaySizeSelect = document.getElementById('overlay-size-select');
    const applyOverlayFiltersBtn = document.getElementById('apply-overlay-filters');
    const clearOverlayFiltersBtn = document.getElementById('clear-overlay-filters-btn');
    const productDetailPanel = document.getElementById('product-detail-panel');
    const productDetailContent = document.getElementById('product-detail-content');
    const closeDetailPanelBtn = document.getElementById('close-detail-panel-btn');
    const productDetailBackdrop = document.getElementById('product-detail-backdrop');
    const orderFormModalOverlay = document.getElementById('order-form-modal');
    const orderFormModalContent = orderFormModalOverlay?.querySelector('.modal-content');
    const orderFormModalCloseButton = document.getElementById('modal-close-button-order');
    const cartModalOverlay = document.getElementById('cart-modal');
    const cartModalContent = cartModalOverlay?.querySelector('.modal-content');
    const cartModalCloseButton = document.getElementById('modal-close-button-cart');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartOrderAllBtn = document.getElementById('cart-order-all-btn');
    const orderForm = document.getElementById('order-form');
    const formErrorMessage = document.getElementById('form-error-message');
    const orderSummaryMainTitle = document.getElementById('order-summary-main-title');
    const orderSummarySingleItemDetails = document.getElementById('order-summary-single-item-details');
    const orderSummaryItemsList = document.getElementById('order-summary-items-list');
    const orderSummaryTitle = document.getElementById('order-summary-title');
    const orderSummarySize = document.getElementById('order-summary-size');
    const orderSummaryPrice = document.getElementById('order-summary-price');
    const orderFormProductId = document.getElementById('order-form-product-id');
    const orderFormProductTitle = document.getElementById('order-form-product-title');
    const orderFormProductSize = document.getElementById('order-form-product-size');
    const orderFormProductPrice = document.getElementById('order-form-product-price');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    const privacyPolicyLink = document.getElementById('privacy-policy-link');
    const privacyPolicyModalOverlay = document.getElementById('privacy-policy-modal');
    const privacyPolicyModalCloseButton = document.getElementById('modal-close-button-privacy');
    const privacyModalCloseBtnBottom = document.getElementById('privacy-modal-close-btn-bottom');
    const startShoppingBtnCart = document.getElementById('start-shopping-btn-cart');
    const returnPolicyLink = document.getElementById('return-policy-link');
    const returnPolicyModalOverlay = document.getElementById('return-policy-modal');
    const returnPolicyModalCloseButton = document.getElementById('modal-close-button-return');
    const returnModalCloseBtnBottom = document.getElementById('return-modal-close-btn-bottom');
    const sizeGuideFooterLink = document.getElementById('size-guide-footer-link');
    const sizeGuideModalOverlay = document.getElementById('size-guide-modal');
    const sizeGuideModalCloseButton = document.getElementById('modal-close-button-sizeguide');
    const sizeGuideModalCloseBtnBottom = document.getElementById('sizeguide-modal-close-btn-bottom');

    const productManagementToggleBtn = document.getElementById('product-management-toggle');
    const productManagementPanel = document.getElementById('product-management-panel');
    const productManagementPanelContent = productManagementPanel?.querySelector('.admin-modal-content');
    const adminPanelHeaderDiv = document.getElementById('admin-panel-header');
    const adminUserInfo = document.getElementById('admin-user-info'); 
    const adminStatsContainer = document.getElementById('admin-stats-container'); 
    const closeManagementPanelBtn = document.getElementById('close-management-panel-btn');
    const addNewProductBtn = document.getElementById('add-new-product-btn');
    const exportProductDataBtn = document.getElementById('export-product-data-btn');
    const importProductDataBtn = document.getElementById('import-product-data-btn'); 
    const deleteAllProductsBtn = document.getElementById('delete-all-products-btn');
    const productManagementTableBody = productManagementPanel?.querySelector('#product-management-table tbody');
    const adminProductSearchInput = document.getElementById('admin-product-search-input'); 
    const adminTotalProductsCount = document.getElementById('admin-total-products-count'); 


    const productManagementFormContainer = document.getElementById('product-management-form-container');
    const productForm = document.getElementById('product-form'); 
    const productFormTitleElement = document.getElementById('product-form-title');
    const formValidationError = document.getElementById('form-validation-error');
    const closeProductFormBtn = document.getElementById('close-product-form-btn');
    const cancelProductFormBtn = document.getElementById('cancel-product-form-btn');
    const pfId = document.getElementById('pf-id');
    const pfTitle = document.getElementById('pf-title');
    const pfOriginalPrice = document.getElementById('pf-original_price'); 
    const pfPrice = document.getElementById('pf-price');
    const pfOnSale = document.getElementById('pf-on_sale'); 
    const pfImage1 = document.getElementById('pf-image1');
    const pfImage2 = document.getElementById('pf-image2');
    const pfSize = document.getElementById('pf-size');
    const pfBaseSize = document.getElementById('pf-base_size');
    const pfCategory = document.getElementById('pf-category');
    const pfAvailability = document.getElementById('pf-availability');
    const pfDescription = document.getElementById('pf-description');
    const pfIsNew = document.getElementById('pf-is_new');
    const pfUpdateIdContainer = document.getElementById('pf-update-id-container');
    const pfUpdateId = document.getElementById('pf-update_id');

    const productExportModal = document.getElementById('product-export-modal');
    const closeExportModalBtn = document.getElementById('close-export-modal-btn');
    const downloadCsvBtn = document.getElementById('download-csv-btn'); 

    const productImportModal = document.getElementById('product-import-modal');
    const closeImportModalBtn = document.getElementById('close-import-modal-btn');
    const csvFileInput = document.getElementById('csv-file-input'); 
    const csvFileNameDisplay = document.getElementById('csv-file-name-display');
    const processImportBtn = document.getElementById('process-import-btn');
    const cancelImportBtn = document.getElementById('cancel-import-btn');
    const importErrorMessage = document.getElementById('import-error-message');


    // --- State & Constants ---
    const whatsappNumber = '9647778076465';
    let currentProductIdForDetail = null;
    let activeCategory = 'all';
    let cart = JSON.parse(localStorage.getItem('mqCart_v4')) || [];
    let cartItemsForOrder = [];
    let displayedProductCount = 0;
    const productsPerLoad = 12; 
    let currentFilteredProducts = [];
    let currentSearchTerm = '';
    let currentSizeFilter = 'all';
    let isMobileMenuOpen = false;
    let activeModalOrOverlay = null; 
    let activeManagementModal = null; 
    let isPanelOpening = false; 
    let swiperInstance = null; 
    let detailSwiperInstance = null; 
    const categoryData = {
        all: { name: "الكل", icon: "fas fa-tags", description: "تصفحي جميع منتجاتنا المختارة بعناية فائقة." },
        tops: { name: "هودي", icon: "fas fa-user-ninja", description: "مجموعة متنوعة من الهودي والبلوزات والقمصان العصرية والكلاسيكية." },
        dresses: { name: "تي شيرت", icon: "fas fa-vest-patches", description: "تي شيرت أنيقة وعصرية لمختلف المناسبات، من الكاجوال إلى السهرة." },
        trousers: { name: "بناطيل", icon: "fa-solid fa-person", description: "تشكيلة واسعة من البناطيل المريحة والأنيقة لجميع إطلالاتك." },
        maternity: { name: "ملابس منزلية", icon: "fas fa-person-pregnant", description: "ملابس ملابس منزلية مصممة لتوفير الراحة والأناقة خلال فترة الحمل." },
        skirts: { name: "تنانير", icon: "fas fa-chess-queen", description: "أحدث موديلات التنانير المتنوعة لجميع الأذواق والمناسبات." }
    };
    const MAX_RECENTLY_VIEWED = 8; 
    let isManagementPanelOpen = false;
    let editingProductId = null; 
    const ALLOWED_ADMIN_EMAILS = ["soso.lovr66@gmail.com", "ramysaad404@gmail.com"]; 
    let currentUser = null; 
    let initialProductsFetched = false; 
    let adminProductSearchTerm = '';


    // --- Utility Functions ---
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };
    const formatPrice = (priceString) => {
        try {
            const cleanedPrice = String(priceString).replace(/[^\d,.]/g, '').replace(/,/g, '');
            const num = parseFloat(cleanedPrice);
            if (isNaN(num)) return priceString; 
            return num.toLocaleString('ar-IQ'); 
        } catch {
            return priceString; 
        }
    };
     const parseFormattedPrice = (formattedPrice) => {
        if (typeof formattedPrice !== 'string' || !formattedPrice) return NaN;
        return parseFloat(formattedPrice.replace(/,/g, ''));
    };
    const isValidImageUrl = (url) => {
        return url && typeof url === 'string' && url.trim() !== '' && !url.startsWith('https://placehold.co');
    };


    // --- Theme Management ---
    const applyTheme = (theme) => {
      if (!htmlElement || !themeToggleButton) return;
      const icon = themeToggleButton.querySelector('i');
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
        if (icon) icon.className = 'fas fa-moon text-lg';
        localStorage.setItem('mqTheme_v2', 'dark');
      } else {
        htmlElement.classList.remove('dark');
        if (icon) icon.className = 'fas fa-sun text-lg';
        localStorage.setItem('mqTheme_v2', 'light');
      }
        document.querySelectorAll('img[src^="https://placehold.co"]').forEach(img => {
            const currentSrc = img.getAttribute('src');
            if (currentSrc && img.hasAttribute('onerror')) {
                let newSrc = currentSrc;
                const urlParts = currentSrc.split('/');
                let bgIndex = urlParts.findIndex(part => part.length === 6 && /^[0-9A-Fa-f]{6}$/.test(part));
                let textIndex = bgIndex + 1;
                if (bgIndex > -1 && textIndex < urlParts.length) {
                    const lightBg = 'F8FAFC'; const darkBg = '1E293B'; 
                    const lightMuted = '6B7280'; const darkMuted = '9CA3AF';
                    const primary = '0891B2'; const primaryLight = '67E8F9';
                    const lightSurfaceBg = 'E5E7EB'; const darkSurfaceBg = '374151';
                    const errorPlaceholder = '7F1D1D'; 
                    let currentBg = urlParts[bgIndex].toUpperCase();
                    let currentText = urlParts[textIndex].toUpperCase();
                    if (theme === 'dark') {
                        if (currentBg === lightBg) urlParts[bgIndex] = darkBg;
                        if (currentBg === lightSurfaceBg) urlParts[bgIndex] = darkSurfaceBg;
                        if (currentText === primary) urlParts[textIndex] = primaryLight;
                        if (currentText === lightMuted) urlParts[textIndex] = darkMuted;
                        if (currentText === errorPlaceholder) urlParts[textIndex] = darkMuted; 
                    } else { 
                        if (currentBg === darkBg) urlParts[bgIndex] = lightBg;
                         if (currentBg === darkSurfaceBg) urlParts[bgIndex] = lightSurfaceBg;
                        if (currentText === primaryLight) urlParts[textIndex] = primary;
                        if (currentText === darkMuted) urlParts[textIndex] = lightMuted;
                        if (currentText === errorPlaceholder) urlParts[textIndex] = errorPlaceholder;
                    }
                    newSrc = urlParts.join('/');
                }
                if (newSrc !== currentSrc && img.getAttribute('src') !== newSrc) {
                     img.src = newSrc;
                 }
            }
        });
    };
    const toggleTheme = () => {
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };

    // --- Cart Management ---
    const updateCartCount = () => {
        if (!cartCountSpan || !cartButton) return;
        const count = cart.length;
        cartCountSpan.textContent = count;
        cartCountSpan.classList.toggle('scale-100', count > 0);
        cartCountSpan.classList.toggle('scale-0', count === 0);
        cartCountSpan.classList.toggle('opacity-100', count > 0);
        cartCountSpan.classList.toggle('opacity-0', count === 0);
        cartButton.classList.toggle('has-items', count > 0);
    };
    const isInCart = (productId) => cart.includes(Number(productId));
    const updateCartButtonIcon = (btn, isNowInCart) => {
      if (!btn) return;
      const icon = btn.querySelector('i');
      if (icon) {
        const baseIconClass = btn.classList.contains('btn-icon') || btn.classList.contains('action-btn') ? 'text-base' : 'text-lg';
        icon.className = ''; 
        icon.classList.add('fas', isNowInCart ? 'fa-check-circle' : 'fa-cart-plus', baseIconClass);
        if (isNowInCart) {
          icon.classList.add('text-success-DEFAULT', 'dark:text-success-light'); 
        } else {
            icon.classList.remove('text-success-DEFAULT', 'dark:text-success-light');
        }
        icon.classList.add('transition-transform', 'duration-200', 'ease-in-out');
        requestAnimationFrame(() => {
          icon.classList.add('scale-125');
          setTimeout(() => { icon.classList.remove('scale-125'); }, 200);
        });
      }
      const ariaLabel = isNowInCart ? 'إزالة من السلة' : 'إضافة للسلة';
      btn.setAttribute('aria-label', ariaLabel);
      if (btn.title) btn.title = ariaLabel; 
      if (btn.id === 'detail-panel-cart-btn') {
          const textSpan = btn.querySelector('.button-text');
          if (textSpan) textSpan.textContent = isNowInCart ? 'تمت الإضافة (إزالة؟)' : 'إضافة للسلة';
           btn.classList.toggle('btn-success', isNowInCart);
           btn.classList.toggle('btn-secondary', !isNowInCart);
           if (isNowInCart) btn.classList.remove('btn-secondary'); else btn.classList.remove('btn-success');
      }
      btn.classList.toggle('is-in-cart', isNowInCart); 
    };
     const toggleCart = (productId) => {
        const numProductId = Number(productId);
        const index = cart.indexOf(numProductId);
        const wasInCart = index > -1;
        const isNowInCart = !wasInCart;
        if (wasInCart) {
            cart.splice(index, 1);
        } else {
            cart.push(numProductId);
        }
        localStorage.setItem('mqCart_v4', JSON.stringify(cart));
        updateCartCount();
        document.querySelectorAll(`.cart-btn[data-id="${numProductId}"], .cart-remove-btn[data-id="${numProductId}"], #detail-panel-cart-btn[data-id="${numProductId}"]`)
             .forEach(btn => {
                if (btn.classList.contains('cart-remove-btn')) {
                    if (wasInCart) {
                        const cartItemDiv = btn.closest('.cart-item');
                        if (cartItemDiv) {
                            cartItemDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease, max-height 0.4s ease, padding 0.3s ease, margin 0.3s ease, border 0.3s ease';
                            requestAnimationFrame(() => { 
                                cartItemDiv.style.opacity = '0';
                                cartItemDiv.style.transform = 'translateX(20px) scale(0.95)';
                                cartItemDiv.style.maxHeight = '0px';
                                cartItemDiv.style.paddingTop = '0'; cartItemDiv.style.paddingBottom = '0';
                                cartItemDiv.style.marginTop = '0'; cartItemDiv.style.marginBottom = '0';
                                cartItemDiv.style.borderWidth = '0';
                            });
                            setTimeout(() => {
                                cartItemDiv.remove();
                                renderCartItems(); 
                            }, 400); 
                        }
                    }
                } else {
                    updateCartButtonIcon(btn, isNowInCart); 
                }
            });
        if (cartModalOverlay?.classList.contains('visible') && isNowInCart) {
             renderCartItems();
        } else if (cartModalOverlay?.classList.contains('visible') && wasInCart && !isNowInCart) {
        }
    };

    // --- Create Product Card HTML ---
    const createProductCard = (product, isCarousel = false) => {
        if (!product) return null;
        const cardWrapper = document.createElement('div');
        cardWrapper.className = `product-card group flex flex-col bg-light-surface dark:bg-dark-surface rounded-xl overflow-hidden shadow-card border border-light-border/30 dark:border-dark-border/30 transition-all duration-medium ease-[cubic-bezier(0.33,1,0.68,1)] hover:shadow-card-hover hover:-translate-y-1.5 hover:border-primary/40 dark:hover:border-primary-light/40 ${isCarousel ? 'swiper-product-card max-w-[260px]' : 'section-animate'}`;
        cardWrapper.dataset.id = product.id;
        cardWrapper.dataset.category = product.category;
        cardWrapper.dataset.base_size = product.base_size;
        cardWrapper.dataset.title = product.title.toLowerCase();
        const isCurrentlyInCart = isInCart(product.id);
        const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        const placeholderBg = theme === 'dark' ? '1E293B' : 'F8FAFC';
        const placeholderText = theme === 'dark' ? '9CA3AF' : '6B7280';
        const placeholderImg1 = `https://placehold.co/400x400/${placeholderBg}/${placeholderText}?text=صورة+1&font=cairo`;
        const placeholderImg2 = `https://placehold.co/400x400/${placeholderBg}/${placeholderText}?text=صورة+2&font=cairo`;
        const primaryImageSrc = product.image1 || placeholderImg1;
        const hoverImageSrc = (isValidImageUrl(product.image2) && product.image2 !== product.image1) ? product.image2 : primaryImageSrc; 
        
        let priceHTML = `<p class="price text-lg font-bold text-primary dark:text-primary-light mt-2">
                            ${formatPrice(product.price)} <span class="currency text-sm font-normal text-light-text-muted dark:text-dark-text-muted mr-0.5">د.ع</span>
                         </p>`;
        if (product.on_sale && product.original_price && parseFormattedPrice(product.original_price) > parseFormattedPrice(product.price)) {
            priceHTML = `<p class="price text-lg font-bold text-red-600 dark:text-red-400 mt-2">
                            <span class="original-price">${formatPrice(product.original_price)}</span>
                            ${formatPrice(product.price)} <span class="currency text-sm font-normal text-light-text-muted dark:text-dark-text-muted mr-0.5">د.ع</span>
                         </p>`;
        }

        cardWrapper.innerHTML = `
            <div class="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700 product-card-image-container">
                 <img src="${primaryImageSrc}" alt="${product.title}" loading="lazy" class="product-card-img w-full h-full object-contain" onerror="if(this.src !== '${placeholderImg1}') { this.src='${placeholderImg1}'; this.classList.add('img-error', 'object-scale-down'); } this.onerror=null;">
                 <img src="${hoverImageSrc}" alt="${product.title} - عرض آخر" loading="lazy" class="product-card-img-hover w-full h-full object-contain" onerror="if(this.src !== '${placeholderImg2}') { this.src='${placeholderImg2}'; this.classList.add('img-error', 'object-scale-down'); } this.onerror=null;">
                 ${product.on_sale && product.original_price && parseFormattedPrice(product.original_price) > parseFormattedPrice(product.price) ? '<span class="sale-badge">تخفيض!</span>' : ''}
                <div class="badges-container absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                    ${product.availability === 'in stock' ? `<span class="badge badge-stock text-xs font-medium py-1 px-2.5 rounded-full shadow-sm border border-white/20 bg-success-DEFAULT text-success-text">متوفر</span>` : `<span class="badge badge-out-stock text-xs font-medium py-1 px-2.5 rounded-full shadow-sm border border-white/20 bg-error-DEFAULT text-error-text">غير متوفر</span>`}
                    ${product.is_new ? `<span class="badge badge-new text-xs font-medium py-1 px-2.5 rounded-full shadow-sm border border-white/20 bg-info-DEFAULT text-info-text">جديد <i class="fas fa-fire text-xs"></i></span>` : ''}
                </div>
                <div class="product-card-actions absolute top-3 right-3 z-20 flex flex-col gap-2.5 opacity-0 group-hover:opacity-100 transform translate-y-2 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                    <button class="cart-btn btn-icon bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm shadow-sm" data-id="${product.id}" aria-label="${isCurrentlyInCart ? 'إزالة من السلة' : 'إضافة للسلة'}">
                        <i class="text-base ${isCurrentlyInCart ? 'fas fa-check-circle text-success-DEFAULT dark:text-success-light' : 'fas fa-cart-plus'}"></i>
                    </button>
                    <button class="view-details-btn btn-icon bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm shadow-sm" data-id="${product.id}" aria-label="عرض التفاصيل">
                        <i class="fas fa-eye text-base"></i>
                    </button>
                </div>
            </div>
            <div class="product-card-info p-4 pt-3 text-center border-t border-light-border/50 dark:border-dark-border/50 flex-grow flex flex-col justify-between min-h-[100px]">
                <h3 class="title text-base font-semibold text-light-text-primary dark:text-dark-text-primary mb-1.5 leading-snug h-[2.8em] overflow-hidden line-clamp-2">${product.title}</h3>
                ${priceHTML}
            </div>
        `;
        const cartBtn = cardWrapper.querySelector('.cart-btn');
        const detailsBtn = cardWrapper.querySelector('.view-details-btn');
        if (cartBtn) cartBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleCart(product.id); });
        if (detailsBtn) detailsBtn.addEventListener('click', (e) => { e.stopPropagation(); openDetailPanel(product.id); });
        cardWrapper.addEventListener('click', (e) => { if (!e.target.closest('button')) openDetailPanel(product.id); });
        if (isCarousel) {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide !w-auto !h-auto flex-shrink-0 flex justify-center';
             slide.appendChild(cardWrapper);
            return slide;
        } else {
            return cardWrapper;
        }
    };


    // --- Modal, Overlay & Panel Management ---
    const setBodyScrollLock = (lock) => {
        const shouldBodyBeLocked = lock || 
                                   (activeModalOrOverlay && activeModalOrOverlay.style.display === 'flex') ||
                                   (productDetailPanel?.classList.contains('visible')) ||
                                   isMobileMenuOpen ||
                                   isManagementPanelOpen ||
                                   (activeManagementModal && activeManagementModal.style.display === 'flex');

        if (shouldBodyBeLocked) {
            if (document.body.style.overflow !== 'hidden') {
                // console.log("Locking body scroll. Details:", {lock, activeModalOrOverlayId: activeModalOrOverlay?.id, detailPanelVisible: productDetailPanel?.classList.contains('visible'), mobileMenuOpen: isMobileMenuOpen, adminPanelOpen: isManagementPanelOpen, activeAdminModalId: activeManagementModal?.id });
                document.body.style.overflow = 'hidden';
            }
        } else {
            if (document.body.style.overflow === 'hidden') {
                // console.log("Unlocking body scroll.");
                document.body.style.overflow = '';
            }
        }
    };
    
    const openOverlay = (overlayElement) => {
        // console.log("openOverlay called for:", overlayElement?.id); 
        if (!overlayElement) {
            console.error("Overlay element is null or undefined in openOverlay.");
            return;
        }
        if (activeModalOrOverlay === overlayElement) {
            // console.warn("Overlay already active:", overlayElement.id);
            return;
        }
        // Prevent opening user modals if admin context is active to avoid conflicts
        if (isManagementPanelOpen || (activeManagementModal && activeManagementModal.style.display === 'flex')) {
            if (!overlayElement.classList.contains('admin-modal-overlay')) { // Allow admin sub-modals
                console.warn("Cannot open user overlay while admin panel/modal is active.");
                return;
            }
        }

        if (activeModalOrOverlay) {
            // console.log("Closing previously active user overlay:", activeModalOrOverlay.id);
            closeOverlay(true); 
        }
        if (productDetailPanel?.classList.contains('visible')) {
            // console.log("Closing product detail panel before opening new overlay.");
            closeDetailPanel(true); 
        }
        
        activeModalOrOverlay = overlayElement;
        // console.log("Setting activeModalOrOverlay to:", activeModalOrOverlay?.id);

        overlayElement.style.display = 'flex'; 
        requestAnimationFrame(() => {
            overlayElement.classList.add('visible'); 
            // console.log("Added 'visible' class to:", overlayElement.id);

            const firstFocusable = overlayElement.querySelector('.modal-content button:not(:disabled), .modal-content input:not(:disabled):not([type=hidden]), .modal-content select:not(:disabled), .modal-content textarea:not(:disabled), .modal-content [tabindex]:not([tabindex="-1"])');
            if(firstFocusable) {
                // console.log("Focusing on:", firstFocusable);
                setTimeout(() => firstFocusable.focus(), 50); 
            } else {
                // console.warn("No focusable element found in modal:", overlayElement.id);
            }
        });
        setBodyScrollLock(true);
        overlayElement.dispatchEvent(new CustomEvent('overlayOpened'));
    };

    const closeOverlay = (instant = false) => {
        const overlayToClose = activeModalOrOverlay;
        if (!overlayToClose) {
            return;
        }
        // console.log("Closing overlay:", overlayToClose.id);
        activeModalOrOverlay = null;
        const duration = instant ? 0 : 300; 

        overlayToClose.classList.remove('visible'); 
        
        setTimeout(() => {
            overlayToClose.style.display = 'none';
            // console.log("Set display:none for", overlayToClose.id);
            setBodyScrollLock(false); 
            overlayToClose.dispatchEvent(new CustomEvent('overlayClosed'));
        }, duration);
    };

    const openManagementModal = (modalElement, contentElementToFocus = null) => {
        // console.log("openManagementModal called for:", modalElement?.id);
        if (!modalElement) { console.error("Management modal element is null."); return;}
        if (activeManagementModal === modalElement) { /* console.warn("Management modal already active:", modalElement.id); */ return; }
        if (activeManagementModal) closeManagementModal(true); 

        activeManagementModal = modalElement;
        modalElement.style.display = 'flex'; 
        
        requestAnimationFrame(() => {
            modalElement.classList.add('visible'); 
            
            if (contentElementToFocus) { 
                 const focusable = contentElementToFocus.querySelector('input:not([type=hidden]):not(:disabled), select:not(:disabled), textarea:not(:disabled), button:not(:disabled)');
                 if (focusable) setTimeout(() => focusable.focus(), 50);
            }
        });
        setBodyScrollLock(true); 
        modalElement.dispatchEvent(new CustomEvent('managementModalOpened'));
    };

    const closeManagementModal = (instant = false) => {
        const modalToClose = activeManagementModal;
        if (!modalToClose) return;
        // console.log("Closing management modal:", modalToClose.id);
        
        activeManagementModal = null;
        const duration = instant ? 0 : 300; 

        modalToClose.classList.remove('visible'); 
        
        setTimeout(() => {
            modalToClose.style.display = 'none';
            setBodyScrollLock(false); 
            modalToClose.dispatchEvent(new CustomEvent('managementModalClosed'));
        }, duration);
    };


    // --- Recently Viewed Management ---
    const addRecentlyViewed = (productId) => {
        if (!productId) return;
        try {
            let viewed = JSON.parse(localStorage.getItem('mqRecentlyViewed_v1')) || [];
            const numProductId = Number(productId);
            viewed = viewed.filter(id => Number(id) !== numProductId);
            viewed.unshift(numProductId);
            if (viewed.length > MAX_RECENTLY_VIEWED) viewed.pop();
            localStorage.setItem('mqRecentlyViewed_v1', JSON.stringify(viewed));
            renderRecentlyViewed();
        } catch (e) { console.error("Error updating recently viewed:", e); }
    };
    const renderRecentlyViewed = () => {
        if (!recentlyViewedWrapper || !recentlyViewedEmpty || !recentlyViewedSection) return;
        try {
            const viewedIds = JSON.parse(localStorage.getItem('mqRecentlyViewed_v1')) || [];
            const viewedProducts = viewedIds.map(id => products.find(p => p && Number(p.id) === Number(id))).filter(p => p);
            if (viewedProducts.length > 0) {
                recentlyViewedSection.classList.remove('hidden');
                recentlyViewedEmpty.classList.add('hidden');
                recentlyViewedWrapper.innerHTML = '';
                recentlyViewedWrapper.classList.add('simple-grid');
                const fragment = document.createDocumentFragment();
                viewedProducts.forEach((product, index) => {
                    const card = createProductCard(product, false);
                    if (card) {
                         card.style.transitionDelay = `${index * 60}ms`;
                         if (sectionObserver && card.classList.contains('section-animate')) {
                             sectionObserver.observe(card);
                         } else if (card.classList.contains('section-animate')) {
                            card.classList.add('visible', 'opacity-100', 'translate-y-0');
                        }
                        card.classList.add('recently-viewed-card');
                        fragment.appendChild(card);
                    }
                });
                recentlyViewedWrapper.appendChild(fragment);
            } else {
                recentlyViewedSection.classList.add('hidden');
                recentlyViewedEmpty.classList.remove('hidden');
                recentlyViewedWrapper.classList.remove('simple-grid');
            }
        } catch (e) {
            console.error("Error rendering recently viewed:", e);
            recentlyViewedSection.classList.add('hidden');
        }
    };


    // --- Product Detail Panel ---
    const initImageZoom = () => {
        const zoomContainers = productDetailContent?.querySelectorAll('.zoom-container');
        if (!zoomContainers || zoomContainers.length === 0) return;
        const zoomScale = 1.75; 
        zoomContainers.forEach(container => {
            const img = container.querySelector('.zoom-image');
            if (!img) return;
            if (container._mouseMoveHandler) container.removeEventListener('mousemove', container._mouseMoveHandler);
            if (container._mouseLeaveHandler) container.removeEventListener('mouseleave', container._mouseLeaveHandler);
            const handleMouseMove = (e) => {
                if (img.naturalWidth === 0 || img.classList.contains('img-error')) return;
                const rect = container.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const offsetY = e.clientY - rect.top;
                const xPercent = Math.min(100, Math.max(0, (offsetX / container.offsetWidth) * 100));
                const yPercent = Math.min(100, Math.max(0, (offsetY / container.offsetHeight) * 100));
                img.style.transition = 'transform 0.1s linear';
                img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                img.style.transform = `scale(${zoomScale})`;
            };
            const handleMouseLeave = () => {
                img.style.transition = 'transform 0.2s ease-out';
                img.style.transformOrigin = 'center center';
                img.style.transform = 'scale(1)';
            };
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);
            container._mouseMoveHandler = handleMouseMove;
            container._mouseLeaveHandler = handleMouseLeave;
        });
    };
    const initDetailSwiper = () => {
        if (typeof Swiper === 'undefined') { console.error("Swiper library not loaded."); return; }
        const swiperContainer = productDetailContent?.querySelector('.detail-panel-swiper');
        if (!swiperContainer) { return; } 
         if (detailSwiperInstance) { 
            detailSwiperInstance.destroy(true, true); detailSwiperInstance = null;
        }
        const slides = swiperContainer.querySelectorAll('.swiper-slide');
        const loopMode = slides.length > 1;
        try {
             detailSwiperInstance = new Swiper(swiperContainer, {
                 slidesPerView: 1, spaceBetween: 10, loop: loopMode,
                 pagination: { el: '.detail-panel-swiper .swiper-pagination', clickable: true },
                 navigation: { nextEl: '.detail-panel-swiper .swiper-button-next', prevEl: '.detail-panel-swiper .swiper-button-prev' },
                 keyboard: { enabled: true, onlyInViewport: true }, grabCursor: true,
                 a11y: { enabled: true, prevSlideMessage: 'الصورة السابقة', nextSlideMessage: 'الصورة التالية', paginationBulletMessage: 'الانتقال للصورة {{index}}' },
                 on: {
                    init: function (swiper) { swiper.el.classList.toggle('swiper-container-single-slide', swiper.slides.length <= 1); },
                    slidesLengthChange: function (swiper) { swiper.el.classList.toggle('swiper-container-single-slide', swiper.slides.length <= 1); }
                  }
             });
        } catch (error) {
             console.error("Failed to initialize detail panel Swiper:", error);
             swiperContainer.querySelectorAll('.swiper-button-next, .swiper-button-prev, .swiper-pagination').forEach(el => el.style.display = 'none');
        }
    };
    const openDetailPanel = (productId) => {
        const product = products.find(p => p && Number(p.id) === Number(productId));
        if (!product || !productDetailPanel || !productDetailContent || !productDetailBackdrop || isPanelOpening) return;
        if (activeModalOrOverlay) closeOverlay(true);
        if (isManagementPanelOpen) requestAdminAuthAndTogglePanel(false); 

        isPanelOpening = true;
        currentProductIdForDetail = Number(productId);
        const isCurrentlyInCart = isInCart(currentProductIdForDetail);
        const availabilityText = product.availability === 'in stock' ? "متوفر حالياً" : "غير متوفر حالياً";
        const availabilityClass = product.availability === 'in stock' ? 'text-success-dark dark:text-success-light' : 'text-error-DEFAULT';
        const availabilityIcon = product.availability === 'in stock' ? 'fa-check-circle' : 'fa-times-circle';
        const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        const placeholderBg = theme === 'dark' ? '1E293B' : 'F8FAFC';
        const placeholderText = theme === 'dark' ? '9CA3AF' : '6B7280';
        const placeholderImg1 = `https://placehold.co/600x600/${placeholderBg}/${placeholderText}?text=صورة+1&font=cairo`;
        const placeholderImg2 = `https://placehold.co/600x600/${placeholderBg}/${placeholderText}?text=صورة+2&font=cairo`;
        
        let priceDisplayHTML = `<span id="detail-panel-price" class="price-value text-xl font-bold text-primary dark:text-primary-light">${formatPrice(product.price)}</span>`;
        if (product.on_sale && product.original_price && parseFormattedPrice(product.original_price) > parseFormattedPrice(product.price)) {
            priceDisplayHTML = `<span class="original-price mr-2">${formatPrice(product.original_price)}</span>
                                <span id="detail-panel-price" class="price-value text-xl font-bold text-red-600 dark:text-red-400">${formatPrice(product.price)}</span>`;
        }


        let slidesHtml = '';
        const images = [product.image1, product.image2];
        const placeholders = [placeholderImg1, placeholderImg2];
        let validImageCount = 0;
        images.forEach((imgUrl, index) => {
            const placeholder = placeholders[index];
            const isDuplicate = index === 1 && imgUrl === product.image1; 
            const isValid = isValidImageUrl(imgUrl) && !isDuplicate;
            let srcToUse = null;
            if (isValid) {
                srcToUse = imgUrl;
                validImageCount++;
            } else if (index === 0 && !isValidImageUrl(imgUrl)) { 
                srcToUse = placeholder;
            }
            if (srcToUse) {
                 slidesHtml += `
                    <div class="swiper-slide">
                         <div class="zoom-container w-full h-full">
                            <img src="${srcToUse}" alt="${product.title} - صورة ${index + 1}" class="detail-swiper-image zoom-image" loading="eager" onerror="if(this.src !== '${placeholder}') { this.src='${placeholder}'; this.classList.add('img-error'); } this.onerror=null;">
                         </div>
                    </div>
                `;
            }
        });
        if (slidesHtml === '') {
             slidesHtml = `
                 <div class="swiper-slide">
                    <div class="zoom-container w-full h-full">
                        <img src="${placeholderImg1}" alt="${product.title} - صورة المنتج" class="detail-swiper-image zoom-image img-error" loading="eager">
                    </div>
                 </div>
             `;
         }
        const imageSectionHtml = `
            <div class="detail-panel-image-wrapper aspect-square mb-6 relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border border-light-border/50 dark:border-dark-border/50">
                ${product.on_sale && product.original_price && parseFormattedPrice(product.original_price) > parseFormattedPrice(product.price) ? '<span class="sale-badge absolute top-2 right-2 z-10 text-xs">تخفيض!</span>' : ''}
                <div class="swiper detail-panel-swiper">
                    <div class="swiper-wrapper">${slidesHtml}</div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        `;
        productDetailContent.innerHTML = `
            ${imageSectionHtml}
            <h2 id="detail-panel-title" class="detail-panel-title text-2xl md:text-3xl font-bold font-heading text-light-text-primary dark:text-dark-text-primary leading-tight mb-4">${product.title}</h2>
            <div class="detail-panel-info flex flex-col gap-3 p-4 bg-light-surface dark:bg-dark-background rounded-lg border border-light-border dark:border-dark-border shadow-inner-sm mb-6">
                 <div class="info-row flex justify-between items-center pb-3 border-b border-dashed border-light-border/50 dark:border-dark-border/50 text-base">
                    <span class="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary font-medium"><i class="fas fa-ruler-combined text-base text-accent"></i>المقاس:</span>
                    <div class="flex items-center gap-2">
                        <span id="detail-panel-size" class="info-value size-badge bg-primary dark:bg-primary-light text-primary-text dark:text-dark-text-primary py-1 px-3 rounded-full text-sm font-bold">${product.size}</span>
                        <button id="detail-panel-size-guide-btn" class="btn-icon btn-icon-sm" title="عرض دليل المقاسات">
                            <i class="fas fa-book-open text-sm"></i>
                        </button>
                    </div>
                </div>
                <div class="info-row flex justify-between items-center pb-3 border-b border-dashed border-light-border/50 dark:border-dark-border/50 text-base">
                    <span class="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary font-medium"><i class="fas fa-tag text-base text-accent"></i>السعر:</span>
                    <div class="price-container flex items-baseline gap-1 justify-end">
                        ${priceDisplayHTML}
                        <span class="price-currency text-xs font-medium text-light-text-muted dark:text-dark-text-muted"> د.ع</span>
                    </div>
                </div>
                <div class="info-row flex justify-between items-center pb-3 border-b border-dashed border-light-border/50 dark:border-dark-border/50 text-base">
                    <span class="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary font-medium"><i class="fas fa-box-open text-base text-accent"></i>التوفر:</span>
                    <span id="detail-panel-availability" class="info-value font-semibold ${availabilityClass} flex items-center gap-1.5">
                        <i class="fas ${availabilityIcon} text-sm"></i> ${availabilityText}
                    </span>
                </div>
                ${product.stock_level === 'low' ? `
                <div class="info-row low-stock-row flex justify-between items-center text-base">
                    <span class="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary font-medium"><i class="fas fa-exclamation-triangle text-base text-warning-DEFAULT"></i>الحالة:</span>
                    <span class="info-value text-warning-dark dark:text-warning-light font-semibold">قطع أخيرة متوفرة</span>
                </div>
                ` : ''}
            </div>
            <div class="detail-panel-description-section mt-6 mb-6">
                <h3 class="detail-panel-subtitle text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-2 pb-2 border-b border-light-border dark:border-dark-border">الوصف التفصيلي</h3>
                <p id="detail-panel-description" class="detail-panel-description text-base text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">${product.description || "لا يوجد وصف متوفر حالياً لهذا المنتج."}</p>
            </div>
            <div class="detail-panel-actions mt-8 flex flex-col gap-3">
                <button id="detail-panel-order-btn" data-id="${product.id}" class="btn btn-primary w-full py-3.5 text-lg" ${product.availability !== 'in stock' ? 'disabled' : ''}>
                    <i class="fas fa-truck mr-2"></i> ${product.availability === 'in stock' ? 'اطلب هذا المنتج الآن':'غير متوفر حالياً للطلب'}
                </button>
                <button id="detail-panel-cart-btn" data-id="${product.id}" class="cart-btn btn ${isCurrentlyInCart ? 'btn-success is-in-cart':'btn-secondary'} w-full py-3 text-lg">
                    <i class="text-lg ${isCurrentlyInCart ? 'fas fa-check-circle':'fas fa-cart-plus'}"></i>
                    <span class="button-text mr-2">${isCurrentlyInCart ? 'تمت الإضافة (إزالة؟)':'إضافة للسلة'}</span>
                </button>
            </div>
        `;
        const orderBtn = productDetailContent.querySelector('#detail-panel-order-btn');
        const cartBtn = productDetailContent.querySelector('#detail-panel-cart-btn');
        const sizeGuideBtn = productDetailContent.querySelector('#detail-panel-size-guide-btn');
        if (orderBtn && product.availability === 'in stock') orderBtn.addEventListener('click', (e) => { e.preventDefault(); openOrderModal(currentProductIdForDetail); });
        else if (orderBtn) orderBtn.classList.add('btn-disabled-visual');
        if (cartBtn) cartBtn.addEventListener('click', () => { toggleCart(currentProductIdForDetail); });
        if (sizeGuideBtn) sizeGuideBtn.addEventListener('click', openSizeGuideModal);
        requestAnimationFrame(() => {
            initDetailSwiper();
             setTimeout(initImageZoom, 50);
         });
        productDetailPanel.classList.remove('hidden');
        productDetailBackdrop.style.display = 'block';
        requestAnimationFrame(() => {
            productDetailPanel.classList.add('visible', 'opacity-100', 'translate-x-0');
            productDetailBackdrop.classList.add('visible', 'opacity-100');
        });
        setBodyScrollLock(true);
        productDetailPanel.scrollTop = 0;
        addRecentlyViewed(currentProductIdForDetail);
        setTimeout(() => { isPanelOpening = false; }, 400);
    };
    const closeDetailPanel = (instant = false) => {
        if (!productDetailPanel || !productDetailBackdrop || !productDetailPanel.classList.contains('visible') || isPanelOpening) return;
         productDetailContent?.querySelectorAll('.zoom-container').forEach(container => {
             if (container._mouseMoveHandler) {
                 container.removeEventListener('mousemove', container._mouseMoveHandler);
                 container._mouseMoveHandler = null;
             }
             if (container._mouseLeaveHandler) {
                 container.removeEventListener('mouseleave', container._mouseLeaveHandler);
                 container._mouseLeaveHandler = null;
             }
             const img = container.querySelector('.zoom-image');
             if(img) { 
                 img.style.transform = 'scale(1)';
                 img.style.transformOrigin = 'center center';
                 img.style.transition = 'none';
             }
         });
         if (detailSwiperInstance) {
            try { detailSwiperInstance.destroy(true, true); }
            catch (e) { console.error("Error destroying detail Swiper:", e); }
            detailSwiperInstance = null;
        }
        const duration = instant ? 0 : 400;
        productDetailPanel.classList.remove('visible', 'opacity-100', 'translate-x-0');
        productDetailBackdrop.classList.remove('visible', 'opacity-100');
        setTimeout(() => {
            productDetailPanel.classList.add('hidden');
            productDetailBackdrop.style.display = 'none';
            currentProductIdForDetail = null;
            if(productDetailContent) productDetailContent.innerHTML = ''; 
            setBodyScrollLock(false);
        }, duration);
    };

    // --- Order Modal ---
    const openOrderModal = (productId = null) => {
        if (productDetailPanel?.classList.contains('visible')) closeDetailPanel(true);
        if (activeModalOrOverlay) closeOverlay(true);
        if (isManagementPanelOpen) requestAdminAuthAndTogglePanel(false); 

        let orderTotal = 0;
        const currency = "د.ع";
        orderSummarySingleItemDetails.classList.add('hidden');
        orderSummaryItemsList.classList.add('hidden');
        if(orderSummaryItemsList) orderSummaryItemsList.innerHTML = '';
        if(orderFormProductId) orderFormProductId.value = ''; 
        if(orderFormProductTitle) orderFormProductTitle.value = '';
        if(orderFormProductSize) orderFormProductSize.value = ''; 
        if(orderFormProductPrice) orderFormProductPrice.value = '';
        cartItemsForOrder = [];

        if (productId) { 
            const product = products.find(p => p && Number(p.id) === Number(productId));
            if (!product || product.availability !== 'in stock') {
                alert("عفواً، لا يمكن طلب هذا المنتج حالياً."); return;
            }
            orderSummarySingleItemDetails.classList.remove('hidden');
            orderSummaryMainTitle.innerHTML = `<i class="fas fa-receipt text-lg"></i> ملخص طلب لمنتج واحد`;
            orderSummaryTitle.textContent = product.title;
            orderSummarySize.textContent = product.size;
            orderSummaryPrice.textContent = formatPrice(product.price); 
            orderFormProductId.value = product.id; orderFormProductTitle.value = product.title;
            orderFormProductSize.value = product.size; orderFormProductPrice.value = product.price;
            try { orderTotal = parseFormattedPrice(product.price); } catch { orderTotal = 0; }
        } else { 
             cartItemsForOrder = cart.map(id => products.find(p => Number(p.id) === Number(id)))
                                     .filter(p => p && p.availability === 'in stock');
            if (cartItemsForOrder.length === 0) {
                alert("عفواً، لا توجد منتجات متاحة للطلب في سلة التسوق."); return;
            }
            orderSummaryItemsList.classList.remove('hidden');
            let listHtml = '';
            orderTotal = cartItemsForOrder.reduce((sum, item) => {
                const itemPrice = parseFormattedPrice(item.price) || 0;
                listHtml += `
                     <li class="flex justify-between items-start text-base border-b border-light-border/50 dark:border-dark-border/50 pb-3 last:border-b-0 mb-3">
                         <span class="flex-1 mr-3 leading-tight">${item.title} <span class="block text-sm text-light-text-muted dark:text-dark-text-muted">(${item.size})</span></span>
                         <span class="font-semibold text-primary dark:text-primary-light whitespace-nowrap">${formatPrice(item.price)} ${currency}</span>
                     </li>`;
                return sum + itemPrice;
            }, 0);
            orderSummaryItemsList.innerHTML = listHtml;
            const totalLi = document.createElement('li');
            totalLi.className = 'flex justify-between items-center pt-3 mt-3 border-t border-primary/20 dark:border-primary-light/20 font-bold text-lg';
            totalLi.innerHTML = `<span>الإجمالي:</span> <span class="text-primary dark:text-primary-light">${orderTotal.toLocaleString('ar-IQ')} ${currency}</span>`;
            orderSummaryItemsList.appendChild(totalLi);
            orderSummaryMainTitle.innerHTML = `<i class="fas fa-receipt text-lg"></i> ملخص طلب (${cartItemsForOrder.length} منتجات)`;
        }
        orderForm?.reset();
        formErrorMessage?.classList.add('hidden');
        orderForm?.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
        openOverlay(orderFormModalOverlay);
    };
    const closeOrderModal = () => closeOverlay();
    const prepareOrderForAllCartItems = () => {
        closeCartModal();
        setTimeout(() => openOrderModal(null), 50);
    }


    // --- Cart Modal ---
    const openCartModal = () => { renderCartItems(); openOverlay(cartModalOverlay); };
    const closeCartModal = () => closeOverlay();
    const renderCartItems = () => {
        if (!cartItemsContainer || !cartEmptyMessage || !cartOrderAllBtn) return;
        const fragment = document.createDocumentFragment();
        const cartProducts = cart.map(id => products.find(p => Number(p.id) === Number(id))).filter(p => p);
        let availableItemsCount = 0;
        cartItemsContainer.innerHTML = '';
        if (cartProducts.length === 0) {
            cartEmptyMessage.classList.remove('hidden');
            cartItemsContainer.classList.remove('has-items');
            cartOrderAllBtn.disabled = true;
            cartOrderAllBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            cartEmptyMessage.classList.add('hidden');
             cartItemsContainer.classList.add('has-items');
            cartProducts.forEach(product => {
                if (!product) return;
                if (product.availability === 'in stock') availableItemsCount++;
                 let priceForItemHTML = `<p class="cart-item-price text-sm font-bold text-primary dark:text-primary-light">${formatPrice(product.price)} <span class="currency text-xs font-normal">د.ع</span></p>`;
                if(product.on_sale && product.original_price && parseFormattedPrice(product.original_price) > parseFormattedPrice(product.price)) {
                    priceForItemHTML = `<p class="cart-item-price text-sm">
                                            <span class="original-price text-xs">${formatPrice(product.original_price)}</span>
                                            <span class="font-bold text-red-600 dark:text-red-400">${formatPrice(product.price)}</span>
                                            <span class="currency text-xs font-normal"> د.ع</span>
                                        </p>`;
                }

                const itemElement = document.createElement('div');
                itemElement.className = `cart-item bg-light-background dark:bg-dark-background flex items-center gap-4 p-3 rounded-lg border border-light-border dark:border-dark-border shadow-sm transition-all duration-300 ease-in-out w-full box-border ${product.availability !== 'in stock' ? 'unavailable opacity-60 filter grayscale-[80%] border-dashed' : 'hover:shadow-md hover:border-light-border/80 dark:hover:border-dark-border/80'}`;
                const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
                const placeholderBg = theme === 'dark' ? '374151' : 'E5E7EB';
                const placeholderText = theme === 'dark' ? '9CA3AF' : '6B7280';
                const placeholderImg = `https://placehold.co/80x96/${placeholderBg}/${placeholderText}?text=Img&font=cairo`;
                 itemElement.innerHTML = `
                     <img src="${product.image1 || placeholderImg}" alt="${product.title}" class="cart-item-image w-[60px] h-[75px] object-contain rounded border border-light-border dark:border-dark-border bg-white dark:bg-dark-surface flex-shrink-0" loading="lazy" onerror="if(this.src !== '${placeholderImg}') { this.src='${placeholderImg}'; this.classList.add('img-error', 'object-scale-down'); } this.onerror=null;">
                     <div class="cart-item-details flex-grow flex flex-col gap-0.5 overflow-hidden min-w-0">
                         <p class="cart-item-title text-sm font-semibold text-light-text-primary dark:text-dark-text-primary leading-snug line-clamp-2">${product.title}</p>
                         <p class="cart-item-size text-xs text-light-text-secondary dark:text-dark-text-secondary">المقاس: <span class="value font-medium bg-light-border/50 dark:bg-dark-border/50 py-0.5 px-1.5 rounded text-xs inline-block mr-0.5">${product.size}</span></p>
                         ${priceForItemHTML}
                         ${product.availability !== 'in stock' ? '<p class="cart-item-unavailable-notice text-xs text-error-DEFAULT font-medium mt-0.5">(غير متوفر حالياً)</p>' : ''}
                     </div>
                     <div class="cart-item-actions flex flex-col gap-2 items-center flex-shrink-0">
                         <button class="cart-remove-btn btn-icon btn-icon-danger btn-icon-sm bg-light-background/80 dark:bg-dark-background/80" data-id="${product.id}" title="إزالة من السلة"><i class="fas fa-trash-alt"></i></button>
                         <button class="cart-order-single-btn btn-icon btn-icon-primary btn-icon-sm bg-light-background/80 dark:bg-dark-background/80" data-id="${product.id}" title="طلب هذا المنتج فقط" ${product.availability !== 'in stock' ? 'disabled' : ''}>
                             <i class="fas fa-truck"></i>
                         </button>
                     </div>`;
                const removeBtn = itemElement.querySelector('.cart-remove-btn');
                const orderSingleBtn = itemElement.querySelector('.cart-order-single-btn');
                if (removeBtn) removeBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleCart(product.id); });
                if (orderSingleBtn && product.availability === 'in stock') {
                    orderSingleBtn.addEventListener('click', (e) => {
                        e.stopPropagation(); closeCartModal();
                        setTimeout(() => openOrderModal(product.id), 50);
                    });
                } else if (orderSingleBtn) {
                    orderSingleBtn.classList.add('opacity-50', 'cursor-not-allowed');
                }
                fragment.appendChild(itemElement);
            });
            cartItemsContainer.appendChild(fragment);
            cartOrderAllBtn.disabled = availableItemsCount === 0;
            cartOrderAllBtn.classList.toggle('opacity-50', availableItemsCount === 0);
            cartOrderAllBtn.classList.toggle('cursor-not-allowed', availableItemsCount === 0);
        }
    };

    // --- Policy Modals ---
    const openPrivacyPolicyModal = () => {
        console.log("Attempting to open privacy policy modal...");
        openOverlay(privacyPolicyModalOverlay);
    }
    const closePrivacyPolicyModal = () => closeOverlay();
    const openReturnPolicyModal = () => openOverlay(returnPolicyModalOverlay);
    const closeReturnPolicyModal = () => closeOverlay();

    // --- Size Guide Modal ---
    const openSizeGuideModal = () => openOverlay(sizeGuideModalOverlay);
    const closeSizeGuideModal = () => closeOverlay();

    // --- Filter and Display Products ---
    const applyFilters = (scrollToProducts = false, instantScroll = false) => {
      if (!productGrid || !loadMoreButton || !categoryTitleMain || !categoryDescription || !noResultsDiv || !clearFiltersBtn) return;
        currentSearchTerm = overlaySearchInput?.value.trim().toLowerCase() || '';
        currentSizeFilter = overlaySizeSelect?.value || 'all';
        activeCategory = document.querySelector('#category-cards-container .category-card.active')?.dataset.category || 'all';

        let filtered = products.filter(p => {
            if (!p) return false;
            const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
            const searchTermLower = currentSearchTerm;
            const titleMatch = !searchTermLower ||
                               (p.title && p.title.toLowerCase().includes(searchTermLower)) ||
                               (p.description && p.description.toLowerCase().includes(searchTermLower)) ||
                               String(p.id).includes(searchTermLower);
            let sizeMatch = true;
            if (currentSizeFilter !== 'all') {
                const productSizeUpper = String(p.size || '').toUpperCase();
                const productBaseSizeUpper = String(p.base_size || '').toUpperCase();
                const filterSizeUpper = currentSizeFilter.toUpperCase();
                sizeMatch = (productSizeUpper.includes(filterSizeUpper) ||
                              productBaseSizeUpper === filterSizeUpper);
            }
             return categoryMatch && titleMatch && sizeMatch;
        });
        currentFilteredProducts = filtered;
        const activeCatData = categoryData[activeCategory];
        categoryTitleMain.textContent = activeCategory === 'all' ? 'جميع المنتجات' : (activeCatData?.name || activeCategory);
        categoryDescription.textContent = activeCatData?.description || `عرض ${currentFilteredProducts.length} منتج مطابق للفلترة.`;
        const isFiltered = activeCategory !== 'all' || !!currentSearchTerm || currentSizeFilter !== 'all';
        clearFiltersBtn.classList.toggle('hidden', !isFiltered);
        if(productGrid) productGrid.innerHTML = '';
        displayedProductCount = 0;

        if (initialProductsFetched && currentFilteredProducts.length === 0) {
            noResultsDiv.classList.remove('hidden');
            productGrid.classList.add('hidden');
            loadMoreButton.parentElement?.classList.add('hidden');
        } else if (currentFilteredProducts.length > 0) {
            noResultsDiv.classList.add('hidden');
            productGrid.classList.remove('hidden');
             loadMoreButton.parentElement?.classList.remove('hidden'); 
            loadMoreProducts(instantScroll);
        } else { 
            noResultsDiv.classList.add('hidden'); 
            productGrid.classList.add('hidden');
            loadMoreButton.parentElement?.classList.add('hidden');
        }

        if (scrollToProducts) {
            setTimeout(() => {
                const targetElement = document.getElementById('products');
                 if (targetElement) {
                    const headerOffset = header?.offsetHeight || 70;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset - 20;
                    window.scrollTo({ top: offsetPosition, behavior: instantScroll ? 'auto' : 'smooth' });
                 }
             }, instantScroll ? 0 : 100);
        }
    };
    const debouncedApplyFilters = debounce(applyFilters, 350);

    // --- Load More Products ---
    const loadMoreProducts = (instant = false) => {
        if (!productGrid || !loadMoreButton) return;
        const nextBatch = currentFilteredProducts.slice(displayedProductCount, displayedProductCount + productsPerLoad);
        if (nextBatch.length === 0) {
             loadMoreButton.parentElement?.classList.add('hidden');
             loadMoreButton.disabled = false;
             loadMoreButton.innerHTML = '<i class="fas fa-chevron-down mr-2 text-sm"></i> عرض المزيد';
            return;
        }
        noResultsDiv?.classList.add('hidden');
        productGrid?.classList.remove('hidden');
        const fragment = document.createDocumentFragment();
        nextBatch.forEach((product, index) => {
            const card = createProductCard(product, false);
            if(card) {
                 if (!instant && card.classList.contains('section-animate')) card.style.transitionDelay = `${index * 60}ms`;
                 fragment.appendChild(card);
                 if (sectionObserver && !instant && card.classList.contains('section-animate')) {
                     sectionObserver.observe(card);
                 } else if (card.classList.contains('section-animate')) {
                     card.classList.add('visible', 'opacity-100', 'translate-y-0');
                 }
             }
        });
        productGrid.appendChild(fragment);
        displayedProductCount += nextBatch.length;
        requestAnimationFrame(() => {
            const hasMore = displayedProductCount < currentFilteredProducts.length;
             loadMoreButton.parentElement?.classList.toggle('hidden', !hasMore);
            loadMoreButton.disabled = false;
            loadMoreButton.innerHTML = '<i class="fas fa-chevron-down mr-2 text-sm"></i> عرض المزيد';
        });
    };

    // --- Clear All Filters ---
    const clearAllFilters = () => {
        activeCategory = 'all'; currentSearchTerm = ''; currentSizeFilter = 'all';
        if(overlaySearchInput) overlaySearchInput.value = '';
        if(overlaySizeSelect) overlaySizeSelect.value = 'all';
        document.querySelectorAll('#category-cards-container .category-card').forEach(el => el.classList.toggle('active', el.dataset.category === 'all'));
        applyFilters(true, true);
        if (searchFilterOverlay?.classList.contains('visible')) closeOverlay();
    };

    // --- WhatsApp Order Submission ---
    const handleOrderSubmit = (event) => {
        event.preventDefault();
        if (!orderForm || !formErrorMessage) return;
        formErrorMessage.classList.add('hidden');
        orderForm.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
        const nameInput = document.getElementById('customer-name');
        const phoneInput = document.getElementById('customer-phone');
        const addressInput = document.getElementById('customer-address');
        let isValid = true; let errors = [];
        if (!nameInput?.value.trim()) { errors.push("يرجى إدخال الاسم الكامل."); isValid = false; nameInput?.classList.add('invalid'); }
        if (!phoneInput?.value.trim() || !phoneInput.checkValidity()) { errors.push("رقم هاتف واتساب غير صحيح (مثال: 07xxxxxxxxx)."); isValid = false; phoneInput?.classList.add('invalid'); }
        if (!addressInput?.value.trim()) { errors.push("يرجى إدخال العنوان الكامل للتوصيل."); isValid = false; addressInput?.classList.add('invalid'); }
        if (!isValid) {
            formErrorMessage.innerHTML = errors.join('<br>');
            formErrorMessage.classList.remove('hidden');
            formErrorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        let message = "👋 *طلب جديد من Master Quality*\n\n";
        message += `👤 *الاسم:* ${nameInput.value.trim()}\n`;
        message += `📞 *الهاتف:* ${phoneInput.value.trim()}\n`;
        message += `📍 *العنوان:* ${addressInput.value.trim()}\n\n`;
        message += "🛒 *المنتجات المطلوبة:*\n--------------------\n";
        let totalPrice = 0; const currency = "د.ع";
        const orderedFromCart = cartItemsForOrder.length > 0;
        const singleProductId = orderFormProductId?.value;
         if (!orderedFromCart && singleProductId) {
            const title = orderFormProductTitle?.value; const size = orderFormProductSize?.value; const price = orderFormProductPrice?.value;
             if (title && size && price) {
                 message += `1. ${title} (${size}) - *${formatPrice(price)} ${currency}*\n`;
                 try { totalPrice = parseFormattedPrice(price); } catch {}
             }
         } else if (orderedFromCart) {
            cartItemsForOrder.forEach((item, index) => {
                message += `${index + 1}. ${item.title} (${item.size}) - *${formatPrice(item.price)} ${currency}*\n`;
                try { totalPrice += parseFormattedPrice(item.price); } catch {}
            });
         } else { message += "خطأ: لم يتم تحديد المنتجات.\n"; }
        message += "--------------------\n";
        if (totalPrice > 0) message += `💰 *الإجمالي للمنتجات:* ${totalPrice.toLocaleString('ar-IQ')} ${currency}\n`;
        message += "\n*(الدفع نقداً عند الاستلام)*\n\n";
        message += `_تم إرسال هذا الطلب من موقع: ${window.location.hostname || 'Master Quality Store'}_`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
        const submitButton = orderForm.querySelector('button[type="submit"]');
        if(submitButton) {
            const originalHTML = submitButton.innerHTML;
            submitButton.innerHTML = `<i class="fas fa-check mr-2"></i> تم الإرسال بنجاح!`;
            submitButton.disabled = true;
        }
         if (orderedFromCart) {
            const orderedIds = cartItemsForOrder.map(item => Number(item.id)); 
            cart = cart.filter(id => !orderedIds.includes(Number(id)));
            localStorage.setItem('mqCart_v4', JSON.stringify(cart));
            updateCartCount();
            cartItemsForOrder = [];
        }
        setTimeout(() => {
             closeOrderModal();
             if(submitButton) { submitButton.innerHTML = originalHTML; submitButton.disabled = false; }
             orderForm.reset();
         }, 2000);
    };
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
        ['customer-name', 'customer-phone', 'customer-address'].forEach(id => {
            const input = document.getElementById(id);
            input?.addEventListener('input', () => input.classList.remove('invalid'));
        });
    }

    // --- Category Filtering & Active State ---
    const setActiveCategory = (categoryKey, clickedElement = null) => {
        activeCategory = categoryKey;
        document.querySelectorAll('#category-cards-container .category-card').forEach(card => card.classList.toggle('active', card.dataset.category === categoryKey));
        if (clickedElement) {
            currentSearchTerm = ''; currentSizeFilter = 'all';
            if (overlaySearchInput) overlaySearchInput.value = '';
            if (overlaySizeSelect) overlaySizeSelect.value = 'all';
            applyFilters(true);
        } else { applyFilters(false); }
    };

    // --- Swiper Initialization ---
    const initSwiper = () => {
        if (typeof Swiper === 'undefined' || !newArrivalsWrapper) { console.warn("Swiper library not found or wrapper missing."); return; }
        const newArrivals = products.filter(p => p && p.is_new).sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0));
        const arrivalsSection = newArrivalsWrapper.closest('#new-arrivals');
        if (newArrivals.length > 0) {
            if (arrivalsSection) arrivalsSection.style.display = '';
            newArrivalsWrapper.innerHTML = '';
            newArrivals.forEach(product => { const slide = createProductCard(product, true); if (slide) newArrivalsWrapper.appendChild(slide); });
            const swiperContainer = newArrivalsWrapper.closest('.swiper');
            if (!swiperContainer) { console.error("Swiper container (.swiper) not found around the wrapper."); return; }
            if (swiperInstance) { swiperInstance.destroy(true, true); swiperInstance = null; }
            try {
                swiperInstance = new Swiper(swiperContainer, {
                    slidesPerView: 'auto', spaceBetween: 16, grabCursor: true, loop: newArrivals.length > 4, speed: 500, centeredSlides: false,
                     watchSlidesProgress: true, preventClicks: true, preventClicksPropagation: true,
                     a11y: { enabled: true, prevSlideMessage: 'السابق', nextSlideMessage: 'التالي', paginationBulletMessage: 'الانتقال للشريحة {{index}}', },
                     navigation: { nextEl: '.arrivals-swiper .swiper-button-next', prevEl: '.arrivals-swiper .swiper-button-prev', },
                     pagination: { el: '.arrivals-swiper .swiper-pagination', clickable: true, },
                     breakpoints: { 640: { spaceBetween: 20 }, 1024: { spaceBetween: 24 } }
                });
            } catch (error) {
                 console.error("Swiper initialization failed:", error);
                 newArrivalsWrapper.style.cssText = 'display: flex; overflow-x: auto; gap: 1rem; padding: 1rem 0; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;';
                 newArrivalsWrapper.querySelectorAll('.swiper-slide').forEach(s => { s.style.scrollSnapAlign = 'start'; s.style.width = 'auto'; s.style.flexShrink = '0'; });
                 arrivalsSection?.querySelectorAll('.swiper-button-next, .swiper-button-prev, .swiper-pagination').forEach(el => { if(el) el.style.display = 'none'; });
             }
        } else { if (arrivalsSection) arrivalsSection.style.display = 'none'; }
    };

    // --- Header Scroll & Active Nav ---
     const handleHeaderScroll = () => {
        if (!header) return;
        const scrollY = window.scrollY;
        header.classList.toggle('scrolled', scrollY > 50);
        let currentSectionId = 'hero';
        const sections = document.querySelectorAll('main section[id]');
        const headerHeight = header.offsetHeight || 70;
        const scrollPosition = scrollY + headerHeight + 50;
        for (let i = sections.length - 1; i >= 0; i--) {
             const section = sections[i];
             if (section && section.offsetTop <= scrollPosition && section.offsetHeight > 50) { 
                 currentSectionId = section.id; break;
             }
         }
        mainNavLinks.forEach(link => { const isActive = link.getAttribute('href') === `#${currentSectionId}`; link.classList.toggle('active', isActive); link.setAttribute('aria-current', isActive ? 'page' : 'false'); });
        mobileNavMenuLinks?.forEach(link => { const isActive = link.getAttribute('href') === `#${currentSectionId}`; link.classList.toggle('active', isActive); link.setAttribute('aria-current', isActive ? 'page' : 'false'); link.classList.toggle('bg-primary/10', isActive); link.classList.toggle('dark:bg-primary-light/15', isActive); });
    };

    // --- Mobile Menu ---
     const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        if (mobileNavMenu && mobileNavToggle) {
            mobileNavMenu.classList.toggle('visible', isMobileMenuOpen); mobileNavMenu.classList.toggle('opacity-100', isMobileMenuOpen); mobileNavMenu.classList.toggle('opacity-0', !isMobileMenuOpen);
            mobileNavMenu.classList.toggle('translate-y-0', isMobileMenuOpen); mobileNavMenu.classList.toggle('-translate-y-full', !isMobileMenuOpen); mobileNavMenu.classList.toggle('invisible', !isMobileMenuOpen);
            const icon = mobileNavToggle.querySelector('i'); if (icon) icon.className = `fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`;
            mobileNavToggle.setAttribute('aria-expanded', String(isMobileMenuOpen));
            setBodyScrollLock(isMobileMenuOpen);
        }
    };
    const closeMobileMenu = () => { if (isMobileMenuOpen) toggleMobileMenu(); };

    // --- Section Animation Observer ---
    let sectionObserver = null;
    const initSectionObserver = () => {
        const elementsToAnimate = document.querySelectorAll('.section-animate');
        if (!elementsToAnimate.length) return;
        if (!('IntersectionObserver' in window)) { elementsToAnimate.forEach(el => { el.classList.add('visible', 'opacity-100', 'translate-y-0'); }); return; }
         sectionObserver = new IntersectionObserver((entries, observer) => {
             entries.forEach(entry => {
                 if (entry.isIntersecting) { requestAnimationFrame(() => { entry.target.classList.add('visible', 'opacity-100', 'translate-y-0'); }); observer.unobserve(entry.target); }
             });
         }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
         elementsToAnimate.forEach(section => { if(section) sectionObserver.observe(section); });
    };

    // --- Scroll to Top ---
    const handleScroll = () => {
        if (scrollToTopBtn) {
            const isVisible = window.scrollY > window.innerHeight * 0.6;
            scrollToTopBtn.classList.toggle('visible', isVisible); scrollToTopBtn.classList.toggle('opacity-100', isVisible); scrollToTopBtn.classList.toggle('opacity-0', !isVisible);
            scrollToTopBtn.classList.toggle('scale-100', isVisible); scrollToTopBtn.classList.toggle('scale-90', !isVisible); scrollToTopBtn.classList.toggle('invisible', !isVisible);
        }
        handleHeaderScroll();
    };
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // --- Firebase Authentication Functions ---
    const signInWithGoogle = async () => {
        if (!window.firebaseAuth || !window.GoogleAuthProvider) {
            alert("لم يتم تهيئة Firebase Auth بشكل صحيح.");
            console.error("Firebase Auth or GoogleAuthProvider not available on window object.");
            return null;
        }
        const provider = new window.GoogleAuthProvider();
        try {
            const result = await window.firebaseAuth.signInWithPopup(provider);
            const user = result.user;
            if (ALLOWED_ADMIN_EMAILS.includes(user.email)) { 
                console.log("Admin signed in:", user.displayName, user.email);
                return user;
            } else {
                alert("هذا الحساب ("+ user.email +") غير مصرح له بالوصول كمدير.");
                await window.firebaseAuth.signOut();
                return null;
            }
        } catch (error) {
            console.error("Error during Google sign-in:", error);
            if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
                 alert(`فشل تسجيل الدخول: ${error.message} (Code: ${error.code})`);
            }
            return null;
        }
    };

    const signOutAdmin = async () => {
        if (!window.firebaseAuth) {
            alert("لم يتم تهيئة Firebase Auth بشكل صحيح.");
            return;
        }
        try {
            await window.firebaseAuth.signOut();
            console.log("Admin signed out by button click");
        } catch (error) {
            console.error("Error signing out:", error);
            alert("فشل تسجيل الخروج.");
        }
    };


    // --- Firestore Helper Functions ---
    const productsCollectionRef = () => {
        if (!window.db) {
            console.error("Firestore (window.db) is not initialized!");
            return null; 
        }
        return window.db.collection("products");
    };

    const fetchProductsFromFirestore = async () => {
        const productsRef = productsCollectionRef();
        if (!productsRef) {
            return [];
        }
        try {
            const snapshot = await productsRef.orderBy("id").get(); 
            const fetchedProducts = snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    ...data,
                    id: Number(data.id), 
                    original_price: data.original_price !== undefined ? data.original_price : null,
                    on_sale: typeof data.on_sale === 'boolean' ? data.on_sale : false,
                    is_new: typeof data.is_new === 'boolean' ? data.is_new : false,
                    image2: data.image2 !== undefined ? data.image2 : null,
                    description: data.description !== undefined ? data.description : '',
                    firestoreDocId: doc.id 
                };
            });
            console.log("Products fetched from Firestore:", fetchedProducts.length);
            initialProductsFetched = true;
            return fetchedProducts;
        } catch (error) {
            console.error("Error fetching products from Firestore: ", error);
            if (currentUser && ALLOWED_ADMIN_EMAILS.includes(currentUser.email)) {
                 console.warn(`فشل تحميل المنتجات: ${error.message}. تحقق من قواعد الأمان في Firestore.`);
            } else {
                 console.warn("Public product fetch failed or non-admin fetch failed:", error.message);
            }
            initialProductsFetched = false;
            return []; 
        }
    };
    
    // --- UI Update and Rendering Functions ---
    const updateAdminStats = () => { 
        if(!adminStatsContainer) return;
        const total = products.length;
        const inStock = products.filter(p => p.availability === 'in stock').length;
        const outOfStock = total - inStock;
        const isNewCount = products.filter(p => p.is_new).length;
        const onSaleCount = products.filter(p => p.on_sale && p.original_price && parseFormattedPrice(p.original_price) > parseFormattedPrice(p.price) ).length;

        adminStatsContainer.innerHTML = `
            <div class="admin-stat-card"><span class="stat-value">${total}</span><span class="stat-label">إجمالي المنتجات</span></div>
            <div class="admin-stat-card"><span class="stat-value">${inStock}</span><span class="stat-label">منتجات متوفرة</span></div>
            <div class="admin-stat-card"><span class="stat-value">${outOfStock}</span><span class="stat-label">منتجات غير متوفرة</span></div>
            <div class="admin-stat-card"><span class="stat-value">${isNewCount}</span><span class="stat-label">منتجات جديدة</span></div>
            <div class="admin-stat-card"><span class="stat-value">${onSaleCount}</span><span class="stat-label">منتجات مخفضة</span></div>
        `;
    };

    const renderProductManagementTable = (searchTerm = '') => { 
        if (!productManagementTableBody || !adminTotalProductsCount) return;
        productManagementTableBody.innerHTML = '';
        
        const placeholderAdminThumb = `https://placehold.co/80x80/${htmlElement.classList.contains('dark') ? '374151' : 'E5E7EB'}/${htmlElement.classList.contains('dark') ? '9CA3AF' : '6B7280'}?text=?&font=cairo`;

        const filteredAdminProducts = products.filter(product => {
            if (!searchTerm) return true;
            const term = searchTerm.toLowerCase();
            return String(product.id).includes(term) || 
                   (product.title && product.title.toLowerCase().includes(term));
        }).sort((a, b) => (Number(a.id) || 0) - (Number(b.id) || 0));

        adminTotalProductsCount.textContent = `الإجمالي: ${filteredAdminProducts.length} منتج${filteredAdminProducts.length !== 1 ? 'ات' : ''}`;

        if (filteredAdminProducts.length === 0) {
            const row = productManagementTableBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 9; 
            cell.textContent = "لا توجد منتجات تطابق البحث أو لا توجد منتجات مضافة.";
            cell.className = "text-center py-5 text-light-text-muted dark:text-dark-text-muted";
            return;
        }

        filteredAdminProducts.forEach(product => {
            const row = productManagementTableBody.insertRow();
            if (product.availability === 'out of stock') row.classList.add('product-out-of-stock');

            let currentPriceDisplay = formatPrice(product.price);
            let originalPriceDisplay = '-';

            if (product.on_sale && product.original_price && parseFormattedPrice(product.original_price) > parseFormattedPrice(product.price)) {
                originalPriceDisplay = formatPrice(product.original_price);
                currentPriceDisplay = `<strong class="text-red-600 dark:text-red-400">${formatPrice(product.price)}</strong>`;
            }

            row.innerHTML = `
                <td><img src="${product.image1 || placeholderAdminThumb}" alt="${product.title}" class="admin-table-thumbnail" onerror="this.src='${placeholderAdminThumb}'"></td>
                <td class="id-cell" title="انقر لنسخ ID">${product.id}</td>
                <td class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] sm:max-w-xs" title="${product.title}">${product.title}</td>
                <td>${originalPriceDisplay}</td>
                <td>${currentPriceDisplay}</td>
                <td>${categoryData[product.category]?.name || product.category}</td>
                <td>${product.availability === 'in stock' ? 'متوفر' : 'غير متوفر'}</td>
                <td class="${product.on_sale ? 'product-on-sale-indicator' : ''}">${product.on_sale ? 'نعم' : 'لا'}</td>
                <td class="whitespace-nowrap">
                    <div class="admin-product-actions">
                        <button class="quick-view-product-btn btn btn-sm btn-info" data-id="${product.id}" title="عرض سريع"><i class="fas fa-eye"></i></button>
                        <button class="edit-product-btn btn btn-sm btn-secondary" data-id="${product.id}" title="تعديل"><i class="fas fa-edit"></i></button>
                        <button class="delete-product-btn btn btn-sm btn-danger" data-id="${product.id}" title="حذف"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            `;
            row.querySelector('.id-cell').addEventListener('click', (e) => {
                navigator.clipboard.writeText(product.id.toString()).then(() => {
                    e.target.classList.add('text-success-DEFAULT', 'dark:text-success-light');
                    const originalText = e.target.textContent;
                    e.target.textContent = "تم النسخ!";
                    setTimeout(() => {
                        e.target.textContent = originalText;
                        e.target.classList.remove('text-success-DEFAULT', 'dark:text-success-light');
                    }, 1500);
                }).catch(err => console.error('Failed to copy ID:', err));
            });
            row.querySelector('.quick-view-product-btn').addEventListener('click', () => openDetailPanel(product.id));
            row.querySelector('.edit-product-btn').addEventListener('click', () => {
                const productToEdit = products.find(p => Number(p.id) === Number(product.id));
                if (productToEdit) openProductForm(productToEdit);
            });
            row.querySelector('.delete-product-btn').addEventListener('click', () => {
                deleteProductFromManager(Number(product.id));
            });
        });
    };
    const debouncedRenderAdminTable = debounce(renderProductManagementTable, 300);
    
    async function initializeProductsAndUI(forAdminContext = false) {
        // console.log(">>> initializeProductsAndUI - Start. Admin Context:", forAdminContext, "InitialFetched:", initialProductsFetched, "CurrentUser:", currentUser ? currentUser.email : "None");
        if (!window.db) { 
            console.error("Firestore (window.db) not initialized! Cannot proceed.");
            if (noResultsDiv) {
                 noResultsDiv.innerHTML = '<p class="text-error text-lg p-10">فشل الاتصال بقاعدة البيانات. يرجى المحاولة لاحقًا.</p>';
                 noResultsDiv.classList.remove('hidden');
                 if(productGrid) productGrid.classList.add('hidden');
                 if(loadMoreButton?.parentElement) loadMoreButton.parentElement.classList.add('hidden');
            }
             products = []; 
             refreshAllDynamicContent(); 
            return;
        }

        let productsToLoad = [];
        if (forAdminContext && currentUser && ALLOWED_ADMIN_EMAILS.includes(currentUser.email)) {
            // console.log("Fetching products for admin context.");
            productsToLoad = await fetchProductsFromFirestore();
        } else if (!forAdminContext && !initialProductsFetched) { 
            // console.log("Attempting initial public product load (if Firestore rules allow).");
            productsToLoad = await fetchProductsFromFirestore();
        } else {
            productsToLoad = products; 
            //  console.log("Not fetching, using existing products or expecting empty if admin logged out. Length:", products.length);
        }
        
        products = ensureSaleFields(productsToLoad); 
        
        refreshAllDynamicContent(); 
        // console.log(">>> initializeProductsAndUI - End. Products length:", products.length);
    }


    const ensureSaleFields = (prodArray) => {
        if (!Array.isArray(prodArray)) return [];
        return prodArray.map(p => ({
            ...p,
            original_price: p.original_price !== undefined ? p.original_price : null,
            on_sale: typeof p.on_sale === 'boolean' ? p.on_sale : false,
            is_new: typeof p.is_new === 'boolean' ? p.is_new : false,
            image2: p.image2 !== undefined ? p.image2 : null,
            description: p.description !== undefined ? p.description : '',
        }));
    };


    const refreshAllDynamicContent = () => {
        // console.log("Refreshing dynamic content with current `products` array length:", products.length);
        applyFilters(false, true); 
        initSwiper();
        renderRecentlyViewed();
        if (cartModalOverlay?.classList.contains('visible')) {
            renderCartItems();
        }
        updateCartCount();
        if (currentProductIdForDetail) {
            const detailedProduct = products.find(p => Number(p.id) === currentProductIdForDetail);
             if (!detailedProduct) {
                closeDetailPanel(true); 
            }
        }
        if (isManagementPanelOpen) {
            if (typeof updateAdminStats === "function") updateAdminStats();
            if (typeof renderProductManagementTable === "function") {
                 renderProductManagementTable(adminProductSearchInput?.value.trim().toLowerCase() || '');
            }
        }
    };

    const openProductForm = (productToEdit = null) => {
        if (!productForm || !productManagementFormContainer || !formValidationError) return;
        productForm.reset();
        formValidationError.classList.add('hidden');
        formValidationError.innerHTML = '';

        if(pfId) pfId.disabled = false; 
        if(pfUpdateId) pfUpdateId.checked = true; 
        if(pfUpdateIdContainer) pfUpdateIdContainer.style.display = 'flex';
        
        const toggleOriginalPriceField = () => {
            const originalPriceDiv = pfOriginalPrice?.parentElement;
            if (originalPriceDiv && pfOnSale) {
                originalPriceDiv.style.display = pfOnSale.checked ? 'block' : 'none';
                if(!pfOnSale.checked && pfOriginalPrice) pfOriginalPrice.value = ''; 
            }
        };

        if (pfOnSale) {
            pfOnSale.removeEventListener('change', toggleOriginalPriceField);
            pfOnSale.addEventListener('change', toggleOriginalPriceField);
        }

        if (productToEdit) {
            editingProductId = productToEdit.id; 
            if(productFormTitleElement) productFormTitleElement.textContent = `تعديل المنتج: ${productToEdit.title}`;
            if(pfId) {
                pfId.value = productToEdit.id; 
                pfId.disabled = true; 
            }
            if(pfTitle) pfTitle.value = productToEdit.title || '';
            if(pfPrice) pfPrice.value = productToEdit.price || ''; 
            if(pfOriginalPrice) pfOriginalPrice.value = productToEdit.original_price || ''; 
            if(pfOnSale) pfOnSale.checked = productToEdit.on_sale || false;
            
            if(pfImage1) pfImage1.value = productToEdit.image1 || '';
            if(pfImage2) pfImage2.value = productToEdit.image2 || '';
            if(pfSize) pfSize.value = productToEdit.size || '';
            if(pfBaseSize) pfBaseSize.value = productToEdit.base_size || '';
            if(pfCategory) pfCategory.value = productToEdit.category || '';
            if(pfAvailability) pfAvailability.value = productToEdit.availability || 'in stock';
            if(pfDescription) pfDescription.value = productToEdit.description || '';
            if(pfIsNew) pfIsNew.checked = productToEdit.is_new || false;
            if(pfUpdateIdContainer) pfUpdateIdContainer.style.display = 'none'; 
        } else {
            editingProductId = null;
            if(productFormTitleElement) productFormTitleElement.textContent = 'إضافة منتج جديد';
            if(pfId) pfId.value = ''; 
            if(pfOriginalPrice) pfOriginalPrice.value = '';
            if(pfOnSale) pfOnSale.checked = false;
        }
        toggleOriginalPriceField();
        openManagementModal(productManagementFormContainer, productForm); 
    };

    const closeProductForm = () => {
        closeManagementModal(); 
    };

    const handleProductFormSubmit = async (event) => { 
        event.preventDefault();
        if (!window.db) { alert("قاعدة البيانات غير مهيأة."); return; }
        
        if (!pfTitle || !pfPrice || !pfImage1 || !pfSize || !pfBaseSize || !pfCategory || !pfAvailability || !formValidationError) {
            alert("بعض الحقول المطلوبة للنموذج غير موجودة في DOM.");
            return;
        }
        formValidationError.classList.add('hidden');
        formValidationError.innerHTML = '';
        let errors = [];

        const title = pfTitle.value.trim();
        const currentPriceRaw = pfPrice.value.trim();
        const originalPriceRaw = pfOriginalPrice.value.trim();
        const onSale = pfOnSale.checked;

        if (!title) errors.push("حقل العنوان مطلوب.");
        if (!currentPriceRaw) errors.push("حقل السعر الحالي مطلوب.");
        else if (!/^\d{1,3}(,\d{3})*(\.\d+)?$/.test(currentPriceRaw.replace(/\s/g,'')) && !/^\d+(\.\d+)?$/.test(currentPriceRaw.replace(/\s/g,''))) {
            errors.push("تنسيق السعر الحالي غير صحيح (مثال: 8,000 أو 8000).");
        }
        
        let currentPriceNum = NaN;
        let originalPriceNum = NaN;
        if (currentPriceRaw) currentPriceNum = parseFormattedPrice(currentPriceRaw);
        if (originalPriceRaw) originalPriceNum = parseFormattedPrice(originalPriceRaw);

        if (onSale) {
            if (!originalPriceRaw) errors.push("السعر الأصلي مطلوب عند تفعيل التخفيض.");
            else if (!/^\d{1,3}(,\d{3})*(\.\d+)?$/.test(originalPriceRaw.replace(/\s/g,'')) && !/^\d+(\.\d+)?$/.test(originalPriceRaw.replace(/\s/g,''))) {
                errors.push("تنسيق السعر الأصلي غير صحيح (مثال: 10,000 أو 10000).");
            } else if (!isNaN(currentPriceNum) && !isNaN(originalPriceNum) && originalPriceNum <= currentPriceNum) {
                 errors.push("السعر الأصلي يجب أن يكون أكبر من السعر المخفض.");
            }
        }

        if (!pfImage1.value.trim()) errors.push("رابط الصورة الأساسية مطلوب.");
        if (!pfSize.value.trim()) errors.push("المقاس المعروض مطلوب.");
        if (!pfBaseSize.value) errors.push("المقاس الأساسي للفلترة مطلوب.");
        if (!pfCategory.value) errors.push("الفئة مطلوبة.");
        
        if (errors.length > 0) {
            formValidationError.innerHTML = errors.join("<br>");
            formValidationError.classList.remove('hidden');
            return;
        }

        const productDataToSave = {
            title: title,
            price: currentPriceRaw, 
            original_price: onSale && originalPriceRaw ? originalPriceRaw : null,
            on_sale: onSale,
            image1: pfImage1.value.trim(),
            image2: pfImage2.value.trim() || null,
            size: pfSize.value.trim(),
            base_size: pfBaseSize.value,
            category: pfCategory.value,
            availability: pfAvailability.value,
            description: pfDescription.value.trim() || '',
            is_new: pfIsNew.checked,
        };
        
        const saveButton = document.getElementById('save-product-form-btn');
        if(saveButton) saveButton.disabled = true;
        const productsDbRef = productsCollectionRef();
        if (!productsDbRef) { if(saveButton) saveButton.disabled = false; return; }

        try {
            if (editingProductId !== null) { 
                productDataToSave.id = Number(editingProductId); 
                await productsDbRef.doc(String(editingProductId)).set(productDataToSave, { merge: true });
                alert(`تم تعديل المنتج: ${productDataToSave.title}`);
            } else { 
                let newId;
                const manualIdRaw = pfId.value.trim();
                if (manualIdRaw && !isNaN(parseInt(manualIdRaw))) { 
                     newId = parseInt(manualIdRaw);
                     const docSnap = await productsDbRef.doc(String(newId)).get();
                     if (docSnap.exists) {
                        alert(`خطأ: المنتج بالمعرف (ID) ${newId} موجود بالفعل في قاعدة البيانات.`);
                        if(saveButton) saveButton.disabled = false;
                        pfId.focus();
                        return;
                     }
                } else if (pfUpdateId && pfUpdateId.checked) { 
                    const lastIdQuery = await productsDbRef.orderBy("id", "desc").limit(1).get();
                    newId = lastIdQuery.empty ? 1 : (Number(lastIdQuery.docs[0].data().id) || 0) + 1;
                } else { 
                     alert("يرجى إدخال ID للمنتج أو تحديد خيار التحديث التلقائي.");
                     if(saveButton) saveButton.disabled = false;
                     pfId.focus();
                     return;
                }
                productDataToSave.id = newId; 
                await productsDbRef.doc(String(productDataToSave.id)).set(productDataToSave);
                alert(`تمت إضافة المنتج: ${productDataToSave.title} (ID: ${productDataToSave.id})`);
            }
            
            closeProductForm();
            await initializeProductsAndUI(true); 
        } catch (error) {
            console.error("Error saving product to Firestore: ", error);
            alert(`فشل حفظ المنتج في قاعدة البيانات: ${error.message}`);
        } finally {
            if(saveButton) saveButton.disabled = false;
        }
    };

    const deleteProductFromManager = async (productIdToDelete) => { 
        const numProductId = Number(productIdToDelete);
        
        if (confirm(`هل أنت متأكد أنك تريد حذف المنتج ID: ${numProductId}؟ هذا الإجراء لا يمكن التراجع عنه.`)) {
            if (!window.db) { alert("قاعدة البيانات غير مهيأة."); return; }
            const productsDbRef = productsCollectionRef();
            if(!productsDbRef) return;

            try {
                await productsDbRef.doc(String(numProductId)).delete();
                
                const cartIndex = cart.indexOf(numProductId); 
                if (cartIndex > -1) {
                    cart.splice(cartIndex, 1);
                    localStorage.setItem('mqCart_v4', JSON.stringify(cart));
                }
                try { 
                    let viewed = JSON.parse(localStorage.getItem('mqRecentlyViewed_v1')) || [];
                    viewed = viewed.filter(id => Number(id) !== numProductId);
                    localStorage.setItem('mqRecentlyViewed_v1', JSON.stringify(viewed));
                } catch (e) { console.error("Error updating recently viewed after deletion:", e); }

                alert(`تم حذف المنتج ID: ${numProductId} من قاعدة البيانات.`);
                await initializeProductsAndUI(true);
            } catch (error) {
                console.error("Error deleting product from Firestore: ", error);
                alert(`فشل حذف المنتج من قاعدة البيانات: ${error.message}`);
            }
        }
    };
    
    const deleteAllProductsFromManager = async () => {
        if (!window.db) { alert("قاعدة البيانات غير مهيأة."); return; }
        const productsDbRef = productsCollectionRef();
        if (!productsDbRef) return;

        if (confirm("تحذير شديد! هل أنت متأكد أنك تريد حذف جميع المنتجات من قاعدة البيانات؟ هذا الإجراء لا يمكن التراجع عنه.")) {
            const confirmationText = prompt("للتأكيد النهائي، يرجى كتابة كلمة 'تأكيد' أو 'confirm' في الحقل أدناه:");
            if (confirmationText === null || (confirmationText.toLowerCase() !== 'تأكيد' && confirmationText.toLowerCase() !== 'confirm')) {
                alert("تم إلغاء عملية الحذف.");
                return;
            }

            try {
                const batch = window.db.batch();
                const snapshot = await productsDbRef.get();
                
                if (snapshot.empty) {
                    alert("لا توجد منتجات لحذفها.");
                    return;
                }

                snapshot.docs.forEach(doc => {
                    batch.delete(doc.ref);
                });
                
                await batch.commit();
                
                cart = [];
                localStorage.setItem('mqCart_v4', JSON.stringify(cart));
                localStorage.removeItem('mqRecentlyViewed_v1');

                alert(`تم حذف جميع المنتجات (${snapshot.size} منتج) بنجاح من قاعدة البيانات.`);
                await initializeProductsAndUI(true); 
            } catch (error) {
                console.error("Error deleting all products from Firestore: ", error);
                alert(`فشل حذف جميع المنتجات من قاعدة البيانات: ${error.message}`);
            }
        }
    };


    // --- CSV Export/Import ---
    const convertToCSV = (arr) => {
        if (!arr || arr.length === 0) return "";
        const headers = ['id', 'title', 'price', 'original_price', 'on_sale', 'image1', 'image2', 'size', 'base_size', 'category', 'availability', 'description', 'is_new'];
        const array = [headers].concat(arr.map(obj => headers.map(header => {
             let val = obj[header];
             if (typeof val === 'boolean') return val ? 'true' : 'false';
             return val !== undefined && val !== null ? val : ''; 
        }))); 
        
        return array.map(row => {
            return row.map(value => {
                let valStr = String(value); 
                if (valStr.includes(',') || valStr.includes('"') || valStr.includes('\n')) {
                    valStr = '"' + valStr.replace(/"/g, '""') + '"'; 
                }
                return valStr;
            }).join(',');
        }).join('\r\n');
    };

    const downloadCSVFile = (csvString, filename = "products.csv") => {
        const blob = new Blob(["\uFEFF" + csvString], { type: 'text/csv;charset=utf-8;' }); 
        const link = document.createElement("a");
        if (link.download !== undefined) { 
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };
    
    const openExportModal = () => {
        if (!productExportModal) return;
        openManagementModal(productExportModal, productExportModal.querySelector('.admin-modal-content'));
    };
    const closeExportModal = () => closeManagementModal();
    
    const handleDownloadCSV = async () => { 
        if (!window.db) { alert("قاعدة البيانات غير مهيأة."); return; }
        const productsDbRef = productsCollectionRef();
        if(!productsDbRef) return;
        try {
            const snapshot = await productsDbRef.orderBy("id").get();
            const firestoreProducts = snapshot.docs.map(doc => {
                const data = doc.data();
                 return { 
                    id: data.id, 
                    title: data.title, 
                    price: data.price,
                    original_price: data.original_price !== undefined ? data.original_price : null,
                    on_sale: typeof data.on_sale === 'boolean' ? data.on_sale : false,
                    image1: data.image1, 
                    image2: data.image2 !== undefined ? data.image2 : null,
                    size: data.size, 
                    base_size: data.base_size, 
                    category: data.category,
                    availability: data.availability,
                    description: data.description !== undefined ? data.description : '',
                    is_new: typeof data.is_new === 'boolean' ? data.is_new : false,
                 };
            });
            
            if (firestoreProducts.length === 0) {
                alert("لا توجد منتجات لتصديرها من قاعدة البيانات.");
                return;
            }
            const csvData = convertToCSV(firestoreProducts);
            downloadCSVFile(csvData, `MISTER_Quality_products_${new Date().toISOString().slice(0,10)}.csv`);
            closeExportModal();
        } catch(e) {
            alert("حدث خطأ أثناء تصدير المنتجات من قاعدة البيانات كملف CSV.");
            console.error("Error exporting products from Firestore to CSV:", e);
        }
    };

    const parseCSV = (csvText) => { 
        const rows = [];
        let currentRow = [];
        let inQuotes = false;
        let currentField = '';
        if (csvText.charCodeAt(0) === 0xFEFF) {
            csvText = csvText.substring(1);
        }
        for (let i = 0; i < csvText.length; i++) {
            const char = csvText[i];
            if (char === '"') {
                if (inQuotes && i + 1 < csvText.length && csvText[i + 1] === '"') {
                    currentField += '"'; 
                    i++; 
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                currentRow.push(currentField.trim());
                currentField = '';
            } else if ((char === '\n' || char === '\r') && !inQuotes) {
                if (char === '\r' && i + 1 < csvText.length && csvText[i + 1] === '\n') {
                    i++; 
                }
                currentRow.push(currentField.trim());
                rows.push(currentRow);
                currentRow = [];
                currentField = '';
            } else {
                currentField += char;
            }
        }
        if (currentField || currentRow.length > 0) { 
            currentRow.push(currentField.trim());
            rows.push(currentRow);
        }
        return rows.filter(row => row.length > 0 && row.some(cell => cell !== ''));
    };


    const openImportModal = () => {
        if (!productImportModal) return;
        openManagementModal(productImportModal, productImportModal.querySelector('.admin-modal-content'));
    };
    const closeImportModal = () => closeManagementModal();

    const handleProcessImport = () => {
        if (!csvFileInput || !csvFileInput.files || csvFileInput.files.length === 0) {
            if(importErrorMessage) {
                importErrorMessage.textContent = "يرجى اختيار ملف CSV أولاً.";
                importErrorMessage.classList.remove('hidden');
            }
            return;
        }
        if(importErrorMessage) {
            importErrorMessage.classList.add('hidden');
            importErrorMessage.textContent = '';
        }

        const file = csvFileInput.files[0];
        const reader = new FileReader();

        reader.onload = async function(event) { 
            if (!window.db) { alert("قاعدة البيانات غير مهيأة."); return; }
            const productsDbRef = productsCollectionRef();
            if(!productsDbRef) return;
            const batch = window.db.batch();

            try {
                const csvData = event.target.result;
                const parsedRows = parseCSV(csvData);

                if (parsedRows.length < 2) {
                    throw new Error("ملف CSV فارغ أو يحتوي على ترويسات فقط.");
                }

                let headers = parsedRows[0].map(h => String(h).trim().toLowerCase().replace(/\s+/g, '_'));
                if (headers[0] && headers[0].startsWith("ï»¿")) { 
                    headers[0] = headers[0].substring(3); 
                }

                const dataRows = parsedRows.slice(1);
                const importedProductsData = []; 
                const validationErrors = [];
                const productIdsInCsv = new Set();

                const essentialHeaders = ['id', 'title', 'price', 'image1', 'size', 'base_size', 'category', 'availability'];
                
                for (const essentialHeader of essentialHeaders) {
                    if (!headers.includes(essentialHeader)) {
                        validationErrors.push(`الترويسة المطلوبة ("${essentialHeader}") مفقودة في ملف CSV.`);
                    }
                }
                if (validationErrors.length > 0 ) { 
                    if(importErrorMessage) {
                        importErrorMessage.innerHTML = "<strong>أخطاء في الترويسات:</strong><br>" + validationErrors.join("<br>");
                        importErrorMessage.classList.remove('hidden');
                    }
                     return; 
                 }


                dataRows.forEach((row, rowIndex) => {
                    if (row.every(cell => cell.trim() === '')) return; 

                    if (row.length > headers.length) { 
                        validationErrors.push(`عدد الأعمدة في السطر ${rowIndex + 2} (${row.length}) يتجاوز عدد الترويسات (${headers.length}). قد يكون هناك فاصلة (,) زائدة في إحدى القيم.`);
                        return; 
                    }
                    
                    const product = {};
                    headers.forEach((header, colIndex) => {
                         if (colIndex < row.length) { product[header] = String(row[colIndex]).trim(); } 
                         else { product[header] = ''; } 
                    });
                    
                    const idHeaderKey = headers.find(h => h.toLowerCase().includes('id')) || 'id'; 
                    const productIdRaw = product[idHeaderKey];
                    let productIdNum = NaN;

                    if (productIdRaw === undefined || productIdRaw === '' || isNaN(parseInt(productIdRaw))) {
                        validationErrors.push(`السطر ${rowIndex + 2}: ID غير صالح أو مفقود ("${productIdRaw}").`);
                    } else {
                        productIdNum = parseInt(productIdRaw);
                        if (productIdsInCsv.has(productIdNum)) {
                             validationErrors.push(`السطر ${rowIndex + 2}: ID مكرر في الملف: ${productIdNum}.`);
                        }
                        productIdsInCsv.add(productIdNum);
                        product.id = productIdNum; 
                    }

                    essentialHeaders.forEach(field => {
                        if (field !== 'id' && (!product[field] || String(product[field]).trim() === '')) { 
                            validationErrors.push(`السطر ${rowIndex+2} (ID: ${productIdNum || 'N/A'}): يفتقد الحقل المطلوب "${field}".`);
                        }
                    });

                     if (product.price && !/^\d{1,3}(,\d{3})*(\.\d+)?$/.test(String(product.price).replace(/\s/g,'')) && !/^\d+(\.\d+)?$/.test(String(product.price).replace(/\s/g,''))) {
                        validationErrors.push(`السطر ${rowIndex + 2} (ID: ${productIdNum || 'N/A'}): تنسيق السعر الحالي غير صالح '${product.price}'.`);
                    }
                    
                    const onSaleRaw = String(product.on_sale || 'false').trim().toLowerCase();
                    product.on_sale = onSaleRaw === 'true' || onSaleRaw === '1' || onSaleRaw === 'yes';

                    if (product.on_sale) {
                        if (!product.original_price || String(product.original_price).trim() === '') {
                        } else if (!/^\d{1,3}(,\d{3})*(\.\d+)?$/.test(String(product.original_price).replace(/\s/g,'')) && !/^\d+(\.\d+)?$/.test(String(product.original_price).replace(/\s/g,''))) {
                             validationErrors.push(`السطر ${rowIndex + 2} (ID: ${productIdNum || 'N/A'}): تنسيق السعر الأصلي غير صالح '${product.original_price}'.`);
                        } else if (product.price && parseFormattedPrice(product.original_price) <= parseFormattedPrice(product.price)){
                            validationErrors.push(`السطر ${rowIndex + 2} (ID: ${productIdNum || 'N/A'}): السعر الأصلي (${product.original_price}) يجب أن يكون أكبر من السعر المخفض (${product.price}).`);
                        }
                    } else { 
                         product.original_price = (product.original_price && String(product.original_price).trim() !== '') ? String(product.original_price).trim() : null;
                    }

                    const isNewVal = String(product.is_new || 'false').trim().toLowerCase();
                    product.is_new = isNewVal === 'true' || isNewVal === '1' || isNewVal === 'yes';
                    
                    product.image2 = product.image2 ? String(product.image2).trim() : null;
                    if(product.image2 === '') product.image2 = null;
                    product.description = product.description ? String(product.description).trim() : '';
                    product.availability = product.availability || 'in stock'; 


                    if(!isNaN(productIdNum)) importedProductsData.push(product);
                });


                if (validationErrors.length > 0) {
                    if(importErrorMessage){
                        importErrorMessage.innerHTML = "<strong>أخطاء في بيانات CSV:</strong><br>" + validationErrors.slice(0, 15).join("<br>") + (validationErrors.length > 15 ? "<br>... و المزيد من الأخطاء." : "");
                        importErrorMessage.classList.remove('hidden');
                    }
                    return;
                }
                
                if (confirm(`هل أنت متأكد أنك تريد استبدال جميع المنتجات الحالية بـ ${importedProductsData.length} منتج من ملف CSV؟ سيتم حذف جميع المنتجات الحالية أولاً.`)) {
                    const existingProductsSnapshot = await productsDbRef.get();
                    existingProductsSnapshot.docs.forEach(doc => {
                        batch.delete(doc.ref);
                    });

                    importedProductsData.forEach(productObj => {
                        const docRef = productsDbRef.doc(String(productObj.id)); 
                        const dataToSet = {...productObj};
                        dataToSet.price = String(dataToSet.price).trim(); 
                        dataToSet.original_price = dataToSet.original_price ? String(dataToSet.original_price).trim() : null;

                        batch.set(docRef, dataToSet);
                    });

                    await batch.commit();

                    alert(`تم حذف المنتجات القديمة واستيراد ${importedProductsData.length} منتج جديد بنجاح!`);
                    await initializeProductsAndUI(true); 
                    closeImportModal();
                }

            } catch (error) {
                console.error("Error processing CSV import with Firestore:", error);
                if(importErrorMessage) {
                    importErrorMessage.textContent = "فشل استيراد ملف CSV. تأكد من صحة تنسيق الملف (UTF-8). الخطأ: " + error.message;
                    importErrorMessage.classList.remove('hidden');
                }
            }
        };
        reader.onerror = function() {
            if(importErrorMessage){
                importErrorMessage.textContent = "خطأ في قراءة الملف.";
                importErrorMessage.classList.remove('hidden');
            }
            console.error("FileReader error:", reader.error);
        };
        reader.readAsText(file, 'UTF-8');
    };

    // --- Admin Panel UI & Logic ---
    const requestAdminAuthAndTogglePanel = async (forceOpen = null) => {
        const openPanel = async () => {
            isManagementPanelOpen = true;
            if (productDetailPanel?.classList.contains('visible')) closeDetailPanel(true);
            if (activeModalOrOverlay) closeOverlay(true);
            if (isMobileMenuOpen) closeMobileMenu();
            if(adminProductSearchInput) adminProductSearchInput.value = '';
            
            if (!initialProductsFetched && currentUser && ALLOWED_ADMIN_EMAILS.includes(currentUser.email)) {
                await initializeProductsAndUI(true);
            } else { 
                updateAdminStats(); 
                renderProductManagementTable(); 
            }

            productManagementPanel.style.display = 'flex';
            requestAnimationFrame(() => {
                productManagementPanel.classList.add('visible'); 
            });
            setBodyScrollLock(true);

            let signOutButton = document.getElementById('admin-sign-out-btn');
            if (!signOutButton && adminPanelHeaderDiv) { 
                 signOutButton = document.createElement('button');
                 signOutButton.id = 'admin-sign-out-btn';
                 signOutButton.className = 'btn btn-danger btn-sm ml-auto'; 
                 signOutButton.innerHTML = '<i class="fas fa-sign-out-alt mr-1"></i> تسجيل الخروج';
                 signOutButton.addEventListener('click', signOutAdmin); 
                 
                 const existingButton = adminPanelHeaderDiv.querySelector('#admin-sign-out-btn');
                 if (!existingButton) { 
                    adminPanelHeaderDiv.appendChild(signOutButton);
                 }
            }
            if(signOutButton) signOutButton.style.display = 'inline-flex';

            if (adminUserInfo) {
                if (currentUser) {
                     const lastLogin = localStorage.getItem('lastAdminLogin') || 'غير متوفر';
                     adminUserInfo.innerHTML = `مسجّل كـ: <span class="font-semibold text-primary dark:text-primary-light">${currentUser.displayName || currentUser.email}</span><br><span class="text-xs">آخر دخول: ${lastLogin}</span>`;
                     adminUserInfo.classList.remove('hidden');
                } else {
                    adminUserInfo.classList.add('hidden');
                }
            }
        };

        const closePanel = () => {
            isManagementPanelOpen = false;
            if (activeManagementModal) closeManagementModal(true); 
            
            productManagementPanel.classList.remove('visible'); 
            
            setTimeout(() => {
                productManagementPanel.style.display = 'none';
                setBodyScrollLock(false);
            }, 300); 
            
            const signOutButton = document.getElementById('admin-sign-out-btn');
            if (signOutButton) signOutButton.style.display = 'none';
            if(adminUserInfo) adminUserInfo.classList.add('hidden');
        };
        
        const shouldOpen = forceOpen !== null ? forceOpen : !isManagementPanelOpen;

        if (shouldOpen) {
            if (!currentUser) { 
                console.log("Admin panel toggle: No current user, attempting Google sign-in.");
                const user = await signInWithGoogle();
            } else if (ALLOWED_ADMIN_EMAILS.includes(currentUser.email)) { 
                console.log("Admin panel toggle: Admin user already authenticated, opening panel.");
                await openPanel(); 
            } else { 
                console.log("Admin panel toggle: User authenticated but not an admin:", currentUser.email);
                alert("وصول غير مصرح به. الحساب المسجل حالياً (" + (currentUser.email || 'غير معروف') + ") ليس لديه صلاحيات المدير.");
                await signOutAdmin(); 
            }
        } else { 
             if (isManagementPanelOpen) {
                console.log("Admin panel toggle: Closing panel.");
                closePanel();
            }
        }
    };


    // --- Event Listeners Setup ---
    let originalHandleEscapeKey; 
    
    const setupEventListeners = () => {
         window.addEventListener('scroll', debounce(handleScroll, 50), { passive: true });
         originalHandleEscapeKey = (event) => { 
            if (event.key === 'Escape' || event.key === 'Esc') {
                 if (productDetailPanel?.classList.contains('visible')) closeDetailPanel();
                 else if (activeModalOrOverlay) closeOverlay();
                 else if (isMobileMenuOpen) closeMobileMenu();
            }
         };
         document.addEventListener('keydown', (event) => { 
            if (event.key === 'Escape' || event.key === 'Esc') {
                if (activeManagementModal && activeManagementModal.style.display === 'flex') {
                    closeManagementModal();
                } else if (isManagementPanelOpen && productManagementPanel.style.display === 'flex') { 
                    requestAdminAuthAndTogglePanel(false); 
                } else {
                    originalHandleEscapeKey(event); 
                }
            }
         });

         mobileNavToggle?.addEventListener('click', toggleMobileMenu);
         searchFilterToggleBtn?.addEventListener('click', () => openOverlay(searchFilterOverlay));
         themeToggleButton?.addEventListener('click', toggleTheme);
         cartButton?.addEventListener('click', openCartModal);
         startShoppingBtnCart?.addEventListener('click', (e) => { e.preventDefault(); closeOverlay(); const productsSection = document.getElementById('products'); if(productsSection) { const headerOffset = header?.offsetHeight || 70; const elementPosition = productsSection.getBoundingClientRect().top + window.pageYOffset; window.scrollTo({ top: elementPosition - headerOffset - 20, behavior: 'smooth' }); } });
         mobileNavMenuLinks?.forEach(link => { link.addEventListener('click', (e) => { const targetId = link.getAttribute('href'); if (targetId && targetId.startsWith('#')) { const targetElement = document.querySelector(targetId); if (targetElement) { e.preventDefault(); const headerOffset = header?.offsetHeight || 70; const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; closeMobileMenu(); setTimeout(() => { window.scrollTo({ top: elementPosition - headerOffset - 20, behavior: 'smooth' }); }, 300); } else { closeMobileMenu(); } } else { closeMobileMenu(); } }); });
        closeSearchFilterOverlayBtn?.addEventListener('click', closeOverlay);
        searchFilterOverlay?.addEventListener('click', (e) => { if (e.target === searchFilterOverlay) closeOverlay(); });
        applyOverlayFiltersBtn?.addEventListener('click', handleApplyOverlayFilters);
        overlaySearchInput?.addEventListener('input', () => debouncedApplyFilters(true, false)); 
        overlaySizeSelect?.addEventListener('change', () => applyFilters(true, true));
        clearOverlayFiltersBtn?.addEventListener('click', clearAllFilters);
        clearFiltersBtn?.addEventListener('click', clearAllFilters);
        closeDetailPanelBtn?.addEventListener('click', closeDetailPanel);
        productDetailBackdrop?.addEventListener('click', closeDetailPanel);
        orderFormModalCloseButton?.addEventListener('click', closeOrderModal);
        orderFormModalOverlay?.addEventListener('click', (e) => { if (e.target === orderFormModalOverlay) closeOrderModal(); });
        cartModalCloseButton?.addEventListener('click', closeCartModal);
        cartModalOverlay?.addEventListener('click', (e) => { if (e.target === cartModalOverlay) closeCartModal(); });
        cartOrderAllBtn?.addEventListener('click', prepareOrderForAllCartItems);
        privacyPolicyLink?.addEventListener('click', (e) => { e.preventDefault(); openPrivacyPolicyModal(); });
        privacyPolicyModalCloseButton?.addEventListener('click', closePrivacyPolicyModal);
        privacyModalCloseBtnBottom?.addEventListener('click', closePrivacyPolicyModal);
        privacyPolicyModalOverlay?.addEventListener('click', (e) => { if (e.target === privacyPolicyModalOverlay) closePrivacyPolicyModal(); });
        returnPolicyLink?.addEventListener('click', (e) => { e.preventDefault(); openReturnPolicyModal(); });
        returnPolicyModalCloseButton?.addEventListener('click', closeReturnPolicyModal);
        returnModalCloseBtnBottom?.addEventListener('click', closeReturnPolicyModal);
        returnPolicyModalOverlay?.addEventListener('click', (e) => { if (e.target === returnPolicyModalOverlay) closeReturnPolicyModal(); });
        sizeGuideFooterLink?.addEventListener('click', (e) => { e.preventDefault(); openSizeGuideModal(); });
        sizeGuideModalCloseButton?.addEventListener('click', closeSizeGuideModal);
        sizeGuideModalCloseBtnBottom?.addEventListener('click', closeSizeGuideModal);
        sizeGuideModalOverlay?.addEventListener('click', (e) => { if (e.target === sizeGuideModalOverlay) closeSizeGuideModal(); });
        scrollToTopBtn?.addEventListener('click', scrollToTop);
        loadMoreButton?.addEventListener('click', () => { loadMoreButton.disabled = true; loadMoreButton.innerHTML = `<i class="fas fa-spinner fa-spin mr-2 text-sm"></i> جاري التحميل...`; requestAnimationFrame(() => { setTimeout(() => loadMoreProducts(), 150); }); });
        const yearSpan = document.getElementById('year'); if (yearSpan) yearSpan.textContent = new Date().getFullYear();

        productManagementToggleBtn?.addEventListener('click', () => requestAdminAuthAndTogglePanel());
        closeManagementPanelBtn?.addEventListener('click', () => requestAdminAuthAndTogglePanel(false)); 
        productManagementPanel?.addEventListener('click', (e) => { 
            if (e.target === productManagementPanel) requestAdminAuthAndTogglePanel(false);
        });
        addNewProductBtn?.addEventListener('click', () => openProductForm(null));
        exportProductDataBtn?.addEventListener('click', openExportModal);
        importProductDataBtn?.addEventListener('click', openImportModal);
        deleteAllProductsBtn?.addEventListener('click', deleteAllProductsFromManager);
        productForm?.addEventListener('submit', handleProductFormSubmit);
        closeProductFormBtn?.addEventListener('click', closeProductForm);
        cancelProductFormBtn?.addEventListener('click', closeProductForm);
        productManagementFormContainer?.addEventListener('click', (e) => { 
            if (e.target === productManagementFormContainer) closeProductForm();
        });
        downloadCsvBtn?.addEventListener('click', handleDownloadCSV);
        closeExportModalBtn?.addEventListener('click', closeExportModal);
        productExportModal?.addEventListener('click', (e) => { 
            if (e.target === productExportModal) closeExportModal();
        });
        closeImportModalBtn?.addEventListener('click', closeImportModal);
        cancelImportBtn?.addEventListener('click', closeImportModal);
        processImportBtn?.addEventListener('click', handleProcessImport);
        productImportModal?.addEventListener('click', (e) => {
            if (e.target === productImportModal) closeImportModal();
        });
        csvFileInput?.addEventListener('change', (event) => {
            if (csvFileNameDisplay && processImportBtn) {
                if (event.target.files && event.target.files.length > 0) {
                    csvFileNameDisplay.textContent = `الملف المحدد: ${event.target.files[0].name}`;
                    processImportBtn.disabled = false;
                    if (importErrorMessage) importErrorMessage.classList.add('hidden'); 
                } else {
                    csvFileNameDisplay.textContent = '';
                    processImportBtn.disabled = true;
                }
            }
        });
        adminProductSearchInput?.addEventListener('input', () => {
            debouncedRenderAdminTable(adminProductSearchInput.value.trim().toLowerCase());
        });
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.altKey && (e.key.toLowerCase() === 'm' || e.key.toLowerCase() === 'ح')) { 
                e.preventDefault();
                requestAdminAuthAndTogglePanel();
            }
        });
    };

    // --- Helper Functions ---
    const handleApplyOverlayFilters = () => { applyFilters(true, true); closeOverlay(); };
    const populateCategoryCards = () => {
        if (!categoryCardsContainer) return;
        categoryCardsContainer.innerHTML = ''; 
        Object.keys(categoryData).forEach(key => {
            const cat = categoryData[key];
            const card = document.createElement('a');
            card.href = "#products";
            card.dataset.category = key;
            card.className = `category-card group flex flex-col items-center justify-center p-4 md:p-5 bg-light-surface dark:bg-dark-surface border-2 border-transparent rounded-xl shadow-sm hover:shadow-lg hover:border-primary/40 dark:hover:border-primary-light/40 transition-all duration-200 ease-out text-center min-h-[100px] md:min-h-[120px]`;
            if (key === 'all') card.classList.add('active'); 
            card.innerHTML = `<i class="${cat.icon} text-3xl md:text-4xl mb-2.5 text-primary dark:text-primary-light transition-transform duration-200 group-hover:scale-110"></i><span class="text-sm md:text-base font-medium text-light-text-secondary dark:text-dark-text-secondary group-hover:text-primary dark:group-hover:text-primary-light transition-colors">${cat.name}</span>`;
            card.addEventListener('click', (e) => {
                e.preventDefault();
                setActiveCategory(key, card);
            });
            categoryCardsContainer.appendChild(card);
        });
    };


    // --- Initialization ---
    document.addEventListener('DOMContentLoaded', async () => { 
        console.log("DOM Ready. Initializing App.");

        if (typeof firebase === 'undefined' || !window.firebaseApp || !window.firebaseAuth || !window.db) {
            console.error("Firebase SDKs not loaded or initialized correctly! Admin features will not work.");
            if(productManagementToggleBtn) productManagementToggleBtn.disabled = true;
            products = []; 
            await initializeProductsAndUI(false); 
        } else {
            console.log("Setting up Firebase Auth state listener.");
            window.firebaseAuth.onAuthStateChanged(async (user) => { 
                const previousUserEmail = currentUser ? currentUser.email : null;
                // console.log("onAuthStateChanged - New User State:", user ? user.email : "No user", "Previous Admin:", previousUserEmail);

                if (user && ALLOWED_ADMIN_EMAILS.includes(user.email)) {
                    currentUser = user;
                    if (previousUserEmail !== user.email) { 
                        //  console.log("Admin state changed: Logged In as", user.email);
                         localStorage.setItem('lastAdminLogin', new Date().toLocaleString('ar-EG',{hour12:true, timeStyle:'short', dateStyle:'medium'}));
                    }
                    if (!initialProductsFetched || isManagementPanelOpen) { 
                        await initializeProductsAndUI(true);
                    } else { 
                        refreshAllDynamicContent(); 
                    }
                } else { 
                    if (currentUser) { 
                        // console.log("Admin state changed: Admin signed out or new user is not admin. Previous admin:", currentUser.email, "New user:", user ? user.email : "null");
                    }
                    currentUser = null;
                    initialProductsFetched = false; 
                    products = []; 
                    if (isManagementPanelOpen) { 
                        requestAdminAuthAndTogglePanel(false); 
                    }
                     if(adminUserInfo) adminUserInfo.classList.add('hidden');
                     await initializeProductsAndUI(false); 
                }
            });
            await initializeProductsAndUI(false); 
        }

        const storedTheme = localStorage.getItem('mqTheme_v2');
        const initialTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(initialTheme);
        populateCategoryCards();
        initSectionObserver();
        updateCartCount();
        setupEventListeners(); 
        handleScroll(); 
        console.log("App Initialized after DOMContentLoaded.");
    });