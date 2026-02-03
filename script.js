// ===== Language Data =====
const organizingCommittee = {
    uz: [
        { name: 'Sh.A.Ayupov', role: 'akademik, O\'zR FA prezidenti, rais' },
        { name: 'I.U.Madjidov', role: 'professor, O\'zMU rektori, hamrais' },
        { name: 'U.A.Rozikov', role: 'akademik, O\'zR FA MI direktor o\'rinbosari, rais o\'rinbosari' },
        { name: 'Y.S.Ergashov', role: 'O\'zMU prorektori, rais o\'rinbosari' },
        { name: 'M.Homidov', role: 'PhD, O\'zR FA MI, mas\'ul kotib' },
        { name: 'A.Hadjiev', role: 'akademik, BTI, Fan va ta\'lim vazirligi, Ozarbayjon' },
        { name: 'A.A.Dorogovtsev', role: 'akademik, UMFA MI, Ukraina' },
        { name: 'V.A.Vatutin', role: 'professor, V.A. Steklov nomidagi Matematika instituti, Rossiya' },
        { name: 'E.L.Pressman', role: 'professor, Rossiya Fanlar Akademiyasining Markaziy iqtisod-matematik instituti, Rossiya' },
        { name: 'V.V.Ulyanov', role: 'professor, Moskva Davlat universiteti, Rossiya' },
        { name: 'M.T.Bakoev', role: 'professor, MDXAI filiali prorektori' },
        { name: 'N.N.G\'anixo\'jayev', role: 'professor, O\'zR FA MI' },
        { name: 'M.U.Gafurov', role: 'professor, Mehnat va ijtimoiy munosabatlar akademiyasi' },
        { name: 'Sh.A.Miraxmedov', role: 'professor, O\'zR FA MI' },
        { name: 'O.Sh.Sharipov', role: 'professor, O\'zMU' },
        { name: 'O.S.Zikirov', role: 'professor, O\'zMU matematika fakulteti dekani' },
        { name: 'Y.M.Xusanbayev', role: 'professor, O\'zR FA MI' },
    ],
    en: [
        { name: 'Sh.A.Ayupov', role: 'academician, President of the AS RUz, Chair' },
        { name: 'I.U.Madjidov', role: 'professor, Rector of NUUz, Co-Chair' },
        { name: 'U.A.Rozikov', role: 'academician, Deputy Director of the IM of the AS RUz, Vice-Chair' },
        { name: 'Y.S.Ergashov', role: 'Vice-Rector of NUUz, Vice-Chair' },
        { name: 'M.Khomidov', role: 'PhD, IM of the AS RUz, Executive Secretary' },
        { name: 'A.Hadjiev', role: 'academician, Azerbaijan NAS, Azerbaijan' },
        { name: 'A.A.Dorogovtsev', role: 'academician, Institute of Mathematics of the NAS of Ukraine, Ukraine' },
        { name: 'V.A.Vatutin', role: 'professor, V.A.Steklov Mathematical Institute, Russia' },
        { name: 'E.L.Pressman', role: 'professor, Central Economic Mathematical Institute, Russia' },
        { name: 'V.V.Ulyanov', role: 'professor, Moscow State University, Russia' },
        { name: 'M.T.Bakoev', role: 'professor, Vice-Rector, Tashkent Branch of the Moscow State Institute of International Relations' },
        { name: 'N.N.Ganikhodjaev', role: 'professor, IM of the AS RUz' },
        { name: 'M.U.Gafurov', role: 'professor, Academy of Labor and Social Relations' },
        { name: 'Sh.A.Mirakhmedov', role: 'professor, IM of the AS RUz' },
        { name: 'O.Sh.Sharipov', role: 'professor, NUUz' },
        { name: 'O.S.Zikirov', role: 'professor, Dean of the Faculty of Mathematics, NUUz' },
        { name: 'Y.M.Khusanbaev', role: 'professor, IM of the AS RUz' },
    ],
};

const programCommittee = {
    uz: [
        { name: 'G.M.Raimova', role: 'professor, JIDU, rais, O\'zbekiston' },
        { name: 'S.Aliyev', role: 'professor, AzMFA IMM, Ozarbayjon' },
        { name: 'A.Hasanov', role: 'professor, Monash universiteti, Malayziya' },
        { name: 'M.Ro\'ziboyev', role: 'professor, O\'zMPU, O\'zbekiston' },
        { name: 'F.Abdul Razak', role: 'professor, Putra universiteti, Malayziya' },
        { name: 'Pah Chin Hee', role: 'professor, Xalqaro Islom universiteti, Malayziya' },
        { name: 'Ibrahim Bin Mohamed', role: 'professor, Malaya universiteti, Malayziya' },
        { name: 'E.B.Yarovaya', role: 'professor, Moskva Davlat universiteti, Rossiya' },
        { name: 'A.V.Shklyaev', role: 'professor, Moskva Davlat universiteti, Rossiya' },
        { name: 'A.A.Djalilov', role: 'professor, TTPU, O\'zbekiston' },
        { name: 'A.S.Rasulov', role: 'professor, JIDU, O\'zbekiston' },
        { name: 'Sh.Sharaxmetov', role: 'professor, TDIU, O\'zbekiston' },
        { name: 'V.R.Xojiboyev', role: 'professor, NamMQI, O\'zbekiston' },
    ],
    en: [
        { name: 'G.M.Raimova', role: 'professor, UWED, Chair, Uzbekistan' },
        { name: 'S.Aliyev', role: 'professor, Institute of Mathematics and Mechanics, Azerbaijan NAS, Azerbaijan' },
        { name: 'A.Hasanov', role: 'professor, Monash University, Malaysia' },
        { name: 'M.Ruziboev', role: 'professor, NPUU, Uzbekistan' },
        { name: 'F.Abdul Razak', role: 'professor, UPM, Malaysia' },
        { name: 'Pah Chin Hee', role: 'professor, IIUM, Malaysia' },
        { name: 'Ibrahim Bin Mohamed', role: 'professor, University of Malaya, Malaysia' },
        { name: 'E.B.Yarovaya', role: 'professor, Moscow State University, Russia' },
        { name: 'A.V.Shklyaev', role: 'professor, Moscow State University, Russia' },
        { name: 'A.A.Djalilov', role: 'professor, TPUT, Uzbekistan' },
        { name: 'A.S.Rasulov', role: 'professor, UWED, Uzbekistan' },
        { name: 'Sh.Sharakhmetov', role: 'professor, TSUE, Uzbekistan' },
        { name: 'V.R.Khodjiboev', role: 'professor, Namangan engineering-construction institute, Uzbekistan' },
    ],
};

// ===== State =====
let currentLanguage = 'en';

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const langBtn = document.getElementById('langBtn');
const currentLangSpan = document.getElementById('currentLang');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLanguageSwitch();
    initTabs();
    initCommittees();
    initContactForm();
    initScrollAnimations();
});

// ===== Navigation =====
function initNavigation() {
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ===== Language Switch =====
function initLanguageSwitch() {
    langBtn.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'uz' ? 'en' : 'uz';
        currentLangSpan.textContent = currentLanguage.toUpperCase();
        updateLanguage();
        initCommittees(); // Re-render committees
    });
}

function updateLanguage() {
    document.querySelectorAll('[data-uz][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLanguage}`);
    });
}

// ===== Tabs =====
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// ===== Committees =====
function initCommittees() {
    const organizingContainer = document.getElementById('organizingMembers');
    const programContainer = document.getElementById('programMembers');

    // Organizing Committee
    organizingContainer.innerHTML = organizingCommittee[currentLanguage]
        .map(member => `
            <div class="member-card">
                <p class="member-name">${member.name}</p>
                <p class="member-role">${member.role}</p>
            </div>
        `).join('');

    // Program Committee
    programContainer.innerHTML = programCommittee[currentLanguage]
        .map(member => `
            <div class="member-card">
                <p class="member-name">${member.name}</p>
                <p class="member-role">${member.role}</p>
            </div>
        `).join('');
}

// ===== Contact Form with EmailJS =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    // Initialize EmailJS
    // REPLACE WITH YOUR EMAILJS PUBLIC KEY
    // emailjs.init("YOUR_PUBLIC_KEY");

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // ===== EMAILJS INTEGRATION =====
            // Uncomment and configure after setting up EmailJS account

            // await emailjs.send(
            //     "YOUR_SERVICE_ID",    // Replace with your EmailJS Service ID
            //     "YOUR_TEMPLATE_ID",   // Replace with your EmailJS Template ID
            //     {
            //         from_name: formData.name,
            //         from_email: formData.email,
            //         subject: formData.subject,
            //         message: formData.message,
            //         to_email: "stochasticanalysis.conf2026@gmail.com"
            //     }
            // );

            // For demo purposes - simulate success
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            formStatus.className = 'form-status success';
            formStatus.innerHTML = currentLanguage === 'uz'
                ? 'Xabaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.'
                : 'Your message has been sent! We will contact you soon.';
            formStatus.style.display = 'block';

            // Reset form
            form.reset();

        } catch (error) {
            // Show error message
            formStatus.className = 'form-status error';
            formStatus.innerHTML = currentLanguage === 'uz'
                ? 'Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.'
                : 'An error occurred. Please try again.';
            formStatus.style.display = 'block';
            console.error('EmailJS Error:', error);
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Hide status after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    document.querySelectorAll('.section-card, .feature-card, .fee-card, .member-card, .contact-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== Google Forms Integration Guide =====
/*
GOOGLE FORMS INTEGRATION:

1. Google Form yaratish:
   - Google Forms ga kiring (forms.google.com)
   - "Blank" form tanlang
   - Kerakli maydonlarni qo'shing (Ism, Email, Muassasa, Mavzu, etc.)

2. Formani saytga ulash:
   - Formani oching
   - Yuqori o'ng burchakda "Send" tugmasini bosing
   - "<>" (Embed) belgisini tanlang
   - Width: 100%, Height: 1200 qilib sozlang
   - HTML kodni nusxa oling
   - index.html dagi iframe src atributiga URL ni qo'ying

3. Email xabarnoma sozlash:
   - Google Form da "Responses" tabini oching
   - "Get email notifications for new responses" ni yoqing
   - stochasticanalysis.conf2026@gmail.com manzilini qo'shing

EMAILJS INTEGRATION:

1. EmailJS da ro'yxatdan o'tish:
   - emailjs.com ga kiring
   - Akkount yarating

2. Email Service qo'shish:
   - "Email Services" ga o'ting
   - Gmail, Outlook yoki boshqa xizmatni tanlang
   - Service ID ni nusxa oling

3. Email Template yaratish:
   - "Email Templates" ga o'ting
   - Yangi template yarating
   - {{from_name}}, {{from_email}}, {{subject}}, {{message}} variable larini qo'shing
   - Template ID ni nusxa oling

4. Kodga qo'shish:
   - script.js faylida quyidagi joylarni to'ldiring:
     - emailjs.init("YOUR_PUBLIC_KEY")
     - emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {...})
*/
