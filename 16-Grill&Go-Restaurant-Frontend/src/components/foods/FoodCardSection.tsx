import { MdStar } from "react-icons/md";
import { mealApi } from "../../features/api/mealsApi";
import { CgShoppingCart } from "react-icons/cg";
import { PuffLoader } from "react-spinners";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import Swal from "sweetalert2"
import { ordersApi } from "../../features/api/ordersApi";

interface MealData {
    mealId: number,
    mealName: string,
    mealPrice: number,
    mealDescription: string,
    mealUrl: string,
    mealBadge: string,
    rating: number
}


const getBadgeColor = (badge: any) => {
    switch (badge) {
        case "Popular": return "badge-warning";
        case "Chef's Special": return "badge-error";
        case "Healthy": return "badge-success";
        case "Premium": return "badge-accent";
        case "Special": return "badge-info";
        case "Dessert": return "badge-secondary";
        default: return "badge-primary";
    }
}



export const FoodCardSection = () => {
    const { isAuthenticated,user } = useSelector((state: RootState) => state.auth)
    const userId = user?.userId

    // const page= 1

    const { data: mealData = [], isLoading, error } = mealApi.useGetAllMealsQuery({
        pollingInterval: 3000,
    })

    const [makeAnOrder] = ordersApi.useCreateOrderMutation()

    // console.log("🚀 ~ FoodCardSection ~ mealData:", mealData)

    const handleMakeAnOrder = async(mealId: number, mealName: string, mealPrice: number) => {
        Swal.fire({
            title: "Are you sure?",
            html: `<div>
                <b>Meal:</b> ${mealName}<br/>
                <b>Price:</b> Ksh: ${mealPrice}
               </div>
               <div style="margin-top:10px;">Do you want to place this order?</div>`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2563eb",
            cancelButtonColor: "#f44336",
            confirmButtonText: "Yes, order it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await makeAnOrder({userId,mealId})
                    // console.log(res)
                    Swal.fire("Ordered!", res.data.message, "success");
                } catch (error) {
                    Swal.fire("Something went wrong","Pleese Try Again", "error")
                }                
            }
        });
    }
    return (
        <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                            Mathe`s Signature
                        </span>
                        <span className="text-gray-800 block">Collection</span>
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Each dish is carefully crafted with premium ingredients and years of culinary expertise.
                        Discover flavors that will create lasting memories.
                    </p>
                </div>

                {/* Meals Grid */}
                <div className="flex flex-col items-center mt-4">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                        {
                            error ? (
                                <div className="text-red-500">
                                    Something went wrong try again...
                                </div>
                            ) : isLoading ? (
                                <div className="flex justify-center items-center">
                                    <PuffLoader color="#0aff13" />
                                </div>
                            ) : mealData.length === 0 ? (
                                <div>
                                    No meals
                                </div>
                            ) : (
                                mealData.map((meal: MealData) => (
                                    <div
                                        key={meal.mealId}
                                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                                    >
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={meal.mealUrl}
                                                alt={meal.mealName}
                                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {/* Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`badge ${getBadgeColor(meal.mealBadge)} badge-lg text-white font-semibold`}>
                                                    {meal.mealBadge}
                                                </span>
                                            </div>
                                            {/* Rating */}
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                                                <MdStar className="text-yellow-400 text-sm" />
                                                <span className="text-sm font-semibold text-gray-700">{meal.rating}</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                                                    {meal.mealName}
                                                </h3>
                                                <span className="text-2xl font-bold text-orange-600">{meal.mealPrice}</span>
                                            </div>

                                            <p className="text-gray-600 mb-6 leading-relaxed">{meal.mealDescription}</p>

                                            {/* Action Button */}
                                            {isAuthenticated ? (
                                                <button
                                                    className="btn w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                                                    onClick={() => handleMakeAnOrder(meal.mealId, meal.mealName, meal.mealPrice)}
                                                >
                                                    <CgShoppingCart className="text-lg" />
                                                    Make an Order
                                                </button>
                                            ) : (
                                                <a
                                                    href="/login"
                                                    className="btn w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                                                >
                                                    <FaSignInAlt className="text-lg" />
                                                    Sign in to Order
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
}
