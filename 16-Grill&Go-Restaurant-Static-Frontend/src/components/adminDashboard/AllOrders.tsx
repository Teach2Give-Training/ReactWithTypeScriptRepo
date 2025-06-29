import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"

export const AllOrders = () => {
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
            {/* row 1 */}
            <tr>
              <th>
                1
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Seafood Paella</div>
                    <div className="text-sm opacity-50">Special</div>
                  </div>
                </div>
              </td>
              <td>Ksh 300</td>
              <td>
                  <div className="flex items-center gap-3">                  
                  <div>
                    <div className="font-bold">Seafood Paella</div>
                    <div className="text-sm opacity-50">Special</div>
                  </div>
                </div>

              </td>
              <td>     18/06/2025</td>
              <th>
                <div className="badge badge-outline badge-success">Completed</div>
              </th>
              <th>
                <button className="text-blue-700 hover:text-blue-500 btn btn-sm btn-outline">
                  <FiEdit />
                </button>                
                <button
                  className="btn btn-sm btn-outline text-red-500 ml-1 mt-1 hover:bg-red-700"                  
                >
                  <AiFillDelete />
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                2
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Seafood Paella</div>
                    <div className="text-sm opacity-50">Special</div>
                  </div>
                </div>
              </td>
              <td>Ksh 300</td>
              <td>
                  <div className="flex items-center gap-3">                  
                  <div>
                    <div className="font-bold">Seafood Paella</div>
                    <div className="text-sm opacity-50">Special</div>
                  </div>
                </div>

              </td>
              <td>     18/06/2025</td>
              <th>
                <div className="badge badge-outline badge-error">Cancled</div>
              </th>
              <th>
                <button className="text-blue-700 hover:text-blue-500 btn btn-sm btn-outline">
                  <FiEdit />
                </button>                
                <button
                  className="btn btn-sm btn-outline text-red-500 ml-1  hover:bg-red-700"                  
                >
                  <AiFillDelete />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                3
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Seafood Paella</div>
                    <div className="text-sm opacity-50">Special</div>
                  </div>
                </div>
              </td>
              <td>Ksh 300</td>
               <td>
                  <div className="flex items-center gap-3">                  
                  <div>
                    <div className="font-bold">Seafood Paella</div>
                    <div className="text-sm opacity-50">Special</div>
                  </div>
                </div>

              </td>
              
              <td> 18/06/2025</td>
              <th>
                <div className="badge badge-outline badge-warning">Pending</div>
              </th>
              <th>                
                <button className="text-blue-700 hover:text-blue-500 btn btn-sm btn-outline">
                  <FiEdit />
                </button>
                <button
                  className="btn btn-sm btn-outline text-red-500 ml-1  hover:bg-red-700"                  
                >
                  <AiFillDelete />
                </button>                
              </th>
            </tr>
          </tbody>

        </table>
      </div>
    </>
  )
}
