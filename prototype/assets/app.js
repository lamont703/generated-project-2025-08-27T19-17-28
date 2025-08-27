// Dummy data simulation
const dummyData = JSON.parse('[{"title": "Item 1", "description": "Description for Item 1"}, {"title": "Item 2", "description": "Description for Item 2"}]');

const contentArea = document.getElementById('content');

dummyData.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
    contentArea.appendChild(itemElement);
});