module.exports = {
  format_title: (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1);
  },
  format_lowerCase: (word) => {
    if (Array.isArray(word)) {
      word.map((element) => {
        return JSON.stringify(element.toLowerCase());
      });
    } else if (word) {
      return word.toLowerCase();
    }
  }
};
