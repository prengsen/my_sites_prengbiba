import React, {useState} from 'react'; //paso 36

import './MainNavigation.css';

import {Link} from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

//paso 38. 
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false); //paso 36

    //paso 36
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    //paso 38
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return(
        <React.Fragment>
            {/* Paso 38 */}
            {drawerIsOpen ? <Backdrop onClick={closeDrawerHandler}/>: null}

            {/* Paso 36  */}
            {/*drawerIsOpen ? (
                <SideDrawer>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks />
                    </nav>
                </SideDrawer>
            ): null*/}

            {/* Paso 42 */}
            <SideDrawer show={drawerIsOpen} 
                onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>

            
            {/* Aplicamos para vista Web */}
            <MainHeader>
                {/* onClick paso 36 */}
                <button className="main-navigation__menu-btn" 
                    onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link  to="/"> Your Places </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;