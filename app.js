// The Peptide App: Tracker MVP Logic

// 1. Peptide Database
const PEPTIDE_DB = [
    {
        id: "bpc157",
        name: "BPC-157",
        goals: ["recovery", "joint-pain"],
        dosage: 250,
        frequency: "daily",
        vialSize: 5,
        bacWater: 2,
        description: "Body Protection Compound-157 is a pentadecapeptide composed of 15 amino acids. It is derived from a protective protein found in human gastric juice. BPC-157 is widely researched for its potential to accelerate tissue healing, including tendons, muscles, ligaments, and gut tissue, by promoting blood vessel growth (angiogenesis).",
        cycle: "4-8 Weeks",
        instructions: "Typically administered once or twice daily. Common dosing is 250 mcg to 500 mcg per day. Best run in cycles with a 2-4 week break between cycles.",
        stacks: "Highly synergistic when stacked with TB-500 for recovery from ligament, tendon, or muscle tears.",
        sources: "Journal of Applied Physiology (Clinical healing models); Journal of Orthopaedic Research (Tendon growth studies).",
        safety: "Generally well tolerated in clinical trials. Side effects can include mild headache, nausea, or injection site irritation. Not recommended for long-term continuous use."
    },
    {
        id: "tb500",
        name: "TB-500 (Thymosin Beta-4)",
        goals: ["recovery", "joint-pain"],
        dosage: 2500,
        frequency: "5-on-2-off",
        vialSize: 10,
        bacWater: 2.5,
        description: "TB-500 is a synthetic version of the naturally occurring peptide Thymosin Beta-4, found in high concentrations in blood platelets and wound fluid. It plays a vital role in cell migration, tissue repair, and reducing inflammation. It is researched for cellular regeneration, flexibility, muscle tone, and joint mobility.",
        cycle: "4-6 Weeks",
        instructions: "Commonly dosed at 2.5 mg to 5 mg twice a week, or once daily on a 5-days-on, 2-days-off cycle. Run for 4 to 6 weeks, followed by a maintenance phase of 2-5 mg every other week.",
        stacks: "BPC-157 for comprehensive tendon/joint healing, or CJC-1295 for general systemic recovery.",
        sources: "Current Pharmaceutical Design (Tissue regeneration review); Annals of the New York Academy of Sciences.",
        safety: "Mild fatigue, temporary lightheadedness post-injection. Stop use if redness or swelling at injection site persists."
    },
    {
        id: "semaglutide",
        name: "Semaglutide",
        goals: ["fat-loss"],
        dosage: 250,
        frequency: "weekly",
        vialSize: 5,
        bacWater: 2,
        description: "Semaglutide is a GLP-1 (glucagon-like peptide-1) receptor agonist. It mimics the GLP-1 hormone released in the gut after eating, which slows stomach emptying, signals the brain to feel full, and improves insulin sensitivity. It is widely used for fat loss, metabolic health, and controlling cravings.",
        cycle: "12-24 Weeks",
        instructions: "Administered once weekly. Standard protocol starts at 250 mcg (0.25 mg) per week for 4 weeks, titrating up slowly (e.g., to 500 mcg, then 1000 mcg) to manage side effects.",
        stacks: "L-Carnitine for fat burning efficiency, or CJC-1295/Ipamorelin to prevent muscle loss during caloric deficit.",
        sources: "New England Journal of Medicine (STEP clinical trials); The Lancet.",
        safety: "Nausea, vomiting, diarrhea, constipation, acid reflux. Essential to start at a low dose and escalate slowly. Monitor pancreas health and hydrate."
    },
    {
        id: "tirzepatide",
        name: "Tirzepatide",
        goals: ["fat-loss"],
        dosage: 2500,
        frequency: "weekly",
        vialSize: 10,
        bacWater: 2,
        description: "Tirzepatide is a novel dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor co-agonist. By targeting both receptors, it acts synergistically to suppress appetite, enhance metabolic efficiency, and regulate blood glucose levels. It is one of the most potent fat-loss research compounds.",
        cycle: "12-24 Weeks",
        instructions: "Administered once weekly. Typically starts at 2.5 mg (2500 mcg) per week for 4 weeks, titrating up in 2.5 mg increments every 4 weeks based on efficacy and tolerance.",
        stacks: "BPC-157 for gut support, or Growth Hormone Secretagogues to maintain lean body mass.",
        sources: "JAMA (SURPASS trials); New England Journal of Medicine.",
        safety: "Gastrointestinal side effects similar to GLP-1 agonists, but often slightly milder relative to dose potency. Risk of hypoglycemia if combined with other diabetic agents."
    },
    {
        id: "ipamorelin",
        name: "Ipamorelin",
        goals: ["muscle-gain", "sleep", "longevity"],
        dosage: 150,
        frequency: "daily",
        vialSize: 5,
        bacWater: 2,
        description: "Ipamorelin is a growth hormone secretagogue (GHS) that selectively stimulates natural Growth Hormone (GH) pulses from the pituitary gland. Unlike older secretagogues, it does not elevate cortisol, prolactin, or appetite (ghrelin), making it a highly clean option for anti-aging, body composition, sleep quality, and tissue repair.",
        cycle: "8-16 Weeks",
        instructions: "Administered once or twice daily, typically 100-200 mcg per injection. Best administered at bedtime on an empty stomach (at least 2 hours after eating) to optimize physiological pulses.",
        stacks: "CJC-1295 (No DAC) to trigger a synergistic growth hormone release.",
        sources: "Journal of Endocrinology (GH release selectivity); Growth Hormone & IGF Research.",
        safety: "Slight flushing, mild water retention, or tingling in fingers. Ensure fasting window is respected to avoid blood sugar interference."
    },
    {
        id: "cjc1295",
        name: "CJC-1295 (No DAC)",
        goals: ["muscle-gain", "longevity", "recovery"],
        dosage: 100,
        frequency: "daily",
        vialSize: 5,
        bacWater: 2,
        description: "CJC-1295 (also known as MOD GRF 1-29) is a synthetic analog of Growth Hormone Releasing Hormone (GHRH). It stimulates natural pulses of GH. When combined with a GHRP like Ipamorelin, it amplifies growth hormone production. It is used for muscle recovery, collagen synthesis, and fat reduction.",
        cycle: "8-16 Weeks",
        instructions: "Commonly dosed at 100 mcg per injection, administered 1-3 times daily, paired with Ipamorelin. Administer on an empty stomach.",
        stacks: "Ipamorelin or GHRP-2 for maximum growth hormone synergy.",
        sources: "Endocrinology; Journal of Clinical Endocrinology and Metabolism.",
        safety: "Mild injection site redness, head rush/flushing immediately post-injection (lasting 5-10 minutes due to rapid nitric oxide release)."
    },
    {
        id: "melanotan2",
        name: "Melanotan II",
        goals: ["skin", "libido"],
        dosage: 250,
        frequency: "daily",
        vialSize: 10,
        bacWater: 3,
        description: "Melanotan II is a synthetic analog of the peptide hormone alpha-melanocyte-stimulating hormone (a-MSH). It stimulates melanogenesis (melanin production in skin cells) causing skin darkening. It is also researched for its strong aphrodisiac qualities and libido enhancement.",
        cycle: "2-4 Weeks",
        instructions: "Dosed daily at 100-250 mcg for a loading phase (1-2 weeks), then 2-3 times per week for maintenance. Requires moderate UV/sun exposure to develop even pigmentation.",
        stacks: "PT-141 (Bremelanotide) for advanced libido protocols.",
        sources: "European Journal of Pharmacology (Melanocortin receptors); Journal of Investigative Dermatology.",
        safety: "Nausea, facial flushing, increased libido, spontaneous erections, dark freckles/moles darkening. Start with micro-doses (50-100 mcg) to test tolerance."
    },
    {
        id: "epitalon",
        name: "Epitalon (Epithalon)",
        goals: ["longevity", "sleep"],
        dosage: 5000,
        frequency: "daily",
        vialSize: 10,
        bacWater: 2,
        description: "Epitalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) modeled after Epithalamin, a peptide substance secreted by the pineal gland. Its primary mechanism of action is activating telomerase enzyme activity, which helps rebuild and elongate protective telomeres on chromosomes, combating cellular aging.",
        cycle: "10-20 Days",
        instructions: "Dosed high at 5 mg to 10 mg daily for a short 10-20 day cycle. Typically run only 1-2 times per year.",
        stacks: "Thymalin for simultaneous immune system rejuvenation.",
        sources: "Bulletin of Experimental Biology and Medicine (Telomere research by Prof. Khavinson).",
        safety: "Excellent safety profile. Virtually no reported adverse reactions or toxicity in clinical trials."
    }
];

// 2. Application State Store
let APP_STATE = {
    activeProtocol: null, // { name, dose, frequency, weeks, startDate, loggedDoses: { 'YYYY-MM-DD': 'dosed'|'missed' } }
    metrics: [], // Array of { date: 'YYYY-MM-DD', weight, bodyfat, energy, sleep }
    photos: { baseline: null, followup: null } // Base64 image files
};

// Load state from LocalStorage on init
function loadState() {
    const savedState = localStorage.getItem('peptide_tracker_state');
    if (savedState) {
        try {
            APP_STATE = JSON.parse(savedState);
            if (!APP_STATE.metrics) APP_STATE.metrics = [];
            if (!APP_STATE.photos) APP_STATE.photos = { baseline: null, followup: null };
        } catch (e) {
            console.error("Failed to parse local storage", e);
        }
    }
}

// Save state to LocalStorage
function saveState() {
    localStorage.setItem('peptide_tracker_state', JSON.stringify(APP_STATE));
}

// 3. Tab Routing / Navigation
const navItems = document.querySelectorAll('.bottom-nav-item');
const panels = document.querySelectorAll('.panel-container');

function switchTab(targetId) {
    panels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === targetId) {
            panel.classList.add('active');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-target') === targetId) {
            item.classList.add('active');
        }
    });

    // Special handlers when opening specific tabs
    if (targetId === 'tracker') {
        renderTrackerView();
    } else if (targetId === 'log') {
        renderLogsView();
    } else if (targetId === 'dashboard') {
        renderDashboardQuickview();
    }
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('data-target');
        switchTab(target);
    });
});

// Quick link from dashboard to active tracker
document.getElementById('quickview-tracker-link').addEventListener('click', () => switchTab('tracker'));

// 4. Reconstitution Calculator
const inputVial = document.getElementById('calc-vial-size');
const inputBac = document.getElementById('calc-bac-water');
const inputDose = document.getElementById('calc-target-dose');
const resultUnits = document.getElementById('calc-result-units');
const resultExplanation = document.getElementById('calc-result-explanation');

function calculateReconstitution() {
    const vialSize = parseFloat(inputVial.value);
    const bacWater = parseFloat(inputBac.value);
    const targetDose = parseFloat(inputDose.value);

    if (isNaN(vialSize) || isNaN(bacWater) || isNaN(targetDose) || vialSize <= 0 || bacWater <= 0 || targetDose <= 0) {
        resultUnits.innerText = "0.0";
        resultExplanation.innerText = "Please enter valid quantities.";
        updateSyringeVisual(0);
        return;
    }

    // Units = (TargetDose / (VialSize * 1000)) * BACWater * 100
    // e.g. (250mcg / 5000mcg) * 2mL * 100 = 0.05 * 2 * 100 = 10 units
    const doseMg = targetDose / 1000;
    const unitsRaw = (doseMg / vialSize) * bacWater * 100;
    const units = parseFloat(unitsRaw.toFixed(1));

    resultUnits.innerText = units;
    resultExplanation.innerText = `Drawing to the ${units} unit mark yields a ${targetDose} mcg dose.`;
    
    // Scale on a 50-unit insulin syringe visual
    updateSyringeVisual(units);
}

function updateSyringeVisual(units) {
    const fluid = document.getElementById('visual-syringe-fluid');
    const plunger = document.getElementById('visual-syringe-plunger');
    
    // Our syringe visual caps at 50 units (0.5 mL)
    // Scale units to percentage (0 - 50 units -> 0 - 100%)
    let percentage = (units / 50) * 100;
    if (percentage > 100) percentage = 100;
    if (percentage < 0) percentage = 0;

    fluid.style.width = `${percentage}%`;
    plunger.style.left = `${percentage}%`;
    plunger.style.width = `calc(100% - ${percentage}% + 40px)`;
}

// Event Listeners for Calculator
inputVial.addEventListener('input', calculateReconstitution);
inputBac.addEventListener('input', calculateReconstitution);
inputDose.addEventListener('input', calculateReconstitution);

// Guide checklist reset
document.getElementById('reset-checklist-btn').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('#injection-guide-checklist input');
    checkboxes.forEach(cb => cb.checked = false);
});

// 5. Dashboard Goal Selector & Suggested Compounds
const goalBtns = document.querySelectorAll('.goal-btn');
const suggestedSection = document.getElementById('suggested-compounds-section');
const suggestedList = document.getElementById('suggested-compounds-list');
const selectedGoalTitle = document.getElementById('selected-goal-title');

goalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const goal = btn.getAttribute('data-goal');
        const goalName = btn.querySelector('span:last-child').innerText;
        
        goalBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter database
        const filteredPeptides = PEPTIDE_DB.filter(p => p.goals.includes(goal));
        
        selectedGoalTitle.innerText = `Suggested for ${goalName}`;
        suggestedList.innerHTML = '';

        filteredPeptides.forEach(pep => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.style.cursor = 'pointer';
            card.innerHTML = `
                <div class="flex-row justify-between">
                    <div>
                        <h4 style="font-size: 16px; font-weight: 700; color: #fff;">${pep.name}</h4>
                        <p class="text-xs" style="margin-top: 2px; opacity: 0.8;">Standard Dose: ${pep.dosage} mcg (${pep.frequency})</p>
                    </div>
                    <span class="tag" style="background: rgba(16,185,129,0.15); color: var(--color-secondary); border-color: rgba(16,185,129,0.25);">Learn More</span>
                </div>
                <p class="text-xs" style="margin-top: 10px; line-height: 1.4; color: var(--color-text-secondary); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${pep.description}</p>
            `;
            card.addEventListener('click', () => openPeptideModal(pep));
            suggestedList.appendChild(card);
        });

        suggestedSection.style.display = 'block';
        
        // Scroll slightly to suggest section
        suggestedSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

// 6. Peptide Library Page
const librarySearch = document.getElementById('library-search-input');
const libraryList = document.getElementById('peptide-library-list');

function renderLibraryList(filterText = '') {
    libraryList.innerHTML = '';
    const query = filterText.toLowerCase();

    PEPTIDE_DB.forEach(pep => {
        if (pep.name.toLowerCase().includes(query) || pep.description.toLowerCase().includes(query)) {
            const item = document.createElement('div');
            item.className = 'peptide-list-item';
            
            // Map goal targets to readable pills
            let goalTags = pep.goals.map(g => `<span class="tag">${g.replace('-', ' ')}</span>`).join('');
            
            item.innerHTML = `
                <div>
                    <h3>${pep.name}</h3>
                    <p style="margin-bottom: 4px;">Dose: ${pep.dosage}mcg (${pep.frequency})</p>
                    <div class="tags-row">${goalTags}</div>
                </div>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--color-primary)">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
            `;
            item.addEventListener('click', () => openPeptideModal(pep));
            libraryList.appendChild(item);
        }
    });

    if (libraryList.innerHTML === '') {
        libraryList.innerHTML = `<p class="text-center" style="color: var(--color-text-muted); padding: 20px 0;">No matching compounds found.</p>`;
    }
}

librarySearch.addEventListener('input', (e) => {
    renderLibraryList(e.target.value);
});

// 7. Modal Details Drawer
const modalOverlay = document.getElementById('peptide-modal');
const modalClose = document.getElementById('modal-close-btn');
const modalTitle = document.getElementById('modal-peptide-name');
const modalTabs = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

let currentlySelectedPeptide = null;

function openPeptideModal(peptide) {
    currentlySelectedPeptide = peptide;
    modalTitle.innerText = peptide.name;

    // Load tabs content
    document.getElementById('modal-learn-desc').innerText = peptide.description;
    document.getElementById('modal-learn-goal').innerText = peptide.goals.map(g => g.charAt(0).toUpperCase() + g.slice(1).replace('-', ' ')).join(', ');
    document.getElementById('modal-learn-dosage').innerText = `${peptide.dosage} mcg (${peptide.frequency})`;

    document.getElementById('modal-schedule-cycle').innerText = peptide.cycle;
    document.getElementById('modal-schedule-instructions').innerText = peptide.instructions;
    document.getElementById('modal-schedule-stacks').innerText = peptide.stacks;

    document.getElementById('modal-sources-list').innerText = peptide.sources;
    document.getElementById('modal-safety-warnings').innerText = peptide.safety;

    // Default to first tab (Learn)
    modalTabs.forEach(t => t.classList.remove('active'));
    modalTabs[0].classList.add('active');
    tabPanes.forEach(pane => pane.classList.remove('active'));
    document.getElementById('modal-tab-learn').classList.add('active');

    // Show modal overlay
    modalOverlay.classList.add('active');
}

modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// Tab Clicks inside Modal
modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        modalTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetPane = tab.getAttribute('data-tab');
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
            if (pane.id === targetPane) {
                pane.classList.add('active');
            }
        });
    });
});

// Modal Actions (Start Protocol & Reconstitution Calculator Shortcut)
document.getElementById('modal-calc-btn').addEventListener('click', () => {
    if (!currentlySelectedPeptide) return;
    
    // Fill calculator fields
    inputVial.value = currentlySelectedPeptide.vialSize;
    inputBac.value = currentlySelectedPeptide.bacWater;
    inputDose.value = currentlySelectedPeptide.dosage;
    
    calculateReconstitution();
    modalOverlay.classList.remove('active');
    switchTab('calculator');
});

document.getElementById('modal-start-protocol-btn').addEventListener('click', () => {
    if (!currentlySelectedPeptide) return;

    startActiveProtocol(
        currentlySelectedPeptide.name,
        currentlySelectedPeptide.dosage,
        currentlySelectedPeptide.frequency,
        parseInt(currentlySelectedPeptide.cycle) || 8
    );
    
    modalOverlay.classList.remove('active');
    switchTab('tracker');
});

// 8. Active Protocol Tracker
function startActiveProtocol(name, dose, frequency, weeks) {
    const today = new Date().toISOString().split('T')[0];
    APP_STATE.activeProtocol = {
        name: name,
        dose: dose,
        frequency: frequency,
        weeks: weeks,
        startDate: today,
        loggedDoses: {}
    };
    saveState();
    renderTrackerView();
    renderDashboardQuickview();
}

function stopActiveProtocol() {
    if (confirm("Are you sure you want to stop tracking this protocol? This will erase the current cycle calendar log.")) {
        APP_STATE.activeProtocol = null;
        saveState();
        renderTrackerView();
        renderDashboardQuickview();
    }
}

document.getElementById('tracker-stop-protocol-btn').addEventListener('click', stopActiveProtocol);

// Build custom protocol manually
document.getElementById('create-custom-proto-btn').addEventListener('click', () => {
    const name = document.getElementById('custom-proto-name').value.trim();
    const dose = parseFloat(document.getElementById('custom-proto-dose').value);
    const freq = document.getElementById('custom-proto-freq').value;
    const weeks = parseInt(document.getElementById('custom-proto-weeks').value);

    if (!name) {
        alert("Please enter a custom peptide name.");
        return;
    }
    if (isNaN(dose) || dose <= 0 || isNaN(weeks) || weeks <= 0) {
        alert("Please enter valid dose and weeks variables.");
        return;
    }

    startActiveProtocol(name, dose, freq, weeks);
    switchTab('tracker');
});

// Log a dose on the calendar
function logTodayDose(status = 'dosed') {
    if (!APP_STATE.activeProtocol) return;
    const today = new Date().toISOString().split('T')[0];
    APP_STATE.activeProtocol.loggedDoses[today] = status;
    saveState();
    renderTrackerView();
    renderDashboardQuickview();
}

document.getElementById('tracker-log-dose-btn').addEventListener('click', () => {
    logTodayDose('dosed');
});

function renderTrackerView() {
    const proto = APP_STATE.activeProtocol;
    
    const trackerProtocolName = document.getElementById('tracker-protocol-name');
    const trackerProtocolStatus = document.getElementById('tracker-protocol-status');
    const trackerProtocolPercent = document.getElementById('tracker-protocol-percent');
    const trackerProgressContainer = document.getElementById('tracker-progress-container');
    const trackerProgressFill = document.getElementById('tracker-progress-fill');
    const trackerDosesCount = document.getElementById('tracker-doses-count');
    const calendarBox = document.getElementById('tracker-calendar-box');
    const actionBtns = document.getElementById('tracker-action-buttons');
    const customCreatorCard = document.getElementById('custom-protocol-creator-card');

    if (!proto) {
        // Render empty state
        trackerProtocolName.innerText = "No Active Protocol";
        trackerProtocolStatus.innerText = "Select goals on the dashboard or search compounds in library.";
        trackerProtocolPercent.style.display = 'none';
        trackerProgressContainer.style.display = 'none';
        trackerDosesCount.style.display = 'none';
        calendarBox.style.display = 'none';
        actionBtns.style.display = 'none';
        customCreatorCard.style.display = 'block';
        return;
    }

    // Active state view
    customCreatorCard.style.display = 'none';
    trackerProtocolName.innerText = proto.name;
    trackerProtocolStatus.innerText = `Protocol: ${proto.dose}mcg (${proto.frequency.replace('-', ' ')}) for ${proto.weeks} weeks`;
    
    // Calculate progress
    const startDate = new Date(proto.startDate);
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalDays = proto.weeks * 7;
    
    let progressPercent = Math.round((diffDays / totalDays) * 100);
    if (progressPercent > 100) progressPercent = 100;
    if (progressPercent < 0) progressPercent = 0;

    trackerProtocolPercent.innerText = `${progressPercent}%`;
    trackerProtocolPercent.style.display = 'inline-block';
    trackerProgressContainer.style.display = 'block';
    trackerProgressFill.style.width = `${progressPercent}%`;

    // Counts
    const loggedDates = Object.keys(proto.loggedDoses);
    const dosedCount = loggedDates.filter(d => proto.loggedDoses[d] === 'dosed').length;
    
    // Calculate total scheduled doses depending on frequency
    let multiplier = 1;
    if (proto.frequency === 'twice-daily') multiplier = 2;
    else if (proto.frequency === '5-on-2-off') multiplier = 5/7;
    else if (proto.frequency === 'weekly') multiplier = 1/7;

    const totalScheduledDoses = Math.round(totalDays * multiplier);

    document.getElementById('doses-logged-val').innerText = dosedCount;
    document.getElementById('doses-total-val').innerText = totalScheduledDoses;
    
    trackerDosesCount.style.display = 'flex';
    calendarBox.style.display = 'block';
    actionBtns.style.display = 'block';

    // Render calendar grid (interactive 28 days view, scrollable or pageable)
    renderTrackerCalendarGrid(totalDays);
}

function renderTrackerCalendarGrid(totalDays) {
    const grid = document.getElementById('tracker-calendar-grid');
    grid.innerHTML = '';

    // Render weekday headers
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    days.forEach(d => {
        const h = document.createElement('div');
        h.className = 'calendar-day-header';
        h.innerText = d;
        grid.appendChild(h);
    });

    const proto = APP_STATE.activeProtocol;
    const start = new Date(proto.startDate);
    
    // We will render calendar days starting from the start date weekday
    const startDayOfWeek = start.getDay();
    
    // Empty paddings
    for (let i = 0; i < startDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        grid.appendChild(emptyCell);
    }

    // Render each day of the cycle up to 28 days (to keep it compact), or totalDays
    const daysToShow = Math.min(totalDays, 28); // Show first 4 weeks
    for (let dayIdx = 1; dayIdx <= daysToShow; dayIdx++) {
        const currentDay = new Date(start);
        currentDay.setDate(start.getDate() + (dayIdx - 1));
        const dateStr = currentDay.toISOString().split('T')[0];

        const dayBtn = document.createElement('button');
        dayBtn.className = 'calendar-day-btn active-day';
        dayBtn.innerText = currentDay.getDate();

        // Check if logged
        const status = proto.loggedDoses[dateStr];
        if (status === 'dosed') {
            dayBtn.classList.add('dosed');
        } else if (status === 'missed') {
            dayBtn.classList.add('missed');
        }

        // Toggle state on click
        dayBtn.addEventListener('click', () => {
            const currentStatus = proto.loggedDoses[dateStr];
            if (!currentStatus) {
                proto.loggedDoses[dateStr] = 'dosed';
            } else if (currentStatus === 'dosed') {
                proto.loggedDoses[dateStr] = 'missed';
            } else {
                delete proto.loggedDoses[dateStr];
            }
            saveState();
            renderTrackerView();
            renderDashboardQuickview();
        });

        grid.appendChild(dayBtn);
    }
}

// Render small widget on dashboard
function renderDashboardQuickview() {
    const quickview = document.getElementById('active-protocol-quickview-content');
    const proto = APP_STATE.activeProtocol;

    if (!proto) {
        quickview.innerHTML = `<p class="text-center" style="color: var(--color-text-muted); padding: 10px 0;">No active protocol. Start one below or browse the library!</p>`;
        return;
    }

    const startDate = new Date(proto.startDate);
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Counts
    const loggedDates = Object.keys(proto.loggedDoses);
    const dosedCount = loggedDates.filter(d => proto.loggedDoses[d] === 'dosed').length;

    quickview.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div>
                <h4 style="font-size: 18px; font-weight: 700; color: #fff;">${proto.name}</h4>
                <p class="text-xs" style="margin-top: 2px;">Day ${diffDays} of ${proto.weeks * 7}</p>
            </div>
            <span class="badge-pill badge-active">${dosedCount} Doses logged</span>
        </div>
        <div class="progress-bar-container" style="margin-bottom: 0;">
            <div class="progress-bar-fill" style="width: ${Math.min(100, Math.round((diffDays / (proto.weeks * 7)) * 100))}%"></div>
        </div>
    `;
    
    // Bind click to open tracker
    quickview.style.cursor = 'pointer';
    quickview.onclick = () => switchTab('tracker');
}

// 9. Outcome Logging & Charting
const metricsWeight = document.getElementById('metric-weight');
const metricsBodyfat = document.getElementById('metric-bodyfat');
const metricsEnergy = document.getElementById('metric-energy');
const metricsSleep = document.getElementById('metric-sleep');
const historyList = document.getElementById('metrics-history-list');
const chartMetricSelector = document.getElementById('chart-metric-selector');

document.getElementById('submit-metrics-btn').addEventListener('click', () => {
    const weight = parseFloat(metricsWeight.value);
    const bodyfat = parseFloat(metricsBodyfat.value);
    const energy = parseInt(metricsEnergy.value);
    const sleep = parseInt(metricsSleep.value);

    if (isNaN(weight) && isNaN(bodyfat) && isNaN(energy) && isNaN(sleep)) {
        alert("Please log at least one metric variable.");
        return;
    }

    const todayStr = new Date().toISOString().split('T')[0];

    // Check if we already logged today
    let dayLog = APP_STATE.metrics.find(m => m.date === todayStr);
    if (!dayLog) {
        dayLog = { date: todayStr };
        APP_STATE.metrics.push(dayLog);
    }

    if (!isNaN(weight)) dayLog.weight = weight;
    if (!isNaN(bodyfat)) dayLog.bodyfat = bodyfat;
    if (!isNaN(energy)) dayLog.energy = energy;
    if (!isNaN(sleep)) dayLog.sleep = sleep;

    // Sort metrics by date
    APP_STATE.metrics.sort((a, b) => new Date(a.date) - new Date(b.date));

    saveState();
    
    // Clear inputs
    metricsWeight.value = '';
    metricsBodyfat.value = '';
    metricsEnergy.value = '';
    metricsSleep.value = '';

    renderLogsView();
});

function renderLogsView() {
    // History list
    historyList.innerHTML = '';
    
    const logs = [...APP_STATE.metrics].reverse(); // newest first
    if (logs.length === 0) {
        historyList.innerHTML = `<p class="text-center" style="color: var(--color-text-muted); font-size: 13px; padding: 10px 0;">No metrics logged yet.</p>`;
    } else {
        logs.forEach(log => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.style.padding = '12px 16px';
            card.style.marginBottom = '10px';

            const d = new Date(log.date);
            const dateStr = d.toLocaleDateString(undefined, {month: 'short', day: 'numeric', year: 'numeric'});

            let details = [];
            if (log.weight) details.push(`<span>Weight: <strong>${log.weight} lbs</strong></span>`);
            if (log.bodyfat) details.push(`<span>BF%: <strong>${log.bodyfat}%</strong></span>`);
            if (log.energy) details.push(`<span>Energy: <strong>${log.energy}/10</strong></span>`);
            if (log.sleep) details.push(`<span>Sleep: <strong>${log.sleep}/10</strong></span>`);

            card.innerHTML = `
                <div class="flex-row justify-between">
                    <span style="font-weight: 700; color: #fff; font-size: 14px;">${dateStr}</span>
                    <button class="text-xs" style="background:none; border:none; color:var(--color-accent); cursor:pointer;" onclick="deleteMetricLog('${log.date}')">Delete</button>
                </div>
                <div class="flex-row" style="gap: 12px; font-size: 12px; margin-top: 8px; flex-wrap: wrap;">
                    ${details.join(' | ')}
                </div>
            `;
            historyList.appendChild(card);
        });
    }

    // Dynamic Chart rendering
    renderOutcomeChart();
}

window.deleteMetricLog = function(dateStr) {
    if (confirm("Delete this check-in?")) {
        APP_STATE.metrics = APP_STATE.metrics.filter(m => m.date !== dateStr);
        saveState();
        renderLogsView();
    }
};

chartMetricSelector.addEventListener('change', renderOutcomeChart);

function renderOutcomeChart() {
    const svg = document.getElementById('progress-chart-svg');
    const gridLinesGroup = document.getElementById('chart-grid-lines');
    const labelsGroup = document.getElementById('chart-labels');
    const pointsGroup = document.getElementById('chart-points');
    const areaPath = document.getElementById('chart-area-path');
    const linePath = document.getElementById('chart-line-path');

    // Clean dynamic groups
    gridLinesGroup.innerHTML = '';
    labelsGroup.innerHTML = '';
    pointsGroup.innerHTML = '';
    areaPath.setAttribute('d', '');
    linePath.setAttribute('d', '');

    const metricKey = chartMetricSelector.value;
    
    // Filter metrics that have values for the selected key
    const data = APP_STATE.metrics
        .filter(m => m[metricKey] !== undefined)
        .map(m => ({ date: m.date, value: parseFloat(m[metricKey]) }));

    if (data.length === 0) {
        // Draw empty indicator text in SVG
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '200');
        text.setAttribute('y', '90');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', 'var(--color-text-muted)');
        text.setAttribute('font-size', '13px');
        text.textContent = 'Log at least 2 entries to plot historical trend charts';
        labelsGroup.appendChild(text);
        return;
    }

    // Grid details
    const width = 400;
    const height = 180;
    const paddingLeft = 40;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;

    const plotWidth = width - paddingLeft - paddingRight;
    const plotHeight = height - paddingTop - paddingBottom;

    // Extrema
    const values = data.map(d => d.value);
    let minVal = Math.min(...values);
    let maxVal = Math.max(...values);
    
    if (minVal === maxVal) {
        minVal -= 1;
        maxVal += 1;
    } else {
        const buffer = (maxVal - minVal) * 0.15;
        minVal = Math.max(0, minVal - buffer);
        maxVal = maxVal + buffer;
    }

    // Transform date keys to indices or relative distances
    // X scale
    const count = data.length;
    const getX = (idx) => {
        if (count <= 1) return paddingLeft + plotWidth / 2;
        return paddingLeft + (idx / (count - 1)) * plotWidth;
    };

    // Y scale
    const getY = (val) => {
        return height - paddingBottom - ((val - minVal) / (maxVal - minVal)) * plotHeight;
    };

    // Draw grid horizontal lines and Y axis labels
    const gridTicksCount = 4;
    for (let i = 0; i <= gridTicksCount; i++) {
        const tickVal = minVal + (i / gridTicksCount) * (maxVal - minVal);
        const y = getY(tickVal);
        
        // Grid line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', paddingLeft);
        line.setAttribute('y1', y);
        line.setAttribute('x2', width - paddingRight);
        line.setAttribute('y2', y);
        line.className.baseVal = 'chart-grid-line';
        gridLinesGroup.appendChild(line);

        // Label
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', paddingLeft - 8);
        text.setAttribute('y', y + 3);
        text.setAttribute('text-anchor', 'end');
        text.className.baseVal = 'chart-label';
        text.textContent = tickVal.toFixed(1).replace('.0', '');
        labelsGroup.appendChild(text);
    }

    // Main line path coordinates
    let pathCoords = [];
    data.forEach((d, idx) => {
        const x = getX(idx);
        const y = getY(d.value);
        pathCoords.push(`${x},${y}`);

        // Draw circles for data nodes
        const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        point.setAttribute('cx', x);
        point.setAttribute('cy', y);
        point.className.baseVal = 'chart-point';

        // Add a tooltip details string
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = `Date: ${d.date}\nValue: ${d.value}`;
        point.appendChild(title);
        pointsGroup.appendChild(point);

        // Draw date labels on X axis for key points (first, middle, last)
        if (count <= 3 || idx === 0 || idx === count - 1 || (count > 5 && idx === Math.round(count / 2))) {
            const dateObj = new Date(d.date);
            const dateLabel = dateObj.toLocaleDateString(undefined, {month: 'short', day: 'numeric'});
            
            const xText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            xText.setAttribute('x', x);
            xText.setAttribute('y', height - 10);
            xText.setAttribute('text-anchor', 'middle');
            xText.className.baseVal = 'chart-label';
            xText.textContent = dateLabel;
            labelsGroup.appendChild(xText);
        }
    });

    // Draw main lines & filled gradient areas
    const linePathD = `M ${pathCoords.join(' L ')}`;
    linePath.setAttribute('d', linePathD);

    if (count > 1) {
        const areaPathD = `${linePathD} L ${getX(count - 1)},${height - paddingBottom} L ${getX(0)},${height - paddingBottom} Z`;
        areaPath.setAttribute('d', areaPathD);
    }
}

// 10. Progress Photos Base64 uploads
const inputBaseline = document.getElementById('input-file-baseline');
const inputFollowup = document.getElementById('input-file-followup');
const imgBaseline = document.getElementById('img-baseline');
const imgFollowup = document.getElementById('img-followup');
const textBaseline = document.getElementById('placeholder-text-baseline');
const textFollowup = document.getElementById('placeholder-text-followup');
const clearPhotosBtn = document.getElementById('clear-photos-btn');

function handlePhotoUpload(e, type) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        const base64 = evt.target.result;
        APP_STATE.photos[type] = base64;
        saveState();
        renderPhotos();
    };
    reader.readAsDataURL(file);
}

inputBaseline.addEventListener('change', (e) => handlePhotoUpload(e, 'baseline'));
inputFollowup.addEventListener('change', (e) => handlePhotoUpload(e, 'followup'));

function renderPhotos() {
    if (APP_STATE.photos.baseline) {
        imgBaseline.src = APP_STATE.photos.baseline;
        imgBaseline.style.display = 'block';
        textBaseline.style.display = 'none';
    } else {
        imgBaseline.style.display = 'none';
        textBaseline.style.display = 'block';
    }

    if (APP_STATE.photos.followup) {
        imgFollowup.src = APP_STATE.photos.followup;
        imgFollowup.style.display = 'block';
        textFollowup.style.display = 'none';
    } else {
        imgFollowup.style.display = 'none';
        textFollowup.style.display = 'block';
    }

    if (APP_STATE.photos.baseline || APP_STATE.photos.followup) {
        clearPhotosBtn.style.display = 'block';
    } else {
        clearPhotosBtn.style.display = 'none';
    }
}

clearPhotosBtn.addEventListener('click', () => {
    if (confirm("Clear both progress photos?")) {
        APP_STATE.photos = { baseline: null, followup: null };
        saveState();
        renderPhotos();
    }
});

// 11. Initialization
function init() {
    loadState();
    calculateReconstitution();
    renderLibraryList();
    renderDashboardQuickview();
    renderPhotos();
}

document.addEventListener('DOMContentLoaded', init);
// Run init immediately in case DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
}
