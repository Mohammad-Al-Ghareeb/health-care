import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../redux/apiCalls/DoctorApiCall";

const DoctorsPage = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const dispatch = useDispatch();
  const { doctors, documentCount } = useSelector((state) => state.doctor);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(documentCount / itemsPerPage);

  useEffect(() => {
    dispatch(getAllDoctors({ page, perPage: itemsPerPage }));
  }, [dispatch, page]);

  return (
    <div>
      <div className="items-center justify-between grid grid-cols-3 gap-[30px]">
        {doctors?.map((e, id) => {
          return <DoctorCard key={id} doctor={e} />;
        })}
      </div>
      <div className="flex justify-center mt-[15px]">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};

export default DoctorsPage;
