const timelineData = {
  scratch: {
    title: "SCRATCH PERIOD",

    // NEW: description segments matching each media item
    descriptions: [
      "In 2018, when I was 9 years old, I made my first game in Scratch. It was an extremely simple game to make and play, with the goal was to move a balloon to a target. The goal didn’t actually work, since I never got around to it, but the movement did. This was my first real step into game development.",

      "After that first attempt, I kept experimenting in Scratch and made more games. Many were remixes, which for those who don't know basically meant copying other people’s projects and modifying them, but for some projects I did make my own code. One of my first original projects was named “Explorer”, having seen and being inspired by Ready Player One. I saw the 1980 Atari game “Adventure” in the movie, and at the time I didn’t realize it was a real game. Wanting to make it a real game, I tried making my own version in scratch.",

      "When I made Explorer, it used simple movement and collision logic. I color coded the walls, and made it so that if the player is touching a specific color then it should either treat it like a wall or a portal. I didn't know how to make the player bounce off the walls or react any other way at the time, so this was a reccuring thing that happened in a lot of my games. Since the portals were also color coded, I had the player change the background image depending on what color they were touching. This is why each portal is differently colored. I also added some code that made the player character greet the player by their username, however at the time, I didn’t yet know how to merge text properly in code, therefor when they address the player, its in a completely new text bubble.",

      "When I made Explorer, it used simple movement and collision logic. I color coded the walls, and made it so that if the player is touching a specific color then it should either treat it like a wall or a portal. I didn't know how to make the player bounce off the walls or react any other way at the time, so this was a reccuring thing that happened in a lot of my games. Since the portals were also color coded, I had the player change the background image depending on what color they were touching. This is why each portal is differently colored. I also added some code that made the player character greet the player by their username, however at the time, I didn’t yet know how to merge text properly in code, therefor when they address the player, its in a completely new text bubble.",

      "Later, I also tried to make another project. This one was named “Twilight,” a short platformer, where you play as a rolling ball named James with the ability to jump and bounce off walls, that one day goes on a walk before finding out the military has messed up his path, and then he goes and investigates. This was a bit more ambitious than my usual games at that time, since I had not ever done wall jumping before, and didn't know how to. Of course, I did manage to figure it out in the end though, but I never actually finished making the game.",

      "Over the course of several more undertale fangames and Rainbow Cat entries, I stopped working in scratch for a while, until one day I decided to return. Having recentally become interested in the original doom and how it worked, I ended up finding out the technology behind it was named Raycasting, and coincidentally a tutorial for scratch to make a raycasting engine was just released a few days ago. Following this tutorial, pushing the Scratch engine to its limits, I began working on my 'Doom Inspired Game'.",

      "Before making my doom inspired game, I had a concept for a game called Voyage, inspired by music I made for the before it even existed. I built an in depth story for it but kept changing major plot points until I eventually gave up on the idea out of fustration. When I later started my first attempt at the first person shooter in Scratch, I told myself I didn’t want any story at all. If you’ve looked at Devastation on the my works section, you would know that didn’t go as planned. I kept refining my game, improving gameplay and graphics while removing the second map to focus on the first level. I added enemies, made them spawn in waves, weapon switching, progression to a second area, and mouse controlled camera movement. Eventually, I moved development to Turbowarp, a modified Scratch engine, for more control and better performance.",
    ],

    media: [
      { type: "image", src: "assets/scratch1.png", caption: "My first game, 'Untitled 1' - 11 Dec 2018" },
      { type: "video", src: "https://www.youtube.com/embed/_fHAuaoTZAE?autoplay=1&mute=1&loop=1&playlist=_fHAuaoTZAE", caption: "Maze game 'Explorer' - 24 Jul 2020" },
      { type: "image", src: "assets/scratch3.png", caption: "Code for 'Explorer' - 24 Jul 2020" },
      { type: "image", src: "assets/scratch4.png", caption: "Top:\n Original opening speech Code for 'Explorer', did not know how to merge two texts together, so instead it would say your username seperately.\nBottom:\n Example of merging three text items to add the username in the middle." },
      { type: "video", src: "https://www.youtube.com/embed/xSHVbrAASTs?autoplay=1&mute=1&loop=1&playlist=xSHVbrAASTs", caption: "Short Platformer Game 'Twilight' - 17 Dec 2020" },
      { type: "video", src: "https://www.youtube.com/embed/CcKBA4FVPhI?autoplay=1&mute=1&loop=1&playlist=CcKBA4FVPhI", caption: "First Version of my First Person Shooter game 'Devastation' - 15 May 2022" },
      { type: "video", src: "https://www.youtube.com/embed/lWiwtXKkI3k?autoplay=1&mute=1&loop=1&playlist=lWiwtXKkI3k", caption: "Latest Version of my First Person Shooter game 'Devastation' - 9 Feb 2023" }
    ],
  },

  roblox: {
    title: "ROBLOX PERIOD",

    // No segments yet — fallback to this full description
    description: `In 2020, I started using Roblox Studio, having played roblox a lot and enjoyed it. So, I wanted to make my own game. I ended up taking a bunch of free assets and putting them on the default baseplate, and this resulted in my first "game", the noobs are in minecraft. I wasn't as interested in programming my own games, rather making maps for them. So, while I kept updating the noobs are in minecraft, I made another game based off one of my obsessions at the time, SCP. The entire concept of the game was to walk around, explore, and test multiple "SCP's", anomalies that break many rules of nature.`,

    media: [
      { type: "image", src: "assets/Roblox1.png", caption: "The Noobs are In Minecraft" },
      { type: "video", src: "https://youtube.com", caption: "Video of gameplay footage of my SCP Game" }
    ],
  },
};

let currentPeriod = null;
let currentMediaIndex = 0;

// Hover to switch periods
document.querySelectorAll(".timeline-point").forEach(point => {
  point.addEventListener("mouseenter", () => {
    currentPeriod = point.dataset.period;
    currentMediaIndex = 0;
    updateContent();
  });
});

// Previous media
document.getElementById("prev-img").addEventListener("click", () => {
  if (!currentPeriod) return;
  const media = timelineData[currentPeriod].media;
  currentMediaIndex = (currentMediaIndex - 1 + media.length) % media.length;
  updateMedia();
});

// Next media
document.getElementById("next-img").addEventListener("click", () => {
  if (!currentPeriod) return;
  const media = timelineData[currentPeriod].media;
  currentMediaIndex = (currentMediaIndex + 1) % media.length;
  updateMedia();
});

// Update text + media
function updateContent() {
  const data = timelineData[currentPeriod];
  document.getElementById("period-title").textContent = data.title;
  updateMedia();
}

// Update image OR video + description
function updateMedia() {
  const container = document.getElementById("media-container");
  const data = timelineData[currentPeriod];
  const media = data.media[currentMediaIndex];

  container.innerHTML = ""; // Clear previous content

  // Media element
  if (media.type === "image") {
    const img = document.createElement("img");
    img.src = media.src;
    img.alt = media.caption;
    container.appendChild(img);
  }

  if (media.type === "video") {
    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.height = "400px";
    iframe.style.border = "none";
    container.appendChild(iframe);
  }

  // Caption
  const captionEl = document.getElementById("image-caption");
  captionEl.style.whiteSpace = "pre-line";
  captionEl.textContent = media.caption;

  // Description (segmented or fallback)
  const descEl = document.getElementById("period-description");

  if (data.descriptions && data.descriptions[currentMediaIndex]) {
    descEl.textContent = data.descriptions[currentMediaIndex];
  } else {
    descEl.textContent = data.description || "";
  }
}
