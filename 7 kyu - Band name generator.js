function bandNameGenerator(str) {
   if (str[0] === str[str.length - 1]) {
      return str[0].toUpperCase() + str.slice(1, str.length).repeat(2)
   } else return 'The ' + str[0].toUpperCase() + str.slice(1)
}