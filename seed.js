const { db } = require("./server/db");
const Campuses = require("./server/db/models/campuses");
const Students = require("./server/db/models/Students");

const seed = async () => {
  try {
    await db.sync({ force: true });

    const campuses = [
      {
      name: "kyoto school",
      imageUrl:"https://i.pinimg.com/736x/65/87/43/65874357682db15fd233f1bd3f091419.jpg",
      address:"Kyoto",
      description:"Kyoto Jujutsu secondary school, Kyoto Japan",
      id: 2,
      },
      {
      name: "jujutsu high",
      imageUrl:"https://i.pinimg.com/736x/65/87/43/65874357682db15fd233f1bd3f091419.jpg",
      address:"Jujutsu High",
      description:"Here you will be trained by the strongest sorcerer",
      id: 1,
      },
      {
      name: "dagons domain",
      imageUrl:"https://i.redd.it/5z24cv19kos71.jpg",
      address:"Somewhere in the inate domain of a cursed spirit, lies the cursed user suguru geto",
      description:"The domain expansion of a widdle fishy boy",
      id: 3,
      },
    ];

    const students = [
      {
      firstName: "Yuji ",
      lastName: "Itadori",
      imageUrl: "https://staticg.sportskeeda.com/editor/2022/01/cbc36-16421825565301-1920.jpg",
      gpa:"2",
      email:"Itadori.yuji@yahoo.com",
      campus:{
        name: "jujutsu high",
      },
      campusId: "1",
      id: 1,
      },
      {
      firstName: "Megumi ",
      lastName: "Fushigoro",
      imageUrl: "https://media.comicbook.com/2021/03/jujutsu-kaisen-megumi-domain-expansion-chimera-shadow-garden-ani-1261217.jpeg?auto=webp",
      gpa: 3,
      email:"Megumi@yahoo.com",
      campus:{
        name: "jujutsu high",
      },
      campusId: "1",
      id: 2,
      },
      {
      firstName: "Nobara ",
      lastName: "Kugisaki",
      imageUrl: "https://www.spieltimes.com/wp-content/uploads/2023/05/nobara-ep-24.png",
      gpa: "3",
      email:"Nobara@gmail.com",
      campus:{
        name:"jujutsu high",
      },
      campusId: 1,
      id: 3,
    },
    {
      firstName: "Panda ",
      lastName: "Panda",
      imageUrl: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/a1/Panda%27s_knuckle_bracers_%28Anime%29.png/revision/latest?cb=20210318233033",
      gpa:"3",
      email:"Panda@gmail.com",
      campus:{
        name:"kyoto school",
      },
      campusId: "2",
      id: 4,
    },
    ];

    // seed your database here!
    await Promise.all(
      campuses.map((campus) => {
        return Campuses.create(campus);
      })
    );

    await Promise.all(
      students.map((student) => {
        return Students.create(student);
      })
    );
  } catch (err) {
       console.error(err);
  }
};

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
  try {
    await seed();
    console.log("Seeding success!");
  } catch (err) {
    console.error("Oh no! Something went wrong!");
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}