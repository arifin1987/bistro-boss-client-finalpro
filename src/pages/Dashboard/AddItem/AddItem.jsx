import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
    const[axiosSecure] = useAxiosSecure();
    const { register, handleSubmit,reset } = useForm();
    const img_hosting_url =`https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    
    const onSubmit = data=> {
        const formData = new formData();
        formData.append('image',data.image[0])
        fetch(img_hosting_url,{
            method:'POST',
            body:formData
        })
        .then(res=> res.json())
        .then(imgResponse=>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name,price,category,recipe} = data;
            const newItem= {name,price:parseFloat(price),category,recipe,image:imgURL}
                console.log(newItem);
                axiosSecure.post('/menu',newItem)
                .then(data=>{
                    console.log('after posting new menu item',data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                
                })
            }
        })
    }
    console.log(img_hosting_token);
    return (
        <div>
            <SectionTitle subHeading="Whats's new" heading="Add an Item">

            </SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>

                    </label>
                    <input type="text" placeholder="Recipe Name"
                    {...register("name", {required:true, maxLength:120})}
                     className="input input-bordered w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">

                        <span className="label-text-alt">Category*</span>
                    </label>
                    <select {...register("category",{required:true})} className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Drinks</option>
                        <option>Desert</option>

                    </select>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>

                        </label>
                        <input type="number"{...register("price",{required:true})} placeholder="Type here" className="input input-bordered w-full " />

                    </div>

                </div>
                <div className="form-control">
                    <label className="label">

                        <span className="label-text-alt">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe",{required:true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    <label className="label">

                    </label>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                        
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full " />
                   <input  className="btn btn-sm mt-4" type="submit" value="Add Item" />
                </div>
            </form>

        </div>
    );
};

export default AddItem;