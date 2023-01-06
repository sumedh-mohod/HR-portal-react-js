import Pagination from "@mui/material/Pagination";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

const Paginations = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      count={pageCount}
      showFirstButton
      showLastButton
      variant="outlined"
      shape="rounded"
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
      sx={{
        "& .Mui-selected": {
          background: "#F58634",
          color: "#000000",
        },
      }}
    />
  );
};

export default Paginations;
