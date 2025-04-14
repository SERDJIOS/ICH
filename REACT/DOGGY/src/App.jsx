import React from "react";




function App () {
  return (
    
      <CssBaseline />
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Header/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="categories" element={<CategoriesPage />} />
              <Route
                path="categories/:categoryId"
                element={<ProductsByCategoryPage />}
              />
              <Route path="products" element={<AllProductsPage />} />
              <Route
                path="discounted-products"
                element={<DiscountedProductsPage />}
              />
              <Route
                path="products/:productId"
                element={<ProductDetailsPage />}
              />
              <Route path="cart" element={<CartPage />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </div>
          <ConnectedModal />
        </BrowserRouter>
      </ReduxProvider>
    
  );
}

export default App;
