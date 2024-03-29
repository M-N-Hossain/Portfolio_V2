const coder = {
  name: "Md Nayeem Hossain",
  skils: [
    "Java","JavaScript","TypeScript","React","React-Native",
    "Express.js","Spring Boot","MySql","MongoDB","Docker","AWS","ETC",
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5;
  },
};


