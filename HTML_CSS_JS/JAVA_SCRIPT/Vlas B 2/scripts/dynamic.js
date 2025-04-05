// Sample event data
const events = [
    {
        title: "Tech Meetup 2024",
        date: "Jan 15",
        time: "6:00 PM",
        attendees: 45,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=870&auto=format&fit=crop",
        type: "offline"
    },
    {
        title: "Web Development Workshop",
        date: "Jan 20",
        time: "7:00 PM",
        attendees: 32,
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=870&auto=format&fit=crop",
        type: "offline"
    },
    {
        title: "Digital Marketing Conference",
        date: "Jan 25",
        time: "5:30 PM",
        attendees: 58,
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=870&auto=format&fit=crop",
        type: "offline"
    },
    {
        title: "UI/UX Design Meetup",
        date: "Jan 30",
        time: "6:30 PM",
        attendees: 27,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=870&auto=format&fit=crop",
        type: "offline"
    }
];

// Функция создания карточек событий
function createEventCard(event) {
    return `
        <li class="events__uncoming-item">
            <div class="event-card">
                <img src="${event.image}" alt="${event.title}" class="event-card__image">
                <div class="event-card__content">
                    <div class="event-card__date">${event.date} · ${event.time}</div>
                    <h4 class="event-card__title">${event.title}</h4>
                    <div class="event-card__attendees">${event.attendees} attendees</div>
                    <div class="event-card__type">${event.type}</div>
                </div>
            </div>
        </li>
    `;
}

// Функция загрузки событий
function loadEvents() {
    const eventsList = document.querySelector('.events__uncoming-list');
    if (eventsList) {
        const eventsHTML = events.map(event => createEventCard(event)).join('');
        eventsList.innerHTML = eventsHTML;
    }
}

// Функция для обработки анимации при прокрутке
function handleScrollAnimations() {
    // Анимация для всех элементов, кроме about__right-conteiner
    const animatedElements = document.querySelectorAll('.events__uncoming-item, .about__left-conteiner, .invite__left-content, .categories__list-item, .popular-cities__list-item');
    
    // Отдельный observer для about__right-conteiner
    const aboutRightContainer = document.querySelector('.about__right-conteiner');
    const containerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                containerObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Настраиваем начальное состояние и наблюдение за about__right-conteiner
    if (aboutRightContainer) {
        aboutRightContainer.style.opacity = '0';
        aboutRightContainer.style.transform = 'translateX(-250px)';
        aboutRightContainer.style.transition = 'all 0.8s ease-out';
        containerObserver.observe(aboutRightContainer);
    }

    // Observer для остальных элементов (анимация снизу вверх)
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                elementObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Настраиваем начальное состояние и наблюдение за остальными элементами
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(250px)';
        element.style.transition = 'all 0.8s ease-out';
        elementObserver.observe(element);
    });
}

// Загружайте события и инициализируйте анимацию, когда DOM полностью загружен.
document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    handleScrollAnimations();
});
