# ⚜️ RARIDADE GOLD - E-Commerce de Luxo

Modelo de site e-commerce de alto padrão desenvolvido para a marca **Raridade Gold**, inspirado na arquitetura visual, minimalismo e experiência de compra da **Saint Germain Brand**.

---

## 💎 Identidade & Conceito Visual

- **Cores Predominantes**: 
  - Fundo limpo e sofisticado: Branco puro (`#FFFFFF`) e cinza claro suave (`#F5F5F5` / `#F8F8F8`)
  - Detalhes e tipografia em preto nobre (`#0D0D0D` / `#111111`)
  - Detalhes em **Ouro Champanhe 18K** (`#C5A059`, `#E0C78F`, `#997834`) em gradientes metálicos
- **Tipografia**: 
  - Títulos e Destaques: `Cinzel` (Serifada clássica e imponente)
  - Subtítulos e Menus: `Outfit` (Moderna, geométrica e espaçada)
  - Corpo de texto e descrições: `Jost` (Minimalista e refinada, idêntica à referência da Saint Germain)
- **Logotipo**: Integrado diretamente com a identidade oficial `Raridade Gold Logo.jpg` (Monograma RG dourado no diamante geométrico com estrela reluzente).

---

## 🚀 Estrutura de Arquivos

```
RaridadeGold/
├── index.html                   # Página principal com arquitetura completa
├── css/
│   └── style.css                # Design System completo, responsivo e com micro-interações
├── js/
│   └── app.js                   # Motor interativo (Carrinho, Busca, Espiada Rápida, Filtros)
├── assets/
│   └── logo.jpg                 # Logo oficial Raridade Gold
└── Raridade Gold Logo.jpg       # Arquivo de imagem original
```

---

## ✨ Recursos e Funcionalidades Implementadas

1. **Barra de Anúncios Rotativa Superior**:
   - Ticker com transição suave exibindo promoções (Frete Grátis com Seguro, Garantia Eterna do Ouro 18k, Parcelamento em até 12x, Cupom de 10% OFF).
2. **Sub-Barra Institucional**:
   - Atalhos rápidos: Comprar pelo WhatsApp, Grupo VIP, Rastrear Pedido, FAQ, Garantia e Troca Fácil.
3. **Cabeçalho Principal & Navegação**:
   - Logo centralizada com subtítulo "JOIAS & RELÓGIOS DE LUXO".
   - Barra de busca inteligente com modal de tela cheia.
   - Ícone de conta, favoritos (Wishlist com contador) e sacola de compras com badge dinâmico.
   - Menu desktop com **Mega-Dropdowns** visuais com categorias, links e banners de destaque.
4. **Hero Slider Editorial**:
   - 3 banners de alta resolução com transição cinematográfica automática e manual (setas e marcadores).
5. **Barra de Benefícios & Confiança (Trust Bar)**:
   - 5 pilares: Frete Grátis com Seguro, Ouro 18K 750 Legítimo, Até 12x Sem Juros, Troca Grátis em 30 dias e Estojo de Veludo Incluso.
6. **Carrossel de Destaques Rápidos (Stories)**:
   - Badges circulares com borda dourada para navegação imediata.
7. **Grid de Categorias Principais (4 Tiles Saint Germain)**:
   - Imagens verticais com zoom no hover: Relógios, Correntes 18k, Pulseiras e Kits Promocionais.
8. **Vitrine de Produtos com Tabs de Filtro**:
   - Abas: "Mais Vendidos", "Lançamentos 2026", "Relojoaria Fina", "Joias Ouro 18K", "Kits & Combos".
   - Cards no estilo característico da Saint Germain: fundo `#F5F5F5`, efeito de troca de foto no hover, badges (`BEST SELLER`, `OURO 18K`, `-28% OFF`), cálculo automático de parcelas em até 12x sem juros e desconto no Pix.
9. **Campanhas Editoriais Divididas (Split Banners)**:
   - Coleção Masculina Royalty & Linha Feminina Delicate Gold.
10. **Módulo "Monte Seu Combo" / Compre o Look**:
    - Seletor de conjunto com economia imediata de R$ 790 e botão de compra com 1 clique.
11. **Depoimentos e Avaliações de Clientes Verificados**:
    - Comentários reais de clientes com nota 5 estrelas e selo de compra verificada.
12. **Feed do Instagram (#RaridadeGold)**:
    - Galeria editorial de 6 fotos com efeito de sobreposição.
13. **Clube VIP Raridade & Newsletter**:
    - Caixa exclusiva com oferta de cupom de 10% OFF na primeira compra.
14. **Rodapé Completo & Institucional**:
    - História da marca, links institucionais, políticas de troca, canais de atendimento, selos de segurança SSL / Ouro Certificado e formas de pagamento.
15. **Carrinho Lateral Interativo (Cart Drawer)**:
    - Barra de progresso para Frete Grátis com cálculo dinâmico do valor restante.
    - Controle de quantidade (+ e -), remoção de itens, aplicação de cupom de desconto (`RARIDADE10`).
    - Integração direta para fechamento de pedido via **WhatsApp Concierge**.
16. **Modal de Espiada Rápida (Quick View)**:
    - Abre detalhes do produto, seleção de tamanhos/aros e compra rápida sem recarregar a página.
17. **Modal de Busca Inteligente em Tempo Real**:
    - Filtra produtos instantaneamente à medida que o usuário digita, além de sugerir termos populares.
18. **Botão Flutuante do WhatsApp**:
    - Atendimento humanizado direto com mensagem pré-preenchida.

---

## 💻 Como Visualizar no Navegador

### Opção 1: Abrir diretamente
Basta dar dois cliques no arquivo [index.html](file:///c:/Users/Linguine/Documents/RaridadeGold/index.html) para abrir em qualquer navegador (Chrome, Edge, Firefox, Safari).

### Opção 2: Servidor Local
Se preferir rodar com servidor HTTP local (já configurado na porta 3000):
```bash
python -m http.server 3000
```
E acesse no seu navegador: **`http://localhost:3000`**

---

## ⚙️ Personalizações Rápidas

- **Alterar o Número do WhatsApp**:
  No arquivo `js/app.js`, altere a constante `phone = "5511999999999"` para o número da sua equipe de vendas.
- **Cadastrar Novos Produtos**:
  No arquivo `js/app.js`, edite ou adicione novos itens na lista `PRODUCTS`.
- **Cupons Promocionais**:
  O cupom `RARIDADE10` dá 10% de desconto e o `VIP15` dá 15% de desconto automático no carrinho.
