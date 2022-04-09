const skills = ["Dev", "DevOps", "Testing"];

for (const skill of skills) {
  console.log(skill.toLowerCase());
}

const result = skills
  .filter((skill) => skill !== "Testing")
  .map((skill) => skill + "!")
  .reduce((a, b) => a + " " + b);

console.log(result);
