/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { Products } from './components/Products';
import { WhyAquaNorth } from './components/WhyAquaNorth';
import { MountainNature } from './components/MountainNature';
import { QualityProcess } from './components/QualityProcess';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickOrderModal } from './components/QuickOrderModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { PRODUCTS } from './data/products';
import { CartItem, Product } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Initialize with 1 case of 1.5L for a ready-to-test instant state
    {
      product: PRODUCTS[1],
      quantity: 1,
      isCase: true,
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuickOrderOpen, setIsQuickOrderOpen] = useState(false);
  const [quickOrderProduct, setQuickOrderProduct] = useState<Product | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    total: number;
    itemCount: number;
    customerName: string;
    address: string;
    city: string;
  } | null>(null);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity: number, isCase: boolean) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.isCase === isCase
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, isCase }];
    });
  };

  const handleUpdateQuantity = (productId: string, isCase: boolean, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, isCase);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.isCase === isCase
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, isCase: boolean) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.isCase === isCase)
      )
    );
  };

  const handleCheckoutSuccess = (orderSummary: {
    orderId: string;
    total: number;
    itemCount: number;
    customerName: string;
    address: string;
    city: string;
  }) => {
    setCartItems([]);
    setIsCartOpen(false);
    setConfirmedOrder(orderSummary);
  };

  const handleOpenQuickOrder = (product?: Product) => {
    setQuickOrderProduct(product || PRODUCTS[1]);
    setIsQuickOrderOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A2540] flex flex-col font-body selection:bg-[#0EA5E9]/20">
      {/* 1. Navigation */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={() => handleOpenQuickOrder()}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOrderClick={() => handleOpenQuickOrder()} />

        {/* 3. Brand Story */}
        <BrandStory />

        {/* 4. Products Section */}
        <Products
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onQuickOrder={(product) => handleOpenQuickOrder(product)}
        />

        {/* 5. Why AquaNorth */}
        <WhyAquaNorth />

        {/* 6. Mountain/Nature Section */}
        <MountainNature />

        {/* 7. Quality Architecture */}
        <QualityProcess />

        {/* 8. Call to Action */}
        <CallToAction onOrderClick={() => handleOpenQuickOrder()} />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckoutSuccess={handleCheckoutSuccess}
      />

      {/* Quick Direct Order Modal */}
      <QuickOrderModal
        isOpen={isQuickOrderOpen}
        onClose={() => setIsQuickOrderOpen(false)}
        products={PRODUCTS}
        initialProduct={quickOrderProduct}
        onCompleteOrder={(orderSummary) => setConfirmedOrder(orderSummary)}
      />

      {/* Order Success Confirmation */}
      <OrderSuccessModal
        isOpen={Boolean(confirmedOrder)}
        onClose={() => setConfirmedOrder(null)}
        orderSummary={confirmedOrder}
      />
    </div>
  );
}
