import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import CustomButton from "../components/CustomButton";
import ImageUpload from "../components/ImageUpload";
import GroupPharmacySelect from "../components/GroupPharmacySelect";
import { useDispatch, useSelector } from "react-redux";
import { getAllPharmacies } from "../redux/apiCalls/PharmacyApiCall";
import { createProduct } from "../redux/apiCalls/ProductApiCall"; // Adjust import based on your API calls

const shadow = {
  boxShadow: "0 1px 6px 1px rgba(69, 65, 78, 0.1)",
};

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    pharmacy: "",
    oldPrice: "",
    price: "",
    description: "",
    capacity: "",
    image: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pharmacies } = useSelector((state) => state.pharmacy);

  useEffect(() => {
    dispatch(getAllPharmacies({ page: 1, perPage: 100000 }));
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  // const handleReset = () => {
  //   setFormData({
  //     name: "",
  //     pharmacy: "",
  //     oldPrice: "",
  //     price: "",
  //     description: "",
  //     capacity: "",
  //     image: null,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    console.log(formData);
    if (!formData.name || !formData.pharmacy || !formData.price) {
      alert("Please fill all required fields");
      return;
    }

    // Create FormData for file upload
    const form = new FormData();
    form.append("name", formData.name);
    form.append("pharmacy", formData.pharmacy);
    form.append("oldPrice", formData.oldPrice);
    form.append("price", formData.price);
    form.append("description", formData.description);
    form.append("capacity", formData.capacity);
    if (formData.image) {
      form.append("image", formData.image);
    }

    // Dispatch the createProduct action
    dispatch(createProduct(form, navigate));
  };

  return (
    <div style={shadow} className="bg-[#fff]">
      <div className="p-[24px] flex items-center justify-between border-b border-b-[#0000001a]">
        <h6 className="font-[700] text-[#000000]">ADD PRODUCT</h6>
        <Link to={"/products/list"} className="text-[14px] text-[#009efb]">
          Products list
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-[24px] grid grid-cols-2 gap-[15px]">
          <InputComponent
            label={"Product Name"}
            placeholder={"Enter product name"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
            margin={true}
            required
          />

          <GroupPharmacySelect
            label={"Pharmacy"}
            selectedGroups={pharmacies}
            value={formData.pharmacy}
            onChange={handleChange}
            name="pharmacy"
            required
          />

          <InputComponent
            label={"Old Price"}
            placeholder={"Enter old price"}
            name={"oldPrice"}
            type={"number"}
            value={formData.oldPrice}
            onChange={handleChange}
            margin={true}
          />

          <InputComponent
            label={"Price"}
            placeholder={"Enter price"}
            name={"price"}
            type={"number"}
            value={formData.price}
            onChange={handleChange}
            margin={true}
            required
          />

          <InputComponent
            label={"Description"}
            placeholder={"Enter description"}
            name={"description"}
            value={formData.description}
            onChange={handleChange}
            margin={true}
          />

          <InputComponent
            label={"Capacity"}
            placeholder={"Enter capacity"}
            name={"capacity"}
            value={formData.capacity}
            onChange={handleChange}
            margin={true}
          />

          <ImageUpload name={"Product"} onChange={handleImageChange} />
        </div>

        <div className="p-[24px]">
          {/* <CustomButton
            type="button"
            bgColor="bg-[#fda600]"
            onClick={handleReset}
            className={"text-[#fff]"}
          >
            Reset
          </CustomButton> */}
          <CustomButton
            type="submit"
            bgColor="bg-[#009efb]"
            className={"text-[#fff] ml-2"}
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
