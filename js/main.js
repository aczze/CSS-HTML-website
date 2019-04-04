var maxRate = 5;

var movies = {
  list: [
  {stars: 4.5,
  name: "Da Vinci Code",
  have_seen: false},

  {stars: 4,
  name: "Forest Gump",
  have_seen: true},

  {stars: 5,
  name: "Matrix",
  have_seen: false},

  {stars: 3,
  name: "Yo Yo.",
  have_seen: true},

],
};

for (var i = 0; i < movies.list.length; i++) {

  if (movies.list[i].have_seen == true) {
    console.log("You have seen " + movies.list[i].name + " which has rate " + movies.list[i].stars +"/" + maxRate);

  }
  else {
    console.log("You have not seen" + movies.list[i].name + "which has rate " + movies.list[i].stars + "/" + maxRate);
  }

}
console.log(movies.list[0].have_seen);
