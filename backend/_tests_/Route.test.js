const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");
const request = supertest(app);
const { MongoMemoryServer } = require("mongodb-memory-server");
const Review = require("../models/review.model");
const User = require("../models/user.model");

let mongoServer;
async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  //console.log(collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
}

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
});

afterAll(async () => {
  await removeAllCollections();
  await mongoose.disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
});

describe("Tests the test environment", () => {
  it("Tests if Jest works", () => {
    expect(1).toBe(1);
  });

  it("Gets the test endpoint", async () => {
    // Sends GET Request to /test endpoint
    //when
    const response = await request.get("/api/test");

    //then
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
  });
});

describe("Testing /api/review endpoint for POST requests", () => {
  it("Does not allow unauthorized user to post a review", async () => {
    //Given
    const newReview = {
      title: "Barbie",
      content: "Sentimental",
      movie_id: "123456789",
      reviewer: "12345678910",
      reviewer_name: "Éva",
      picture: "Some picture URL",
    };

    const response = await request.post("/api/review").send(newReview);

    const reviews = await Review.find();
    expect(response.status).toBe(401);
    expect(response.text).toBe("Access denied");
  });
});

describe("Tests for api/review endpoint for GET requests", () => {
  it("Sends an empty array as response if GET request arrives when db is empty", async () => {
    // given an empty db
    //when
    const response = await request.get("/api/review");

    //then
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([]);
  });
});
