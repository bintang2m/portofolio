import { useState, useEffect } from "react";
import { RiDownloadLine } from 'react-icons/ri'; // Icon for download
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaReact } from 'react-icons/fa'; // Import Icons

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
                <div className="flex flex-col lg:flex-row justify-center items-center mt-10 space-y-6 lg:space-y-0 lg:space-x-10">
                    {/* Gambar Animasi */}
                    <div className="w-60 h-60 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        {/* Gambar animasi atau ilustrasi */}
                        <img src="https://example.com/animated-person.gif" alt="Animated Person" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Teks */}
                    <div className="max-w-2xl text-left text-gray-600 dark:text-gray-300 ">
                        <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300 text-justify">
                            Hi, I'm Bintang Maulana, a fresh graduate junior web developer from Kediri, East Java. I have a passion for creating interactive and user-friendly websites. With a strong foundation in HTML, CSS, JavaScript, and Python, I enjoy building web applications that are both functional and visually appealing. I am eager to learn new technologies and improve my skills in front-end and back-end development. Currently, I am exploring frameworks like React and Django to enhance my development workflow. 
                        </p>
                        <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300 text-justify">
                            When I'm not coding, I love exploring the latest web development trends and working on personal projects. I am open to collaboration and new opportunities to grow in the tech industry. Let's connect and build something amazing together!
                        </p>
                    </div>
                </div>
            </section>


            {/* Skills */}
            <section id="skills" className="py-20 text-center bg-gray-100 dark:bg-gray-900 px-6">
                <h2 className="text-4xl font-semibold">Keahlian</h2>
                <div className="flex flex-wrap justify-center mt-6 gap-6">
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaHtml5 className="text-4xl" />
                        <p className="mt-2">HTML</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaCss3Alt className="text-4xl" />
                        <p className="mt-2">CSS</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaJs className="text-4xl" />
                        <p className="mt-2">JavaScript</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaPython className="text-4xl" />
                        <p className="mt-2">Python</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaGitAlt className="text-4xl" />
                        <p className="mt-2">Git</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaReact className="text-4xl" />
                        <p className="mt-2">React</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaReact className="text-4xl" />
                        <p className="mt-2">React</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaReact className="text-4xl" />
                        <p className="mt-2">React</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaReact className="text-4xl" />
                        <p className="mt-2">React</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaReact className="text-4xl" />
                        <p className="mt-2">React</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaReact className="text-4xl" />
                        <p className="mt-2">React</p>
                    </div>
                    <div className="w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-110">
                        <FaReact className="text-4xl" />
                        <p className="mt-2">React</p>
                    </div>
                </div>
            </section>


            <section id="projects" className="py-20 text-center bg-white dark:bg-gray-800 px-6">
                <h2 className="text-4xl font-semibold">Proyek Saya</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4">Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project 1 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Project 1"
                            className="w-full h-60 object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-2xl">Project 1</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Project 2"
                            className="w-full h-60 object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-2xl">Project 2</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Project 3"
                            className="w-full h-60 object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-2xl">Project 3</p>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Project 3"
                            className="w-full h-60 object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-2xl">Project 3</p>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Project 3"
                            className="w-full h-60 object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-2xl">Project 3</p>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Project 3"
                            className="w-full h-60 object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-2xl">Project 3</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 text-center bg-gray-100 dark:bg-gray-900 px-6">
                <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-8">Kontak Saya</h2>
                
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                    
                    {/* Formulir Kontak - Sisi Kiri */}
                    <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <form action="mailto:bintang@example.com" method="POST" enctype="multipart/form-data">
                            <div className="mb-4">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    placeholder="Nama Lengkap" 
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div className="mb-4">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    placeholder="Email" 
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div className="mb-4">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    placeholder="Pesan Anda" 
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                                    rows="4"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg transition duration-300"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    {/* Informasi Sosial Media - Sisi Kanan */}
                    <div className="w-full md:w-1/3 text-center space-y-6">
                        <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">Hubungi Saya di</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Temukan saya di platform media sosial berikut:</p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-8 text-3xl text-gray-800 dark:text-white">
                            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <i className="ri-linkedin-line"></i>
                            </a>
                            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                                <i className="ri-github-line"></i>
                            </a>
                            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                <i className="ri-twitter-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-10">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-lg">
                        &copy; {new Date().getFullYear()} Bintang Maulana. All rights reserved.
                    </p>
                    <p className="text-sm mt-2">
                        Designed & Developed by <span className="font-semibold">Bintang Maulana</span>
                    </p>
                </div>
            </footer>



        </div>
    );
}
