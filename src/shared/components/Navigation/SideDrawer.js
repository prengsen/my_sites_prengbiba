import React from 'react'; 
import ReactDOM from 'react-dom'; //paso 34


//paso 41
import {CSSTransition} from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
    
    {/*Paso 34*/}
    //const content =  <aside className="side-drawer">{props.children}</aside>;
    
    //paso 41
    const content =  (
        <CSSTransition 
            in={props.show} 
            timeout={200} 
            classNames="side-in-left"
            mountOnEnter
            unmountOnExit    
        >   
            {/* Paso 41 */}
            {/*<aside className="side-drawer" >{props.children}</aside>*/}

            {/* Paso 43 */}
            <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>

        </CSSTransition>
        );

    {/* Creamos Portal paso 34 */}
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}
export default SideDrawer;