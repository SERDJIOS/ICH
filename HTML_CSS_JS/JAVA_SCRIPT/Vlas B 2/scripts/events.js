// Store for events
const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
    coordinates: [40.7589, -73.9851]
  },
  {
    title: "NYC AI Users - AI Tech Talks",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
    coordinates: [40.7527, -73.9772]
  },
  {
    title: "Book 40+ Appointments Per Month Using AI",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60",
    type: "online",
    category: "Technology",
    distance: 10
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100
  },
  {
    title: "Over 40s Singles Chat & Dating Community",
    description: "Over 40s Singles Chat & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=60",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74
  },
  {
    title: "All Nations - Manhattan Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&auto=format&fit=crop&q=60",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
    coordinates: [40.7831, -73.9712]
  }
];

//  Переменные 
let map = null;
let markers = [];

function initMap() {
  try {
    // Create map instance
    map = L.map('map').setView([40.7128, -74.0060], 11);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ' OpenStreetMap contributors'
    }).addTo(map);
    
    console.log('Map initialized successfully');
  } catch (error) {
    console.error('Error initializing map:', error);
  }
}

// Отображать события в списке
function displayEvents(events = eventsStore) {
  const eventsList = document.getElementById('eventsList');
  if (!eventsList) {
    console.error('Events list element not found');
    return;
  }

  // Очистить текущие события
  eventsList.innerHTML = '';

  // Добавить новые мероприятия
  events.forEach(event => {
    const eventElement = document.createElement('li');
    eventElement.className = 'event-card';
    
    const date = event.date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    eventElement.innerHTML = `
      <img src="${event.image}" alt="${event.title}" loading="lazy">
      <div class="event-info">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <div class="event-details">
          <span class="date">${date}</span>
          <span class="type">${event.type}</span>
          ${event.distance ? `<span class="distance">${event.distance}km</span>` : ''}
          <span class="category">${event.category}</span>
          ${event.attendees ? `<span class="attendees">${event.attendees} attendees</span>` : ''}
        </div>
      </div>
    `;

    eventsList.appendChild(eventElement);
  });

  // Обновить маркеры карты
  updateMapMarkers(events);
}


function updateMapMarkers(events) {
  if (!map) {
    console.error('Map not initialized');
    return;
  }

  // Очистить существующие маркеры
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];

  // Добавьте новые маркеры для офлайн-событий.
  const offlineEvents = events.filter(event => event.type === 'offline' && event.coordinates);
  
  offlineEvents.forEach(event => {
    const marker = L.marker(event.coordinates)
      .bindPopup(`
        <strong>${event.title}</strong><br>
        ${event.description}<br>
        <small>${event.date.toLocaleString()}</small>
      `)
      .addTo(map);
    
    markers.push(marker);
  });

  // Подогнать границы карты, чтобы отобразить все маркеры
  if (markers.length > 0) {
    const group = new L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
  }
}

// Инициализируем фильтр категории
function initializeCategoryFilter() {
  const categoryFilter = document.getElementById('categoryFilter');
  if (!categoryFilter) return;

  // Получите уникальные категории
  const categories = [...new Set(eventsStore.map(event => event.category))];
  
  // Добавить параметры категории
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Фильтровать мероприятий
function filterEvents() {
  const category = document.getElementById('categoryFilter').value;
  const distance = document.getElementById('distanceFilter').value;
  const type = document.getElementById('typeFilter').value;
  const day = document.getElementById('dayFilter').value;

  let filteredEvents = eventsStore;

  // Применить фильтр категории
  if (category) {
    filteredEvents = filteredEvents.filter(event => event.category === category);
  }

  // Применить фильтр расстояния
  if (distance) {
    filteredEvents = filteredEvents.filter(event => event.distance <= parseInt(distance));
  }

  // Применить фильтр типа
  if (type) {
    filteredEvents = filteredEvents.filter(event => event.type === type);
  }

  // Применить дневной фильтр
  if (day) {
    const [month, dayNum] = day.split('-');
    filteredEvents = filteredEvents.filter(event => {
      return event.date.getMonth() === getMonthNumber(month) &&
             event.date.getDate() === parseInt(dayNum);
    });
  }

  // Отображать отфильтрованные события
  displayEvents(filteredEvents);
}

// Вспомогательная функция для получения номера месяца
function getMonthNumber(month) {
  const months = {
    'mar': 2  // JavaScript months are 0-based
  };
  return months[month.toLowerCase()];
}

// Инициализируйте все при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing...');
  
  // Инициализировать карту
  initMap();
  
  // Инициализировать фильтр категории
  initializeCategoryFilter();
  
  // Отображение начальных событий
  displayEvents();
  
  // Добавить прослушиватели событий фильтра
  const filters = ['category', 'type', 'day'];
  filters.forEach(filter => {
    const element = document.getElementById(`${filter}Filter`);
    if (element) {
      element.addEventListener('change', filterEvents);
    }
  });

  // Добавить прослушиватель ввода диапазона
  const distanceFilter = document.getElementById('distanceFilter');
  const distanceValue = document.getElementById('distanceValue');
  if (distanceFilter && distanceValue) {
    // Обновляем градиент при загрузке
    updateRangeBackground(distanceFilter);
    
    distanceFilter.addEventListener('input', (e) => {
        distanceValue.textContent = e.target.value;
        updateRangeBackground(e.target);
        filterEvents();
    });
  }
  
  console.log('Initialization complete');
});

// Функция для обновления фона range input
function updateRangeBackground(element) {
    const value = (element.value - element.min) / (element.max - element.min) * 100;
    element.style.background = `linear-gradient(to right, #00798a 0%, #00798a ${value}%, #ddd ${value}%, #ddd 100%)`;
}
