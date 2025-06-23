import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import type { RootState } from "../../app/store"
import { useSelector } from "react-redux"
import { ordersApi } from "../../features/api/ordersApi"
import { PuffLoader } from "react-spinners"
import Swal from "sweetalert2"

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
  user: {
    firstName: string,
    email: string
  }
}


const getStatusBadge = (status: any) => {
  switch (status) {
    case "confirmed": return "badge-success";
    case "canceled": return "badge-error";
    case "pending": return "badge-warning";
    default: return "badge-primary";
  }
}

export const AllOrders = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  const { data: ordersData = [], isLoading, error } = ordersApi.useGetAllOrdersQuery({
    skip: !isAuthenticated
  })
  const [updateOrder] = ordersApi.useUpdateOrderMutation()

  const handleEdit = async (orderId: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to confirm the order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#f44336",
      confirmButtonText: "Yes, Confirm it!",
    }).then(async (result) => {
      const updatePayload = {
        orderId: orderId,
        status: "completed"
      }
      if (result.isConfirmed) {
        try {
          const res = await updateOrder(updatePayload).unwrap()
          console.log(res)
          Swal.fire("Completed!", res.message, "success");
        } catch (error) {
          Swal.fire("Something went wrong", "Pleese Try Again", "error")
        }
      }
    });
  }

  const handleDelete =async(orderId:number)=>{
    alert(`OrderId:, ${orderId}`)
  }

  return (
    <>
      <div className="text-2xl font-bold text-center mb-4 text-orange-400">All Orders Page</div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Order Id
              </th>
              <th>Meal</th>
              <th>Price</th>
              <th>Orderd By</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              error ? (
                <div>
                  error while fetching your order..try again
                </div>
              ) : isLoading ? (
                <PuffLoader color="#0aff13" />
              ) : ordersData.length === 0 ? (
                <tr>
                  <div>No orders available 😎</div>
                </tr>
              ) : (
                ordersData?.map((order: OrderDetails) => (
                  <tr key={order.orderId}>
                    <th>
                      {order.orderId}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={order.meal.mealUrl}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{order.meal.mealName}</div>
                          <div className="text-sm opacity-50">{order.meal.mealBadge}</div>
                        </div>
                      </div>
                    </td>
                    <td>Ksh {order.meal.mealPrice}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">{order.user.firstName}</div>
                          <div className="text-sm opacity-50">{order.user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                    <td>  <div className={`badge badge-outline ${getStatusBadge(order.status)} `}>
                      {order.status}
                    </div>
                    </td>
                    <td>
                      <button className="text-blue-700 hover:text-blue-500 btn btn-sm btn-outline"
                        onClick={() => handleEdit(order.orderId)}
                      >
                        <FiEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-600 btn btn-sm ml-2 btn-outline"
                        onClick={() => handleDelete(order.orderId)}
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
