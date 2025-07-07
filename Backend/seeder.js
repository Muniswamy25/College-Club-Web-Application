
const mongoose = require('mongoose');
const Event = require('./eventschema');

mongoose.connect('mongodb://localhost:27017/collegeclub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  await Event.insertMany([
    {
      title: "Tech Talk",
      description: "A monthly series of talks by industry experts to share their journey and knowledge.",
      date: "2025-07-15",
      image: "tech_talk.jpg",
      link: "techtalk.html"
    },
    {
      title: "Hackathon",
      description: "A 24-hour coding challenge for students to build innovative tech solutions.",
      date: "2025-08-05",
      image: "hackathon.jpg",
      link: "hack.html"
    },
    {
      title: "Sports Day",
      description: "A fun-filled event promoting teamwork, fitness, athletic activities and games.",
      date: "2025-08-29",
      image: "sports.jpg",
      link: "sports.html"
    },
    {
      title: "Science Fair",
      description: "Our biggest celebration featuring music, dance, fun, and competitions.",
      date: "2025-09-20",
      image: "innovation.png",
      link: "science.html"
    },
    {
      title: "UTSAV 2025 - Cultural Fest,",
      description: "Utsav 2025 celebrates vibrant traditions with music, dance, drama, and cultural showcases.",
      date: "2025-10-25",
      image: "cultural.jpg",
      link: "cultural.html"
    },
    {
      title: "Food Fest",
      description: "An event celebrating cuisine, often featuring culinary, foods, fun, and competitions.",
      date: "2025-11-17",
      image: "food_fest.jpg",
      link: "food.html"
    }
  ]);
  console.log('Seeded successfully');
  mongoose.disconnect();
});
