// Fetch the cost insights data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Render the cost insights data
    renderCostInsights(data);
  })
  .catch(error => {
    console.error('Error fetching cost insights data:', error);
  });

// Function to render the cost insights data
function renderCostInsights(data) {
  // Render the insights data in the container
  const insightsContainer = document.getElementById('insights-container');
  insightsContainer.innerHTML = `
    <!-- Add your HTML structure for rendering the insights data -->
  `;

  // Update the placeholders in the footer
  document.getElementById('information').textContent = data.information;
  document.getElementById('version').textContent = data.version;
  document.getElementById('developer').textContent = data.developer;
  document.getElementById('support-link').textContent = data.support;
  document.getElementById('support-link').href = data.supportLink;
  document.getElementById('documentation-link').href = data.documentationLink;
  document.getElementById('support-site-link').href = data.supportSiteLink;

  // Render the benefits as a list
  const benefitsList = document.getElementById('benefits');
  data.benefits.forEach(benefit => {
    const listItem = document.createElement('li');
    listItem.textContent = benefit;
    benefitsList.appendChild(listItem);
  });
}