import { FaUsers, FaDollarSign } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { BiFoodMenu, BiSolidFoodMenu } from 'react-icons/bi';
import { ordersApi } from '../../features/api/ordersApi';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { PuffLoader } from 'react-spinners';
import { userApi } from '../../features/api/userApi';
import { mealApi } from '../../features/api/mealsApi';

const cardVariants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring" as const, stiffness: 300 },
  },
  tap: { scale: 0.95 },
  loading: {
    opacity: 0.5,
    transition: { duration: 0.5 },
  },
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// 🟢 Mocked Static Data
// const ordersData = [
//   { orderStatus: 'confirmed', payment_amount: 1500 },
//   { orderStatus: 'pending', payment_amount: 0 },
//   { orderStatus: 'canceled', payment_amount: 0 },
//   { orderStatus: 'confirmed', payment_amount: 2000 },
// ];

interface OrderDetails {
  orderId: number,
  userId: number,
  mealId: number,
  createdAt: string,
  status: string,
  meal: {
    mealName: string,
    mealBadge: string,
    mealPrice: number,
    mealUrl: string
  }
}

// const mealsData = [
//   { id: 1, name: 'Burger' },
//   { id: 2, name: 'Pizza' },
// ];

// const usersProfile = [
//   { id: 1, name: 'Jane' },
//   { id: 2, name: 'John' },
//   { id: 3, name: 'Alice' },
// ];



// const usersCount = usersProfile.length;
// const mealsCount = mealsData.length;





const lineData = [
  { name: 'Jan', value: 5000 },
  { name: 'Feb', value: 3500 },
  { name: 'Mar', value: 4200 },
  { name: 'Apr', value: 6100 },
  { name: 'May', value: 7000 },
];

export const Analytics = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const { data: ordersData = [], isLoading } = ordersApi.useGetAllOrdersQuery({
    skip: !isAuthenticated
  })
  const { data: usersData = [], isLoading: userDataIsLoading } = userApi.useGetAllUsersProfilesQuery({
    skip: !isAuthenticated
  })
  const { data: mealsData = [], isLoading: mealsDataIsLoading } = mealApi.useGetAllMealsQuery({
    skip: !isAuthenticated
  })
  console.log("🚀 ~ Analytics ~ mealsData:", mealsData)

  // console.log("🚀 ~ Analytics ~ orderData:", ordersData)

  const confirmedOrders = ordersData.filter((orders: OrderDetails) => orders.status === 'confirmed').length;
  const pendingOrders = ordersData.filter((orders: OrderDetails) => orders.status === 'pending').length;
  const canceledOrder = ordersData.filter((orders: OrderDetails) => orders.status === 'canceled').length;

  const totalRevenue = ordersData
    .filter((order: OrderDetails) => order.status === 'confirmed')
    .reduce((sum: number, order: OrderDetails) => sum + Number(order.meal.mealPrice), 0);

  const pieData = [
    { name: 'Confirmed Orders', value: confirmedOrders },
    { name: 'Pending Orders', value: pendingOrders },
    { name: 'Canceled Orders', value: canceledOrder },
  ];

  const usersCount = usersData.length;
  const mealsCount = mealsData.length;




  return (
    <>
      {/* ...Breadcrumb omitted for brevity... */}
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Orders */}
        <motion.div
          className="card bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading ? (
            <div>
              <PuffLoader color="#0aff13" />
            </div>
          ) : (
            <>
              <BiSolidFoodMenu size={40} />
              <h2 className="text-2xl font-bold mt-4">Orders</h2>
              <p className="text-lg mt-2">{confirmedOrders + canceledOrder + pendingOrders}</p>
            </>
          )}

        </motion.div>

        {/* Users */}
        <motion.div
          className="card bg-orange-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {
            userDataIsLoading ? (
              <div>
                <PuffLoader color="#0aff13" />
              </div>
            ) : (
              <>
                <FaUsers size={40} />
                <h2 className="text-2xl font-bold mt-4">Users</h2>
                <p className="text-lg mt-2">{usersCount}</p>
              </>
            )
          }

        </motion.div>

        {/* Meals */}
        <motion.div
          className="card bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {
            mealsDataIsLoading ? (
              <div>
                <PuffLoader color="#0aff13" />
              </div>
            ) : (
              <>
                <BiFoodMenu size={40} />
                <h2 className="text-2xl font-bold mt-4">Meals</h2>
                <p className="text-lg mt-2">{mealsCount}</p>
              </>
            )
          }

        </motion.div>

        {/* Revenue */}
        <motion.div
          className="card bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaDollarSign size={40} />
          <h2 className="text-2xl font-bold mt-4">Revenue</h2>
          <p className="text-lg mt-2">Ksh {totalRevenue.toLocaleString()}</p>
        </motion.div>
      </div>



      {/* Charts */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Revenue Statistics</h2>
        <div className="flex flex-col lg:flex-row items-center justify-around">
          {/* Pie Chart */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4">Order Status</h3>
            <PieChart width={400} height={400}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          {/* Line Chart */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Monthly Revenue</h3>
            <LineChart
              width={500}
              height={300}
              data={lineData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>
      </div>
    </>
  );
}


