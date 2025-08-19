import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { Edit, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    monthlyPrice: "",
    duration: "",
    image: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axiosInstance.get("/admin/courses");
      if (response.data.success) {
        setCourses(response.data.courses);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCourse) {
        await axiosInstance.put(
          `/admin/courses/${editingCourse._id}`,
          formData
        );
      } else {
        await axiosInstance.post("/admin/courses", formData);
      }
      fetchCourses();
      resetForm();
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };

  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to deactivate this course?")) {
      try {
        await axiosInstance.delete(`/admin/courses/${courseId}`);
        fetchCourses();
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      price: "",
      monthlyPrice: "",
      duration: "",
      image: "",
    });
    setShowForm(false);
    setEditingCourse(null);
  };

  const editCourse = (course) => {
    setFormData({
      title: course.title,
      description: course.description,
      price: course.price,
      monthlyPrice: course.monthlyPrice,
      duration: course.duration,
      image: course.image || "",
    });
    setEditingCourse(course);
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-white p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Courses</h1>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </button>
      </div>

      {/* Course Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-zinc-800 border-zinc-700">
            <div className="mt-3 text-white">
              <h3 className="text-lg font-medium text-white mb-4">
                {editingCourse ? "Edit Course" : "Add New Course"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Course Title"
                  className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
                <textarea
                  placeholder="Course Description"
                  className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
                <input
                  type="number"
                  placeholder="Full Price"
                  className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  required
                />
                <input
                  type="number"
                  placeholder="Monthly Price"
                  className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.monthlyPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, monthlyPrice: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Duration (e.g., 3 months)"
                  className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                  required
                />
                <input
                  type="url"
                  placeholder="Image URL (optional)"
                  className="w-full px-3 py-2 border border-zinc-700 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-700 rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {editingCourse ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Courses Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-zinc-800/50 border border-zinc-700 overflow-hidden shadow-lg rounded-lg">
            {course.image && (
              <img
                className="h-48 w-full object-cover"
                src={course.image}
                alt={course.title}
              />
            )}
            <div className="p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-zinc-400 mb-4">{course.description}</p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-zinc-400">
                    Full Price: ₹{course.price}
                  </p>
                  <p className="text-sm text-zinc-400">
                    Monthly: ₹{course.monthlyPrice}
                  </p>
                  <p className="text-sm text-zinc-400">
                    Duration: {course.duration}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    course.isActive
                      ? "bg-green-900/30 text-green-400 border border-green-500/50"
                      : "bg-red-900/30 text-red-400 border border-red-500/50"
                  }`}>
                  {course.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="flex justify-between items-center space-x-2">
                <div className="text-sm text-zinc-400">
                  <Link
                    to={`/admin/courses/${course._id}/classes`}
                    className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded-md">
                    Add Classes
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => editCourse(course)}
                    className="p-2 text-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="p-2 text-red-400 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
