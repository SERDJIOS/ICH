const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2000&auto=format&fit=crop&border-radius=16&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&fit=crop&crop=entropy&cs=tinysrgb",
    style: {
      borderRadius: '12px',
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=2000&auto=format&fit=crop&border-radius=16&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&fit=crop&crop=entropy&cs=tinysrgb",
    style: {
      borderRadius: '12px',
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=2000&auto=format&fit=crop&border-radius=16&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&fit=crop&crop=entropy&cs=tinysrgb",
    style: {
      borderRadius: '12px',
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=2000&auto=format&fit=crop&border-radius=16&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&fit=crop&crop=entropy&cs=tinysrgb",
    style: {
      borderRadius: '12px',
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=2000&auto=format&fit=crop&border-radius=16&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&fit=crop&crop=entropy&cs=tinysrgb",
    style: {
      borderRadius: '12px',
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=2000&auto=format&fit=crop&border-radius=16&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&fit=crop&crop=entropy&cs=tinysrgb",
    style: {
      borderRadius: '12px',
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=2000&auto=format&fit=crop&border-radius=16&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&fit=crop&crop=entropy&cs=tinysrgb",
    style: {
      borderRadius: '12px',
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=2000&auto=format&fit=crop&border-radius=16&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&fit=crop&crop=entropy&cs=tinysrgb",
    style: {
      borderRadius: '12px',
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  }
];

function formatDate(date) {
  const options = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: '2-digit',
    timeZone: 'America/Los_Angeles'
  };
  return date.toLocaleString('en-US', options).replace(/,/g, ' ·') + ' PDT';
}

function createEventCard(event) {
  return `
    <li class="events__list-item">
      <div class="events__img" style="background-image: url('${event.image}')">
        ${event.type === 'online' ? '<div class="events__online">Online Event</div>' : ''}
      </div>
      <div class="events__text">
        <p class="events__date--mobile">${formatDate(event.date)}</p>
        <h3 class="events__title">${event.title}</h3>
        <div class="events__location">${event.category} (${event.distance} km)</div>
        <p class="events__date--desktop">${formatDate(event.date)}</p>
        ${event.attendees ? `
        <div class="events__status--mobile">
          <div>${event.attendees} going</div>
        </div>
        ` : ''}
      </div>
    </li>
  `;
}

function renderEvents() {
  const eventsList = document.querySelector('.events__near-list');
  if (eventsList) {
    eventsList.innerHTML = eventsStore.map(event => createEventCard(event)).join('');
  }
}

document.addEventListener('DOMContentLoaded', renderEvents);

// кнопки «Вернуться наверх»
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Добавляем обработчик для кнопки "See all events"
document.querySelector('.events__button').addEventListener('click', () => {
  window.location.href = 'events.html';
});