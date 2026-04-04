import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import ClickSpark from './components/ClickSpark';
import Ribbons from './components/Ribbons/Ribbons';
import './index.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('ALL_WORK');
  const [activeSection, setActiveSection] = useState('LABS');

  const [isRotating, setIsRotating] = useState(false);

  const handleTerminal = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);
    
    // Confetti side blast
    const count = 200;
    const defaults = {
        origin: { y: 0.7 },
        spread: 80,
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['circle', 'square'],
        colors: ['#f9a8d4', '#fde047', '#93c5fd', '#86efac', '#c084fc']
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
        origin: { x: 0, y: 0.5 }
    });
    fire(0.2, {
        spread: 60,
        origin: { x: 0, y: 0.5 }
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        origin: { x: 0, y: 0.5 }
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        origin: { x: 0, y: 0.5 }
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
        origin: { x: 0, y: 0.5 }
    });
    
    // Blast from other side
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
        origin: { x: 1, y: 0.5 }
    });
    fire(0.2, {
        spread: 60,
        origin: { x: 1, y: 0.5 }
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        origin: { x: 1, y: 0.5 }
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        origin: { x: 1, y: 0.5 }
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
        origin: { x: 1, y: 0.5 }
    });
  };

  const handleHireMe = () => {
    window.location.href = "mailto:santoshp123steam@gmail.com";
  };

  return (
    <ClickSpark sparkColor='#121212' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, pointerEvents: 'none', opacity: 1 }}>
        <Ribbons 
          colors={['#f9a8d4', '#fde047', '#93c5fd', '#86efac', '#c084fc']} 
          baseThickness={15} 
          offsetFactor={0} 
        />
      </div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-3 sm:px-6 h-14 sm:h-20 bg-[#f6f6f6]/80 backdrop-blur-md border-b-2 border-[#0c0f0f] bg-dot-grid">
        <div className="text-lg sm:text-xl font-black tracking-tighter text-[#0c0f0f] uppercase font-headline">
            {/* Empty space based on user request */}
        </div>
        <div className="hidden md:flex items-center gap-8 h-full">
            <button onClick={() => setActiveSection('WORK')} className={`font-headline uppercase tracking-tighter font-bold transition-all duration-100 cursor-pointer bg-transparent h-full flex items-center border-t-0 border-l-0 border-r-0 ${activeSection === 'WORK' ? 'text-[#6d5a00] border-b-4 border-b-[#6d5a00]' : 'text-[#0c0f0f] hover:text-[#7541ac] border-b-4 border-transparent'}`}>WORK</button>
            <button onClick={() => setActiveSection('ARCHIVE')} className={`font-headline uppercase tracking-tighter font-bold transition-all duration-100 cursor-pointer bg-transparent h-full flex items-center border-t-0 border-l-0 border-r-0 ${activeSection === 'ARCHIVE' ? 'text-[#6d5a00] border-b-4 border-b-[#6d5a00]' : 'text-[#0c0f0f] hover:text-[#7541ac] border-b-4 border-transparent'}`}>ARCHIVE</button>
            <button onClick={() => setActiveSection('LABS')} className={`font-headline uppercase tracking-tighter font-bold transition-all duration-100 cursor-pointer bg-transparent h-full flex items-center border-t-0 border-l-0 border-r-0 ${activeSection === 'LABS' ? 'text-[#6d5a00] border-b-4 border-b-[#6d5a00]' : 'text-[#0c0f0f] hover:text-[#7541ac] border-b-4 border-transparent'}`}>LABS</button>
            <button onClick={() => setActiveSection('CONTACT')} className={`font-headline uppercase tracking-tighter font-bold transition-all duration-100 cursor-pointer bg-transparent h-full flex items-center border-t-0 border-l-0 border-r-0 ${activeSection === 'CONTACT' ? 'text-[#6d5a00] border-b-4 border-b-[#6d5a00]' : 'text-[#0c0f0f] hover:text-[#7541ac] border-b-4 border-transparent'}`}>CONTACT</button>
        </div>
        <div className="flex items-center gap-4">
            <button 
                onClick={handleTerminal} 
                className={`material-symbols-outlined p-2 border-2 border-black hard-shadow bg-surface hover:bg-primary-container active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-300 cursor-pointer ${isRotating ? 'rotate-[360deg]' : ''}`}
            >
                terminal
            </button>
        </div>
      </nav>

      {/* Side Navigation Bar (Hidden on mobile) */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full z-40 w-64 border-r-4 border-[#0c0f0f] bg-[#f0f1f1] pt-24">
        <nav className="flex-1 px-4 mt-8 space-y-4 flex flex-col items-start w-full">
            <button onClick={() => setActiveSection('LABS')} className="flex w-full items-center gap-3 px-4 py-3 font-headline font-bold uppercase text-[#0c0f0f] hover:bg-[#7ebefe] hover:translate-x-1 transition-transform cursor-pointer bg-transparent border-0 text-left">
                <span className="material-symbols-outlined">folder_open</span>
                <span>PROJECTS</span>
            </button>
            <button onClick={() => window.open('https://github.com/shantoshdurai', '_blank')} className="flex w-full items-center gap-3 px-4 py-3 font-headline font-bold uppercase text-[#0c0f0f] hover:bg-[#7ebefe] hover:translate-x-1 transition-transform cursor-pointer bg-transparent border-0 text-left">
                <span className="material-symbols-outlined">code</span>
                <span>GITHUB</span>
            </button>
            <button onClick={() => window.open('https://linkedin.com/in/shantoshdurai', '_blank')} className="flex w-full items-center gap-3 px-4 py-3 font-headline font-bold uppercase text-[#0c0f0f] hover:bg-[#7ebefe] hover:translate-x-1 transition-transform cursor-pointer bg-transparent border-0 text-left">
                <span className="material-symbols-outlined">work</span>
                <span>LINKEDIN</span>
            </button>
            <button onClick={() => setActiveSection('WORK')} className="flex w-full items-center gap-3 px-4 py-3 font-headline font-bold uppercase text-[#0c0f0f] hover:bg-[#7ebefe] hover:translate-x-1 transition-transform cursor-pointer bg-transparent border-0 text-left">
                <span className="material-symbols-outlined">description</span>
                <span>RESUME</span>
            </button>
        </nav>
        <div className="p-4">
            <button onClick={handleHireMe} className="w-full bg-primary-container text-on-primary-container font-headline font-bold uppercase py-4 border-2 border-black hard-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:scale-95 transition-all cursor-pointer z-50 relative">
                HIRE ME
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 sm:pt-24 min-h-screen bg-dot-grid pb-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
            
            {/* Conditional Routing */}
            {activeSection === 'LABS' && (
                <>
                    {/* Hero Profile */}
                    <header className="mb-8 sm:mb-16 border-2 sm:border-4 border-black hard-shadow sm:hard-shadow-lg bg-secondary-container p-4 sm:p-8 flex flex-col-reverse md:flex-row gap-5 sm:gap-8 items-center relative z-40">
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-on-secondary-container mb-2 sm:mb-4">
                                SANTOSH DURAI
                            </h1>
                            <div className="bg-surface border-2 border-black inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                                <span className="font-headline font-bold text-sm sm:text-lg uppercase tracking-widest text-[#7541ac]">AI / ML Developer & Builder</span>
                            </div>
                            <p className="font-body text-base sm:text-xl max-w-2xl text-on-surface-variant font-medium leading-relaxed mb-4 sm:mb-6">
                                CS student. Building with AI, Flutter & Python. Can't stop wondering, can't stop building.
                            </p>
                            <button onClick={handleHireMe} className="bg-primary-container text-on-primary-container font-headline font-bold uppercase px-6 sm:px-8 py-3 sm:py-4 border-2 border-black hard-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:scale-95 transition-all cursor-pointer w-full sm:w-auto">
                                LET'S TALK
                            </button>
                        </div>
                        <div className="w-28 h-28 sm:w-48 sm:h-48 md:w-64 md:h-64 border-3 sm:border-4 border-black hard-shadow overflow-hidden bg-surface flex-shrink-0 rounded-sm">
                            <img alt="Santosh Hero" className="w-full h-full object-cover" src="/santosh.png"/>
                        </div>
                    </header>

                    {/* Section Header */}
                    <header className="mb-8 sm:mb-12">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-4 sm:mb-6">
                            <div className="inline-block bg-surface border-2 sm:border-4 border-black px-4 sm:px-8 py-3 sm:py-4 hard-shadow sm:hard-shadow-lg">
                                <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-on-surface">
                                    THE LAB
                                </h1>
                            </div>
                        </div>
                        <p className="font-body text-base sm:text-xl max-w-2xl text-on-surface-variant font-medium leading-relaxed">
                            Experimental grounds, machine learning prototypes, and full-stack projects straight from my GitHub.
                        </p>
                    </header>

                    {/* Filter Bar */}
                    <div className="mb-8 sm:mb-16 bg-surface-container-low border-2 border-black p-2 sm:p-4 hard-shadow relative z-40">
                        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide">
                            <span className="font-label font-black text-xs sm:text-sm uppercase px-2 whitespace-nowrap">FILTER:</span>
                            {['ALL_WORK', '3D_ART', 'PYTHON', 'AI_ML', 'FLUTTER', 'WEB', 'MOBILE'].map(filter => (
                            <button 
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-black font-label font-bold text-[10px] sm:text-xs uppercase transition-colors cursor-pointer whitespace-nowrap flex-shrink-0 ${
                                activeFilter === filter 
                                    ? 'bg-primary-container hover:bg-primary' 
                                    : 'bg-surface hover:bg-tertiary-container'
                                }`}
                            >
                                {filter}
                            </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10">
                
                {[
                    {
                        id: 'blender',
                        title: '3D_MODEL_ARCHIVE',
                        image: '/earth-spaceship.mp4',
                        video: true,
                        badge: '3D_ART',
                        tags: ['BLENDER', 'RENDERING'],
                        description: 'A growing collection of my personal 3D renders, architectural concepts, texturing work, and models created in Blender.',
                        sourceAction: () => setActiveSection('3D_ARCHIVE'),
                        sourceText: 'EXPLORE',
                        sourceIcon: 'folder_open',
                        demoAction: () => window.open('https://github.com/shantoshdurai/3D-Blender-Archive', '_blank'),
                        demoText: 'ASSETS',
                        demoIcon: 'download',
                        categories: ['3D_ART']
                    },
                    {
                        id: 'university-chatbot',
                        title: 'Uni-Chatbot (RAG)',
                        image: '/project_chatbot.png',
                        badge: 'AI_04',
                        tags: ['PYTHON', 'LANGCHAIN', 'OLLAMA'],
                        description: 'RAG-based university chatbot built with LangChain and Ollama (llama3.1:8b).',
                        sourceLink: 'https://github.com/shantoshdurai/university-chatbot-langchain',
                        categories: ['PYTHON', 'AI_ML']
                    },
                    {
                        id: 'flower-classifier',
                        title: 'Flower Classifier (CNN)',
                        image: '/project_flower.png',
                        badge: 'ML_05',
                        tags: ['PYTHON', 'CNN', 'TENSORFLOW'],
                        description: 'Image classification model to identify flower species using MobileNetV2 transfer learning.',
                        sourceLink: 'https://github.com/shantoshdurai/flower-species-classifier',
                        demoLink: 'https://santoshp123-flower-species-classifiers.hf.space',
                        categories: ['PYTHON', 'AI_ML']
                    },
                    {
                        id: 'classnow',
                        title: 'ClassNow-app',
                        image: '/classnow.png',
                        badge: 'DEV_01',
                        tags: ['FLUTTER', 'FIREBASE', 'AI'],
                        description: 'AI-powered university class management app built with Flutter, Firebase & Gemini API integration.',
                        sourceLink: 'https://github.com/shantoshdurai/ClassNow-app',
                        categories: ['FLUTTER', 'AI_ML', 'MOBILE']
                    },
                    {
                        id: 'demand',
                        title: 'DEMAND_FORECASTER',
                        image: '/forecasting.png',
                        badge: 'ML_03',
                        tags: ['XGBOOST', 'PROPHET'],
                        description: 'ML-powered inventory demand forecasting for MSMEs. Integrates XGBoost, Prophet, and a Streamlit dashboard.',
                        sourceLink: 'https://github.com/shantoshdurai/ai-inventory-demand-forecasting',
                        categories: ['PYTHON', 'AI_ML', 'WEB']
                    }
                ]
                .filter(project => activeFilter === 'ALL_WORK' || project.categories.includes(activeFilter))
                .map((project, index) => (
                    <article key={project.id} className="bg-surface-container-lowest border-2 sm:border-4 border-black hard-shadow sm:hard-shadow-lg flex flex-col group hover:-translate-y-2 active:translate-y-0 active:shadow-none transition-all duration-300 relative z-40">
                        <div className={`relative h-44 sm:h-64 border-b-2 sm:border-b-4 border-black overflow-hidden ${['bg-tertiary-container', 'bg-secondary-container', 'bg-primary-container', 'bg-surface-variant'][index % 4]}`}>
                            {project.video ? (
                                <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-0 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-500">
                                    <source src={project.image} type="video/mp4" />
                                </video>
                            ) : (
                                <img className="w-full h-full object-cover grayscale-0 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-500" data-alt={`${project.title} illustration`} src={project.image}/>
                            )}
                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white border-2 border-black px-2 py-1">
                                <span className="font-label font-black text-[10px] uppercase">{project.badge}</span>
                            </div>
                        </div>
                        <div className="p-4 sm:p-8 flex flex-col flex-1">
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-6">
                                {project.tags.map((tag, i) => (
                                    <span key={tag} className={`font-label text-[10px] font-bold uppercase border border-black px-2 py-0.5 ${['bg-secondary-container', 'bg-surface-container', 'bg-primary-container'][i % 3]}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="font-headline text-lg sm:text-2xl font-black mb-2 sm:mb-4 uppercase tracking-tighter">{project.title}</h3>
                            <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-6 sm:mb-10 flex-1 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-auto">
                                <button onClick={project.sourceAction || (() => window.open(project.sourceLink, '_blank'))} className="flex items-center justify-center gap-1.5 sm:gap-2 border-2 border-black py-2.5 sm:py-3 font-headline font-bold text-[11px] sm:text-sm uppercase bg-surface active-press hard-shadow cursor-pointer">
                                    <span className="material-symbols-outlined text-sm">{project.sourceIcon || 'code'}</span> {project.sourceText || 'SOURCE'}
                                </button>
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        if (project.demoAction) project.demoAction();
                                        else if (project.demoLink) window.open(project.demoLink, '_blank');
                                    }} 
                                    className={`flex items-center justify-center gap-1.5 sm:gap-2 border-2 border-black py-2.5 sm:py-3 font-headline font-bold text-[11px] sm:text-sm uppercase active-press hard-shadow cursor-pointer ${(project.demoAction || project.demoLink) ? 'bg-secondary-container hover:bg-secondary' : 'bg-surface opacity-50 cursor-not-allowed'}`}
                                >
                                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{project.demoIcon || 'visibility'}</span> {project.demoText || 'DEMO'}
                                </button>
                            </div>
                        </div>
                    </article>
                ))}

            </div>
            </>
            )}
            
            {activeSection === 'WORK' && (
                <div className="relative z-40 bg-surface border-2 sm:border-4 border-black hard-shadow sm:hard-shadow-lg p-5 sm:p-10 mt-6 sm:mt-10 min-h-[300px] sm:min-h-[500px]">
                    <h1 className="font-headline text-2xl sm:text-5xl font-black uppercase text-on-surface mb-4 sm:mb-6 border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4 inline-block">WORK EXPERIENCE</h1>
                    <p className="font-body text-base sm:text-xl mb-4">My professional timeline and roles are currently being updated.</p>
                    <p className="font-body text-sm sm:text-lg text-on-surface-variant">Check back soon for a full list of my work history or view my RESUME via the sidebar!</p>
                </div>
            )}

            {activeSection === 'ARCHIVE' && (
                <div className="relative z-40 bg-surface border-2 sm:border-4 border-black hard-shadow sm:hard-shadow-lg p-5 sm:p-10 mt-6 sm:mt-10 min-h-[300px] sm:min-h-[500px]">
                    <h1 className="font-headline text-2xl sm:text-5xl font-black uppercase text-on-surface mb-4 sm:mb-6 border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4 inline-block">THE ARCHIVE</h1>
                    <p className="font-body text-base sm:text-xl mb-4">A vault of older projects, hackathons, and early experiments.</p>
                    <p className="font-body text-sm sm:text-lg text-on-surface-variant">These projects are retired but remain here for exploring.</p>
                </div>
            )}

        {activeSection === 'CONTACT' && (
                <div className="relative z-40 bg-surface border-2 sm:border-4 border-black hard-shadow sm:hard-shadow-lg p-5 sm:p-10 mt-6 sm:mt-10 min-h-[300px] sm:min-h-[500px]">
                    <h1 className="font-headline text-2xl sm:text-5xl font-black uppercase text-on-surface mb-4 sm:mb-6 border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4 inline-block">TRANSMISSION</h1>
                    <p className="font-body text-base sm:text-xl mb-6 sm:mb-8">Ready to collaborate? Execute the command below or send a direct signal.</p>
                    <div className="flex flex-col gap-3 sm:gap-4 max-w-md">
                        <button onClick={handleHireMe} className="bg-primary-container text-on-primary-container font-headline font-bold uppercase py-3 sm:py-4 border-2 border-black hard-shadow hover:-translate-y-1 transition-all cursor-pointer text-sm sm:text-base">
                            INITIATE EMAIL
                        </button>
                        <button onClick={() => window.open('https://linkedin.com/in/shantoshdurai', '_blank')} className="bg-secondary-container text-on-secondary-container font-headline font-bold uppercase py-3 sm:py-4 border-2 border-black hard-shadow hover:-translate-y-1 transition-all cursor-pointer text-sm sm:text-base">
                            CONNECT ON LINKEDIN
                        </button>
                    </div>
                </div>
            )}

            {activeSection === '3D_ARCHIVE' && (
                <div className="relative z-40 bg-surface border-2 sm:border-4 border-black hard-shadow sm:hard-shadow-lg p-4 sm:p-6 md:p-10 mt-6 sm:mt-10 min-h-[300px] sm:min-h-[500px]">
                    <div className="flex justify-between items-center mb-6 sm:mb-8 border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4">
                        <h1 className="font-headline text-xl sm:text-3xl md:text-5xl font-black uppercase text-on-surface">3D ARCHIVE</h1>
                        <button onClick={() => setActiveSection('LABS')} className="material-symbols-outlined p-2 border-2 border-black hard-shadow bg-primary-container hover:bg-primary transition-all cursor-pointer">
                            close
                        </button>
                    </div>
                    <div className="space-y-12 sm:space-y-24">
                        {/* Project Section: Atmospheric Earth */}
                        <section className="border-b-2 border-black/10 pb-10 sm:pb-20">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-8 sm:mb-12">
                                <div className="max-w-3xl">
                                    <h2 className="font-headline text-lg sm:text-2xl md:text-3xl font-black uppercase mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                                        <span className="w-5 sm:w-8 h-1 bg-primary"></span> ATMOSPHERIC_EARTH_SERIES
                                    </h2>
                                    <p className="font-body text-sm sm:text-xl text-on-surface-variant font-medium leading-relaxed">
                                        A collection of high-resolution atmospheric renders exploring lighting, cloud density, and orbital perspectives. Created using procedural textures and volumetric shaders in Blender Cycles.
                                    </p>
                                </div>
                                <a href="https://raw.githubusercontent.com/shantoshdurai/3D-Blender-Archive/master/Earth/Earth.blend" download className="bg-primary-container flex items-center justify-center gap-2 text-on-primary-container font-headline font-bold uppercase px-4 sm:px-8 py-3 sm:py-4 border-2 sm:border-4 border-black hard-shadow hover:-translate-y-1 transition-all w-full md:w-max cursor-pointer text-decoration-none z-50 text-sm sm:text-base">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>download</span> SOURCE (.BLEND)
                                </a>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div key={num} className={`border-2 sm:border-4 border-black hard-shadow overflow-hidden bg-surface group relative ${num === 5 ? 'col-span-2 lg:col-span-2' : ''}`}>
                                        <img 
                                            src={`https://raw.githubusercontent.com/shantoshdurai/3D-Blender-Archive/master/Earth/earth${num}.png`} 
                                            alt={`Earth Render ${num}`} 
                                            className="w-full h-40 sm:h-80 object-cover transition-all duration-500" 
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-black text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="font-headline font-black text-[10px] uppercase">EARTH_RENDER_0{num}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Future Project Slot Placeholder (Hidden until content added) */}
                        <div className="border-2 sm:border-4 border-dashed border-black/20 p-8 sm:p-20 flex flex-col items-center justify-center text-center">
                            <span className="material-symbols-outlined text-4xl sm:text-6xl text-black/20 mb-4 italic">more_horiz</span>
                            <p className="font-headline font-black text-black/20 uppercase tracking-widest text-xs sm:text-base">More experiments coming soon</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer Section */}
            <footer className="mt-16 sm:mt-32 pt-10 sm:pt-20 border-t-2 sm:border-t-4 border-black relative z-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-end">
                    <div>
                        <h2 className="font-headline font-black text-2xl sm:text-4xl uppercase mb-4 sm:mb-6">CURIOUS?</h2>
                        <p className="font-body text-sm sm:text-lg text-on-surface-variant mb-6 sm:mb-8 max-w-md">
                            All experiments are documented and available for collaboration. If you see something that sparks an idea, let's build.
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            <button onClick={handleHireMe} className="material-symbols-outlined p-3 sm:p-4 border-2 border-black hard-shadow bg-surface hover:bg-secondary-container transition-all cursor-pointer">share</button>
                            <button onClick={handleHireMe} className="material-symbols-outlined p-3 sm:p-4 border-2 border-black hard-shadow bg-surface hover:bg-tertiary-container transition-all cursor-pointer">alternate_email</button>
                        </div>
                    </div>
                    <div className="md:text-right flex flex-col items-start md:items-end justify-end">
                        <button onClick={() => window.open('https://github.com/shantoshdurai', '_blank')} className="flex items-center gap-2 border-2 border-black px-4 py-2 font-headline font-bold text-xs sm:text-sm uppercase bg-surface active-press hard-shadow cursor-pointer mb-3 sm:mb-4">
                            <span className="material-symbols-outlined">code</span> GITHUB
                        </button>
                        <button onClick={() => window.open('https://linkedin.com/in/shantoshdurai', '_blank')} className="flex items-center gap-2 border-2 border-black px-4 py-2 font-headline font-bold text-xs sm:text-sm uppercase bg-tertiary-container active-press hard-shadow cursor-pointer">
                            <span className="material-symbols-outlined">work</span> LINKEDIN
                        </button>
                    </div>
                </div>
            </footer>
        </div>
      </main>

      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-[#f6f6f6]/95 backdrop-blur-md border-t-2 border-black px-4 sm:px-6 h-16 sm:h-20 flex justify-around items-center">
        <button onClick={() => setActiveSection('WORK')} className={`flex flex-col items-center justify-center p-2 cursor-pointer bg-transparent border-0 ${activeSection === 'WORK' ? 'text-[#6d5a00]' : 'text-[#aba2a2] hover:text-[#0c0f0f]'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: activeSection === 'WORK' ? "'FILL' 1" : "" }}>person</span>
            <span className="text-[10px] font-headline font-black mt-1">WORK</span>
        </button>
        <button onClick={() => setActiveSection('ARCHIVE')} className={`flex flex-col items-center justify-center p-2 cursor-pointer bg-transparent border-0 ${activeSection === 'ARCHIVE' ? 'text-[#6d5a00]' : 'text-[#aba2a2] hover:text-[#0c0f0f]'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: activeSection === 'ARCHIVE' ? "'FILL' 1" : "" }}>folder_special</span>
            <span className="text-[10px] font-headline font-black mt-1">ARCHIVE</span>
        </button>
        <button onClick={() => setActiveSection('LABS')} className={`flex flex-col items-center justify-center p-2 cursor-pointer bg-transparent border-0 ${activeSection === 'LABS' ? 'text-[#6d5a00]' : 'text-[#aba2a2] hover:text-[#0c0f0f]'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: activeSection === 'LABS' ? "'FILL' 1" : "" }}>science</span>
            <span className="text-[10px] font-headline font-black mt-1">LABS</span>
        </button>
        <button onClick={() => setActiveSection('CONTACT')} className={`flex flex-col items-center justify-center p-2 cursor-pointer bg-transparent border-0 ${activeSection === 'CONTACT' ? 'text-[#6d5a00]' : 'text-[#aba2a2] hover:text-[#0c0f0f]'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: activeSection === 'CONTACT' ? "'FILL' 1" : "" }}>mail</span>
            <span className="text-[10px] font-headline font-black mt-1">CONTACT</span>
        </button>
      </nav>
    </ClickSpark>
  );
}

export default App;
