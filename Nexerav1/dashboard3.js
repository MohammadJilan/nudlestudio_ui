// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const vrButton = document.getElementById('vr-button');
    const vrModal = document.getElementById('vr-modal');
    const closeVrModal = document.getElementById('close-vr-modal');

    if (vrButton) {
        vrButton.addEventListener('click', () => {
            vrModal.classList.add('active');
        });
    }

    if (closeVrModal) {
        closeVrModal.addEventListener('click', () => {
            vrModal.classList.remove('active');
        });
    }

    // Close modal on outside click
    vrModal.addEventListener('click', (e) => {
        if (e.target === vrModal) {
            vrModal.classList.remove('active');
        }
    });

    // Navigation between pages
    const viewChallengesBtn = document.getElementById('view-challenges-btn');
    const viewCollectablesBtn = document.getElementById('view-collectables-btn');
    const backFromChallenges = document.getElementById('back-from-challenges');
    const backFromCollectables = document.getElementById('back-from-collectables');

    const mainDashboard = document.getElementById('main-dashboard');
    const challengesPage = document.getElementById('challenges-page');
    const collectablesPage = document.getElementById('collectables-page');

    if (viewChallengesBtn) {
        viewChallengesBtn.addEventListener('click', () => {
            mainDashboard.style.display = 'none';
            challengesPage.style.display = 'block';
            collectablesPage.style.display = 'none';
        });
    }

    if (viewCollectablesBtn) {
        viewCollectablesBtn.addEventListener('click', () => {
            mainDashboard.style.display = 'none';
            challengesPage.style.display = 'none';
            collectablesPage.style.display = 'block';
        });
    }

    if (backFromChallenges) {
        backFromChallenges.addEventListener('click', () => {
            mainDashboard.style.display = 'block';
            challengesPage.style.display = 'none';
        });
    }

    if (backFromCollectables) {
        backFromCollectables.addEventListener('click', () => {
            mainDashboard.style.display = 'block';
            collectablesPage.style.display = 'none';
        });
    }

    // Course tabs
    const courseTabs = document.querySelectorAll('.course-tab');
    courseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            courseTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Initialize courses grid with sample data
    const coursesGrid = document.getElementById('courses-grid');
    if (coursesGrid) {
        const sampleCourses = [
            {
                title: 'Electronics Fundamentals',
                subject: 'Electronics',
                progress: 45,
                image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
                title: 'Advanced Circuit Design',
                subject: 'Electronics',
                progress: 20,
                image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
        ];

        coursesGrid.innerHTML = sampleCourses.map(course => `
            <div class="course-card">
                <div class="course-image" style="background-image: url('${course.image}')"></div>
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <p class="course-meta">${course.subject}</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${course.progress}%"></div>
                    </div>
                    <p class="progress-text">${course.progress}% complete</p>
                </div>
            </div>
        `).join('');
    }

    // Initialize challenges list
    const challengesList = document.getElementById('challenges-list');
    if (challengesList) {
        const challenges = [
            { title: 'Complete 5 lessons', desc: 'Finish 5 lessons this week', points: 100, locked: false },
            { title: 'Pass 3 quizzes', desc: 'Score 80% or higher on 3 quizzes', points: 150, locked: false },
            { title: 'Study for 2 hours', desc: 'Accumulate 2 hours of study time', points: 200, locked: false },
            { title: 'Weekly champion', desc: 'Complete all weekly challenges', points: 500, locked: true }
        ];

        challengesList.innerHTML = challenges.map(challenge => `
            <div class="challenge-card ${challenge.locked ? 'locked' : ''}">
                <div class="challenge-content">
                    <div class="challenge-title">${challenge.title}</div>
                    <div class="challenge-desc">${challenge.desc}</div>
                </div>
                <div class="challenge-reward">
                    <span>+${challenge.points}</span>
                </div>
            </div>
        `).join('');
    }

    // Initialize collectables grid
    const collectablesGrid = document.getElementById('collectables-grid');
    if (collectablesGrid) {
        const collectables = [
            { name: 'Thunderbolt', rarity: 'legendary', locked: true, image: 'images/thunderbolt.png' },
            { name: 'Phoenix Fire', rarity: 'rare', locked: true, image: 'images/phoenixfire.png' },
            { name: 'Dragon Ice', rarity: 'rare', locked: true, image: 'images/dragonice.png' },
            { name: 'Nudle Bot', rarity: 'common', locked: true, image: 'images/nudlebotemoji.png' }
        ];

        collectablesGrid.innerHTML = collectables.map(item => `
            <div class="collectable-card ${item.locked ? 'locked' : ''}">
                <div class="collectable-image" style="position: relative;">
                    <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;">
                    ${item.locked ? `
                        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); border-radius: 16px; display: flex; align-items: center; justify-content: center;">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"/>
                            </svg>
                        </div>
                    ` : ''}
                </div>
                <h3>${item.name}</h3>
                <span class="rarity-badge ${item.rarity}">${item.rarity}</span>
            </div>
        `).join('');
    }
});
