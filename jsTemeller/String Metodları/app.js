let value;

const firstname = "selçuk";
const lastname = "akarın";
const lang = "Java,c#,c";

value = firstname + " " + lastname;

value = "Selçuk AKARIN"

value += " Deneme"; // value=value+" Deneme";

value = firstname.length;

value = firstname.concat(" ", lastname, " denemeler denemeler");

value = firstname.toLowerCase();

value = firstname.toUpperCase();

value = firstname[0];
value = firstname[4];
value = firstname[firstname.length - 1];

// index of

value = firstname.indexOf("l");
value = firstname.indexOf("q"); // -1 döner

// char at

value = firstname.charAt(0);
value = firstname.charAt(firstname.length - 1);

// split

value = lang.split(",");

// replace

value = lang.replace("Java", "python");

// includes

value = lang.includes("Java");
value = lang.includes("css");

console.log(value);