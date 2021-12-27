const hello = async () => {
  try {
    return "Hello !!!";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  hello,
};
