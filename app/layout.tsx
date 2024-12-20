import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import "@/i18n"

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {

    return (
        <html lang="fr">
        <body className="container-fluid">
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
