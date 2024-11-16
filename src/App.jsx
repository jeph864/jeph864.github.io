import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import {
    Home,
    Briefcase,
    GraduationCap,
    Sun,
    Moon,
    Menu,
    X,
    Mail,
    Github as GitHub,
    Linkedin,
    MapPin,
    Phone
} from 'lucide-react';
import Projects from './routes/projects';
import Experiences from './routes/experiences';
import ProfileSection from "./components/ProfileSection.jsx";


// Header Component with Theme Toggle
const Header = ({ isDark, setIsDark }) => {
    return (
        <header className={`fixed top-0 right-0 left-0 h-16 z-30 transition-colors duration-300
      ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm
      border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}
      lg:left-64`}
        >
            <div className="h-full px-6 flex items-center justify-between">
                <div className="flex justify-between items-center">

                    <h1 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        John Doe
                    </h1>

                </div>
                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`p-2 rounded-lg transition-colors ${
                        isDark
                            ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
                </button>
            </div>
        </header>
    );
};

// Layout Component
const Layout = () => {
    const [isDark, setIsDark] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        {path: '/', icon: <Home className="w-5 h-5"/>, label: 'Home'},
        {path: '/projects', icon: <Briefcase className="w-5 h-5"/>, label: 'Projects'},
        {path: '/experience', icon: <GraduationCap className="w-5 h-5"/>, label: 'Experience'},
    ];

    const navLinkStyles = `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        isDark
            ? 'text-gray-400 hover:text-white hover:bg-gray-800'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    }`;

    const activeNavLinkStyles = `${navLinkStyles} ${
        isDark
            ? 'bg-gray-800 text-white'
            : 'bg-gray-100 text-gray-900'
    }`;

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            isDark ? 'bg-gray-900' : 'bg-[#f0f0f0]'
        }`}>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-opacity-80 backdrop-blur-sm
          ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}"
            >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Header */}
            <Header isDark={isDark} setIsDark={setIsDark} />

            {/* Sidebar */}
            <aside className={`
        fixed top-0 left-0 h-full w-64 transition-transform duration-300 z-40
        ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}
        border-r
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                {/* Profile Section */}
                <ProfileSection isDark={isDark} />

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? activeNavLinkStyles : navLinkStyles
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className={`transition-all duration-300 pt-28 ${
                isMobileMenuOpen ? 'lg:ml-64' : 'lg:ml-64'
            }`}>
                <div className="max-w-7xl mx-auto">
                    <Routes>
                        <Route path="/" element={<HomePage isDark={isDark} />} />
                        <Route path="/projects" element={<Projects isDark={isDark} />} />
                        <Route path="/experience" element={<Experiences isDark={isDark} />} />
                    </Routes>
                </div>
            </main>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
};

// Home Component
const HomePage = ({ isDark }) => {
    return (
        <div className="px-6">
            <h1 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Welcome to My Portfolio
            </h1>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a software engineer passionate about building impactful applications.
            </p>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Layout />
        </Router>
    );
};

export default App;

//export default App;