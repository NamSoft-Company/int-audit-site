// ========== Scroll To Top Button ==========
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        scrollTopBtn.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
    } else {
        scrollTopBtn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        scrollTopBtn.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
    }
});

// ========== Mobile Menu ==========
const bar = document.getElementById("bar");
const mobileMenu = document.getElementById("mobileMenu");

bar.addEventListener("click", () => {
    if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px") {
        mobileMenu.style.maxHeight = "0px";
        bar.classList.remove("rotate-90");
    } else {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        bar.classList.add("rotate-90");
    }
});

// Close mobile menu on link click
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.style.maxHeight = "0px";
        bar.classList.remove("rotate-90");
    });
});

// ========== Translations ==========
const translations = {
    rus: {
        navOrgName: "Аудиторская организация ООО",
        navAbout: "О нас",
        navServices: "Услуги",
        navContacts: "Контакты",
        heroTitle: "О нас",
        heroText: "Аудиторская организация ООО «INTERNATIONAL AUDIT CONSULTING» осуществляет свою деятельность на основании свидетельство РУз. №1106607 от 03 марта 2022г.",
        servicesTitle: "Услуги",
        service1: "Подготовка организаций к Аудиторской проверке по Международным стандартам аудита (MCA) и Национальным стандартам аудита (НCA)",
        service2: "Ведение бухгалтерского учета 1C (OUTSOURCING)",
        service3: "Помощь в сдаче налоговых, стат. отчётов и в сдаче отчётов местным организациям",
        service4: "Консалтинговые услуги в сфере оформления экспортно-импортных контрактов и таможенных документов",
        service5: "Ежеквартальные, ежемесячные и другие консалтинговые услуги",
        service6: "Трансформация бухгалтерской отчётности согласно МСФО",
        service7: "Восстановление бухгалтерского учёта малых и крупных предприятий",
        service8: "Составление финансового ковенанта и учётной политики организаций",
        formTitle: "Оставить заявку",
        formName: "Имя",
        formPhone: "Телефон",
        formSubmit: "Отправить",
        footerAddress: "Адрес:",
        footerAddressVal1: "Андижанская область, г. Андижан, Истиклол, дом 33",
        footerAddressVal2: "г. Ташкент, улица Алишера Навои, дом 30",
        mapLabel1: "Андижон",
        mapLabel2: "Тошкент",
        footerHours: "Рабочее время:",
        footerHoursVal: "Пн - Пт 9:00 - 18:00\nСуббота и Воскресенье выходной день",
        footerContacts: "Контакты:",
    },
    uzb: {
        navOrgName: "Auditorlik tashkiloti MChJ",
        navAbout: "Biz haqimizda",
        navServices: "Xizmatlar",
        navContacts: "Kontaktlar",
        heroTitle: "Biz haqimizda",
        heroText: "«INTERNATIONAL AUDIT CONSULTING» MChJ auditorlik tashkiloti O'zbekiston Respublikasi guvohnomasi №1106607, 2022 yil 03 mart asosida faoliyat yuritadi.",
        servicesTitle: "Xizmatlar",
        service1: "Tashkilotlarni Xalqaro audit standartlari (XAS) va Milliy audit standartlari (MAS) bo'yicha audit tekshiruviga tayyorlash",
        service2: "1C buxgalteriya hisobini yuritish (AUTSORSING)",
        service3: "Soliq, statistik hisobotlarni topshirishda va mahalliy tashkilotlarga hisobot berishda yordam",
        service4: "Eksport-import shartnomalarini va bojxona hujjatlarini rasmiylashtirish bo'yicha konsalting xizmatlari",
        service5: "Har choraklik, har oylik va boshqa konsalting xizmatlari",
        service6: "Buxgalteriya hisobotini XFHS ga muvofiq transformatsiya qilish",
        service7: "Kichik va yirik korxonalarning buxgalteriya hisobini tiklash",
        service8: "Tashkilotlarning moliyaviy kovenanti va hisob siyosatini tuzish",
        formTitle: "Ariza qoldirish",
        formName: "Ism",
        formPhone: "Telefon",
        formSubmit: "Yuborish",
        footerAddress: "Manzil:",
        footerAddressVal1: "Andijon viloyati, Andijon shahar, Istiqlol, 33-uy",
        footerAddressVal2: "Toshkent shahar, Alisher Navoiy ko'chasi, 30-uy",
        mapLabel1: "Andijon",
        mapLabel2: "Toshkent",
        footerHours: "Ish vaqti:",
        footerHoursVal: "Du - Ju 9:00 - 18:00\nShanba va Yakshanba dam olish kuni",
        footerContacts: "Kontaktlar:",
    },
    eng: {
        navOrgName: "Audit Organization LLC",
        navAbout: "About Us",
        navServices: "Services",
        navContacts: "Contacts",
        heroTitle: "About Us",
        heroText: "The audit organization LLC «INTERNATIONAL AUDIT CONSULTING» operates on the basis of the certificate of the Republic of Uzbekistan No. 1106607 dated March 03, 2022.",
        servicesTitle: "Services",
        service1: "Preparing organizations for Audit inspection according to International Standards on Auditing (ISA) and National Auditing Standards (NAS)",
        service2: "Accounting management in 1C (OUTSOURCING)",
        service3: "Assistance in filing tax and statistical reports and submitting reports to local organizations",
        service4: "Consulting services in the field of processing export-import contracts and customs documents",
        service5: "Quarterly, monthly and other consulting services",
        service6: "Transformation of financial statements in accordance with IFRS",
        service7: "Restoration of accounting records for small and large enterprises",
        service8: "Preparation of financial covenants and accounting policies for organizations",
        formTitle: "Leave a Request",
        formName: "Name",
        formPhone: "Phone",
        formSubmit: "Submit",
        footerAddress: "Address:",
        footerAddressVal1: "Andijan region, Andijan city, Istiqlol, 33",
        footerAddressVal2: "Tashkent city, Alisher Navoiy street, 30",
        mapLabel1: "Andijan",
        mapLabel2: "Tashkent",
        footerHours: "Working hours:",
        footerHoursVal: "Mon - Fri 9:00 - 18:00\nSaturday and Sunday are days off",
        footerContacts: "Contacts:",
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update text content
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) {
            if (t[key].includes("\n")) {
                el.innerHTML = t[key].replace(/\n/g, "<br>");
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });

    // Sync both selects
    document.getElementById("langSelect").value = lang;
    document.getElementById("langSelectMobile").value = lang;

    // Update html lang attribute
    const langMap = { rus: "ru", uzb: "uz", eng: "en" };
    document.documentElement.lang = langMap[lang] || "ru";

    // Save preference
    localStorage.setItem("lang", lang);
}

// Language select events
document.getElementById("langSelect").addEventListener("change", (e) => {
    setLanguage(e.target.value);
});

document.getElementById("langSelectMobile").addEventListener("change", (e) => {
    setLanguage(e.target.value);
});

// Load saved language or default to Russian
const savedLang = localStorage.getItem("lang") || "uzb";
setLanguage(savedLang);
