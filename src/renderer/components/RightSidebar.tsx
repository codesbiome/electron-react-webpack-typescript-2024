import React, { useEffect, useState } from 'react';
import './Application.scss';

const SidebarButton: React.FC<{title: string, buttonType: string}> = ({buttonType, title}) => {
    return (
    <button 
        title={title} 
        className='sidebar-button' 
        id={buttonType} 
        onClick={(event)=>{            
            switch (event.currentTarget.id) {
                case "files":
                    document.querySelector(".right-sidebar").classList.toggle("open")
                    break;
            
                case "mathPanel":
                    document.querySelector(".left-sidebar").classList.toggle("open")
                    break;
            
                default:
                    break;
            }
        }}>
    </button>
    );
}

type sidebarState = {isOpen: boolean}

class RightSidebar extends React.Component<sidebarState> {
    state: sidebarState = {
        isOpen: false
    }
    
    render(): React.ReactNode {
        return (
            <div className='right-sidebar'>
            <section id="top">
                <SidebarButton title="חיפוש" buttonType='search'/>
                <SidebarButton title="המחברות שלי" buttonType='files'/>
            </section>
            <section id="bottom">
                <SidebarButton title="זיכרון מתמטי" buttonType='mathPanel'/>
                <SidebarButton title="הארכיון" buttonType='archive'/>
                <SidebarButton title="העדפות" buttonType='settings'/>
            </section>
        </div>
        )
    }
}

export default RightSidebar;