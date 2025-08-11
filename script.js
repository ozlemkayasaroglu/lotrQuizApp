// Lord of the Rings Quiz JavaScript

// Quiz Data - Kategorize edilmiş sorular

// Basit Seviye Sorular (Yeni başlayanlar için)
const easyQuestions = [
  {
    question: "Frodo Baggins hangi ırktan gelir?",
    options: ["Elf", "İnsan", "Hobbit", "Cüce"],
    correct: 2,
    category: "Karakterler",
    difficulty: "easy",
  },
  {
    question: "Tek Yüzük'ü kim yaratmıştır?",
    options: ["Gandalf", "Sauron", "Elrond", "Galadriel"],
    correct: 1,
    category: "Eşyalar",
    difficulty: "easy",
  },
  {
    question: "Gandalf'ın atının adı nedir?",
    options: ["Roach", "Shadowfax", "Bucephalus", "Pegasus"],
    correct: 1,
    category: "Hayvanlar",
    difficulty: "easy",
  },
  {
    question: "Aragorn'un gerçek adı nedir?",
    options: ["Isildur", "Elendil", "Elessar", "Boromir"],
    correct: 2,
    category: "Karakterler",
    difficulty: "easy",
  },
  {
    question: "Hobbiton hangi bölgede yer alır?",
    options: ["Rohan", "Gondor", "Shire", "Rivendell"],
    correct: 2,
    category: "Yerler",
    difficulty: "easy",
  },
  {
    question: "Legolas hangi ırktan gelir?",
    options: ["İnsan", "Hobbit", "Cüce", "Elf"],
    correct: 3,
    category: "Karakterler",
    difficulty: "easy",
  },
  {
    question: "Yüzüklerin Efendisi'nin yazarı kimdir?",
    options: [
      "C.S. Lewis",
      "J.R.R. Tolkien",
      "George R.R. Martin",
      "Terry Pratchett",
    ],
    correct: 1,
    category: "Genel Bilgi",
    difficulty: "easy",
  },
  {
    question: "Gimli hangi ırktan gelir?",
    options: ["Elf", "İnsan", "Hobbit", "Cüce"],
    correct: 3,
    category: "Karakterler",
    difficulty: "easy",
  },
  {
    question: "Mount Doom hangi dilde Amon Amarth olarak bilinir?",
    options: ["Quenya", "Sindarin", "Rohirric", "Westron"],
    correct: 1,
    category: "Diller",
    difficulty: "easy",
  },
  {
    question: "Kardeşlik kaç üyeden oluşur?",
    options: ["7", "8", "9", "10"],
    correct: 2,
    category: "Gruplar",
    difficulty: "easy",
  },
];

// Zor Seviye Sorular (Uzmanlar için)
const hardQuestions = [
  {
    question: "Elrond'un babası kimdir?",
    options: ["Gil-galad", "Eärendil", "Thranduil", "Celeborn"],
    correct: 1,
    category: "Aile Ağacı",
    difficulty: "hard",
  },
  {
    question: "Galadriel'in Valinor'daki adı nedir?",
    options: ["Artanis", "Altáriel", "Nerwen", "Hepsı"],
    correct: 3,
    category: "Elvish İsimleri",
    difficulty: "hard",
  },
  {
    question: "Tom Bombadil'in Hobbitler tarafından verilen adı nedir?",
    options: ["Orald", "Forn", "Iarwain Ben-adar", "Master"],
    correct: 0,
    category: "Eski Çağlar",
    difficulty: "hard",
  },
  {
    question: "Moria'nın gerçek adı nedir?",
    options: ["Khazad-dûm", "Erebor", "Iron Hills", "Blue Mountains"],
    correct: 0,
    category: "Cüce Şehirleri",
    difficulty: "hard",
  },
  {
    question: "Smaug'un lakabı nedir?",
    options: [
      "The Terrible",
      "The Mighty",
      "The Chiefest and Greatest of Calamities",
      "The Golden",
    ],
    correct: 2,
    category: "Ejderha Bilgisi",
    difficulty: "hard",
  },
  {
    question: "Barad-dûr kaç yılda inşa edilmiştir?",
    options: ["600 yıl", "1600 yıl", "SA 1000-1600", "TA 2000-2600"],
    correct: 2,
    category: "Zaman Çizelgesi",
    difficulty: "hard",
  },
  {
    question: "Silmarillerin sayısı kaçtır?",
    options: ["1", "3", "7", "9"],
    correct: 1,
    category: "Efsanevi Eşyalar",
    difficulty: "hard",
  },
  {
    question: "Unfinished Tales'te bahsedilen Aldarion'un babası kimdir?",
    options: ["Tar-Meneldur", "Tar-Elendil", "Tar-Amandil", "Tar-Súrion"],
    correct: 0,
    category: "Númenor Tarihi",
    difficulty: "hard",
  },
  {
    question: "Morgoth'un gerçek adı nedir?",
    options: ["Sauron", "Melkor", "Ancalagon", "Gothmog"],
    correct: 1,
    category: "Valar",
    difficulty: "hard",
  },
  {
    question: "Ent-eşlerinin kaderi nedir?",
    options: [
      "Öldürüldüler",
      "Kayıp gittiler",
      "Doğu'ya göç ettiler",
      "Bilinmiyor",
    ],
    correct: 3,
    category: "Ent Tarihi",
    difficulty: "hard",
  },
  {
    question: "Telperion ve Laurelin nelerdir?",
    options: ["İki Ağaç", "İki Kule", "İki Yıldız", "İki Gemi"],
    correct: 0,
    category: "Valinor",
    difficulty: "hard",
  },
  {
    question: "Celebrimbor kimdir?",
    options: [
      "Galadriel'in oğlu",
      "Fëanor'un torunu",
      "Gil-galad'ın kardeşi",
      "Elrond'un babası",
    ],
    correct: 1,
    category: "Elvish Soyları",
    difficulty: "hard",
  },
  {
    question: "Mithril'in Westron karşılığı nedir?",
    options: ["True Silver", "Moria Silver", "Moon Silver", "Star Silver"],
    correct: 0,
    category: "Malzemeler",
    difficulty: "hard",
  },
  {
    question: "Beorn hangi dilde konuşur?",
    options: ["Westron", "Rohirric", "Kendi dili", "Sindarin"],
    correct: 2,
    category: "Dil Bilgisi",
    difficulty: "hard",
  },
  {
    question: "Durin'in Bane'i nedir?",
    options: ["Smaug", "Balrog", "Azog", "Bolg"],
    correct: 1,
    category: "Moria Tarihi",
    difficulty: "hard",
  },
];

// Tüm soruları birleştir
const allQuestions = [...easyQuestions, ...hardQuestions];

// Quiz State
let currentQuiz = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  selectedAnswer: null,
  startTime: null,
  answers: [],
  countdownInterval: null,
};

// Storage Keys
const STORAGE_KEYS = {
  QUIZ_HISTORY: "lotr_quiz_history",
  QUIZ_STATS: "lotr_quiz_stats",
};

// Initialize App
document.addEventListener("DOMContentLoaded", function () {
  loadStats();
  updateStatsDisplay();
});

// Utility Functions
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getRandomQuestions(count = 10, difficulty = "mixed") {
  let questionPool = [];

  switch (difficulty) {
    case "easy":
      questionPool = easyQuestions;
      break;
    case "hard":
      questionPool = hardQuestions;
      break;
    case "mixed":
    default:
      questionPool = allQuestions;
      break;
  }

  const shuffled = shuffleArray(questionPool);
  return shuffled.slice(0, Math.min(count, questionPool.length));
}

// Storage Functions
function saveQuizAttempt(score, totalQuestions, duration) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const attempt = {
    id: Date.now().toString(),
    score,
    totalQuestions,
    percentage,
    date: new Date().toISOString(),
    duration,
    difficulty: currentQuiz.difficulty || "mixed",
  };

  const history = getQuizHistory();
  history.unshift(attempt);

  // Keep only last 50 attempts
  const limitedHistory = history.slice(0, 50);
  localStorage.setItem(
    STORAGE_KEYS.QUIZ_HISTORY,
    JSON.stringify(limitedHistory)
  );

  return attempt;
}

function getQuizHistory() {
  try {
    const historyJson = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
    return historyJson ? JSON.parse(historyJson) : [];
  } catch (error) {
    console.error("Error getting quiz history:", error);
    return [];
  }
}

function getQuizStats() {
  try {
    const history = getQuizHistory();
    if (history.length === 0) {
      return {
        totalAttempts: 0,
        bestScore: null,
        averagePercentage: 0,
        recentAttempts: [],
      };
    }

    const bestScore = history.reduce((best, current) =>
      current.percentage > best.percentage ? current : best
    );

    const averagePercentage = Math.round(
      history.reduce((sum, attempt) => sum + attempt.percentage, 0) /
        history.length
    );

    return {
      totalAttempts: history.length,
      bestScore,
      averagePercentage,
      recentAttempts: history.slice(0, 5),
    };
  } catch (error) {
    console.error("Error getting quiz stats:", error);
    return {
      totalAttempts: 0,
      bestScore: null,
      averagePercentage: 0,
      recentAttempts: [],
    };
  }
}

function clearQuizHistory() {
  try {
    localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
    updateStatsDisplay();
  } catch (error) {
    console.error("Error clearing quiz history:", error);
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return "Bugün";
  } else if (diffDays === 2) {
    return "Dün";
  } else if (diffDays <= 7) {
    return `${diffDays - 1} gün önce`;
  } else {
    return date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
}

// Display Functions
function loadStats() {
  const stats = getQuizStats();
  updateStatsDisplay(stats);
}

function updateStatsDisplay(stats = null) {
  if (!stats) {
    stats = getQuizStats();
  }

  document.getElementById("totalAttempts").textContent = stats.totalAttempts;
  document.getElementById("bestScore").textContent = stats.bestScore
    ? `${stats.bestScore.percentage}%`
    : "-";
  document.getElementById("averageScore").textContent =
    stats.totalAttempts > 0 ? `${stats.averagePercentage}%` : "-";

  const historyButton = document.getElementById("historyButton");
  const historyButtonText = document.getElementById("historyButtonText");

  if (stats.totalAttempts > 0) {
    historyButton.style.display = "block";
    historyButtonText.textContent = `📊 Geçmiş (${stats.totalAttempts})`;
  } else {
    historyButton.style.display = "none";
  }
}

// Quiz Functions
function startQuiz(difficulty = "mixed") {
  currentQuiz.difficulty = difficulty;
  currentQuiz.questions = getRandomQuestions(10, difficulty);
  currentQuiz.currentQuestion = 0;
  currentQuiz.score = 0;
  currentQuiz.selectedAnswer = null;
  currentQuiz.startTime = Date.now();
  currentQuiz.answers = [];
  currentQuiz.countdownInterval = null;

  showQuizScreen();
  displayQuestion();
}

function showQuizScreen() {
  document.querySelector(".container").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  document.getElementById("resultsContainer").style.display = "none";
  document.getElementById("historyContainer").style.display = "none";

  createQuizHTML();
}

function createQuizHTML() {
  const difficultyTitle = {
    easy: "🍃 Hobbit Seviyesi",
    hard: "⚔️ Ranger Seviyesi",
    mixed: "🧙‍♂️ Wizard Seviyesi",
  };

  const quizContainer = document.getElementById("quizContainer");
  quizContainer.innerHTML = `
        <div class="quiz-header fade-in">
            <button class="back-button" onclick="confirmBackToHome()">← Geri</button>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <div class="progress-text" id="progressText">1 / 10</div>
                <div class="difficulty-indicator">${
                  difficultyTitle[currentQuiz.difficulty] ||
                  "🧙‍♂️ Wizard Seviyesi"
                }</div>
            </div>
            <div class="score-container">
                <div class="score-label">Skor</div>
                <div class="score" id="currentScore">0</div>
            </div>
        </div>
        
        <div class="question-container slide-up" id="questionContainer">
            <!-- Question content will be inserted here -->
        </div>
        
        <div class="options-container slide-up" id="optionsContainer">
            <!-- Options will be inserted here -->
        </div>
        
        
    `;
}

function displayQuestion() {
  const question = currentQuiz.questions[currentQuiz.currentQuestion];
  const totalQuestions = currentQuiz.questions.length;
  const currentQuestionNum = currentQuiz.currentQuestion + 1;

  // Update progress
  const progressPercentage = (currentQuestionNum / totalQuestions) * 100;
  document.getElementById(
    "progressFill"
  ).style.width = `${progressPercentage}%`;
  document.getElementById(
    "progressText"
  ).textContent = `${currentQuestionNum} / ${totalQuestions}`;
  document.getElementById("currentScore").textContent = currentQuiz.score;

  // Display question
  document.getElementById("questionContainer").innerHTML = `
        <div class="question-card">
            <div class="question-number">Soru ${currentQuestionNum}</div>
            <div class="question-text">${question.question}</div>
        </div>
    `;

  // Display options
  const optionsHTML = question.options
    .map(
      (option, index) => `
        <div class="option" onclick="selectAnswer(${index})" id="option${index}">
            <div class="option-content">
                <div class="option-letter-container">
                    <div class="option-letter">${String.fromCharCode(
                      65 + index
                    )}</div>
                </div>
                <div class="option-text">${option}</div>
                <div class="option-icon" id="optionIcon${index}"></div>
            </div>
        </div>
    `
    )
    .join("");

  document.getElementById("optionsContainer").innerHTML = optionsHTML;

  currentQuiz.selectedAnswer = null;

  // Add animation classes
  setTimeout(() => {
    document.getElementById("questionContainer").classList.add("slide-up");
    document.getElementById("optionsContainer").classList.add("slide-up");
  }, 100);
}

function selectAnswer(answerIndex) {
  if (currentQuiz.selectedAnswer !== null) return;

  currentQuiz.selectedAnswer = answerIndex;
  const question = currentQuiz.questions[currentQuiz.currentQuestion];
  const correctAnswer = question.correct;

  // Record the answer
  currentQuiz.answers.push({
    questionIndex: currentQuiz.currentQuestion,
    selectedAnswer: answerIndex,
    correctAnswer: correctAnswer,
    isCorrect: answerIndex === correctAnswer,
  });

  // Update score
  if (answerIndex === correctAnswer) {
    currentQuiz.score++;
  }

  // Update options appearance
  question.options.forEach((_, index) => {
    const optionElement = document.getElementById(`option${index}`);
    const iconElement = document.getElementById(`optionIcon${index}`);

    if (index === correctAnswer) {
      optionElement.classList.add("correct");
      iconElement.textContent = "✅";
    } else if (index === answerIndex) {
      optionElement.classList.add("wrong");
      iconElement.textContent = "❌";
    } else {
      optionElement.classList.add("disabled");
    }

    optionElement.onclick = null; // Disable further clicks
  });

  // Update current score display
  document.getElementById("currentScore").textContent = currentQuiz.score;

  // Start automatic countdown and advance
  let countdown = 3;
  
  // Create or update countdown display in question area
  const questionCard = document.querySelector('.question-card');
  let countdownDisplay = document.getElementById('auto-countdown');
  
  if (!countdownDisplay) {
    countdownDisplay = document.createElement('div');
    countdownDisplay.id = 'auto-countdown';
    countdownDisplay.style.cssText = `
      text-align: center;
      margin-top: 20px;
      color: #D4AF37;
      font-weight: 600;
      font-size: 1.1rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    questionCard.appendChild(countdownDisplay);
  }
  
  // Show countdown message
  if (currentQuiz.currentQuestion + 1 < currentQuiz.questions.length) {
    countdownDisplay.innerHTML = `⏳ Sonraki soru: <span id="countdown" style="color: #D4AF37; font-weight: 700;">${countdown}</span>s`;
  } else {
    countdownDisplay.innerHTML = `⏳ Sonuçlar: <span id="countdown" style="color: #D4AF37; font-weight: 700;">${countdown}</span>s`;
  }
  
  // Fade in countdown display
  setTimeout(() => {
    countdownDisplay.style.opacity = '1';
  }, 500);

  const countdownInterval = setInterval(() => {
    countdown--;
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
      countdownElement.textContent = countdown;
    }

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      // Fade out countdown before advancing
      countdownDisplay.style.opacity = '0';
      setTimeout(() => {
        nextQuestion();
      }, 300);
    }
  }, 1000);

  // Store interval ID for cleanup if needed
  currentQuiz.countdownInterval = countdownInterval;
}

function nextQuestion() {
  // Clear any existing countdown interval
  if (currentQuiz.countdownInterval) {
    clearInterval(currentQuiz.countdownInterval);
    currentQuiz.countdownInterval = null;
  }
  
  // Remove countdown display
  const countdownDisplay = document.getElementById('auto-countdown');
  if (countdownDisplay) {
    countdownDisplay.remove();
  }

  if (currentQuiz.currentQuestion + 1 < currentQuiz.questions.length) {
    currentQuiz.currentQuestion++;
    displayQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const duration = Math.round((Date.now() - currentQuiz.startTime) / 1000);
  const totalQuestions = currentQuiz.questions.length;
  const percentage = Math.round((currentQuiz.score / totalQuestions) * 100);

  // Save attempt
  const attempt = saveQuizAttempt(currentQuiz.score, totalQuestions, duration);

  // Update stats
  updateStatsDisplay();

  // Show results
  showResultsScreen(attempt);
}

function confirmBackToHome() {
  if (
    confirm(
      "Quiz'den çıkmak istediğinizden emin misiniz? İlerlemeniz kaybolacak."
    )
  ) {
    showHomeScreen();
  }
}

// Results Functions
function showResultsScreen(attempt) {
  document.querySelector(".container").style.display = "none";
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("resultsContainer").style.display = "block";
  document.getElementById("historyContainer").style.display = "none";

  createResultsHTML(attempt);
}

function createResultsHTML(attempt) {
  const resultMessage = getResultMessage(attempt.percentage);
  const characterSuggestion = getCharacterSuggestion(attempt.percentage);

  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = `
        <div class="results-header fade-in">
            <h1 class="results-title">Quiz Tamamlandı!</h1>
            <p class="results-subtitle">One Ring to rule them all!</p>
        </div>
        
        <div class="score-circle fade-in">
            <div class="score-circle-inner">
                <div class="score-display">${attempt.score}/${
    attempt.totalQuestions
  }</div>
                <div class="percentage">${attempt.percentage}%</div>
            </div>
        </div>
        
        <div class="result-message slide-up">
            <div class="result-emoji">${resultMessage.emoji}</div>
            <h2 class="result-title">${resultMessage.title}</h2>
            <p class="result-text">${resultMessage.message}</p>
        </div>
        
        <div class="character-suggestion slide-up">
            <h3>🏔️ Lord of the Rings Karakterin</h3>
            <p><strong>${characterSuggestion.character}</strong></p>
            <p>${characterSuggestion.description}</p>
        </div>
        
        <div class="stats-container slide-up">
            <div class="stat-item">
                <div class="stat-number">${attempt.score}</div>
                <div class="stat-label">Doğru</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
                <div class="stat-number">${
                  attempt.totalQuestions - attempt.score
                }</div>
                <div class="stat-label">Yanlış</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
                <div class="stat-number">${Math.round(attempt.duration)}s</div>
                <div class="stat-label">Süre</div>
            </div>
        </div>
        
        <!-- Social Share Section -->
        <div class="social-share-container slide-up">
            <h3 class="share-title">🏔️ Sonucunu Paylaş!</h3>
            <div class="share-buttons">
                <button class="share-button twitter" onclick="shareOnTwitter(${
                  attempt.percentage
                }, '${characterSuggestion.character}', '${
    attempt.difficulty
  }')">
                    <span class="share-icon">🐦</span>
                    <span class="share-text">Twitter'da Paylaş</span>
                </button>
                <button class="share-button copy" onclick="copyResultToClipboard(${
                  attempt.percentage
                }, '${characterSuggestion.character}', '${
    attempt.difficulty
  }')">
                    <span class="share-icon">📋</span>
                    <span class="share-text">Linki Kopyala</span>
                </button>
            </div>
        </div>
        
        <button class="start-button slide-up" onclick="startQuiz('${
          attempt.difficulty || "mixed"
        }')">
            <span class="button-gradient">🔄 Tekrar Quiz Çöz</span>
        </button>
        
        <button class="history-button slide-up" onclick="showHomeScreen()">
            <span class="button-gradient">🏠 Ana Sayfaya Dön</span>
        </button>
    `;
}

function getResultMessage(percentage) {
  if (percentage >= 90) {
    return {
      emoji: "🧙‍♂️",
      title: "Orta Dünya Ustası!",
      message:
        "Mükemmel! Gandalf bile sizden bilgi alabilir. Orta Dünya'nın en derin sırlarını biliyorsunuz!",
    };
  } else if (percentage >= 70) {
    return {
      emoji: "⚔️",
      title: "Ranger Seviyesi!",
      message:
        "Harika performans! Aragorn gibi Orta Dünya'nın koruyucususunuz. Bilginiz etkileyici!",
    };
  } else if (percentage >= 50) {
    return {
      emoji: "🍃",
      title: "Hobbit Bilgisi!",
      message:
        "İyi iş çıkardınız! Shire'da rahat bir yaşam sürebilirsiniz. Biraz daha çalışmaya ne dersiniz?",
    };
  } else if (percentage >= 30) {
    return {
      emoji: "🌱",
      title: "Yeni Başlayan!",
      message:
        "Orta Dünya yolculuğunuz daha yeni başlıyor. Daha fazla kitap okuma zamanı!",
    };
  } else {
    return {
      emoji: "🤔",
      title: "Serüveniniz Başlasın!",
      message:
        "Görünüşe göre Orta Dünya'ya yeni adım atıyorsunuz. Kitapları okumaya başlamanın tam zamanı!",
    };
  }
}

function getCharacterSuggestion(percentage) {
  if (percentage >= 90) {
    return {
      character: "Gandalf the White",
      description:
        "Bilginiz ve hikmetiniz Orta Dünya'da efsanevi. İstalar arasında bile özel bir yeriniz var!",
    };
  } else if (percentage >= 80) {
    return {
      character: "Elrond",
      description:
        "Bin yıllık bilgi birikiminiz var. Rivendell'in efendisi olarak herkesi yönlendirebilirsiniz.",
    };
  } else if (percentage >= 70) {
    return {
      character: "Aragorn",
      description:
        "Lider ruhuyla donanmış, bilgili ve cesur bir Rangers'sınız. Gondor'un kralı olmaya hazırsınız!",
    };
  } else if (percentage >= 60) {
    return {
      character: "Legolas",
      description:
        "Elf zekanızla parlıyorsunız. Mirkwood'un prensesi olarak ait olduğunuz yeri biliyorsunuz.",
    };
  } else if (percentage >= 50) {
    return {
      character: "Samwise Gamgee",
      description:
        "Sadık ve cesur! Her ne kadar her şeyi bilmeseniz de, doğru zamanda doğru yerde olursunuz.",
    };
  } else if (percentage >= 40) {
    return {
      character: "Frodo Baggins",
      description:
        "Maceraya atılmaya hazır genç bir Hobbit! Yolculuğunuz daha yeni başlıyor.",
    };
  } else if (percentage >= 30) {
    return {
      character: "Merry Brandybuck",
      description:
        "Meraklı ve öğrenmeye açık! Shire'ın sınırlarını keşfetmeye hazırsınız.",
    };
  } else {
    return {
      character: "Pippin Took",
      description:
        "Genç ve deneyimsiz ama cesaretli! Orta Dünya maceralarınız daha yeni başlıyor.",
    };
  }
}

// History Functions
function showHistory() {
  document.querySelector(".container").style.display = "none";
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("resultsContainer").style.display = "none";
  document.getElementById("historyContainer").style.display = "block";

  createHistoryHTML();
}

function createHistoryHTML() {
  const history = getQuizHistory();
  const stats = getQuizStats();

  const historyContainer = document.getElementById("historyContainer");

  let historyHTML = `
        <div class="quiz-header fade-in">
            <button class="back-button" onclick="showHomeScreen()">← Geri</button>
            <div class="progress-container">
                <h2 style="color: #D4AF37; text-align: center; font-family: 'Cinzel', serif;">📊 Quiz Geçmişi</h2>
            </div>
            ${
              history.length > 0
                ? '<button class="back-button" onclick="confirmClearHistory()">Temizle</button>'
                : ""
            }
        </div>
    `;

  if (stats.totalAttempts > 0) {
    historyHTML += `
            <div class="stats-container fade-in">
                <div class="stat-item">
                    <div class="stat-number">${stats.totalAttempts}</div>
                    <div class="stat-label">Toplam Deneme</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-number">${stats.bestScore.percentage}%</div>
                    <div class="stat-label">En İyi Skor</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <div class="stat-number">${stats.averagePercentage}%</div>
                    <div class="stat-label">Ortalama</div>
                </div>
            </div>
        `;
  }

  if (history.length === 0) {
    historyHTML += `
            <div class="result-message slide-up" style="margin-top: 50px;">
                <div class="result-emoji">📊</div>
                <h2 class="result-title">Henüz Quiz Çözmemişsiniz</h2>
                <p class="result-text">İlk quiz'inizi çözdüğünüzde geçmişiniz burada görünecek.</p>
                <button class="start-button" onclick="startQuiz()" style="margin-top: 20px;">
                    <span class="button-gradient">🎯 Quiz'e Başla</span>
                </button>
            </div>
        `;
  } else {
    historyHTML += '<div class="history-list">';

    history.forEach((attempt, index) => {
      const scoreColor = getScoreColor(attempt.percentage);
      const difficultyIcon = {
        easy: "🍃",
        hard: "⚔️",
        mixed: "🧙‍♂️",
      };
      const difficultyName = {
        easy: "Hobbit",
        hard: "Ranger",
        mixed: "Wizard",
      };

      historyHTML += `
                <div class="result-message slide-up" style="margin-bottom: 20px; border-left: 4px solid ${scoreColor};">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div>
                            <div style="color: #D4AF37; font-weight: 600;">${formatDate(
                              attempt.date
                            )}</div>
                            <div style="color: #B0B0B0; font-size: 0.9rem;">
                                ${new Date(attempt.date).toLocaleTimeString(
                                  "tr-TR",
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                            </div>
                            <div style="color: #B0B0B0; font-size: 0.8rem; margin-top: 5px;">
                                ${difficultyIcon[attempt.difficulty] || "🧙‍♂️"} ${
        difficultyName[attempt.difficulty] || "Wizard"
      }
                            </div>
                        </div>
                        <div style="text-align: center; background: ${scoreColor}; color: #000; padding: 10px 15px; border-radius: 50%; font-weight: 700;">
                            ${attempt.percentage}%
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                        <span>Doğru: <strong>${attempt.score}</strong></span>
                        <span>Yanlış: <strong>${
                          attempt.totalQuestions - attempt.score
                        }</strong></span>
                        <span>Süre: <strong>${Math.round(
                          attempt.duration
                        )}s</strong></span>
                    </div>
                </div>
            `;
    });

    historyHTML += "</div>";
  }

  historyContainer.innerHTML = historyHTML;
}

function getScoreColor(percentage) {
  if (percentage >= 80) return "#4CAF50";
  if (percentage >= 60) return "#D4AF37";
  if (percentage >= 40) return "#FF9800";
  return "#F44336";
}

function confirmClearHistory() {
  if (
    confirm(
      "Tüm quiz geçmişinizi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz."
    )
  ) {
    clearQuizHistory();
    createHistoryHTML();
  }
}

// Social Share Functions
function shareOnTwitter(percentage, character, difficulty) {
  const difficultyText = {
    easy: "Hobbit",
    hard: "Ranger",
    mixed: "Wizard",
  };

  const text = `Lord of the Rings Quiz'de %${percentage} puan aldım! Benim karakterim: ${character} 🧙‍♂️ ${
    difficultyText[difficulty] || "Wizard"
  } seviyesinde! Sen de dene: @mommy__ai`;
  const url = window.location.href;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(url)}`;

  window.open(twitterUrl, "_blank");
}

function copyResultToClipboard(percentage, character, difficulty) {
  const difficultyText = {
    easy: "Hobbit",
    hard: "Ranger",
    mixed: "Wizard",
  };

  const text = `Lord of the Rings Quiz'de %${percentage} puan aldım! Benim karakterim: ${character} 🧙‍♂️ ${
    difficultyText[difficulty] || "Wizard"
  } seviyesinde! Sen de dene: ${window.location.href} @mommy__ai`;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showCopyNotification("Sonuç kopyalandı! 📋");
      })
      .catch(() => {
        fallbackCopyToClipboard(text);
      });
  } else {
    fallbackCopyToClipboard(text);
  }
}

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    showCopyNotification("Sonuç kopyalandı! 📋");
  } catch (err) {
    showCopyNotification("Kopyalama başarısız! 😞");
  } finally {
    document.body.removeChild(textArea);
  }
}

function showCopyNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #8B4513, #D4AF37);
        color: #000;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: 600;
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
    `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Navigation Functions
function showHomeScreen() {
  document.querySelector(".container").style.display = "flex";
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("resultsContainer").style.display = "none";
  document.getElementById("historyContainer").style.display = "none";

  // Refresh stats
  loadStats();
}

// Initialize stats on page load
loadStats();
