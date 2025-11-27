// =======================
//  STEP 1: IMPORTS & SETUP
// =======================

require("dotenv").config();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("[STEP 1 COMPLETED] Connected to MongoDB"))
  .catch((err) => console.error("Connection error:", err));

// =======================
//  STEP 2: PERSON SCHEMA
// =======================

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

// =======================
//  STEP 3: CREATE & SAVE
// =======================

const createAndSavePerson = async (done) => {
  try {
    const person = new Person({
      name: "Oussama",
      age: 21,
      favoriteFoods: ["Pizza", "Makloub"],
    });

    const data = await person.save();
    console.log("[STEP 3 COMPLETED] Person saved");
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// =======================
//  STEP 4: CREATE MANY
// =======================

const arrayOfPeople = [
  { name: "John", age: 25, favoriteFoods: ["Burger", "Pasta"] },
  { name: "Mary", age: 30, favoriteFoods: ["Salad", "Fish"] },
  { name: "Sam", age: 20, favoriteFoods: ["Burritos"] },
];

const createManyPeople = async (arrayOfPeople, done) => {
  try {
    const data = await Person.create(arrayOfPeople);
    console.log("[STEP 4 COMPLETED] Many people created");
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// =======================
//  STEP 5: FIND BY NAME
// =======================

const findPeopleByName = async (personName, done) => {
  try {
    const data = await Person.find({ name: personName });
    console.log("[STEP 5 COMPLETED] People found");
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// =======================
//  STEP 6: FIND ONE BY FOOD
// =======================

const findOneByFood = async (food, done) => {
  try {
    const data = await Person.findOne({ favoriteFoods: food });
    console.log("[STEP 6 COMPLETED] Person found by food");
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// =======================
//  STEP 7: FIND BY ID
// =======================

const findPersonById = async (id, done) => {
  try {
    const data = await Person.findById(id);
    console.log("[STEP 7 COMPLETED] Person found");
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// =======================
//  STEP 8: UPDATE FAVORITE FOOD
// =======================

const updateFavoriteFoods = async (id, done) => {
  try {
    const person = await Person.findById(id);
    person.favoriteFoods.push("hamburger");

    const updated = await person.save();
    console.log("[STEP 8 COMPLETED] Favorite foods updated");
    done(null, updated);
  } catch (err) {
    done(err);
  }
};

// =======================
//  STEP 9: FIND ONE & UPDATE
// =======================

const updatePersonAge = async (personName, done) => {
  try {
    const updated = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );

    console.log("[STEP 9 COMPLETED] Age updated");
    done(null, updated);
  } catch (err) {
    done(err);
  }
};

// =======================
//  STEP 10: DELETE BY ID
// =======================

const deletePersonById = async (id, done) => {
  try {
    const removed = await Person.findByIdAndDelete(id);
    console.log("[STEP 10 COMPLETED] Person deleted");
    done(null, removed);
  } catch (err) {
    done(err);
  }
};

// =======================
//  STEP 11: DELETE MANY
// =======================

const deleteManyMary = async (done) => {
  try {
    const result = await Person.deleteMany({ name: "Mary" });
    console.log("[STEP 11 COMPLETED] Many Marys deleted");
    done(null, result);
  } catch (err) {
    done(err);
  }
};

// =======================
//  STEP 12: CHAIN QUERY
// =======================

const chainQuery = async (done) => {
  try {
    const data = await Person.find({ favoriteFoods: "burritos" })
      .sort("name")
      .limit(2)
      .select("-age");

    console.log("[STEP 12 COMPLETED] Query executed");
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Export functions
module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  updateFavoriteFoods,
  updatePersonAge,
  deletePersonById,
  deleteManyMary,
  chainQuery,
};
