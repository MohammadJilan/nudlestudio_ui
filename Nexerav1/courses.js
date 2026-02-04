const coursesData = [
    {
        id: 1,
        title: 'Introduction to Electronics',
        category: 'Engineering',
        description: 'Learn the fundamentals of circuits, resistors, and electronic components.',
        lessons: 24,
        hours: 8,
        progress: 65,
        status: 'in-progress',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        id: 2,
        title: 'Advanced Mathematics',
        category: 'Mathematics',
        description: 'Master calculus, linear algebra, and differential equations.',
        lessons: 32,
        hours: 12,
        progress: 45,
        status: 'in-progress',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        id: 3,
        title: 'Physics Fundamentals',
        category: 'Science',
        description: 'Explore mechanics, thermodynamics, and electromagnetism.',
        lessons: 28,
        hours: 10,
        progress: 80,
        status: 'in-progress',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        id: 4,
        title: 'Chemistry Basics',
        category: 'Science',
        description: 'Understanding atomic structure, chemical bonds, and reactions.',
        lessons: 20,
        hours: 7,
        progress: 100,
        status: 'completed',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
        id: 5,
        title: 'Computer Science 101',
        category: 'Technology',
        description: 'Introduction to programming, algorithms, and data structures.',
        lessons: 30,
        hours: 15,
        progress: 100,
        status: 'completed',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        id: 6,
        title: 'Mechanical Engineering',
        category: 'Engineering',
        description: 'Study mechanics, materials, and machine design.',
        lessons: 26,
        hours: 9,
        progress: 0,
        status: 'upcoming',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
        id: 7,
        title: 'Biology Essentials',
        category: 'Science',
        description: 'Discover cell biology, genetics, and human anatomy.',
        lessons: 22,
        hours: 8,
        progress: 0,
        status: 'upcoming',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
    },
    {
        id: 8,
        title: 'Robotics & Automation',
        category: 'Technology',
        description: 'Build and program robots with sensors and actuators.',
        lessons: 18,
        hours: 6,
        progress: 0,
        status: 'upcoming',
        gradient: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)'
    },
    {
        id: 9,
        title: '3D Modeling & Design',
        category: 'Design',
        description: 'Create stunning 3D models and visualizations.',
        lessons: 16,
        hours: 5,
        progress: 30,
        status: 'in-progress',
        gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
    }
];

let currentFilter = 'all';
let currentSort = 'recent';

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');
    const searchInput = document.getElementById('course-search');

    renderCourses();

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderCourses();
        });
    });

    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        renderCourses();
    });

    searchInput.addEventListener('input', () => {
        renderCourses();
    });
});

function renderCourses() {
    const grid = document.getElementById('all-courses-grid');
    const searchInput = document.getElementById('course-search');
    const searchTerm = searchInput.value.toLowerCase();

    let filteredCourses = coursesData;

    if (currentFilter !== 'all') {
        filteredCourses = filteredCourses.filter(course => course.status === currentFilter);
    }

    if (searchTerm) {
        filteredCourses = filteredCourses.filter(course =>
            course.title.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm)
        );
    }

    if (currentSort === 'progress') {
        filteredCourses.sort((a, b) => b.progress - a.progress);
    } else if (currentSort === 'name') {
        filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (filteredCourses.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: #6b7280; grid-column: 1/-1; padding: 40px;">No courses found</p>';
        return;
    }

    grid.innerHTML = filteredCourses.map(course => `
        <div class="course-card-full">
            <div class="course-banner" style="background: ${course.gradient};">
                <div class="course-status-badge ${course.status}">${formatStatus(course.status)}</div>
            </div>
            <div class="course-body">
                <div class="course-category">${course.category}</div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-stats">
                    <div class="course-stat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                        </svg>
                        ${course.lessons} lessons
                    </div>
                    <div class="course-stat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"/>
                        </svg>
                        ${course.hours} hours
                    </div>
                </div>
                ${course.progress > 0 ? `
                    <div class="course-progress-section">
                        <div class="progress-label">
                            <span>Progress</span>
                            <span>${course.progress}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${course.progress}%;"></div>
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function formatStatus(status) {
    return status.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
