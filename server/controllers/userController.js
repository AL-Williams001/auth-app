export const test = (req, res) => {
  try {
    res.status(200).json({ message: "Test route working" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
