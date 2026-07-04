import Navigation from "./Navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
        return (
                <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
                        <header>
                                <Navigation />
                        </header>

                        <main className="container mx-auto px-4 py-12">{children}</main>

                        <footer className="text-center py-8 text-sm text-gray-500">
                                © {new Date().getFullYear()} ClassyApp
                        </footer>
                </div>
        );
}
