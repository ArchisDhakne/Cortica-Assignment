

const Students = async (req, res) => {
  const { className } = req.params;

  try {
    // Fetch users with role "student" and the specified class
    const students = await userModel.find({ role: 'student', class: className });

    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found for this class' });
    }

    res.status(200).json({ students });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default Students;