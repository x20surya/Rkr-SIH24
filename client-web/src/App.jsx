import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SigninForm";
import SignUpForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Region from "./components/region/region";
import SellerInfo from "./_root/pages/seller-info";
import ProductPage from "./_root/pages/ProductPage";
function App() {
  return (
    <main className="flex h-fit">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/region" element={<Region/>}/>
          <Route path="/region/seller/seller-info/id" element={<SellerInfo/>} />
          <Route path="/product" element={<ProductPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
