import React from "react";

export default function Navigation() {
        return (
                <nav className="bg-white/60 backdrop-blur-md border-b border-gray-100">
                        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-pink-500 shadow-md" />
                                        <span className="text-xl font-semibold text-gray-900">ClassyApp</span>
                                </div>

                                <ul className="flex items-center gap-6 text-gray-600">
                                        <li>
                                                <a href="#" className="hover:text-gray-900">
                                                        Home
                                                </a>
                                        </li>
                                        <li>
                                                <a href="#about" className="hover:text-gray-900">
                                                        About
                                                </a>
                                        </li>
                                        <li>
                                                <a href="#contact" className="hover:text-gray-900">
                                                        Contact
                                                </a>
                                        </li>
                                </ul>
                        </div>
                </nav>
        );
}
