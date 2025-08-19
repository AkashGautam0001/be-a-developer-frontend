import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Plus,
  Edit3,
  Trash2,
  Calendar,
  Clock,
  Video,
  BookOpen,
  X,
  Save,
} from "lucide-react";
import axiosInstance from "../../utils/axios";

const CourseClasses = () => {
  const { courseId } = useParams();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingClass, setEditingClass] = useState(null);
  const [course, setCourse] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    zoomLink: "",
    scheduledAt: "",
    duration: 60,
    type: "REGULAR",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axiosInstance.get(`/courses/${courseId}`);
        if (response.data.success) {
          setCourse(response.data.course);
        }
      } catch (error) {
        console.error("Failed to fetch course:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
    fetchClasses();
  }, [courseId]);

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/classes/course/${courseId}`);
      if (response.data.success) {
        setClasses(response.data.classes);
      }
    } catch (error) {
      toast.error("Failed to fetch classes");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    try {
      const payload = {
        ...formData,
        courseId: courseId,
      };

      let response;
      if (editingClass) {
        response = await axiosInstance.put(
          `/classes/${editingClass._id}`,
          payload
        );
      } else {
        response = await axiosInstance.post("/classes", payload);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        fetchClasses();
        closeModal();
      }
    } catch (error) {
      toast.error("Operation failed");
    }
  };

  const handleDelete = async (classId) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      try {
        const response = await axiosInstance.delete(`/classes/${classId}`);
        if (response.data.success) {
          toast.success(response.data.message);
          fetchClasses();
        }
      } catch (error) {
        toast.error("Failed to delete class");
      }
    }
  };

  const openModal = (classItem = null) => {
    if (classItem) {
      setEditingClass(classItem);
      setFormData({
        title: classItem.title,
        zoomLink: classItem.zoomLink,
        scheduledAt: new Date(classItem.scheduledAt).toISOString().slice(0, 16),
        duration: classItem.duration,
        type: classItem.type,
      });
    } else {
      setEditingClass(null);
      setFormData({
        title: "",
        zoomLink: "",
        scheduledAt: "",
        duration: 60,
        type: "REGULAR",
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingClass(null);
    setFormData({
      title: "",
      zoomLink: "",
      scheduledAt: "",
      duration: 60,
      type: "REGULAR",
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "WORKSHOP":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "DEMO":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "REGULAR":
      default:
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="flex items-center space-x-2 text-gray-300">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span>Loading classes...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <div>
                <h1 className="text-xl font-bold text-white">
                  {course?.title}
                </h1>
              </div>
            </div>
            <button
              onClick={() => openModal()}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200">
              <Plus className="h-5 w-5" />
              <span>Add Class</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {classes.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No Classes Found
            </h3>
            <p className="text-gray-500 mb-6">
              Get started by creating your first class.
            </p>
            <button
              onClick={() => openModal()}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200">
              Create First Class
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((classItem) => (
              <div
                key={classItem._id}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 hover:border-zinc-600 transition-all duration-200 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {classItem.title}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                        classItem.type
                      )}`}>
                      {classItem.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => openModal(classItem)}
                      className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(classItem._id)}
                      className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    {formatDate(classItem.scheduledAt)}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    {classItem.duration} minutes
                  </div>
                  {classItem.zoomLink && (
                    <div className="flex items-center text-gray-300 text-sm">
                      <Video className="h-4 w-4 mr-2 text-gray-500" />
                      <a
                        href={classItem.zoomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 hover:underline truncate">
                        Join Meeting
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-800 rounded-xl shadow-2xl w-full max-w-md border border-zinc-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-700">
              <h2 className="text-xl font-semibold text-white">
                {editingClass ? "Edit Class" : "Create New Class"}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-white hover:bg-zinc-700 rounded-lg transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Class Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter class title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Zoom Link
                </label>
                <input
                  type="url"
                  value={formData.zoomLink}
                  onChange={(e) =>
                    setFormData({ ...formData, zoomLink: e.target.value })
                  }
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://zoom.us/j/..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Scheduled At
                </label>
                <input
                  type="datetime-local"
                  value={formData.scheduledAt}
                  onChange={(e) =>
                    setFormData({ ...formData, scheduledAt: e.target.value })
                  }
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      duration: parseInt(e.target.value),
                    })
                  }
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="15"
                  max="300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Class Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="REGULAR">Regular</option>
                  <option value="WORKSHOP">Workshop</option>
                  <option value="DEMO">Demo</option>
                </select>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-300 hover:text-white border border-zinc-600 hover:border-zinc-500 rounded-lg transition-colors">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                  <Save className="h-4 w-4" />
                  <span>{editingClass ? "Update" : "Create"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseClasses;
