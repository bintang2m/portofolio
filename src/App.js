import { useState, useEffect } from "react";
import { RiDownloadLine } from 'react-icons/ri'; // Icon for download

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    return (
        <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}>
            {/* Navbar */}
            <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <i className="ri-code-s-slash-line text-2xl text-blue-600"></i>
                    <span className="text-xl font-bold">Bintang Maulana</span>
                </div>
                <div className="md:hidden">
                    <button className="text-xl" onClick={() => setMenuOpen(!menuOpen)}>
                        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                    </button>
                </div>

                {/* Nav Menu */}
                <ul className={`md:flex space-x-6 text-lg fixed md:static right-0 top-16 bg-white dark:bg-gray-800 shadow-md md:shadow-none md:py-0 py-4 md:w-auto w-60 p-5 rounded-lg transition-transform z-50 ${menuOpen ? "flex flex-col items-center justify-center" : "hidden"} md:flex md:justify-center md:items-center`}>

                    <li className="w-full text-right md:hidden">
                        <button onClick={() => setMenuOpen(false)} className="text-2xl">
                            <i className="ri-close-line"></i>
                        </button>
                    </li>
                    <li><a href="#about" className="block py-2 md:py-0 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Tentang</a></li>
                    <li><a href="#skills" className="block py-2 md:py-0 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Keahlian</a></li>
                    <li><a href="#projects" className="block py-2 md:py-0 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Proyek</a></li>
                    <li><a href="#contact" className="block py-2 md:py-0 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Kontak</a></li>
                    {/* Separator Line */}
                    <li className="md:hidden border-t border-gray-300 dark:border-gray-600 w-full my-2"></li>

                    {/* Dark/Light Mode Button */}
                    <li className="mt-4 md:mt-0">
                        <button 
                            onClick={() => setDarkMode(!darkMode)} 
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full md:w-auto text-left flex items-center justify-center gap-2">
                            {darkMode ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>} 
                            {darkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    </li>


                    {/* Download Resume Button */}
                    <li className="mt-4 md:mt-0">
                        <a href="resume.pdf" className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full md:w-auto text-center flex items-center justify-center gap-2">
                            <RiDownloadLine className="text-xl" />
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Blur overlay for mobile menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden" onClick={() => setMenuOpen(false)}></div>
            )}

            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-5xl font-bold">Hi, Saya Bintang Maulana</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">Junior Web Developer | Passionate About Coding</p>
                <div className="mt-5 flex flex-col md:flex-row gap-4">
                    <a href="#contact" className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md">Hire Me</a>
                    <a href="#projects" className="px-5 py-3 border border-blue-600 text-blue-600 rounded-lg">My Projects</a>
                </div>
            </section>

            {/* About Me */}
            <section id="about" className="py-20 bg-white dark:bg-gray-800 text-center px-6">
                <h2 className="text-4xl font-semibold">Tentang Saya</h2>
                <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">Saya seorang fresh graduate junior web developer yang bersemangat dalam membangun website yang interaktif dan user-friendly.</p>
            </section>

            {/* Skills */}
            <section id="skills" className="py-20 text-center bg-gray-100 dark:bg-gray-900 px-6">
                <h2 className="text-4xl font-semibold">Keahlian</h2>
                <div className="flex flex-wrap justify-center mt-6 gap-4">
                    <span className="px-4 py-2 bg-blue-200 dark:bg-blue-700 rounded-lg">HTML</span>
                    <span className="px-4 py-2 bg-blue-200 dark:bg-blue-700 rounded-lg">CSS</span>
                    <span className="px-4 py-2 bg-blue-200 dark:bg-blue-700 rounded-lg">JavaScript</span>
                    <span className="px-4 py-2 bg-blue-200 dark:bg-blue-700 rounded-lg">Python</span>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-20 text-center bg-white dark:bg-gray-800 px-6">
                <h2 className="text-4xl font-semibold">Proyek Saya</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4">Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-5 bg-gray-200 dark:bg-gray-700 rounded-lg">Project 1</div>
                    <div className="p-5 bg-gray-200 dark:bg-gray-700 rounded-lg">Project 2</div>
                    <div className="p-5 bg-gray-200 dark:bg-gray-700 rounded-lg">Project 3</div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 text-center bg-gray-100 dark:bg-gray-900 px-6">
                <h2 className="text-4xl font-semibold">Kontak</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4">Hubungi saya melalui email: <strong>bintang@example.com</strong></p>
            </section>
        </div>
    );
}
