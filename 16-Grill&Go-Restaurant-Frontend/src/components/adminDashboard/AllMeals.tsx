import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { mealApi } from "../../features/api/mealsApi"
import type { RootState } from "../../app/store"
import { useSelector } from "react-redux"
import { PuffLoader } from "react-spinners"
import { useState } from "react"
import { SaveIcon } from "lucide-react"
import { FaAddressBook, FaTimes } from "react-icons/fa"
import { useForm, type SubmitHandler } from "react-hook-form"
import axios from "axios";
import { Toaster,toast } from "sonner"

interface Meal {
  mealName: string,
  mealBadge: string,
  mealPrice: number,
  mealUrl: string,
  mealId: number,
  createdAt: string,
  rating: number
}

type AddFormValues = {
  mealName: string,
  mealUrl: string,
  mealBadge: string,
  mealPrice: number,
  mealDescription: string
}

export const AllMeals = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm<AddFormValues>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  const { data: mealsData = [], isLoading: mealsDataIsLoading, error } = mealApi.useGetAllMealsQuery({
    skip: !isAuthenticated
  });

  const [creatMeal]= mealApi.useCreateMealMutation();

  const [mealImage, setMealImage] = useState<string>("")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const cloud_name = "yourcloud_name";
  const preset_key = "yourpreset_key";

  const [isLoading, setIsLoading] = useState<boolean>(false)


  const handleModalToggle = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  // console.log("🚀 ~ AllMeals ~ mealsData:", mealsData)

  const handleDelete = async (mealId: number) => {
    alert(mealId)
  }

  const handleEdit = async (mealId: number) => {
  alert('Feature coming soon 😎')
  console.log(mealId)
  }

  const onSubmit: SubmitHandler<AddFormValues> = async (data) => {
    const loadingToastId = toast.loading("Adding the meal...");
    data.mealUrl = mealImage;
    try {
      const res = await creatMeal(data).unwrap();
      toast.success(res.message, { id: loadingToastId })
      reset();
      setMealImage("");
      setIsAddModalOpen(false);
    } catch (error: any) {
      toast.error('Failed to add meal . Please try again.', error);
      toast.dismiss(loadingToastId)
    }
  }

  const handleFileChange = async (e: any) => {
    setIsLoading(true)
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    try {
      const res = await axios(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "POST",
        data: formData
      });
      const data = await res.data;
      setMealImage(data.secure_url);
      console.log(data.secure_url);
      setIsLoading(false)
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="text-2xl font-bold text-center mb-4 text-orange-400">
         <Toaster
                richColors
                position="top-right"
              />
        <h1>Meal Management page</h1>
        <button
          className="btn btn-warning flex items-center gap-2"
          onClick={handleModalToggle}
        >
          <FaAddressBook /> Add meal
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th> # </th>
              <th>Name</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              error ? (
                <div>
                  error while fetching your order..try again
                </div>
              ) : mealsDataIsLoading ? (
                <PuffLoader color="#0aff13" />
              ) : mealsData.length === 0 ? (
                <tr>
                  <div>No orders available 😎</div>
                </tr>
              ) : (
                mealsData?.map((meal: Meal) => (
                  <tr key={meal.mealId}>
                    <td>{meal.mealId}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={meal.mealUrl}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{meal.mealName}</div>
                          <div className="text-sm opacity-50">{meal.mealBadge}</div>
                        </div>
                      </div>
                    </td>
                    <td>  {meal.rating}  </td>
                    <td>
                      KSH: {meal.mealPrice}
                    </td>
                    <td>{new Date(meal.createdAt).toLocaleString()}</td>
                    <td>
                      <button className="text-blue-700 hover:text-blue-500 btn btn-sm btn-outline"
                        onClick={() => handleEdit(meal.mealId)}
                      >
                        <FiEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-600 btn btn-sm ml-2 btn-outline"
                        onClick={() => handleDelete(meal.mealId)}
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
        {isAddModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <div className="flex justify-center items-center mb-4 ">
                <h2 className="text-2xl font-bold text-orange-500 ">Add A Meal</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="mealName" className="block text-sm font-medium text-orange-500">Meal Name</label>
                  <input
                    type="text"
                    id="mealName"
                    className="input  w-full  text-blue-500 text-sm"
                    {...register('mealName', { required: 'mealName is required' })}
                  />
                  {errors.mealName && <p className="text-red-500 text-sm">{errors.mealName.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="mealBadge" className="block text-sm font-medium text-orange-500">Meal Badge</label>
                  <input
                    type="text"
                    id="mealBadge"
                    className="input  w-full  text-blue-500 text-sm"
                    {...register('mealBadge', { required: 'mealBadge is required' })}
                  />
                  {errors.mealBadge && <p className="text-red-500 text-sm">{errors.mealBadge.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="mealDescription" className="block text-sm font-medium text-orange-500">Meal Description</label>
                  <input
                    type="text"
                    id="mealDescription"
                    className="input  w-full  text-blue-500 text-sm"
                    {...register('mealDescription', { required: 'mealDescription is required' })}
                  />
                  {errors.mealName && <p className="text-red-500 text-sm">{errors.mealName.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="mealPrice" className="block text-sm font-medium text-orange-500">Meal Price (Ksh)</label>
                  <input
                    type="number"
                    id="mealPrice"
                    className="input input-bordered w-full  text-blue-500 text-sm"
                    {...register('mealPrice', { required: 'mealPrice is required' })}
                  />
                  {errors.mealPrice && <p className="text-red-500 text-sm">{errors.mealPrice.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="mealUrl" className="block text-sm font-medium text-orange-500">Meal Url</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="input input-bordered w-full  text-blue-500 text-sm"
                  />
                </div>
                {/* //show image after upload_preset */}
                <img src={mealImage} alt="mealPic" width="75" height="75" />

                <div className="flex justify-end">
                  <button onClick={handleModalToggle} className=" btn mr-2 btn-error">
                    <FaTimes /> Cancel
                  </button>
                  {/* <button type="submit" className="btn btn-primary" disabled={isLoading}> */}
                  <button type="submit" className="btn btn-primary" disabled={isLoading} >
                    <SaveIcon /> Add Meal  {isLoading ? 'Updating...' : 'Update Profile'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
