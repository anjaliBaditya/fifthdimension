import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout darkMode />}>
        <Route
          path="marketing-agency"
          element={<MarketingAgencyPage darkMode />}
        />
        <Route path="studio-agency" element={<StudioAgencyPage darkMode />} />
        <Route path="digital-agency" element={<DigitalAgencyPage darkMode />} />
        <Route path="about" element={<AboutPage darkMode />} />
        <Route path="service" element={<ServicePage />} />
        <Route
          path="service/:serviceDetailsId"
          element={<ServiceDetailsPage />}
        />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-list" element={<BlogListPage />} />
        <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route
          path="portfolio/:portfolioDetailsId"
          element={<PortfolioDetailsPage />}
        />
        <Route path="case-study-details" element={<CaseStudyDetailsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="team/:teamDetailsId" element={<TeamDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="/" element={<Layout2 darkMode />}>
        <Route index element={<TechStartupPage />} />
        <Route path="tech-startup" element={<TechStartupPage />} />
      </Route>
      <Route path="/" element={<Layout3 darkMode />}>
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:productId" element={<ProductDetails />} />
        <Route path="shop/cart" element={<Cart />} />
        <Route path="shop/checkout" element={<Checkout />} />
        <Route path="shop/success" element={<Success />} />
        <Route path="shop/wishlist" element={<Wishlist />} />
      </Route>
      {/* Start Light Mode */}
      <Route path="/light/" element={<Layout />}>
        <Route path="marketing-agency" element={<MarketingAgencyPage />} />
        <Route path="studio-agency" element={<StudioAgencyPage />} />
        <Route path="digital-agency" element={<DigitalAgencyPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route
          path="service/:serviceDetailsId"
          element={<ServiceDetailsPage />}
        />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-list" element={<BlogListPage />} />
        <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route
          path="portfolio/:portfolioDetailsId"
          element={<PortfolioDetailsPage />}
        />
        <Route path="case-study-details" element={<CaseStudyDetailsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="team/:teamDetailsId" element={<TeamDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="/light/" element={<Layout2 />}>
        <Route index element={<Home />} />
        <Route path="tech-startup" element={<TechStartupPage />} />
      </Route>
      <Route path="/light/" element={<Layout3 />}>
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:productId" element={<ProductDetails />} />
        <Route path="shop/cart" element={<Cart />} />
        <Route path="shop/checkout" element={<Checkout />} />
        <Route path="shop/success" element={<Success />} />
        <Route path="shop/wishlist" element={<Wishlist />} />
      </Route>
      {/* End Light Mode */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;