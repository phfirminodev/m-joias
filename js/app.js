/**
 * IZAURA SEMIJOIAS - INTERACTIVE APP ENGINE
 * Joalheria fina & Semijoias em Sobradinho, Brasília - DF
 * Avaliação 5.0 ★★★★★ (52 avaliações no Google)
 */

// ==========================================================================
// BANCO DE DADOS DE PRODUTOS (IZAURA SEMIJOIAS)
// ==========================================================================
const PRODUCTS = [
  {
    id: 1,
    name: "Conjunto Raiane: Brincos Argola + Colar Ponto de Luz 18K",
    category: "conjuntos",
    tags: ["bestseller", "conjuntos"],
    badge: "MAIS VENDIDO",
    badgeType: "badge-gold",
    priceCompare: 449.00,
    price: 349.00,
    rating: 5.0,
    reviewsCount: 52,
    imgMain: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=700&q=80",
    colors: ["#C5A059", "#E5E5E5"],
    sizes: ["Tamanho Único"],
    description: "Conjunto clássico e delicado que conquistou nossas clientes: par de brincos argola cravejada com microzircônias e colar ponto de luz em berço de ouro 18K. Hipoalergênico, com garantia e embalagem para presente."
  },
  {
    id: 2,
    name: "Corrente Veneziana Banhada a Ouro 18K com Pingente Mandala",
    category: "correntes",
    tags: ["bestseller", "correntes"],
    badge: "OURO 18K",
    badgeType: "badge-gold",
    priceCompare: 299.00,
    price: 229.00,
    rating: 5.0,
    reviewsCount: 48,
    imgMain: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80",
    colors: ["#C5A059", "#E5E5E5"],
    sizes: ["45cm", "50cm", "60cm"],
    description: "Corrente metálica elo veneziana diamantada com banho reforçado de ouro 18K e verniz protetor cataforético. Pingente mandala detalhado com brilho refinado. Fecho resistente com trava."
  },
  {
    id: 3,
    name: "Brinco Argola Cravejada com Microzircônias 5A Ouro 18K",
    category: "brincos",
    tags: ["bestseller", "brincos"],
    badge: "DESTAQUE",
    badgeType: "badge-gold",
    priceCompare: 219.00,
    price: 169.00,
    rating: 5.0,
    reviewsCount: 52,
    imgMain: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=700&q=80",
    colors: ["#C5A059", "#E5E5E5"],
    sizes: ["P (12mm)", "M (16mm)", "G (20mm)"],
    description: "Argola queridinha das clientes Izaura: fecho click super prático e confortável, cravação frontal e interna com zircônias de corte brilhante. Perfeita para usar todos os dias com elegância."
  },
  {
    id: 4,
    name: "Pulseira Riviera Cravejada com Zircônias Cristais Ouro 18K",
    category: "conjuntos",
    tags: ["bestseller", "conjuntos"],
    badge: "LUXO",
    badgeType: "badge-gold",
    priceCompare: 389.00,
    price: 289.00,
    rating: 5.0,
    reviewsCount: 46,
    imgMain: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    colors: ["#C5A059", "#E5E5E5"],
    sizes: ["16cm", "18cm", "20cm"],
    description: "A clássica Riviera que nunca sai de moda. Pedras de zircônia cúbica 5A cravadas individualmente em garras polidas. Fecho gaveta duplo de alta joalheria."
  },
  {
    id: 5,
    name: "Conjunto Duo: Colar Choker + Brinco Gota Zircônia",
    category: "conjuntos",
    tags: ["kits", "bestseller"],
    badge: "-25% OFF",
    badgeType: "badge-discount",
    priceCompare: 420.00,
    price: 315.00,
    rating: 5.0,
    reviewsCount: 51,
    imgMain: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    colors: ["#C5A059"],
    sizes: ["Único"],
    description: "Harmonia impecável entre a choker de elos delicados e o par de brincos com pedra em formato de gota facetada. Ideal para presentear com estilo e afeto."
  },
  {
    id: 6,
    name: "Anel Solitário Supreme Cristal Lapidado Ouro 18K",
    category: "aneis",
    tags: ["lancamentos", "aneis"],
    badge: "EXCLUSIVO",
    badgeType: "badge-gold",
    priceCompare: 230.00,
    price: 179.00,
    rating: 5.0,
    reviewsCount: 43,
    imgMain: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=700&q=80",
    colors: ["#C5A059", "#E5E5E5"],
    sizes: ["Aro 14", "Aro 16", "Aro 18", "Aro 20", "Aro 22"],
    description: "Anel solitário elegante com zircônia premium central de 6mm. Banho espesso em ouro 18K, tecnologia antialérgica livre de níquel e acabamento espelhado."
  },
  {
    id: 7,
    name: "Brinco Ear Cuff Pérolas Shell & Cristais Navete",
    category: "brincos",
    tags: ["lancamentos", "brincos"],
    badge: "NOVO",
    badgeType: "badge-new",
    priceCompare: 210.00,
    price: 159.00,
    rating: 5.0,
    reviewsCount: 39,
    imgMain: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=700&q=80",
    colors: ["#C5A059"],
    sizes: ["Par Padrão"],
    description: "Acessório moderno que contorna a orelha com suavidade e sofisticação. Pérolas shell com brilho natural combinadas com zircônias em corte navete."
  },
  {
    id: 8,
    name: "Corrente Elo Português 45cm com Fecho Boia Frontal",
    category: "correntes",
    tags: ["correntes", "lancamentos"],
    badge: "TENDÊNCIA",
    badgeType: "badge-new",
    priceCompare: 290.00,
    price: 229.00,
    rating: 5.0,
    reviewsCount: 47,
    imgMain: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    imgHover: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
    colors: ["#C5A059"],
    sizes: ["45cm"],
    description: "Corrente encorpada em elo português com fecho boia decorativo que pode ser usado para frente. Uma semijoia versátil, contemporânea e cheia de personalidade."
  }
];

// ==========================================================================
// ESTADO GLOBAL DO CARRINHO E WISHLIST
// ==========================================================================
class IzauraStore {
  constructor() {
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.coupon = null;
    this.discountPercent = 0;
    this.freeShippingThreshold = 199.00;

    this.init();
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('izaura_semijoias_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 1,
          name: "Conjunto Raiane: Brincos Argola + Colar Ponto de Luz 18K",
          variant: "Dourado / Único",
          price: 349.00,
          qty: 1,
          img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80"
        }
      ];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    localStorage.setItem('izaura_semijoias_cart', JSON.stringify(this.cart));
    this.renderCartUI();
  }

  loadWishlist() {
    try {
      const saved = localStorage.getItem('izaura_semijoias_wishlist');
      return saved ? JSON.parse(saved) : [1, 3];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    localStorage.setItem('izaura_semijoias_wishlist', JSON.stringify(this.wishlist));
    this.updateWishlistBadges();
  }

  addToCart(productId, variantText = null, qty = 1) {
    const product = PRODUCTS.find(p => p.id === Number(productId));
    if (!product) return;

    const variant = variantText || (product.sizes ? product.sizes[0] : "Padrão");
    const existing = this.cart.find(item => item.id === product.id && item.variant === variant);

    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        variant: variant,
        price: product.price,
        qty: qty,
        img: product.imgMain
      });
    }

    this.saveCart();
    this.openCart();
    showToast(`Adicionado à sacola: ${product.name}`);
  }

  removeFromCart(index) {
    if (this.cart[index]) {
      const item = this.cart[index];
      this.cart.splice(index, 1);
      this.saveCart();
      showToast(`Item removido: ${item.name}`);
    }
  }

  updateQty(index, delta) {
    if (this.cart[index]) {
      this.cart[index].qty += delta;
      if (this.cart[index].qty <= 0) {
        this.removeFromCart(index);
      } else {
        this.saveCart();
      }
    }
  }

  applyCoupon(code) {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === "IZAURA10" || cleanCode === "SOBRADINHO10" || cleanCode === "BEMVINDA") {
      this.coupon = cleanCode;
      this.discountPercent = 10;
      this.renderCartUI();
      showToast("Cupom Izaura de 10% OFF aplicado com sucesso!");
      return true;
    } else if (cleanCode === "VIP15") {
      this.coupon = cleanCode;
      this.discountPercent = 15;
      this.renderCartUI();
      showToast("Cupom VIP de 15% OFF aplicado!");
      return true;
    } else {
      showToast("Cupom inválido ou expirado.", "error");
      return false;
    }
  }

  getSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getDiscountAmount() {
    return (this.getSubtotal() * this.discountPercent) / 100;
  }

  getTotal() {
    return Math.max(0, this.getSubtotal() - this.getDiscountAmount());
  }

  openCart() {
    const backdrop = document.getElementById('cartDrawerBackdrop');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeCart() {
    const backdrop = document.getElementById('cartDrawerBackdrop');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleWishlist(productId) {
    const id = Number(productId);
    const index = this.wishlist.indexOf(id);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      showToast("Removido dos favoritos.");
    } else {
      this.wishlist.push(id);
      showToast("Salvo na sua lista de desejos!");
    }
    this.saveWishlist();
  }

  updateWishlistBadges() {
    const badge = document.getElementById('wishlistCountBadge');
    if (badge) {
      badge.textContent = this.wishlist.length;
    }

    // Atualiza botões nos cards
    document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
      const pid = Number(btn.getAttribute('data-product-id'));
      if (this.wishlist.includes(pid)) {
        btn.classList.add('active');
        btn.querySelector('svg').style.fill = '#B91C1C';
      } else {
        btn.classList.remove('active');
        btn.querySelector('svg').style.fill = 'currentColor';
      }
    });
  }

  renderCartUI() {
    const cartCountBadges = document.querySelectorAll('.cart-count-badge');
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountBadges.forEach(b => b.textContent = totalItems);

    const cartList = document.getElementById('cartItemsList');
    if (!cartList) return;

    if (this.cart.length === 0) {
      cartList.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 512 512"><path d="M463.54,164.66c-14.69-16.9-35.96-26.65-58.35-26.75H151.58l-4.87-16.78c-9.79-32.25-39.24-54.54-72.94-55.2l-1.22-.24h-24.31c-10.08,0-18.24,8.16-18.24,18.24s8.16,18.24,18.24,18.24h24.31c18.41,.16,34.43,12.59,39.15,30.4l61.51,207.4c9.93,32.68,40.01,55.07,74.16,55.2h142.97c38.89-.42,71.5-29.5,76.35-68.08l14.59-100.66c3.39-22.19-3.1-44.76-17.75-61.76h0Zm-18.24,57.14l-14.59,100.9c-3.19,19.87-20.24,34.56-40.36,34.77H247.38c-18.06,0-33.99-11.86-39.15-29.18l-45.72-154.15h243.14c11.91,.18,23.15,5.56,30.76,14.73,7.61,9.16,10.86,21.19,8.87,32.93h.01Z"/></svg>
          <p>Sua sacola de compras está vazia.</p>
          <a href="#produtos" onclick="store.closeCart()" class="btn btn-primary-gold" style="margin-top: 15px; font-size: 11px;">Ver Semijoias</a>
        </div>
      `;
    } else {
      cartList.innerHTML = this.cart.map((item, idx) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h5 class="cart-item-title">${item.name}</h5>
            <div class="cart-item-variant">${item.variant}</div>
            <div class="cart-item-bottom">
              <div class="qty-control">
                <button class="qty-btn" onclick="store.updateQty(${idx}, -1)">-</button>
                <span class="qty-number">${item.qty}</span>
                <button class="qty-btn" onclick="store.updateQty(${idx}, 1)">+</button>
              </div>
              <div class="cart-item-price">R$ ${(item.price * item.qty).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              <span class="cart-item-remove" onclick="store.removeFromCart(${idx})" title="Remover item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </span>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Atualiza Barra de Frete Grátis
    const subtotal = this.getSubtotal();
    const remainingForFreeShipping = Math.max(0, this.freeShippingThreshold - subtotal);
    const progressPercent = Math.min(100, (subtotal / this.freeShippingThreshold) * 100);

    const shippingText = document.getElementById('shippingProgressText');
    const progressBar = document.getElementById('shippingProgressBar');
    if (shippingText && progressBar) {
      if (remainingForFreeShipping <= 0) {
        shippingText.innerHTML = `🎉 Parabéns! Você ganhou <strong>FRETE GRÁTIS</strong> com seguro e embalagem especial!`;
        progressBar.style.width = '100%';
      } else {
        shippingText.innerHTML = `Faltam <strong>R$ ${remainingForFreeShipping.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> para você garantir <strong>FRETE GRÁTIS</strong>!`;
        progressBar.style.width = `${progressPercent}%`;
      }
    }

    // Totais
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountEl = document.getElementById('cartDiscount');
    const totalEl = document.getElementById('cartTotal');
    const pixTotalEl = document.getElementById('cartPixTotal');

    if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    if (discountEl) {
      if (this.discountPercent > 0) {
        discountEl.innerHTML = `- R$ ${this.getDiscountAmount().toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (${this.discountPercent}% OFF)`;
      } else {
        discountEl.textContent = `R$ 0,00`;
      }
    }

    const finalTotal = this.getTotal();
    if (totalEl) totalEl.textContent = `R$ ${finalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    const pixTotal = finalTotal * 0.95; // 5% de desconto no Pix
    if (pixTotalEl) {
      pixTotalEl.textContent = `ou R$ ${pixTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} no Pix (5% OFF)`;
    }
  }

  init() {
    this.renderCartUI();
    this.updateWishlistBadges();
  }
}

// Inicializa a loja
let store;
document.addEventListener('DOMContentLoaded', () => {
  store = new IzauraStore();
  initAnnouncementBar();
  initHeroSlider();
  initProductsGrid();
  initQuickViewModal();
  initSearchModal();
  initMobileMenu();
  initHeaderScroll();
});

// ==========================================================================
// TOAST NOTIFICATION ENGINE
// ==========================================================================
function showToast(message, type = "success") {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${type === 'error' ? '#EF4444' : '#C5A059'}" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  toast.classList.add('active');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}

// ==========================================================================
// TOP ANNOUNCEMENT BAR ROTATOR
// ==========================================================================
function initAnnouncementBar() {
  const items = document.querySelectorAll('.announcement-item');
  if (items.length <= 1) return;

  let currentIndex = 0;
  setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
  }, 4200);
}

// ==========================================================================
// HERO SLIDER (TRANSIÇÃO SUAVE & CONTROLES)
// ==========================================================================
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      if (dots[i]) dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => { showSlide(idx); resetTimer(); });
  });

  function startTimer() {
    slideInterval = setInterval(nextSlide, 6500);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
  }

  startTimer();
}

// ==========================================================================
// GRID DE PRODUTOS & TABS DE FILTRO (IZAURA SEMIJOIAS)
// ==========================================================================
function initProductsGrid() {
  const grid = document.getElementById('productsGrid');
  const tabs = document.querySelectorAll('.filter-tab-btn');

  const catLabels = {
    conjuntos: 'Conjuntos Delicados',
    colares: 'Colares & Chokers',
    brincos: 'Brincos & Argolas',
    correntes: 'Correntes Metálicas',
    aneis: 'Anéis & Alianças'
  };

  function render(filter = 'todos') {
    if (!grid) return;

    let filtered = PRODUCTS;
    if (filter === 'bestseller') {
      filtered = PRODUCTS.filter(p => p.tags.includes('bestseller'));
    } else if (filter === 'lancamentos') {
      filtered = PRODUCTS.filter(p => p.tags.includes('lancamentos'));
    } else if (filter === 'brincos') {
      filtered = PRODUCTS.filter(p => p.category === 'brincos');
    } else if (filter === 'colares') {
      filtered = PRODUCTS.filter(p => p.category === 'colares');
    } else if (filter === 'aneis') {
      filtered = PRODUCTS.filter(p => p.category === 'aneis');
    } else if (filter === 'correntes') {
      filtered = PRODUCTS.filter(p => p.category === 'correntes');
    } else if (filter === 'conjuntos') {
      filtered = PRODUCTS.filter(p => p.category === 'conjuntos');
    }

    grid.innerHTML = filtered.map(product => {
      const isFav = store ? store.wishlist.includes(product.id) : false;
      const installmentsVal = (product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      const pixVal = (product.price * 0.95).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      const label = catLabels[product.category] || 'Semijoia Fina';

      return `
        <div class="product-card" data-product-id="${product.id}">
          <div class="product-image-container">
            <div class="product-badges">
              <span class="product-badge ${product.badgeType}">${product.badge}</span>
            </div>

            <div class="product-quick-actions">
              <button class="quick-action-btn btn-wishlist-toggle ${isFav ? 'active' : ''}" data-product-id="${product.id}" title="Adicionar aos Favoritos" onclick="store.toggleWishlist(${product.id})">
                <svg viewBox="0 0 24 24" fill="${isFav ? '#B91C1C' : 'currentColor'}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </button>
              <button class="quick-action-btn" title="Espiada Rápida" onclick="openQuickView(${product.id})">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </button>
            </div>

            <a href="javascript:void(0)" onclick="openQuickView(${product.id})">
              <img src="${product.imgMain}" alt="${product.name}" class="product-img img-main" loading="lazy">
              <img src="${product.imgHover}" alt="${product.name}" class="product-img img-hover" loading="lazy">
            </a>
          </div>

          <div class="product-info">
            <span class="product-category-tag">${label}</span>
            <h3 class="product-title">
              <a href="javascript:void(0)" onclick="openQuickView(${product.id})">${product.name}</a>
            </h3>

            <div class="product-rating">
              <div class="rating-stars">★★★★★</div>
              <span class="rating-count">(${product.reviewsCount})</span>
            </div>

            <div class="product-swatches">
              ${product.colors.map((color, i) => `
                <span class="color-swatch ${i === 0 ? 'active' : ''}" style="background-color: ${color};" title="Cor variante"></span>
              `).join('')}
            </div>

            <div class="product-price-wrapper">
              <div>
                <span class="price-compare">R$ ${product.priceCompare.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                <span class="price-current">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div class="price-installments">12x de <strong>R$ ${installmentsVal}</strong> sem juros</div>
              <div class="price-pix-discount">R$ ${pixVal} à vista no Pix (5% OFF)</div>
            </div>

            <button class="btn-add-card" onclick="store.addToCart(${product.id})">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              Comprar
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      render(filter);
    });
  });

  render('bestseller');
}

// ==========================================================================
// QUICK VIEW MODAL (ESPIADA RÁPIDA)
// ==========================================================================
let currentQuickViewProduct = null;
let selectedSize = null;

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === Number(productId));
  if (!product) return;

  currentQuickViewProduct = product;
  selectedSize = product.sizes ? product.sizes[0] : "Padrão";

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');

  if (!modal || !content) return;

  const installments = (product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  const pixVal = (product.price * 0.95).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  content.innerHTML = `
    <div class="quickview-gallery">
      <img src="${product.imgMain}" alt="${product.name}" id="quickViewMainImg">
    </div>

    <div class="quickview-info">
      <span class="product-category-tag">${product.badge} • IZAURA SEMIJOIAS</span>
      <h2 class="quickview-title">${product.name}</h2>
      
      <div class="product-rating">
        <div class="rating-stars">★★★★★</div>
        <span class="rating-count">${product.rating} (${product.reviewsCount} avaliações no Google Maps)</span>
      </div>

      <div class="quickview-price">
        <span class="price-compare">R$ ${product.priceCompare.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </div>
      <div class="quickview-installments">
        Em até 12x de <strong>R$ ${installments}</strong> sem juros ou <strong>R$ ${pixVal}</strong> no Pix (5% OFF)
      </div>

      <p style="font-size: 13.5px; color: #666; line-height: 1.6; margin-bottom: 20px;">
        ${product.description}
      </p>

      ${product.sizes && product.sizes.length > 1 ? `
        <div class="quickview-options">
          <span class="options-label">Selecione o Tamanho / Aro:</span>
          <div class="size-pills">
            ${product.sizes.map((s, idx) => `
              <button class="size-pill ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewSize('${s}', this)">${s}</button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div style="display: flex; gap: 12px; margin-top: auto;">
        <button class="btn btn-primary-gold" style="flex: 1;" onclick="addQuickViewToCart()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          Adicionar à Sacola
        </button>
        <button class="btn btn-outline-dark" onclick="buyViaWhatsApp(${product.id})" title="Atendimento com a Iza no WhatsApp">
          WhatsApp
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectQuickViewSize(size, btnEl) {
  selectedSize = size;
  const pills = btnEl.parentElement.querySelectorAll('.size-pill');
  pills.forEach(p => p.classList.remove('active'));
  btnEl.classList.add('active');
}

function addQuickViewToCart() {
  if (currentQuickViewProduct) {
    store.addToCart(currentQuickViewProduct.id, selectedSize);
    closeQuickView();
  }
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function initQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeQuickView();
  });
}

// ==========================================================================
// LIVE SEARCH MODAL (BUSCA INTELIGENTE EM TEMPO REAL)
// ==========================================================================
function initSearchModal() {
  const searchBackdrop = document.getElementById('searchModalBackdrop');
  const searchInput = document.getElementById('liveSearchInput');
  const resultsContainer = document.getElementById('searchLiveResults');

  if (!searchBackdrop || !searchInput) return;

  window.openSearchModal = function() {
    searchBackdrop.classList.add('active');
    searchInput.focus();
    document.body.style.overflow = 'hidden';
  };

  window.closeSearchModal = function() {
    searchBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  searchBackdrop.addEventListener('click', (e) => {
    if (e.target === searchBackdrop) closeSearchModal();
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!resultsContainer) return;

    if (query.length < 2) {
      resultsContainer.style.display = 'none';
      resultsContainer.innerHTML = '';
      return;
    }

    const matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultsContainer.style.display = 'block';
      resultsContainer.innerHTML = `<div style="padding: 15px; text-align: center; color: #888; font-size: 13px;">Nenhuma semijoia encontrada para "${query}". Tente buscar por "Brinco", "Colar", "Anel", "Mandala" ou "Argola".</div>`;
    } else {
      resultsContainer.style.display = 'block';
      resultsContainer.innerHTML = matches.map(p => `
        <div class="search-result-row" onclick="closeSearchModal(); openQuickView(${p.id})">
          <img src="${p.imgMain}" alt="${p.name}">
          <div>
            <div style="font-size: 13.5px; font-weight: 500; color: #111;">${p.name}</div>
            <div style="font-size: 12px; color: #C5A059; font-weight: 600;">R$ ${p.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
          </div>
        </div>
      `).join('');
    }
  });

  window.applySearchTag = function(tagText) {
    searchInput.value = tagText;
    searchInput.dispatchEvent(new Event('input'));
  };
}

// ==========================================================================
// MOBILE MENU DRAWER
// ==========================================================================
function initMobileMenu() {
  const hamburger = document.getElementById('mobileHamburgerBtn');
  const drawer = document.getElementById('mobileMenuDrawer');
  const closeBtn = document.getElementById('mobileMenuClose');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Backdrop click do carrinho
  const cartBackdrop = document.getElementById('cartDrawerBackdrop');
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop && store) {
        store.closeCart();
      }
    });
  }
}

// ==========================================================================
// HEADER SCROLL SHADOW
// ==========================================================================
function initHeaderScroll() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ==========================================================================
// WHATSAPP CONCIERGE INTEGRATION (IZAURA SEMIJOIAS)
// ==========================================================================
function buyViaWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === Number(productId));
  const phone = "5561996050988"; // WhatsApp Izaura Semijoias: (61) 99605-0988
  let msg = "Olá Izaura Semijoias! Gostaria de atendimento personalizado para escolher minhas peças.";
  if (product) {
    msg = `Olá Iza! Gostaria de mais informações sobre a semijoia: *${product.name}* (Ref #${product.id}) no valor de R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}.`;
  }
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function checkoutWhatsApp() {
  if (!store || store.cart.length === 0) {
    showToast("Adicione semijoias à sua sacola para finalizar a compra.");
    return;
  }

  const phone = "5561996050988"; // WhatsApp Izaura Semijoias: (61) 99605-0988
  let itemsList = store.cart.map(i => `• ${i.qty}x ${i.name} (${i.variant}) - R$ ${(i.price * i.qty).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`).join('\n');
  let total = store.getTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  let cupomText = store.coupon ? `\nCupom aplicado: ${store.coupon} (${store.discountPercent}% OFF)` : '';

  let message = `*NOVO PEDIDO - IZAURA SEMIJOIAS*\n\nOlá Iza! Gostaria de finalizar meu pedido com você:\n\n${itemsList}\n${cupomText}\n*Total: R$ ${total}*\n\nGostaria de combinar a entrega / retirada na loja em Sobradinho - DF e a forma de pagamento (Pix 5% OFF ou Cartão em até 12x).`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}
