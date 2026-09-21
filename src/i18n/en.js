const en = {
    app: "Nawishta",
    slogan: "A comprehensive collection of urdu text and tools, presented brilliantly.",
    brand: {
        en: "Nawishta",
        ur: "نوشتہ",
    },
    header: {
        home: "Home",
        libraries: "Libraries",
        editor: "Editor",
        maktaba: "Maktaba",
        dictionaries: "Dictionaries",
        fonts: "Fonts",
        tools: "Tools",
    },
    footer: {
        copyrights: "Copyrights Nawishta. All rights reserved.",
        terms: "Terms",
        privacy: "Privacy",
    },
    actions: {
        seeMore: "See More...",
        list: "List",
        card: "Cards",
        yes: "Yes",
        no: "No",
        close: "Close",
        retry: "Retry",
        save: "Save",
        edit: "Edit",
        delete: "Delete",
        cancel: "Cancel",
        ok: "OK",
        resizeImage: "Resize Image",
        zoonIn: "Zoom In",
        zoonOut: "Zoom Out",
        next: "Next",
        previous: "Previous",
        done: "Done",
        viewAll: "View All"
    },
    login: {
        title: "Login",
        submit: "Log in",
        message: 'Welcome back',
        subtitle: 'Log in to your Nawishta account.',
        registerMessage: "Don't have an account?",
        createAccount: 'Create one',
        email: {
            title: "Email",
            placeholder: "you@example.com",
            error: "Email is invalid",
            required: "Email is required",
        },
        password: {
            title: "Password",
            required: "Password is required",
        },
        error: "Unable to login. Please check your username and password.",
    },
    logout: {
        title: "Logout",
        confirmation: "Are you sure you want to log out?",
    },
    forgotPassword: {
        title: "Forgot password?",
        heading: "Reset your password",
        message: "We'll email you a link to reset it.",
        submit: "Send reset link",
        backToLogin: "Back to log in",
        email: {
            title: "Email",
            placeholder: "you@example.com",
            error: "Email is invalid",
            required: "Email is required",
        },
        success: "Please check your email for password reset instructions.",
        error: "Unable to complete request. Please try again.",
    },
    register: {
        title: "Register",
        heading: "Create your account",
        subtitle: "Free, and always will be.",
        loginMessage: "Already have an account?",
        submit: "Create account",
        agreementPrefix: "By creating an account you agree to our",
        agreementAnd: "and",
        privacyPolicy: "Privacy Policy",
        name: {
            label: "Name",
            placeholder: "Your name",
            required: "Name is required",
        },
        email: {
            label: "Email",
            placeholder: "you@example.com",
            error: "Email is invalid",
            required: "Email is required",
        },
        password: {
            label: "Password",
            required: "Password is required",
            length: "Password must be at least 6 characters.",
        },
        confirmPassword: {
            label: "Confirm password",
            match: "Passwords must match",
            required: "Confirm password is required",
        },
        success: "Registration successful, please login with your credentials.",
        error: "Unable to register. Please try again.",
        acceptTerms: {
            title: "Accept Terms & Conditions",
            requires: "Accepting Terms & Conditions is required.",
        },
        invitation: {
            expired:
                "Invitation link has expired. Please contact us to resend a new invitation code.",
            notFound: "Invitation link is not valid.",
        },
    },
    changePassword: {
        title: "Change Password",
        submit: "Change Password",
        oldPassword: {
            label: "Old Password",
            required: "Old Password is required",
        },
        password: {
            label: "New Password",
            required: "Password is required",
            length: "Password must be at least 6 characters.",
        },
        confirmPassword: {
            label: "Confirm Password",
            match: "Passwords must match",
            required: "Confirm Password is required",
        },
        success: "Password updated successfully",
        error: "Unable to change password. Please try again.",
    },
    resetPassword: {
        title: "Reset Password",
        submit: "Reset Password",
        password: {
            label: "Password",
            required: "Password is required",
            length: "Password must be at least 6 characters.",
        },
        confirmPassword: {
            label: "Confirm Password",
            match: "Passwords must match",
            required: "Confirm Password is required",
        },
        success: "Password updated successfully",
        error: "Unable to reset password. Please try again.",
        noCode: "No reset code is present. Please follow instructions in email sent to you.",
    },
    403: {
        title: "Unauthorised",
        description: "Sorry, you are not authorized to access this page.",
        action: "Back Home",
    },
    404: {
        title: "Not Found",
        description: "Sorry, the page you visited does not exist.",
        action: "Back Home",
    },
    500: {
        title: "Server Error",
        description: "Sorry, something went wrong.",
        action: "Back Home",
    },
    languages: {
        en: "English",
        ur: "Urdu",
    },
    profile: {
        title: "Profile",
    },
    search: {
        header: "Search",
        title: "Search...",
        placeholder: "Search by title, author, keyword",
    },
    libraries: {
        title: "Libraries",
        loadingError: "Unable to load libraries",
        search: {
            placeholder: "Search libraries...",
        },
        viewAll: "View All"
    },
    libraryEditor: {
        title: "Library Editor",
        edit: "Extend library, add and edit books, writings, poetry and much more...."
    },
    home: {
        hero: {
            title: "Modern tools for Urdu & Punjabi literature.",
            subhead: "Read books online, publish your own with proper Nastaliq and poetry-aware layouts, or manage a local collection on your own computer.",
            browseLibrary: "Browse the Library",
            tryEditor: "Try the Editor",
            getMaktaba: "Get Maktaba",
        },
        mission: {
            text: "Urdu and Punjabi (Shahmukhi) literature has long been underserved by mainstream publishing and reading tools — poor right-to-left support, no proper Nastaliq typography, and no layouts that understand poetry like ghazals and couplets. Nawishta is a free, open-source set of tools covering the full loop: publish, read online, and manage your own local collection.",
            githubLink: "Nawishta is open source — see the project on GitHub",
        },
        products: {
            library: {
                badge: "libraries.nawishta.co.uk",
                title: "Nawishta Library",
                description: "Browse and read digitised Urdu and Punjabi books online.",
                seeCta: "See Library",
            },
            editor: {
                badge: "editor.nawishta.co.uk",
                title: "Nawishta Editor",
                description: "Create and publish books with proper RTL, Nastaliq, and poetry layout support — ghazals, stanzas, footnotes and more.",
                seeCta: "See Editor",
            },
            maktaba: {
                badge: "Hosted here — no subdomain",
                title: "Maktaba",
                description: "A free desktop app for managing your own local ebook collection — no account, no cloud.",
                seeCta: "See Maktaba",
            },
        },
        features: {
            typography: "Proper Nastaliq & RTL typography, not a bolted-on translation",
            poetry: "Poetry-aware layouts — ghazals, couplets and stanzas rendered correctly",
            openSource: "Free and open source",
            localFirst: "Local-first option (Maktaba) — your library stays on your disk",
            crossPlatform: "Cross-platform (Maktaba: Windows, Mac, Linux)",
        },
        tools: {
            heading: "Tools & Resources",
            fonts: {
                title: "Fonts",
                description: "Nastaliq and other Urdu/Punjabi web fonts, free to use",
            },
            dictionaries: {
                title: "Dictionaries & Spellcheck",
                description: "Hunspell-based Urdu/Punjabi dictionaries, thesaurus, autocomplete",
            },
            tools: {
                title: "Tools",
                description: "RekhtaDownloader and other utilities",
            },
        },
        community: {
            heading: "Open source & community",
            text: "Nawishta is built in the open. Contributions, issue reports, and ideas are always welcome.",
            cta: "Star us on GitHub",
        },
    },
    maktaba: {
        platforms: {
            windows: "Windows",
            mac: "macOS",
            linux: "Linux",
        },
        hero: {
            title: "Maktaba (مکتبہ)",
            pitch: "A local-first ebook library manager for Urdu, Punjabi, and beyond.",
        },
        features: {
            heading: "What Maktaba does",
            import: {
                title: "Import EPUB & PDF",
                description: "Add books to your collection with automatic duplicate detection.",
            },
            browse: {
                title: "Fast browsing",
                description: "A virtualised grid and list view with search and filters, built to stay fast on large collections.",
            },
            organise: {
                title: "Organise your way",
                description: "Metadata editing, plus authors, series, tags and collections.",
            },
            tracking: {
                title: "Reading status",
                description: "Track what you've read, are reading, or want to read next.",
            },
            bilingual: {
                title: "English & Urdu UI",
                description: "Automatic right-to-left layout when you switch to Urdu.",
            },
            theme: {
                title: "Light & dark theme",
                description: "Read comfortably, day or night.",
            },
        },
        screenshots: {
            heading: "See it in action",
            library: "Library grid — screenshot coming soon",
            urdu: "Urdu RTL reading view — screenshot coming soon",
        },
        requirements: {
            heading: "System requirements",
            windows: "Windows 10 or later",
            mac: "macOS (Intel or Apple Silicon)",
            linux: "Linux (AppImage)",
        },
        openSource: {
            text: "Maktaba is free, open-source software, provided as-is with no warranty.",
            repo: "View source on GitHub",
            changelog: "Changelog & releases",
        },
        footerCta: {
            heading: "Ready to try Maktaba?",
        },
    },
    legal: {
        draftNotice: "This page is a working draft. Sections marked [TO CONFIRM] need input from the site owner and a legal review before this policy is considered final.",
    },
    terms: {
        title: "Terms & Conditions",
        updated: "Draft — not yet published.",
        sections: [
            {
                heading: "1. Acceptance of terms",
                body: "By using nawishta.co.uk or any of its subdomains (together, \"Nawishta\"), you agree to these terms. If you do not agree, please do not use the site.",
            },
            {
                heading: "2. Description of service",
                body: "Nawishta comprises a public library and reading portal (libraries.nawishta.co.uk), a book publishing/editing tool (editor.nawishta.co.uk), dictionary and spellcheck tooling (dictionary.nawishta.co.uk), web fonts (fonts.nawishta.co.uk), assorted utilities (tools.nawishta.co.uk), and Maktaba, a separately-licensed open-source desktop application distributed \"as is\" with no warranty. This single Terms & Privacy page on nawishta.co.uk is intended to cover all of the above subdomains and Maktaba, and is linked from each of them.",
            },
            {
                heading: "3. Intellectual property",
                body: "Books hosted on the library are presumed to be public domain or otherwise rights-cleared for hosting; [TO CONFIRM: state the specific basis relied on for each source, e.g. public-domain status, rights-holder permission]. \"Nawishta\" and associated branding belong to their respective owners.",
            },
            {
                heading: "4. Acceptable use",
                body: "You agree not to scrape, systematically harvest, or republish content from Nawishta without permission, and not to use the service in any way that disrupts it for other users.",
            },
            {
                heading: "5. User-submitted content",
                body: "The Editor and related tools allow you to upload, publish, or otherwise submit content to Nawishta. You are solely responsible for anything you submit, and by submitting content you confirm that it is legal to share and that you own it or hold the necessary rights and permissions to publish it. You agree not to upload content that infringes any third party's copyright or other intellectual property rights. Nawishta and its maintainers bear no responsibility for user-submitted content and take no responsibility for verifying its legality or ownership; we may remove any content that is reported or found to infringe these terms.",
            },
            {
                heading: "6. Disclaimer of warranties and limitation of liability",
                body: "Nawishta is provided \"as is\" without warranties of any kind, express or implied. To the fullest extent permitted by law, Nawishta and its maintainers are not liable for any damages arising from use of the service.",
            },
            {
                heading: "7. Governing law",
                body: "These terms are governed by the laws of England & Wales.",
            },
            {
                heading: "8. Changes to these terms",
                body: "These terms may be updated from time to time. Continued use of Nawishta after a change constitutes acceptance of the updated terms.",
            },
            {
                heading: "9. Contact",
                body: "admin@nawishta.co.uk",
            },
        ],
    },
    privacy: {
        title: "Privacy Policy",
        updated: "Draft — not yet published.",
        sections: [
            {
                heading: "1. Who we are",
                body: "Nawishta is an independent, community project.",
            },
            {
                heading: "2. What data we collect",
                body: "If you create an account (to publish or manage content in the Editor, or to use certain Library features), we collect your name, email address, and password (stored as a hash, never in plain text). We use authentication cookies (\"token\" and \"refreshToken\") to keep you signed in across nawishta.co.uk and its subdomains.",
            },
            {
                heading: "3. Legal basis for processing",
                body: "We process account data on the basis of contract (to provide the service you've signed up for) and, where applicable, consent (e.g. for optional cookies).",
            },
            {
                heading: "4. How long we keep data",
                body: "Account data is kept for as long as your account is active, or as required by law.",
            },
            {
                heading: "5. Cookies",
                body: "We use strictly necessary cookies to keep you signed in (\"token\", \"refreshToken\"). We do not use any third-party tracking or advertising cookies.",
            },
            {
                heading: "6. Your rights",
                body: "Under UK GDPR, you have the right to access, correct, or delete your personal data, to object to certain processing, and to complain to the Information Commissioner's Office (ICO) if you believe your data has been mishandled.",
            },
            {
                heading: "7. Children's privacy",
                body: "Nawishta is not specifically directed at children, and we do not knowingly collect personal data from children.",
            },
            {
                heading: "8. Changes to this policy",
                body: "This policy may be updated from time to time; changes will be posted on this page.",
            },
            {
                heading: "9. Contact",
                body: "admin@nawishta.co.uk",
            },
        ],
    },
};

export default en;
