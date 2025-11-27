# Mongoose Checkpoint — README

This project is a **MongoDB + Mongoose checkpoint** that demonstrates the most common database operations used in Node.js applications. It includes:

* Connecting to MongoDB Atlas using Mongoose
* Creating a schema and model
* Creating, reading, updating, and deleting documents (CRUD)
* Using query helpers (sort, limit, select)
* Testing functions individually

---

## 📦 Requirements

Before running the project, make sure you have installed:

* **Node.js** and **npm**
* A **MongoDB Atlas** account
* A **connection URI** from MongoDB Atlas

---

## 📁 Project Structure

```
Mongoose/
│
├── mongoose-checkpoint.js   # Main file with all steps
├── .env                      # Contains MongoDB URI
└── README.md                 # You are reading this
```

---

## ⚙️ Installation

1. Clone or download this repository

2. Install dependencies:

```bash
npm install mongoose dotenv
```

3. Create a `.env` file in the root folder:

```
MONGO_URI=your_mongodb_atlas_uri_here
```

4. Make sure your URI looks like:

```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/<yourDB>?retryWrites=true&w=majority
```

---

## ▶️ Running the Project

To test the first step (create and save a person), simply run:

```bash
node mongoose-checkpoint.js
```

You should see:

```
[STEP 1 COMPLETED] Connected to MongoDB
[STEP 3 COMPLETED] Person saved
```

---

## 🧪 Testing Other Steps

Each operation is stored as a function. You can temporarily call any function at the bottom of `mongoose-checkpoint.js`.

### ✔ Example: Find all people named "John"

```js
findPeopleByName("John", (err, data) => {
  console.log(data);
});
```

### ✔ Example: Update age

```js
updatePersonAge("Oussama", (err, data) => {
  console.log(data);
});
```

### ✔ Example: Delete a person by ID

```js
deletePersonById("<id_here>", (err, data) => {
  console.log(data);
});
```

You can enable/disable any test by commenting or uncommenting.

---

## 🧠 What This Checkpoint Teaches You

* How to structure models in Mongoose
* How CRUD operations work
* How to use callbacks (or promises if upgraded)
* How to connect to MongoDB Atlas
* How to debug connection issues

---

## 🌐 Useful Links

* Mongoose Docs — [https://mongoosejs.com](https://mongoosejs.com)
* MongoDB Atlas — [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

---

## 📌 Notes

* This project uses **Mongoose 8**, so callbacks must be replaced with promises if updated.
* Make sure your Atlas IP whitelist allows connections from `0.0.0.0/0` or your local IP.

---

If you'd like, I can also:

✅ Add a test menu (CLI)
✅ Convert all callbacks to promises
✅ Add Git instructions (push / commit / branch setup)

Just tell me!
