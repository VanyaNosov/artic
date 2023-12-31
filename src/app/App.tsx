import { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home.tsx'
import About from '@/pages/About.tsx'
import Contacts from '@/pages/Contacts.tsx'
import Works from '@/pages/Works.tsx'
import NotFound from '@/pages/NotFound.tsx'
import { OrderFormConstructorButton } from '@/features/OrderFormConstructor'
import Header from '@/widgets/Header/ui/Header/Header.tsx'
import Footer from '@/widgets/Footer.tsx'
import Prices from '@/pages/Prices.tsx'
import Project from '@/pages/Project.tsx'
import Loader from '@/shared/ui/Loader'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Toaster } from 'react-hot-toast'
import TagManager from 'react-gtm-module'

function App() {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-PLXZR2JC' })
    }, [])
    return (
        <Suspense fallback={<Loader />}>
            <Toaster />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/works" element={<Works />} />

                <Route path="/project/:id" element={<Project />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <OrderFormConstructorButton />
            <Footer />
        </Suspense>
    )
}
export default App
