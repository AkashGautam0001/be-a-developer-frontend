import { useState, useEffect } from "react";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  UserCheck,
  UserX,
  Calendar,
} from "lucide-react";
import axiosInstance from "../../utils/axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axiosInstance.get("/admin/dashboard-stats");
      if (response.data.success) {
        setStats(response.data.stats);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  const statCards = [
    {
      name: "Total Users",
      value: stats?.totalUsers || 0,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      name: "Active Courses",
      value: stats?.totalCourses || 0,
      icon: BookOpen,
      color: "bg-green-500",
    },
    {
      name: "Total Enrollments",
      value: stats?.totalEnrollments || 0,
      icon: UserCheck,
      color: "bg-purple-500",
    },
    {
      name: "Active Subscriptions",
      value: stats?.activeSubscriptions || 0,
      icon: TrendingUp,
      color: "bg-indigo-500",
    },
    {
      name: "Confirmation Fee Paid",
      value: stats?.confirmationFeePaid || 0,
      icon: DollarSign,
      color: "bg-green-600",
    },
    {
      name: "Confirmation Fee Pending",
      value: stats?.confirmationFeePending || 0,
      icon: UserX,
      color: "bg-red-500",
    },
    {
      name: "Monthly Subscribers",
      value: stats?.monthlySubscribers || 0,
      icon: Calendar,
      color: "bg-yellow-500",
    },
    {
      name: "Full Payment Subscribers",
      value: stats?.fullPaymentSubscribers || 0,
      icon: DollarSign,
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="space-y-6 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-zinc-800/50 border border-zinc-700 overflow-hidden shadow-lg rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`${stat.color} p-2 rounded-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-zinc-400 truncate">
                        {stat.name}
                      </dt>
                      <dd className="text-lg font-medium text-white">
                        {stat.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="bg-zinc-800/50 border border-zinc-700 overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-green-500 p-2 rounded-md">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-zinc-400 truncate">
                    Total Revenue
                  </dt>
                  <dd className="text-lg font-medium text-white">
                    ₹{stats?.totalRevenue?.toLocaleString() || 0}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-800/50 border border-zinc-700 overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-blue-500 p-2 rounded-md">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-zinc-400 truncate">
                    Monthly Revenue
                  </dt>
                  <dd className="text-lg font-medium text-white">
                    ₹{stats?.monthlyRevenue?.toLocaleString() || 0}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
