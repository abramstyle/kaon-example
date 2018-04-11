function db() {
  const faker = require('faker');

  const posts = [];
  const comments = [];
  for (i = 0; i < 1000; ++i) {
    comments.push({
      id: faker.random.uuid(),
      title: faker.random.words(5, 10),
      author: faker.name.findName(),
      date: faker.date.between(new Date('01-01-2010'), new Date('12-31-2018')),
      content: faker.random.words(10, 30),
    });
    posts.push({
      id: faker.random.uuid(),
      title: faker.random.words(5, 10),
      author: faker.name.findName(),
      date: faker.date.between(new Date('01-01-2010'), new Date('12-31-2018')),
      content: faker.random.words(100, 300),
      liked: faker.random.number(100, 500),
      comments: faker.random.number(50, 500),
    });
  }

  return {
    posts,
    comments,
  };
}

module.exports = db;
