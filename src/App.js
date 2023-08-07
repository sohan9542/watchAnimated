import "./App.css";

import { useRef, useEffect } from "react";
import {TweenMax, Power3} from "gsap";

export default function App() {
  let logoRef = useRef(null);
  let navItem1 = useRef(null);
  let navItem2 = useRef(null);
  let navItem3 = useRef(null);
  let navItem4 = useRef(null);
  let search = useRef(null);
  let menu = useRef(null);
  let title = useRef(null);
  let btn = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let mainImg = useRef(null);
  let year = useRef(null);
  let m1 = useRef(null);
  let m2 = useRef(null);
  let m3 = useRef(null);


useEffect(() => {
 TweenMax.to(logoRef, 1, {
  opacity: 1,
  x: 40,
  ease: Power3.easeOut,
  duration: 1000,
  delay: .1
 })
 TweenMax.staggerTo(navItem1, 1, {
  opacity: 1,
  x: 40,
  ease: Power3.easeOut,
  duration: 1000,
  delay: .2
 })
 TweenMax.staggerTo(navItem2, 1, {
  opacity: 1,
  x: 40,
  ease: Power3.easeOut,
  duration: 1000,
  delay: .4
 })
 TweenMax.staggerTo(navItem3, 1, {
  opacity: 1,
  x: 40,
  ease: Power3.easeOut,
  duration: 1000,
  delay: .6
 })
 TweenMax.staggerTo(navItem4, 1, {
  opacity: 1,
  x: 40,
  ease: Power3.easeOut,
  duration: 1000,
  delay: .8
 })
 TweenMax.staggerTo(navItem4, 1, {
  opacity: 1,
  x: 40,
  ease: Power3.easeOut,
  duration: 1000,
  delay: .8
 })
 TweenMax.staggerTo(search, 1, {
  opacity: 1,
  x: 40,
  ease: Power3.easeOut,
  duration: 1000,
  delay: 1
 })
 TweenMax.staggerTo(menu, 1, {
  opacity: 1,
  x: 40,
  ease: Power3.easeOut,
  duration: 1000,
  delay: 1.2
 })
 TweenMax.to(title, 1, {
  opacity: 1,
  y: -20,
  ease: Power3.easeOut,
  duration: 1000,
  delay: 1.4
 })
 TweenMax.to(btn, 1, {
  opacity: 1,
  y: -20,
  ease: Power3.easeOut,
  duration: 1000,
  delay: 1.6
 })
 TweenMax.to(line1, 1, {
  opacity: 1,
  y:'100vh',
  ease: Power3.easeOut,
  duration: 2000,
  delay: 2
 })
 TweenMax.to(line2, 1, {
  opacity: 1,
  y:'100vh',
  ease: Power3.easeOut,
  duration: 2000,
  delay: 2.5
 })
 TweenMax.to(mainImg, 1, {
  opacity: 1,
  y:130,
  ease: Power3.easeOut,
  duration: 2000,
  delay: 3.2
 })
 TweenMax.to(year, 1, {
  opacity: 1,
  y:50,
  ease: Power3.easeOut,
  duration: 2000,
  delay: 3.7
 })
 TweenMax.to(m1, 1, {
  opacity: 1,
  y:-20,
  ease: Power3.easeOut,
  duration: 2000,
  delay: 3.9
 })
 TweenMax.to(m1.current, 1, {
  opacity: 1,
  y:-10,
  ease: Power3.easeOut,
  duration: 1000,
  delay: 4.1
 })
 TweenMax.to(m2.current, 1, {
  opacity: 1,
  y:-10,
  ease: Power3.easeOut,
  duration: 1000,
  delay: 4.3
 })
 TweenMax.to(m3.current, 1, {
  opacity: 1,
  y:-10,
  ease: Power3.easeOut,
  duration: 1000,
  delay: 4.5
 })
}, [])


  return (
    <div className="App">
      <div className="container">
        <div className="stripes">
          <div ref={el => {line1 = el}} className="line-one"></div>
          <div ref={el => {line2 = el}} className="line-two"></div>
        </div>

        <nav>
          <div ref={el => {logoRef = el}} className="logo">
            <span>Omega</span>
          </div>
          <ul>
            <li ref={el => {navItem1 = el}}>
              <a href="">collection</a>
            </li>
            <li ref={el => {navItem2 = el}}>
              <a href="">products</a>
            </li>
            <li ref={el => {navItem3 = el}}>
              <a href="">offers</a>
            </li>
            <li ref={el => {navItem4 = el}}>
              <a href="">Contact</a>
            </li>
          </ul>
          <div ref={el => {search = el}} className="search">
            <i className="fa fa-search"></i>
          </div>
          <div ref={el => {menu = el}} className="menu">
            <i className="fa fa-bars"></i>
          </div>
        </nav>

        <div ref={el => {mainImg = el}} className="img">
          <img src="../watch.png" alt="" />
        </div>

        <div ref={el=>{title= el}} className="title">
          <p>speedmaster</p>
          <span>Moonwatch.</span>
        </div>

        <div ref={el => {btn = el}} className="btn">
          <a href="">Order Now</a>
        </div>

        <div ref={el => {year = el}} className="year">2023*</div>

        <div className="media">
          <ul>
            <li ref={m1}>
              <i className="fa fa-facebook"></i>
            </li>
            <li ref={m2}>
              <i className="fa fa-instagram"></i>
            </li>
            <li ref={m3}>
              <i className="fa fa-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
