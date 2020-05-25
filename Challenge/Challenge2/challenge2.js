var sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"

console.log(sentence);

var temp = new Array();

temp = sentence.split("$");

console.log(temp);

console.log(temp.join());

console.log(temp.join(" "));

var newsentence = temp.join(" ");

console.log(newsentence);

document.write(newsentence);