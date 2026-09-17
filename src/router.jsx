import { Routes, BrowserRouter, Route } from "react-router-dom";

import Pages from "@/pages";

import LayoutWithHeader from "@/layout/layoutWithHeader";
import LayoutWithFooter from "@/layout/layoutWithFooter";
import SecurePage from "@/layout/securePage";

// ------------------------------------------------------------------

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutWithHeader />}>
                    <Route path="/" element={<Pages.HomePage />} />
                    <Route path="/maktaba" element={<Pages.MaktabaPage />} />
                    <Route path="/terms" element={<Pages.TermsPage />} />
                    <Route path="/privacy" element={<Pages.PrivacyPage />} />
                    <Route element={<SecurePage />}>
                        <Route
                            path="/account/change-password"
                            element={<Pages.ChangePasswordPage />}
                        />
                        <Route
                            path="/profile"
                            element={<Pages.ProfilePage />}
                        />
                    </Route>
                </Route>
                <Route element={<LayoutWithFooter />}>
                    <Route path="/account/login" element={<Pages.LoginPage />} />
                    <Route path="/account/register" element={<Pages.RegisterPage />} />
                    <Route
                        path="/account/forgot-password"
                        element={<Pages.ForgotPasswordPage />}
                    />
                    {/* <Route
                        path="/account/reset-password"
                        element={<ResetPassword />}
                    />
                    <Route path="/account/verify" element={<VerifyAccount />} /> */}
                </Route>
                <Route path="/account/logout" element={<Pages.LogoutPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;