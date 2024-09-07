import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SigninForm";
import SignUpForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Region from "./components/region/region";
import SellerInfo from "./_root/pages/seller-info";
import ProductPage from "./_root/pages/ProductPage";
import State from "./_root/pages/state";
import UserPage from "./_root/pages/userpage";
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
          <Route path="/product" element={<ProductPage />} />
          <Route path="/region/state/seller-id" element={<SellerInfo/>} />
          <Route path="/region/state" element={<State/>}/>
          <Route path="/user" element={<UserPage/>}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
