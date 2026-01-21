"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Trash2, CheckCircle, XCircle, Plus, Lock } from "lucide-react";

interface Document {
  _id: string;
  title: string;
  type: string;
  category: string;
  subject?: string;
  year?: string;
  session?: string;
  shift?: string;
  date?: string;
  fileUrl: string;
  fileName: string;
  fileSize?: number;
  downloads: number;
  isActive: boolean;
  createdAt: string;
}

export default function AdminPanel() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [filter, setFilter] = useState({ type: "all", category: "all" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    type: "answer-key",
    category: "JEE Main",
    subject: "",
    year: "2026",
    session: "",
    shift: "",
    date: "",
    uploadedBy: "Admin",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Use localhost for development, production URL for deployed version
  const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
  const API_URL = isLocalhost
    ? "http://localhost:5000/api/documents"
    : "https://studentsparadise-backend.onrender.com/api/documents";

  const BASE_URL = isLocalhost
    ? "http://localhost:5000"
    : "https://studentsparadise-backend.onrender.com";

  const fetchDocuments = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();
      if (filter.type !== "all") queryParams.append("type", filter.type);
      if (filter.category !== "all") queryParams.append("category", filter.category);

      const response = await fetch(`${API_URL}?${queryParams}`);
      const data = await response.json();
      if (data.success) {
        setDocuments(data.data);
      }
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    setUploading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("file", selectedFile);
    Object.entries(formData).forEach(([key, value]) => {
      if (value) formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();

      if (data.success) {
        alert("Document uploaded successfully!");
        setShowUploadModal(false);
        resetForm();
        fetchDocuments();
      } else {
        alert("Upload failed: " + data.message);
      }
    } catch (error) {
      console.error("Error uploading document:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this document?")) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (data.success) {
        alert("Document deleted successfully!");
        fetchDocuments();
      } else {
        alert("Delete failed: " + data.message);
      }
    } catch (error) {
      console.error("Error deleting document:", error);
      alert("Delete failed. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      type: "answer-key",
      category: "JEE Main",
      subject: "",
      year: "2026",
      session: "",
      shift: "",
      date: "",
      uploadedBy: "Admin",
    });
    setSelectedFile(null);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "Farhan" && password === "Farhan_90") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#1a2942] rounded-xl p-8 max-w-md w-full"
        >
          <div className="flex items-center justify-center mb-8">
            <Lock size={48} className="text-yellow-400" />
          </div>
          <h2 className="text-3xl font-bold text-white text-center mb-6">Admin Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#0a1628] text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#0a1628] text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
                required
              />
            </div>
            {authError && <p className="text-red-400 text-sm text-center">{authError}</p>}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1628] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-gray-400">Manage JEE Main documents and resources</p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowUploadModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-lg font-bold flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Upload Document</span>
            </motion.button>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#1a2942] rounded-lg p-6 mb-8">
          <h3 className="text-white font-bold mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Document Type</label>
              <select
                value={filter.type}
                onChange={(e) => setFilter({ ...filter, type: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
              >
                <option value="all">All Types</option>
                <option value="answer-key">Answer Key</option>
                <option value="previous-paper">Previous Paper</option>
                <option value="mock-test">Mock Test</option>
                <option value="syllabus">Syllabus</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Category</label>
              <select
                value={filter.category}
                onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
              >
                <option value="all">All Categories</option>
                <option value="JEE Main">JEE Main</option>
                <option value="JEE Advanced">JEE Advanced</option>
                <option value="NEET">NEET</option>
                <option value="CET">CET</option>
              </select>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="bg-[#1a2942] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#0a1628]">
              <tr>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Type</th>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Category</th>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Downloads</th>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                    Loading documents...
                  </td>
                </tr>
              ) : documents.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                    No documents found. Upload your first document!
                  </td>
                </tr>
              ) : (
                documents.map((doc) => (
                  <tr key={doc._id} className="hover:bg-[#0d1d35] transition-colors">
                    <td className="px-6 py-4 text-white">{doc.title}</td>
                    <td className="px-6 py-4 text-gray-400 capitalize">
                      {doc.type.replace("-", " ")}
                    </td>
                    <td className="px-6 py-4 text-gray-400">{doc.category}</td>
                    <td className="px-6 py-4 text-gray-400">{doc.downloads}</td>
                    <td className="px-6 py-4">
                      {doc.isActive ? (
                        <span className="flex items-center space-x-1 text-green-400">
                          <CheckCircle size={16} />
                          <span>Active</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1 text-red-400">
                          <XCircle size={16} />
                          <span>Inactive</span>
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => window.open(`${BASE_URL}${doc.fileUrl}`, "_blank")}
                          className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors text-blue-400"
                          title="View"
                        >
                          <FileText size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(doc._id)}
                          className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1a2942] rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Upload New Document</h2>

            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
                    required
                  >
                    <option value="answer-key">Answer Key</option>
                    <option value="previous-paper">Previous Paper</option>
                    <option value="mock-test">Mock Test</option>
                    <option value="syllabus">Syllabus</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
                    required
                  >
                    <option value="JEE Main">JEE Main</option>
                    <option value="JEE Advanced">JEE Advanced</option>
                    <option value="NEET">NEET</option>
                    <option value="CET">CET</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
                  >
                    <option value="">Select Subject</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Maths">Maths</option>
                    <option value="Biology">Biology</option>
                    <option value="All">All Subjects</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Year</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
                  >
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Session</label>
                  <select
                    value={formData.session}
                    onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
                  >
                    <option value="">Select Session</option>
                    <option value="Session 1">Session 1</option>
                    <option value="Session 2">Session 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Shift</label>
                  <select
                    value={formData.shift}
                    onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
                  >
                    <option value="">Select Shift</option>
                    <option value="Shift 1">Shift 1</option>
                    <option value="Shift 2">Shift 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Date</label>
                  <select
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
                  >
                    <option value="">Select Date</option>
                    <option value="22 Jan 2026">22 Jan 2026</option>
                    <option value="23 Jan 2026">23 Jan 2026</option>
                    <option value="24 Jan 2026">24 Jan 2026</option>
                    <option value="28 Jan 2026">28 Jan 2026</option>
                    <option value="29 Jan 2026">29 Jan 2026</option>
                    <option value="02 Apr 2026">02 Apr 2026</option>
                    <option value="04 Apr 2026">04 Apr 2026</option>
                    <option value="08 Apr 2026">08 Apr 2026</option>
                    <option value="09 Apr 2026">09 Apr 2026</option>
                    <option value="10 Apr 2026">10 Apr 2026</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Upload PDF File *</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1628] text-white border border-gray-700"
                  required
                />
                {selectedFile && (
                  <p className="text-green-400 text-sm mt-2">Selected: {selectedFile.name}</p>
                )}
              </div>

              <div className="flex items-center justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowUploadModal(false);
                    resetForm();
                  }}
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {uploading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
