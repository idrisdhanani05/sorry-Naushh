import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, Headphones, Heart, Music2, Sparkles, Stars } from 'lucide-react'
import './styles.css'
import './naushh.css'

const letter = [
  <>Okay suno… first of all, I'm genuinely sorry. 🥹❤️</>,
  <>I know aapne mujhe 2–3 mahine pehle 3–4 songs suggest kiye the. And I know aapne mujhe beech beech mein 2–3 baar yaad bhi dilaya ki maine woh songs sune ya nahi. Har baar maine sorry bola aur phir kaha ki haan, sunta hoon… but somehow, I still didn't listen to them.</>,
  <>And honestly, mujhe pata hai ki meri galti hai. Aapne mere saath kuch share kiya tha, something you wanted me to listen to, and I should have given it that time instead of repeatedly saying ‘haan, sunta hoon’.</>,
  <>Aaj bhi jab aapka message aaya, around 1–1.15 hours ago, tabse main continuously un songs ke names yaad karne aur dhoondhne ki koshish kar raha tha. Mujhe genuinely yaad nahi aa rahe the, and I felt so bad ki abhi poochunga toh aisa lagega ki maine aapki baat ko seriously hi nahi liya.</>,
  <>But please, ek baat kabhi mat sochna ki you're not important to me.</>,
  <>I care about you. <strong>A LOT.</strong></>,
  <>I never want you to feel like I'm ignoring you, taking you for granted, or treating you like you're just another person in my life. You're not. Never.</>,
  <>You are genuinely precious to me. You're my favourite person in the world, and in my friend list, you're literally at the top — one of the closest people to me.</>,
  <>I know saying all this doesn't magically undo the fact that I forgot something you told me multiple times. And I'm not trying to make excuses. I just want you to know that forgetting those song names doesn't mean I've forgotten how much you mean to me.</>,
  <>I never want to hurt you, even unintentionally. And if my actions made you feel like your words or recommendations don't matter to me, then I'm really, genuinely sorry.</>,
  <>Aap mere liye bohot important ho. More than I probably manage to show sometimes.</>,
  <>And please don't ever think that you're just time pass for me. You're someone I genuinely value, someone whose messages matter to me, someone I never want to make feel unwanted or unimportant.</>,
  <>So yes… I messed up. Again. 😭</>,
  <>And I really <strong>APPLOLOCHEEZE.</strong> 🥹👉👈❤️</>,
  <>Not just for forgetting the songs, but for making you remind me again and again.</>,
  <>You deserve better than a hundred ‘haan, sunta hoon’ promises. You deserve actions, too.</>,
  <>I can't promise I'll never forget anything again, but I can promise I'll try to be more mindful of the little things you share with me.</>,
  <>You're precious to me, bestie. Please don't forget that. ❤️</>,
]

const promises = [
  { icon: Heart, title: 'You matter. Always.', text: 'Your words, your messages, your recommendations — they matter to me. And so do you.' },
  { icon: Stars, title: "You're not just anyone.", text: "You're one of the closest people to me. I never want you to question your place in my life because of my carelessness." },
  { icon: Sparkles, title: "I'll do better.", text: "Less saying ‘haan, sunta hoon’ and more actually doing it. You deserve that." },
]

function useReveals() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { items.forEach(item => item.classList.add('visible')); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

function App() {
  const [opened, setOpened] = useState(false)
  const [promised, setPromised] = useState(false)
  const [burst, setBurst] = useState(false)
  useReveals()

  const openLetter = () => {
    setOpened(true)
    window.setTimeout(() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 450)
  }
  const makePromise = () => {
    setPromised(true)
    setBurst(true)
    window.setTimeout(() => setBurst(false), 1500)
  }

  return <main>
    <div className="ambient" aria-hidden="true">
      <span className="float-heart heart-a">♡</span><span className="float-heart heart-b">♥</span>
      <span className="float-heart heart-c">♡</span><span className="float-heart heart-d">✦</span>
      <span className="float-heart heart-e">✧</span>
    </div>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
      <div className="hero-content">
        <div className="eyebrow"><span className="eyebrow-heart">♡</span> A LITTLE MESSAGE FOR MY FAV PERSON <span className="eyebrow-heart">♡</span></div>
        <h1 id="hero-title">Okay… I owe you a<br className="desktop-break"/> <em>proper apology.</em></h1>
        <p className="hero-sub">And this time, I'm not going to just say sorry and move on.</p>
        <div className={`envelope-wrap ${opened ? 'is-open' : ''}`}>
          <div className="envelope" aria-hidden="true">
            <div className="envelope-back"/><div className="letter-peek"><Heart size={24} fill="currentColor"/></div>
            <div className="envelope-flap"/><div className="envelope-front"/>
            <span className="seal"><Heart size={17} fill="currentColor"/></span>
          </div>
        </div>
        <button className="primary-button open-button" onClick={openLetter} aria-expanded={opened} aria-controls="letter">
          {opened ? 'Your letter is open ♡' : 'Open this, please? ♡'} <span aria-hidden="true">↗</span>
        </button>
        <div className="hero-note"><Sparkles size={14}/> a tiny note, from me to you</div>
        <a className="scroll-cue" href="#letter" aria-label="Scroll to the letter"><ArrowDown size={17}/></a>
      </div>
    </section>

    <section id="letter" className={`letter-section ${opened ? 'letter-open' : ''}`} aria-label="My apology letter">
      <div className="section-kicker reveal"><span>01</span><i/> FROM MY HEART</div>
      <article className="letter-card reveal">
        <div className="letter-top"><span className="letter-stamp"><Heart size={19} fill="currentColor"/></span><span className="letter-date">a note I should've sent sooner</span></div>
        <div className="letter-copy">{letter.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        <div className="letter-signoff">with all my love, <span>your bestie ♡</span></div>
        <div className="letter-decoration" aria-hidden="true">✧</div>
      </article>
    </section>

    <section className="naushh-apology" aria-labelledby="naushh-title">
      <div className="naushh-glow" aria-hidden="true" />
      <span className="naushh-float naushh-float-one" aria-hidden="true">♡</span>
      <span className="naushh-float naushh-float-two" aria-hidden="true">✧</span>
      <span className="naushh-float naushh-float-three" aria-hidden="true">♥</span>
      <span className="naushh-float naushh-float-four" aria-hidden="true">✦</span>
      <div className="naushh-content">
        <div className="naushh-label">JUST ONE MORE THING, NAUSHHH ♡</div>
        <h2 id="naushh-title" className="naushh-heading">I AM SORRYYYY,<br className="naushh-mobile-break"/> NAUSHHHHHHHH 😭❤️🫂</h2>
        <div className="naushh-copy">
          <p>I promise mai abse aisa nahi karunga. 🥹❤️</p>
          <p>I'll make a genuine effort to remember the little things you tell me, especially the things you share with me because they matter to you.</p>
          <p>I don't want you to keep reminding me of something that you were excited to share with me. You deserve to feel heard, valued, and important without having to ask for it.</p>
          <p>I know promises are easy to make, and I know I need to show it through my actions, too. But I genuinely mean this when I say I'll try to be more mindful from now on.</p>
          <p>I'm really, really sorry, Naushhh. You mean so much to me, and I never want my carelessness to make you feel otherwise. ❤️🫂</p>
        </div>
        <div className="naushh-signoff">
          <span className="naushh-big-heart" aria-hidden="true">♥</span>
          <p>I'm sorry, your favourite idiot is trying to do better. 👉👈❤️</p>
        </div>
      </div>
    </section>

    <section className="know-section section-pad">
      <div className="section-kicker reveal"><span>02</span><i/> JUST SO IT'S SAID</div>
      <h2 className="section-title reveal">What I actually want<br/> <em>you to know</em></h2>
      <div className="promise-grid">
        {promises.map(({ icon: Icon, title, text }, index) => <article className="info-card reveal" style={{ '--delay': `${index * 130}ms` }} key={title}>
          <div className="info-icon"><Icon size={22} strokeWidth={1.6}/></div><span className="card-index">0{index + 1}</span>
          <h3>{title}</h3><p>{text}</p><span className="card-sparkle">✧</span>
        </article>)}
      </div>
    </section>

    <section className="tiny-promise-section section-pad">
      <div className="tiny-promise-card reveal">
        <div className="promise-decoration decoration-left">✿</div><div className="promise-decoration decoration-right">♡</div>
        <div className="section-kicker"><span>03</span><i/> A LITTLE COMMITMENT</div>
        <h2 className="handwritten">Pinky promise? <span>🤞🏻</span></h2>
        <p>Next time you recommend me something, I'll make a proper effort to listen instead of just saying I will.</p>
        <button className={`primary-button promise-button ${promised ? 'is-promised' : ''}`} onClick={makePromise} aria-live="polite">
          {promised ? 'Promise made ♡' : "Okay, I'll do better ♡"}
        </button>
        {promised && <p className="promise-response" role="status">Promise made. Now I have to actually keep it. 🥹❤️</p>}
        {burst && <div className="heart-burst" aria-hidden="true">{['♡','♥','♡','✦','♥','♡','✧'].map((h,i)=><span style={{'--i':i}} key={i}>{h}</span>)}</div>}
      </div>
    </section>

    <section className="songs-section section-pad">
      <div className="song-card reveal">
        <div className="song-copy"><div className="section-kicker"><span>04</span><i/> THE HONEST VERSION</div>
          <h2 className="section-title">About those songs… <em>🎧</em></h2>
          <p>I'm still trying to remember the names, and I genuinely want to listen to them. I don't want to make up song names just to pretend I remember.</p>
          <p className="song-small">Jab names yaad aa jayenge, the listening session is ON. No more fake ‘haan, sunta hoon’ promises. 😭</p>
        </div>
        <div className="player-visual" aria-label="Decorative, inactive music visualizer">
          <div className="record"><div className="record-center"><Music2 size={23}/></div><span className="record-groove groove-one"/><span className="record-groove groove-two"/></div>
          <div className="visualizer" aria-hidden="true">{Array.from({length: 19}, (_,i)=><span key={i} style={{'--bar': (i*7%13)+8+'px','--i':i}}/>)}</div>
          <div className="player-caption"><Headphones size={14}/> waiting for the right songs</div>
          <div className="music-note note-one">♪</div><div className="music-note note-two">♫</div>
        </div>
      </div>
    </section>

    <footer className="final-section">
      <div className="footer-glow"/><span className="footer-heart heart-left">♡</span><span className="footer-heart heart-right">✧</span>
      <div className="final-content reveal">
        <div className="section-kicker"><span>05</span><i/> BEFORE I GO</div>
        <h2>One last <em>thing…</em></h2>
        <div className="final-message">
          <p>I might forget a song name sometimes, but please never mistake that for you being unimportant to me.</p>
          <p>You're my favourite person, one of my closest friends, and someone I genuinely don't want to hurt.</p>
          <p>I'm sorry, bestie. For real this time. <span className="final-heartbeat">❤️</span></p>
        </div>
        <div className="final-rule"><span>♡</span></div>
        <p className="made-with">Made with genuine apologies, a little panic,<br/> and a whole lot of love for my bestie. ♡</p>
      </div>
      <div className="footer-bottom">ALWAYS YOUR FRIEND <span>·</span> ALWAYS IN YOUR CORNER</div>
    </footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
