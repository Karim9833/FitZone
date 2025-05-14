document.addEventListener('DOMContentLoaded', () => {
    const workouts = [
      "10-minute jog + 3 sets of squats + planks",
      "20 jumping jacks + push-ups + crunches",
      "3 rounds of burpees, lunges, and mountain climbers",
      "Bike 15 minutes + bicep curls + leg press",
      "Stretching + yoga poses + deep breathing"
    ];
  
    const categories = [
      { name: "Cardio", description: "Endurance & heart health" },
      { name: "Strength", description: "Build muscle mass & tone" },
      { name: "Flexibility", description: "Improve range of motion" },
      { name: "Core", description: "Stability & posture" }
    ];
  
    const btn = document.getElementById("generateBtn");
    const output = document.getElementById("generatedWorkout");
    const categoryDiv = document.getElementById("categoriesContainer");
  
    // Event Listener
    btn.addEventListener("click", () => {
      const index = Math.floor(Math.random() * workouts.length);
      output.textContent = workouts[index];
    });
  
    // Populate categories using loop
    for (let i = 0; i < categories.length; i++) {
      const box = document.createElement("div");
      box.className = "category-box";
      box.innerHTML = `<h3>${categories[i].name}</h3><p>${categories[i].description}</p>`;
      categoryDiv.appendChild(box);
    }
  });
  