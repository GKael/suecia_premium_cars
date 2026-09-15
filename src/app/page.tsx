'use client';
import { useEffect } from 'react';
import { Shield, ArrowRight, Star, ChevronLeft, ChevronRight, Award, Cpu, Users, MapPin, Phone, Clock, Instagram, Facebook, MessageCircle, Sparkles, Settings, CheckCircle2, ArrowUpRight, Menu } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
        const headerBar = document.getElementById('header-bar');
        if (headerBar) {
            if (window.scrollY > 50) {
                headerBar.classList.add('bg-[#030303]/80', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
                headerBar.classList.remove('bg-transparent', 'border-transparent');
            } else {
                headerBar.classList.remove('bg-[#030303]/80', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
                headerBar.classList.add('bg-transparent', 'border-transparent');
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      


<header id="header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6">
    <div className="container mx-auto px-6">
        <div id="header-bar" className="flex justify-between items-center bg-transparent border border-transparent rounded-full px-6 py-3 transition-all duration-500">
            <a href="#home" className="flex items-center group">
                <img src="logo.png" alt="SuÃ©cia Premium Cars" className="h-14 w-auto transition-transform group-hover:scale-105" />
            </a>

            
            <nav className="hidden md:flex items-center gap-8">
                <a href="#servicos" className="text-sm font-medium text-muted hover:text-light transition-colors">ServiÃ§os</a>
                <a href="#sobre" className="text-sm font-medium text-muted hover:text-light transition-colors">Sobre</a>
                <a href="#portfolio" className="text-sm font-medium text-muted hover:text-light transition-colors">PortfÃ³lio</a>
                <a href="#avaliacoes" className="text-sm font-medium text-muted hover:text-light transition-colors">AvaliaÃ§Ãµes</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
                <a href="#contato" className="text-sm font-medium text-muted hover:text-light transition-colors">Contato</a>
                <a href="https://wa.me/5581995193349" target="_blank" className="bg-primary hover:bg-accent text-dark font-semibold py-2.5 px-6 rounded-full transition-all text-sm flex items-center gap-2">
                    Agendar <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>

            
            <button id="mobile-menu-btn" className="md:hidden text-light">
                <Menu className="w-6 h-6" />
            </button>
        </div>
    </div>

    
    <div id="mobile-menu" className="hidden md:hidden absolute top-full left-6 right-6 mt-2 bg-secondary/95 backdrop-blur-2xl border border-white/5 rounded-2xl py-6 flex-col items-center gap-6 shadow-2xl">
        <a href="#servicos" className="mobile-link text-base font-medium text-light hover:text-primary">ServiÃ§os</a>
        <a href="#sobre" className="mobile-link text-base font-medium text-light hover:text-primary">Sobre</a>
        <a href="#portfolio" className="mobile-link text-base font-medium text-light hover:text-primary">PortfÃ³lio</a>
        <a href="#avaliacoes" className="mobile-link text-base font-medium text-light hover:text-primary">AvaliaÃ§Ãµes</a>
        <a href="#contato" className="mobile-link text-base font-medium text-light hover:text-primary">Contato</a>
        <a href="https://wa.me/5581995193349" className="mt-2 bg-primary text-dark font-semibold py-3 px-8 rounded-full text-center w-3/4">Agendar Agora</a>
    </div>
</header>


<section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
    <div className="absolute inset-0 z-0">
        
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 mb-8 bg-secondary border border-white/10 px-4 py-2 rounded-full animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-medium text-muted uppercase tracking-wider">Especializada em Volvo â€¢ Multimarcas</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight mb-8 animate-fade-in-up delay-100">
                    Engenharia de<br/>
                    <span className="text-gradient">Luxo</span> <span className="gold-gradient italic">Redefinida</span>.
                </h1>
                
                <p className="text-lg md:text-xl text-muted mb-12 max-w-lg leading-relaxed font-light animate-fade-in-up delay-200">
                    Oficina Especializada em Volvo e atendimento premium Multimarcas. Elevamos o padrÃ£o do cuidado automotivo com precisÃ£o clÃ­nica.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300">
                    <a href="https://wa.me/5581995193349" className="group flex items-center justify-between gap-4 bg-light hover:bg-primary text-dark font-semibold py-4 px-8 rounded-full transition-all duration-300">
                        Agende uma avaliaÃ§Ã£o
                        <div className="w-8 h-8 rounded-full bg-dark/10 flex items-center justify-center group-hover:bg-dark/20 transition-colors">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </a>
                </div>
                
                <div className="mt-16 flex items-center gap-6 animate-fade-in-up delay-300">
                    <div className="flex -space-x-3">
                        <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-dark" />
                        <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-dark" />
                        <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-dark" />
                        <div className="w-10 h-10 rounded-full border-2 border-dark bg-secondary flex items-center justify-center text-xs font-bold text-primary">+10</div>
                    </div>
                    <div>
                        <div className="flex items-center gap-1 text-primary mb-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-bold text-sm text-light ml-1">5.0</span>
                        </div>
                        <p className="text-xs text-muted">AvaliaÃ§Ãµes no Google</p>
                    </div>
                </div>
            </div>

            
            <div className="w-full lg:w-1/2 relative animate-fade-in-up delay-300">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('hero-car.jpg')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>
                    
                    
                    <div className="absolute bottom-6 left-6 bg-secondary/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium">Qualidade Garantida</span>
                    </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/30 rounded-full opacity-50 z-[-1]"></div>
            </div>
        </div>
    </div>
</section>


<section id="servicos" className="py-24 relative z-10 border-t border-white/5 bg-[#050505]">
    <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 scroll-reveal">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Nossa ColeÃ§Ã£o<br/>de <span className="gold-gradient">ServiÃ§os</span></h2>
                <p className="text-muted text-lg max-w-md font-light">PadrÃ£o de excelÃªncia para veÃ­culos extraordinÃ¡rios.</p>
            </div>
            
            <div className="flex gap-3">
                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal">
            
            
            <div className="group bg-secondary border border-white/5 rounded-[24px] p-6 hover:border-white/15 transition-all duration-500 relative flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 bg-dark rounded-full px-3 py-1 border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-muted">Premium</span>
                    </div>
                    <div className="bg-dark rounded-full px-3 py-1 border border-white/5">
                        <span className="text-[10px] font-medium uppercase tracking-widest text-muted">EstÃ©tica</span>
                    </div>
                </div>
                
                <div className="w-full aspect-[4/3] rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden">
                    <img src="polimento.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Polimento e VitrificaÃ§Ã£o" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
                </div>
                
                <div className="mt-auto">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs text-muted mb-2">A partir de</p>
                            <h3 className="text-xl font-bold text-light mb-1">Polimento & VitrificaÃ§Ã£o</h3>
                            <p className="text-primary font-medium">R$ 1.200</p>
                        </div>
                        <a href="https://wa.me/5581995193349" className="w-10 h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center text-light group-hover:bg-primary group-hover:text-dark transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            
            <div className="group bg-secondary border border-white/5 rounded-[24px] p-6 hover:border-white/15 transition-all duration-500 relative flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 bg-dark rounded-full px-3 py-1 border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-muted">AvanÃ§ado</span>
                    </div>
                    <div className="bg-dark rounded-full px-3 py-1 border border-white/5">
                        <span className="text-[10px] font-medium uppercase tracking-widest text-muted">ProteÃ§Ã£o</span>
                    </div>
                </div>
                
                <div className="w-full aspect-[4/3] rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden">
                    <img src="ppf.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="PPF Frontal e Total" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
                </div>
                
                <div className="mt-auto">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs text-muted mb-2">A partir de</p>
                            <h3 className="text-xl font-bold text-light mb-1">PPF Frontal & Total</h3>
                            <p className="text-primary font-medium">R$ 2.500</p>
                        </div>
                        <a href="https://wa.me/5581995193349" className="w-10 h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center text-light group-hover:bg-primary group-hover:text-dark transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            
            <div className="group bg-secondary border border-white/5 rounded-[24px] p-6 hover:border-white/15 transition-all duration-500 relative flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 bg-dark rounded-full px-3 py-1 border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-muted">Especializada</span>
                    </div>
                    <div className="bg-dark rounded-full px-3 py-1 border border-white/5">
                        <span className="text-[10px] font-medium uppercase tracking-widest text-muted">MecÃ¢nica</span>
                    </div>
                </div>
                
                <div className="w-full aspect-[4/3] rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden">
                    <img src="revisao.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="RevisÃ£o Premium" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
                </div>
                
                <div className="mt-auto">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs text-muted mb-2">Sob avaliaÃ§Ã£o</p>
                            <h3 className="text-xl font-bold text-light mb-1">RevisÃ£o Premium</h3>
                            <p className="text-primary font-medium">Sob Consulta</p>
                        </div>
                        <a href="https://wa.me/5581995193349" className="w-10 h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center text-light group-hover:bg-primary group-hover:text-dark transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>


<section id="sobre" className="py-24 border-t border-white/5 relative overflow-hidden">
    
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none z-0"></div>
    
    <div className="container mx-auto px-6 relative z-10 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
                <div className="aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 relative">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop')" }}></div>
                    <div className="absolute inset-0 bg-dark/20"></div>
                </div>
                
                
                <div className="absolute -bottom-8 -right-8 bg-secondary/90 backdrop-blur-xl border border-white/10 p-6 rounded-[1.5rem] shadow-2xl hidden md:block max-w-xs">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center border border-white/5">
                            <Award className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-light">CertificaÃ§Ã£o</h4>
                            <p className="text-xs text-muted uppercase">PadrÃ£o Ouro</p>
                        </div>
                    </div>
                    <p className="text-sm text-muted">Utilizamos apenas produtos e peÃ§as homologadas pelas principais montadoras premium.</p>
                </div>
            </div>

            <div>
                <div className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">A ReferÃªncia em<br/><span className="text-gradient">FlorianÃ³polis</span>.</h2>
                    <p className="text-muted text-lg font-light leading-relaxed">
                        Nascemos da paixÃ£o por automÃ³veis extraordinÃ¡rios. Nossa estrutura em Jardim AtlÃ¢ntico foi projetada para oferecer um nÃ­vel de cuidado que seu veÃ­culo merece.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4 p-4 rounded-2xl bg-secondary/50 border border-white/5 hover:bg-secondary transition-colors">
                        <div className="w-12 h-12 rounded-full bg-dark flex-shrink-0 flex items-center justify-center border border-white/5">
                            <Cpu className="text-primary w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-light mb-1">Tecnologia de Ponta</h4>
                            <p className="text-sm text-muted">DiagnÃ³sticos computadorizados com os mesmos scanners utilizados em concessionÃ¡rias.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-2xl bg-secondary/50 border border-white/5 hover:bg-secondary transition-colors">
                        <div className="w-12 h-12 rounded-full bg-dark flex-shrink-0 flex items-center justify-center border border-white/5">
                            <Users className="text-primary w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-light mb-1">Equipe Especializada</h4>
                            <p className="text-sm text-muted">Profissionais com anos de experiÃªncia em veÃ­culos europeus e esportivos.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<section id="portfolio" className="py-24 border-t border-white/5 bg-[#020202]">
    <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Galeria de <span className="gold-gradient">Obras</span></h2>
            <p className="text-muted font-light">Alguns dos Ãºltimos trabalhos realizados em nosso centro estÃ©tico.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 scroll-reveal">
            <div className="group relative aspect-video rounded-[1.5rem] overflow-hidden border border-white/5 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('volvo-ex30.jpg')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                    <p className="text-xs text-primary uppercase tracking-widest font-medium mb-1">Volvo EX30</p>
                    <h4 className="text-xl font-bold text-light">VitrificaÃ§Ã£o Completa</h4>
                </div>
            </div>
            
            <div className="group relative aspect-video rounded-[1.5rem] overflow-hidden border border-white/5 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('volvo-xc60.jpg')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                    <p className="text-xs text-primary uppercase tracking-widest font-medium mb-1">Volvo XC60</p>
                    <h4 className="text-xl font-bold text-light">PPF e Detalhamento</h4>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="contato" className="py-24 border-t border-white/5 bg-[#030303]">
    <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Nossa <span className="gold-gradient">LocalizaÃ§Ã£o</span></h2>
            <p className="text-muted font-light max-w-lg mx-auto">Visite nosso centro de estÃ©tica premium no coraÃ§Ã£o de FlorianÃ³polis.</p>
        </div>

        <div className="bg-secondary border border-white/5 rounded-[2rem] overflow-hidden p-2 shadow-2xl relative scroll-reveal">
            <div className="absolute inset-0 rounded-[2rem] border border-primary/20 pointer-events-none z-10 m-2"></div>
            <div className="aspect-video md:aspect-[21/9] w-full rounded-[1.5rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.002816962228!2d-48.583091924536785!3d-27.593450976248386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527376c987a9b01%3A0xc0f1a9b2b2b8c5c!2sR.%20Nossa%20Sra.%20do%20Ros%C3%A1rio%2C%20730%20-%20Jardim%20Atl%C3%A2ntico%2C%20Florian%C3%B3polis%20-%20SC%2C%2088095-250!5e0!3m2!1spt-BR!2sbr!4v1716301234567!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy">
                </iframe>
                
                
                <div className="hidden md:flex absolute bottom-8 left-8 bg-[#030303]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex-col gap-4 shadow-2xl max-w-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                            <MapPin className="text-primary w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-light">SuÃ©cia Premium Cars</h4>
                            <p className="text-xs text-muted">Jardim AtlÃ¢ntico, FlorianÃ³polis</p>
                        </div>
                    </div>
                    <a href="https://wa.me/5581995193349" target="_blank" className="w-full py-2.5 bg-light text-dark font-bold text-sm rounded-full text-center hover:bg-primary transition-colors">
                        TraÃ§ar Rota
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


<footer className="bg-dark border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
    
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-24 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

    <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            <div className="md:col-span-5">
                <a href="#home" className="flex items-center mb-6">
                    <img src="logo.png" alt="SuÃ©cia Premium Cars" className="h-16 w-auto" />
                </a>
                <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
                    Oficina Especializada em Volvo e atendimento Multimarcas. A referÃªncia absoluta em cuidados automotivos premium na regiÃ£o de FlorianÃ³polis.
                </p>
                <div className="flex gap-3 mb-8">
                    <a href="https://wa.me/5581995193349" className="px-5 py-2 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-dark transition-colors">Agendar RevisÃ£o</a>
                    <a href="#servicos" className="px-5 py-2 rounded-full border border-white/10 text-light text-sm font-medium hover:bg-white/10 transition-colors">Ver ServiÃ§os</a>
                </div>
            </div>

            <div className="md:col-span-3 md:col-start-7">
                <h4 className="font-semibold text-light mb-6 tracking-wide">Menu</h4>
                <ul className="space-y-4">
                    <li><a href="#home" className="text-sm text-muted hover:text-light transition-colors">InÃ­cio</a></li>
                    <li><a href="#servicos" className="text-sm text-muted hover:text-light transition-colors">ServiÃ§os</a></li>
                    <li><a href="#portfolio" className="text-sm text-muted hover:text-light transition-colors">PortfÃ³lio</a></li>
                    <li><a href="#sobre" className="text-sm text-muted hover:text-light transition-colors">Nossa Estrutura</a></li>
                </ul>
            </div>

            <div className="md:col-span-3">
                <h4 className="font-semibold text-light mb-6 tracking-wide">Contato</h4>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-muted mt-0.5" />
                        <span className="text-sm text-muted">Jardim AtlÃ¢ntico<br/>FlorianÃ³polis, SC</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted" />
                        <a href="https://wa.me/5581995193349" className="text-sm text-muted hover:text-light transition-colors">+55 81 99519-3349</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-muted" />
                        <span className="text-sm text-muted">Seg-Sex: 08h Ã s 18h</span>
                    </li>
                </ul>
            </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-xs">&copy; 2026 SuÃ©cia Premium Cars. Todos os direitos reservados.</p>
            <p className="text-muted text-xs">Desenvolvido com excelÃªncia.</p>
        </div>
    </div>
</footer>


<a href="https://wa.me/5581995193349" target="_blank" className="fixed bottom-6 right-6 z-50 bg-primary text-dark p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-110 transition-transform flex items-center justify-center border border-primary/50">
    <MessageCircle className="w-6 h-6" />
</a>



    </>
  );
}



