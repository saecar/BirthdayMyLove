import gsap from 'gsap';
import { EventEmitter } from '../utils/EventEmitter.js';
import { progressStore } from '../utils/ProgressStore.js';

export class LetterModal extends EventEmitter {
  constructor(sceneManager) {
    super();

    this.sceneManager = sceneManager;
    this.isOpen = false;

    this.defaultLetter = {
      recipient: "Nur Syarifa Syuhada",
      title: "Selamat Ulang Tahun, Nur Syarifa Syuhada",
      body: [
        "Happy birthday ya, Sayaangggg! Panjang umur, sehat-sehat terus, dan semoga apa pun yang lagi kamu usahain ke depannya selalu dipermudah sama Yang Kuasa.",
        "Di hari spesial kamu ini, selain ngucapin selamat, aku cuma mau ngingetin kamu beberapa hal penting. Aku tahu banget akhir-akhir ini pundak kamu lagi berat banget. Kamu harus mondar-mandir ngurusin mama di RS, kurang tidur, kepalamu pusing, ditambah lagi harus nyaksiin dan ngadepin masalah keluarga di rumah yang lagi ribut-ributnya. Aku tahu kamu tipe orang yang kuat dan suka memendam semuanya sendiri biar kelihatan baik-baik aja, tapi please, sadar juga sama kapasitas diri kamu, ya. Nasihat aku, jangan terlalu diporsir semua beban itu sendirian. Kalau emang lagi capek banget, capek fisik atau mental, gak apa-apa banget buat berhenti sebentar, nangis kalau emang pengen nangis, atau sekadar rebahan tanpa mikirin beban orang lain untuk sesaat. Badan sama mental kamu juga butuh disayang, jangan cuma mikirin urusan luar terus sampai diri kamu sendiri yang tumbang.",
        "Semoga di umur yang baru ini, kedamaian batin, kebahagiaan, dan hal-hal baik lebih banyak dateng ke hidup kamu. Capeknya berkurang, senyumnya makin sering. Makasih ya udah bertahan sejauh ini dan udah mau maafin aku kemarin. Ingat, apa pun yang terjadi di luar sana, kalau kamu butuh tempat buat pulang, bersandar, atau sekadar ngeluh tanpa dihakimi, I'm always right here for you. Have a wonderful day, and happy birthday once again!",
        "---divider---",
        "My love, I honestly can't put into words how much you mean to me. You've become such an important part of my life and my heart, and sometimes I wonder how one person can mean so much to another. You make me feel things I never thought were possible, and I wish you could see yourself through my eyes just once so you could understand how special, beautiful, and irreplaceable you truly are to me.",
        "I want you to know that my love for you is real, deep, and genuine. I want to be there for you on your best and worst days, to make you smile when you're sad, comfort you when things get difficult, and remind you that you never have to face everything alone. I want to be someone you can always turn to, someone who listens to you, understands you, and makes you feel safe and loved. I don't want my love to exist only in the words I say, but also in the little things I do every day to show you how much you matter to me.",
        "The thought of losing you hurts because you've become such a meaningful part of my world. You're not just someone I love; you're someone I want to share my happiness with, talk to about my dreams, and make beautiful memories with. I want to experience the little things in life with you, laugh with you over the smallest things, and be beside you through both the good and difficult moments.",
        "I know we won't always be perfect, and there may be days when we misunderstand each other, but I want us to keep communicating, understanding each other, and choosing our love even when things aren't easy. I don't need a perfect relationship; I just want something real, honest, and meaningful with you, something we both continue to care for and protect.",
        "You have a place in my heart that nobody else could ever replace, and I hope you never have to question how important you are to me. Even when I struggle to find the right words, please remember that my feelings for you never become any less real. I love you for who you are, for your beautiful heart, and for all the little things that make you uniquely you. I want to keep learning about you, supporting your dreams, celebrating your happiness, and reminding you how loved you are.",
        "I can't promise that every day will be perfect, but I promise that what I feel for you is genuine, and I want to keep showing you that through my actions, my patience, and my effort. I hope I can make you feel even a little of the love I carry in my heart for you, because you deserve to feel appreciated, valued, and loved without having to question it.",
        "You mean more to me than these words could ever explain, my love, and if I had the chance to choose all over again, my heart would still find its way back to you, every single time."
      ],
      sender: "Siapa yaa??"
    };

    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.id = 'letter-modal';
    this.container.className = 'letter-modal-overlay';
    this.container.style.display = 'none';

    this.container.innerHTML = `
      <div class="letter-backdrop" id="letter-backdrop"></div>
      <div class="letter-card" id="letter-card">
        <button class="letter-close-btn" id="letter-close-btn" aria-label="Tutup Surat">&times;</button>

        <div class="letter-seal">
          <span class="seal-icon"></span>
        </div>

        <div class="letter-header">
          <span class="letter-badge">PESAN ULANG TAHUN SPESIAL</span>
          <h2 class="letter-title" id="letter-title">${this.defaultLetter.title}</h2>
          <div class="letter-to">Kepada: <strong>${this.defaultLetter.recipient}</strong></div>
        </div>

        <div class="letter-paper">
          <div class="letter-content" id="letter-content">
            ${this.defaultLetter.body
              .map((p) =>
                p === '---divider---'
                  ? `<div class="letter-divider" aria-hidden="true"><span>❀ ❀ ❀</span></div>`
                  : `<p class="letter-paragraph">${p}</p>`
              )
              .join('')}
          </div>
          <div class="letter-signature">
            <span class="sig-with-love">Dengan segenap cintaku,</span>
            <strong class="sig-name" id="letter-sender">${this.defaultLetter.sender}</strong>
          </div>
        </div>

        <div class="letter-footer">
          <button class="letter-action-btn secondary" id="btn-restart-journey">
            <span>↺ Putar Ulang Cerita</span>
          </button>
          <button class="letter-action-btn primary" id="btn-close-letter">
            <span>Nikmati Sakura Mekar</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(this.container);

    this.cardEl = document.getElementById('letter-card');
    this.backdropEl = document.getElementById('letter-backdrop');
    this.closeBtn = document.getElementById('letter-close-btn');
    this.closeActionBtn = document.getElementById('btn-close-letter');
    this.restartBtn = document.getElementById('btn-restart-journey');

    this.bindEvents();
  }

  bindEvents() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.closeActionBtn.addEventListener('click', () => this.close());
    this.backdropEl.addEventListener('click', () => this.close());

    this.restartBtn.addEventListener('click', () => {
      this.close();
      this.trigger('restart');
    });

    window.addEventListener('keydown', (e) => {
      if (this.isOpen && e.key === 'Escape') {
        this.close();
      }
    });
  }

  open() {
    this.isOpen = true;
    this.container.style.display = 'flex';

    progressStore.setLetterRead(true);

    // Trigger full sakura blossom celebration canopy
    if (this.sceneManager?.world?.sakuraTree) {
      this.sceneManager.world.sakuraTree.setBloomProgress(1.18, 2.5);
    }

    gsap.killTweensOf([this.backdropEl, this.cardEl]);
    gsap.fromTo(this.backdropEl, { opacity: 0 }, { opacity: 1, duration: 0.35 });
    gsap.fromTo(
      this.cardEl,
      { opacity: 0, scale: 0.88, y: 35 },
      { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.2)' }
    );

    // Staggered reveal of paragraphs
    const paragraphs = this.cardEl.querySelectorAll('.letter-paragraph, .letter-divider');
    gsap.fromTo(
      paragraphs,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, delay: 0.2, ease: 'power2.out' }
    );

    this.trigger('opened');
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;

    // Smoothly return sakura tree blossom canopy to peaceful rest state
    if (this.sceneManager?.world?.sakuraTree) {
      this.sceneManager.world.sakuraTree.setBloomProgress(1.0, 1.8);
    }

    gsap.to(this.backdropEl, { opacity: 0, duration: 0.25 });
    gsap.to(this.cardEl, {
      opacity: 0,
      scale: 0.94,
      y: 15,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        this.container.style.display = 'none';
        this.trigger('closed');
      }
    });
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.container = null;
    super.dispose();
  }
}
