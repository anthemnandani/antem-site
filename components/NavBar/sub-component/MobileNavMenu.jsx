import React from 'react';
import Link from 'next/link';
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from '../../../utils';

const MobileNavMenu = () => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains('menu-toggle') ||
            target.classList.contains('menu-toggle')
        ) {
            const element = target.classList.contains('icon') ? parentEl : target;
            const parent = getClosest(element, 'li');
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === 'UL') {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === 'UL') {
                    slideToggle(child, 1000);
                }
            });
        }
    };

    return (
        <nav className="site-mobile-menu">
            <ul>
                <li>
                    <Link href="/Home/Index"><span className="menu-text">Home</span></Link>
                </li>
                <li className="has-children">
                    <Link href="/Home/Services"><span className="menu-text">Services</span></Link>
                    <span className="menu-toggle" onClick={onClickHandler}>
                        <i className="icon fa fa-angle-down"></i>
                    </span>
                    <ul className="sub-menu">
                        <li><Link href="/Home/Custom-Software"><span className="menu-text">Custom Software</span></Link></li>
                        <li><Link href="/Home/Web-Mobile-Apps"><span className="menu-text">Web & Mobile Apps</span></Link></li>
                        <li><Link href="/Home/AI-Powered-Solutions"><span className="menu-text">AI-Powered Solutions</span></Link></li>
                        <li><Link href="/Home/Marketing-Automation"><span className="menu-text">Marketing Automation</span></Link></li>
                        <li><Link href="/Home/MVP-Development"><span className="menu-text">MVP Development</span></Link></li>
                        <li><Link href="/Home/Enterprise-Software"><span className="menu-text">Enterprise Software</span></Link></li>
                        <li><Link href="/Home/Data-Analysis-ETL"><span className="menu-text">Data Analysis & ETL</span></Link></li>
                        <li><Link href="/Home/UI-UX-Design"><span className="menu-text">UI/UX Design</span></Link></li>
                        <li><Link href="/Home/On-Demand-Dedicated-Talent"><span className="menu-text">On-Demand Dedicated Talent</span></Link></li>
                    </ul>
                </li>
                <li className="has-children">
                    <Link href="/Home/Industries"><span className="menu-text">Industries</span></Link>
                    <span className="menu-toggle" onClick={onClickHandler}>
                        <i className="icon fa fa-angle-down"></i>
                    </span>
                    <ul className="sub-menu">
                        <li><Link href="/Home/Industries?Industrytype=Workforce-Compliance-Solutions"><span className="menu-text">Workforce Compliance Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Publishing-Rights-Management"><span className="menu-text">Publishing Rights Management</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Financial-Audit-Compliance"><span className="menu-text">Financial Audit Compliance</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Food-Ordering-Solutions"><span className="menu-text">Food Ordering Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Information-Technology-Solutions"><span className="menu-text">Information Technology Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Business-Promotion-Solutions"><span className="menu-text">Business Promotion Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=HOA-Automation-Solutions"><span className="menu-text">HOA Automation Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Logistics-and-Supply-Chain-Management"><span className="menu-text">Logistics & Supply Chain Management</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Construction-Industry-Software"><span className="menu-text">Construction Industry Software</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Healthcare-and-Medical-Solutions"><span className="menu-text">Healthcare & Medical Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Tourism-and-Travel-Solutions"><span className="menu-text">Tourism & Travel Solutions</span></Link></li>
                    </ul>
                </li>
                <li><Link href="/Career"><span className="menu-text">Career</span></Link></li>
                <li className="has-children">
                    <Link href="/OurWork"><span className="menu-text">Portfolio</span></Link>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><Link href="/Technologies"><span className="menu-text">Technologies</span></Link></li>
                    </ul>
                </li>
                <li className="has-children">
                    <Link href="/about-us"><span className="menu-text">About Us</span></Link>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><Link href="/faqs"><span className="menu-text">FAQs</span></Link></li>
                        <li><Link href="/our-clients"><span className="menu-text">Our Clients</span></Link></li>
                        <li><Link href="/testimonials"><span className="menu-text">Testimonials</span></Link></li>
                    </ul>
                </li>
                <li><Link href="/contact-us"><span className="menu-text">Contact Us</span></Link></li>
            </ul>
        </nav>
    );
};

export default MobileNavMenu;
