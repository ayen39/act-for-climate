// script.js

// 1. Upgraded Join Alert (Custom Toast Notification)
function joinAlert() {
  // Prevent multiple toasts from stacking indefinitely
  if (document.getElementById('custom-toast')) return;

  // Create toast element
  const toast = document.createElement('div');
  toast.id = 'custom-toast';
  // Styling the toast with Tailwind classes for a modern look
  toast.className = 'fixed bottom-6 right-6 bg-[#064e3b] text-white px-6 py-4 rounded-xl shadow-2xl transform transition-all duration-500 translate-y-20 opacity-0 z-50 flex items-center gap-4';
  toast.innerHTML = `
    <span class="text-3xl">🌍</span>
    <div>
      <h4 class="font-bold text-lg">Welcome to the Movement!</h4>
      <p class="text-sm text-[#d1fae5]">Volunteer registration for South Sudan opens soon.</p>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  // Trigger animation (Slide up and fade in)
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-20', 'opacity-0');
  });
  
  // Remove toast automatically after 4.5 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    setTimeout(() => toast.remove(), 500); // Wait for transition to finish
  }, 4500);
}

// 2. Localized Climate Tips tailored to South Sudan
const tips = [
  "Use solar-powered lanterns instead of charcoal to reduce emissions and indoor air pollution.",
  "Plant indigenous trees like Mahogany or Neem around your homestead to prevent soil erosion.",
  "Harvest rainwater during the wet season to use during dry spells for your crops.",
  "Support briquettes made from agricultural waste instead of cutting down trees for firewood.",
  "Dispose of plastics properly; don't throw them in the Nile where they cause blockages and worsen flooding."
];

function showTip() {
  const tipElement = document.getElementById("tipText");
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  
  // Smooth fade-out, change text, fade-in effect
  tipElement.style.transition = "opacity 0.3s ease-in-out";
  tipElement.style.opacity = 0;
  
  setTimeout(() => {
    tipElement.innerText = randomTip;
    tipElement.style.opacity = 1;
  }, 300);
}

// 3. Scroll Animations (Intersection Observer)
// This makes cards and text fade and slide up when scrolling into view
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        // Unobserve after animating so it only happens once
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  // Select all cards and section headings to apply the animation
  const elementsToAnimate = document.querySelectorAll('.bg-white.p-8, section h2, section p:not(#tipText)');
  
  elementsToAnimate.forEach((el) => {
    // Set initial state for animation
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
    observer.observe(el);
  });
});
