import React  from 'react';
import { Footer } from './partial/Footer.comp';
import { Header } from './partial/Header.comp';


export const Defaultlayout=({children})=> {
    return ( 
        <div classname ="default-layout">
            <header classname="header mg-2">
                <Header/>

                
</header>
<main classname="main">{children}</main>
        <footer className="footer">
            <Footer/>
        </footer>
    
    
      

        </div>
    );
}